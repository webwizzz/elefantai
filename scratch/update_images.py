import os
import re

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original_content = content
        
        # Process image_url
        def replace_image_url(match):
            full = match.group(0)
            args = match.group(1)
            
            if 'format:' in full or 'format :' in full or 'format=' in full or 'format:' in args:
                return full
                
            stripped = full.rstrip()
            if ':' in args:
                new_str = stripped + ", format: 'webp'"
            else:
                new_str = stripped + ": format: 'webp'"
                
            return new_str + " "
            
        content = re.sub(r'\|\s*image_url([^|\}\n]*)', replace_image_url, content)
        
        # Process <img ...> with simple parsing
        result = []
        i = 0
        n = len(content)
        while i < n:
            # find <img
            if content[i:i+4].lower() == '<img':
                start_idx = i
                # find the closing >
                in_brackets = 0
                j = i + 4
                while j < n:
                    if content[j:j+2] in ('{%', '{{'):
                        in_brackets += 1
                        j += 2
                    elif content[j-1:j+1] in ('%}', '}}'):
                        in_brackets -= 1
                        j += 1
                    elif content[j] == '>' and in_brackets == 0:
                        break
                    else:
                        j += 1
                        
                if j < n:
                    img_tag_inner = content[start_idx+4:j]
                    full_tag = content[start_idx:j+1]
                    
                    if 'loading=' not in full_tag.replace(' ', '') and 'logo' not in full_tag.lower() and 'lcp' not in full_tag.lower():
                        # add lazy
                        new_tag = f'<img loading="lazy"{img_tag_inner}>'
                        result.append(new_tag)
                    else:
                        result.append(full_tag)
                    i = j + 1
                    continue
            result.append(content[i])
            i += 1
            
        content = "".join(result)
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
            
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        
    return False

def main():
    root_dirs = ['blocks', 'sections', 'snippets', 'templates', 'layout']
    updated_count = 0
    for root_dir in root_dirs:
        if not os.path.exists(root_dir):
            continue
        for root, dirs, files in os.walk(root_dir):
            for file in files:
                if file.endswith('.liquid'):
                    filepath = os.path.join(root, file)
                    if process_file(filepath):
                        updated_count += 1
                        
    print(f"Updated {updated_count} files successfully.")

if __name__ == '__main__':
    main()
