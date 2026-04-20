const fs = require('fs');
const path = require('path');

function replaceWebp(content) {
    // replace `image_url: width: 500` -> `image_url: width: 500, format: 'webp'`
    let newContent = content.replace(/\|\s*image_url(:\s*[a-zA-Z0-9_]+:\s*[^\|\}\}]+)?/g, (match, p1) => {
        if (match.includes("format:")) return match;
        if (p1) {
            return match + ", format: 'webp'";
        } else {
            return match + ": format: 'webp'";
        }
    });

    // Handle standard img tags adding loading="lazy" if not present
    newContent = newContent.replace(/<img(.*?)>/gi, (match, p1) => {
        if (match.includes('loading=') || match.includes('loading :') || match.includes('loading:')) {
            return match;
        }
        return `<img${p1} loading="lazy">`;
    });

    return newContent;
}

const testContent = "{{ image | image_url: width: 400 }}\n{{ image | image_url }}\n<img src='...' alt='test'>\n<img loading='lazy' src='test'>";
console.log(replaceWebp(testContent));
