# Shopify Theme Section & Customizer Settings Guide

This document provides a comprehensive overview of all sections, blocks, and snippets available in the Elefantai theme.

## 1. Section Analysis

### FAQs Section (`FAQs`)
> Displays accordion-style frequently asked questions with customizable backgrounds.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Background Image (ID: background_image)
- Background Color (ID: bg_color)
- Title (ID: title)
- Subtitle (ID: subtitle)
- Header: Accordion Styling (ID: N/A)
- Active Border Color (ID: accordion_active_border)
- Header: Contact Card Settings (ID: N/A)
- Show Contact Card (ID: show_contact_card)
- Contact Title (ID: contact_title)
- Contact Text (ID: contact_text)
- Button Label (ID: contact_btn_label)
- Button Link (ID: contact_btn_link)
- Contact Card Background (ID: contact_bg)
- Contact Text Color (ID: contact_text_color)

#### Blocks & Block Customizations
##### Block: FAQ (`faq`)
- Question (ID: question)
- Answer (ID: answer)


---

### t:sections.announcement-bar.name (`announcement-bar`)
> Displays scrolling or static marketing messages at the top of the page.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.announcement-bar.settings.auto_rotate.label (ID: auto_rotate)
- t:sections.announcement-bar.settings.slides_to_show.label (ID: slides_to_show)
- t:sections.announcement-bar.settings.change_slides_speed.label (ID: change_slides_speed)
- t:sections.announcement-bar.settings.scroll_speed.label (ID: scroll_speed)
- t:text.text_size (ID: text_size)
- t:text.text_color (ID: text_color)
- t:sections.announcement-bar.settings.icon_height.label (ID: icon_height)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:sections.all.padding.background_color (ID: background_color)
- Background image (ID: background_image)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: t:sections.announcement-bar.blocks.announcement.name (`announcement`)
- t:sections.announcement-bar.blocks.announcement.settings.text.label (ID: text)
- t:sections.announcement-bar.blocks.announcement.settings.image_before.label (ID: image_before)
- t:sections.announcement-bar.blocks.announcement.settings.image_after.label (ID: image_after)
- t:sections.announcement-bar.blocks.announcement.settings.link.label (ID: link)

##### Block: Free shipping (`freeshipping`)
- t:sections.announcement-bar.blocks.announcement.settings.amount.label (ID: amount)
- t:sections.announcement-bar.blocks.announcement.settings.preunlock.label (ID: preunlock)
- t:sections.announcement-bar.blocks.announcement.settings.postunlock.label (ID: postunlock)
- t:sections.announcement-bar.blocks.announcement.settings.image_before.label (ID: image_before)
- t:sections.announcement-bar.blocks.announcement.settings.image_after.label (ID: image_after)

##### Block: Icon (`icon`)
- t:sections.multicolumn.blocks.column.settings.image.label (ID: image)


---

### t:sections.apps.name (`apps`)
> Displays container for third-party Shopify app blocks.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.apps.settings.include_margins.label (ID: include_margins)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: @app (`@app`)
- No block-specific settings.


---

### t:sections.before-after.name (`before-after`)
> Displays interactive image comparison slider for showcasing transformations.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Image height (ID: image_height)
- t:sections.all.heading (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- t:sections.all.description (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_description (ID: text_color)
- t:sections.all.heading_align.label__2 (ID: heading_align)
- Text bottom space desktop (ID: text_bottom_space)
- Container width (ID: container_width)
- Enable custom border radius (ID: enable_border_radius)
- Border radius (ID: border_radius)
- Header: t:sections.before-after.headings.before_image (ID: N/A)
- t:sections.before-after.settings.heading.label (ID: before_image_heading)
- Heading size (ID: text_before_size)
- t:sections.all.colors.label_heading (ID: before_color)
- t:sections.before-after.settings.image.label (ID: before_image)
- Header: t:sections.before-after.headings.after_image (ID: N/A)
- t:sections.before-after.settings.heading.label (ID: after_image_heading)
- Heading size (ID: text_after_size)
- t:sections.all.colors.label_heading (ID: after_color)
- t:sections.before-after.settings.image.label (ID: after_image)
- Header: Icon settings (ID: N/A)
- Icon (ID: icon)
- Image width (ID: icon_width)
- Image vertical position (ID: icon_vertical)
- Image horizontal position (ID: icon_horizontal)
- Image width mobile (ID: icon_width_mobile)
- Image vertical position mobile (ID: icon_vertical_mobile)
- Image horizontal position mobile (ID: icon_horizontal_mobile)
- Icon (ID: icon_2)
- Image width (ID: icon_width_2)
- Image vertical position (ID: icon_vertical_2)
- Image horizontal position (ID: icon_horizontal_2)
- Image width mobile (ID: icon_width_mobile_2)
- Image vertical position mobile (ID: icon_vertical_mobile_2)
- Image horizontal position mobile (ID: icon_horizontal_mobile_2)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### Trusted Brands Scroller (`brand`)
> Displays scrolling list of trusted partner or brand logos.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Section Background Color (ID: bg_color)
- Header: Heading Setup (ID: N/A)
- Left Side Decorative Image (ID: left_image)
- Highlighted Phrase (ID: highlight_text)
- Highlight Text Color (ID: highlight_color)
- Remaining Heading (ID: heading)
- Subtitle (ID: subtitle)
- Header: Scroller Configuration (ID: N/A)
- Animation Speed (Lower is faster) (ID: scroll_speed)
- Logo Card Width (ID: card_width)
- Logo Card Height (ID: card_height)
- Card Border Radius (ID: card_radius)

#### Blocks & Block Customizations
##### Block: Brand Logo (`logo`)
- Brand Logo Image (PNG/JPG) (ID: logo)


---

### Custom Fonts Loader (`change-font`)
> A customizable section for displaying custom fonts loader related content.

**Used in:**
- `layout/theme.liquid`

#### Section Settings
- Enable Custom Fonts (ID: enable)

#### Blocks & Block Customizations
##### Block: Font Block (`font`)
- Font Name (used in CSS) (ID: name)
- Font File URL (.woff2 from Files) (ID: custom_font_url)
- Font Weight (ID: custom_font_weight)
- Font Style (ID: custom_font_style)
- Apply to H1 (ID: apply_h1)
- Apply to H2 (ID: apply_h2)
- Apply to H3 (ID: apply_h3)
- Apply to H4 (ID: apply_h4)
- Apply to H5 (ID: apply_h5)
- Apply to H6 (ID: apply_h6)
- Apply to Paragraphs (<p>) (ID: apply_p)
- Apply to Links (<a>) (ID: apply_a)
- Apply to List Items (<li>) (ID: apply_li)
- Apply to Unordered Lists (<ul>) (ID: apply_ul)
- Apply to Ordered Lists (<ol>) (ID: apply_ol)
- Apply to Spans (<span>) (ID: apply_span)
- Apply to Divs (<div>) (ID: apply_div)
- Apply to Buttons (<button>) (ID: apply_button)
- Apply to Inputs (<input>) (ID: apply_input)
- Custom CSS Selector (optional) (ID: custom_selector)


---

### t:sections.collage.name (`collage`)
> Displays grid of images, products, collections, and videos.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.all.heading (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- t:sections.all.description (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_description (ID: text_color)
- t:sections.all.heading_align.label__2 (ID: heading_align)
- Text bottom space desktop (ID: text_bottom_space)
- t:sections.collage.settings.desktop_layout.label (ID: desktop_layout)
- t:sections.collage.settings.mobile_layout.label (ID: mobile_layout)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: t:sections.collage.blocks.image.name (`image`)
- t:sections.collage.blocks.image.settings.image.label (ID: image)

##### Block: t:sections.collage.blocks.product.name (`product`)
- t:sections.collage.blocks.product.settings.product.label (ID: product)
- t:sections.featured-collection.settings.image_ratio.label (ID: image_ratio)
- t:sections.collage.blocks.product.settings.second_image.label (ID: second_image)

##### Block: t:sections.collage.blocks.collection.name (`collection`)
- t:sections.collage.blocks.collection.settings.collection.label (ID: collection)

##### Block: t:sections.collage.blocks.video.name (`video`)
- t:sections.collage.blocks.video.settings.cover_image.label (ID: cover_image)
- t:sections.collage.blocks.video.settings.video_url.label (ID: video_url)
- t:sections.collage.blocks.video.settings.description.label (ID: description)


---

### t:sections.collection-list.name (`collection-list`)
> Displays list of selected collections for easy navigation.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.all.heading (ID: title)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- t:sections.all.heading_align.label (ID: heading_align)
- Text bottom space desktop (ID: text_bottom_space)
- Header: Card style (ID: N/A)
- t:sections.collection-list.settings.image_ratio.label (ID: image_ratio)
- t:sections.all.heading_size.label (ID: collection_heading_size)
- t:sections.all.colors.label_heading (ID: collection_text_color)
- Heading weight (ID: collection_heading_weight)
- t:sections.collection-list.settings.columns_desktop.label (ID: columns_desktop)
- t:sections.collection-list.settings.show_view_all.label (ID: show_view_all)
- Button top space desktop (ID: top_space)
- Enable custom border radius (ID: enable_border_radius)
- Border radius (ID: border_radius)
- Header: t:sections.collection-list.settings.header_mobile.content (ID: N/A)
- t:sections.collection-list.settings.columns_mobile.label (ID: columns_mobile)
- t:sections.collection-list.settings.swipe_on_mobile.label (ID: swipe_on_mobile)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:sections.all.padding.full_width (ID: full_width)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: t:sections.collection-list.blocks.featured_collection.name (`featured_collection`)
- t:sections.collection-list.blocks.featured_collection.settings.collection.label (ID: collection)
- Layout (ID: layout)
- Background color (ID: background)
- Header: Icon settings (ID: N/A)
- Icon (ID: icon)
- Image width (ID: icon_width)
- Image vertical position (ID: icon_vertical)
- Image horizontal position (ID: icon_horizontal)
- Image width mobile (ID: icon_width_mobile)
- Image vertical position mobile (ID: icon_vertical_mobile)
- Image horizontal position mobile (ID: icon_horizontal_mobile)


---

### Tabs list collections (`collections-with-tabs`)
> Displays tabbed interface to switch between different collection products.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.all.heading (ID: title)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- Color-changing text (ID: text_heading)
- Custom color (ID: text_color_2)
- t:sections.all.description (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_description (ID: text_color)
- t:sections.all.heading_align.label__2 (ID: heading_align)
- t:sections.featured-collection.settings.products_to_show.label (ID: products_to_show)
- t:sections.featured-collection.settings.columns_desktop.label (ID: columns_desktop)
- Header: Header button (ID: N/A)
- Show button (ID: show_header_button)
- Button type (ID: button_type)
- Label (ID: header_button_label)
- Link (ID: header_button_url)
- Header: Navigation (ID: N/A)
- t:text.navigation_color (ID: navigation_text_color)
- t:text.navigation_color_hover (ID: navigation_text_color_hover)
- Navigation background color (ID: navigation_background_color)
- Navigation alignment (ID: navigation_align)
- Navigation alignment mobile (ID: navigation_align_mb)
- Style (ID: navigation_style)
- Active menu item icon (ID: active_menu_icon)
- Enable style for active button navigation (ID: active_state)
- Active state text color (ID: active_state_text_color)
- Active state background color (ID: active_state_bg_color)
- Heading size desktop (ID: navigation_heading_size)
- Header: t:sections.featured-collection.settings.header.content (ID: N/A)
- t:sections.featured-collection.settings.image_ratio.label (ID: image_ratio)
- t:sections.featured-collection.settings.show_secondary_image.label (ID: show_secondary_image)
- t:sections.featured-collection.settings.show_vendor.label (ID: show_vendor)
- t:sections.featured-collection.settings.show_rating.label (ID: show_rating)
- Header: t:sections.featured-collection.settings.header_mobile.content (ID: N/A)
- t:sections.featured-collection.settings.columns_mobile.label (ID: columns_mobile)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: Collection (`tabs_collection`)
- Collection (ID: collection)
- Enable "View all" (ID: show_view_all)
- t:sections.image-with-text.blocks.button.settings.button_label.label (ID: button_label)


---

### Community (`community`)
> Displays social proof section showcasing community members or reviews.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Heading (ID: heading)
- Description (ID: subtitle)
- Heading Size (ID: heading_size)
- Description Size (ID: subtitle_size)
- Heading Highlight Color (ID: heading_highlight_color)
- Floating Ball Image (ID: floating_ball)
- Floating Ball Size (ID: floating_ball_size)
- Background Base Color (ID: background_color)
- Background Accent Color (ID: background_accent_color)
- Card Border Color (ID: card_border_color)
- Card Border Width (ID: card_border_width)
- Dot Color (ID: dot_color)
- Active Dot Color (ID: dot_active_color)

#### Blocks & Block Customizations
##### Block: Image Card (`image_card`)
- Card Image (ID: image)
- Image Alt Text (ID: alt_text)


---

### t:sections.contact-form.name (`contact-form`)
> Displays standard contact form with customizable fields.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.all.heading (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- t:sections.all.description (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_description (ID: text_color)
- t:sections.all.heading_align.label__2 (ID: heading_align)
- Text bottom space desktop (ID: text_bottom_space)
- Message text (ID: textarea_text)
- Text under form (ID: form_text)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### t:sections.custom-liquid.name (`custom-liquid`)
> Displays allows insertion of custom Liquid or HTML code.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.custom-liquid.settings.custom_liquid.label (ID: custom_liquid)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:sections.all.colors.label (ID: color_scheme)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### Ecosystem Content (`eco`)
> Displays showcases eco-friendly features or values with icons and text.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Section Background (ID: section_bg)
- Heading (ID: heading)
- Heading Highlighted Text (ID: heading_highlight)
- Heading Color (ID: heading_color)
- Heading Highlight Color (ID: heading_highlight_color)
- Heading Font Size (Desktop) (ID: heading_fs_d)
- Heading Font Size (Mobile) (ID: heading_fs_m)
- Description (ID: description)
- Description Color (ID: description_color)
- Description Font Size (Desktop) (ID: description_fs_d)
- Description Font Size (Mobile) (ID: description_fs_m)
- Decoration Image (Top Right Kite) (ID: decoration_image)
- Header: Card Layout Settings (ID: N/A)
- Gap between cards (Desktop) (ID: card_gap)
- Gap between cards (Mobile) (ID: card_gap_m)
- Card Border Radius (Desktop) (ID: card_border_radius)
- Card Border Radius (Mobile) (ID: card_border_radius_m)
- Card Padding (Desktop) (ID: card_padding_d)
- Card Padding (Mobile) (ID: card_padding_m)
- Header: Section Padding (ID: N/A)
- Padding Top (ID: padding_top)
- Padding Bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: Card (`card`)
- Card Background Gradient (ID: card_bg)
- Card Border Color (ID: card_border_color)
- Card Border Width (ID: card_border_width)
- Header: Card Content (ID: N/A)
- Title (ID: title)
- Title Highlighted Word (ID: title_highlight)
- Title Color (ID: title_color)
- Title Highlight Color (ID: title_highlight_color)
- Title Font Size (Desktop) (ID: title_fs_d)
- Title Font Size (Mobile) (ID: title_fs_m)
- Subtitle (ID: subtitle)
- Subtitle Color (ID: subtitle_color)
- Subtitle Font Size (Desktop) (ID: subtitle_fs_d)
- Subtitle Font Size (Mobile) (ID: subtitle_fs_m)
- Description (ID: description)
- Description Color (ID: desc_color)
- Description Font Size (Desktop) (ID: desc_fs_d)
- Description Font Size (Mobile) (ID: desc_fs_m)
- Header: List Items (ID: N/A)
- List Item 1 (ID: list_item_1)
- List Item 2 (ID: list_item_2)
- List Item 3 (ID: list_item_3)
- List Items Color (ID: list_color)
- List Font Size (Desktop) (ID: list_fs_d)
- List Font Size (Mobile) (ID: list_fs_m)
- Check Icon Background Color (ID: icon_bg_color)
- Check Icon Detail Color (ID: icon_color)
- Header: Button (ID: N/A)
- Button Label (ID: button_label)
- Button Link (ID: button_link)
- Button Background (ID: button_bg)
- Button Text Color (ID: button_color)
- Button Font Size (Desktop) (ID: button_fs_d)
- Button Font Size (Mobile) (ID: button_fs_m)


---

### Elevated Unified Card (`elevated-card`)
> Displays prominent call-to-action card with heading, text, and buttons.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Header: Outer Section Layout (ID: N/A)
- Outer Section Background Color (ID: section_bg_color)
- Outer Background Decor Image (ID: section_bg_image)
- Outer Decor Image Opacity (ID: section_bg_opacity)
- Header: Card Styling & Sizing (ID: N/A)
- Card Background Color (ID: card_bg_color)
- Card Background Image (ID: card_bg_image)
- Show Inner White Border Framing (ID: show_white_border)
- Card Maximum Width (ID: card_width)
- Card Minimum Height (ID: card_height)
- Card Inner Padding (Top/Bottom) (ID: card_padding)
- Card Corner Radius (ID: card_radius)
- Header: Typography Control (ID: N/A)
- Heading (ID: heading)
- Heading Text Color (ID: title_color)
- Heading Highlight Color (for Bold text) (ID: highlight_color)
- Description (ID: description)
- Description Text Color (ID: desc_color)
- Subtitle Font Size (ID: subtitle_size)
- Subtitle Font Weight (ID: subtitle_weight)
- Header: Primary Button (Solid) (ID: N/A)
- Button Label (ID: button_label_1)
- Button Link (ID: button_link_1)
- Button Background Color (ID: btn_1_bg)
- Button Text Color (ID: btn_1_text)
- Header: Secondary Button (Outlined) (ID: N/A)
- Button Label (ID: button_label_2)
- Button Link (ID: button_link_2)
- Button Highlight/Outline Color (ID: btn_2_text)

---

### t:sections.email-signup-banner.name (`email-signup-banner`)
> A banner section used for visual emphasis and messaging.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
-  (ID: N/A)
- t:sections.email-signup-banner.settings.image.label (ID: image)
- t:sections.email-signup-banner.settings.image_overlay_opacity.label (ID: image_overlay_opacity)
- t:sections.email-signup-banner.settings.show_background_image.label (ID: show_background_image)
- t:sections.email-signup-banner.settings.image_height.label (ID: image_height)
- Content color (ID: text_color)
- t:sections.email-signup-banner.settings.desktop_content_position.label (ID: desktop_content_position)
- t:sections.email-signup-banner.settings.show_text_box.label (ID: show_text_box)
- t:sections.email-signup-banner.settings.desktop_content_alignment.label (ID: desktop_content_alignment)
- Header: t:sections.email-signup-banner.settings.header.content (ID: N/A)
- t:sections.email-signup-banner.settings.mobile_content_alignment.label (ID: mobile_content_alignment)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:sections.all.padding.background_color (ID: main_background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: main_colors_background_section_gradient)
- Container background color (ID: background_color)
- Container background gradient (ID: colors_background_section_gradient)

#### Blocks & Block Customizations
##### Block: t:sections.email-signup-banner.blocks.heading.name (`heading`)
- t:sections.email-signup-banner.blocks.heading.settings.heading.label (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)

##### Block: t:sections.email-signup-banner.blocks.paragraph.name (`paragraph`)
- t:sections.email-signup-banner.blocks.paragraph.settings.paragraph.label (ID: text)
- t:sections.email-signup-banner.blocks.paragraph.settings.text_style.label (ID: text_style)

##### Block: t:sections.email-signup-banner.blocks.email_form.name (`email_form`)
- No block-specific settings.


---

### t:sections.collapsible_content.name (`faq`)
> A customizable section for displaying t:sections.collapsible_content.name related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Divide into two columns (ID: two_columns)
- Header: Heading item settings (ID: N/A)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_item_color)
- t:sections.all.heading_align.label__2 (ID: heading_align)
- Header: FAQ item settings (ID: N/A)
- Heading weight (ID: heading_weight)
- t:sections.all.colors.label_heading (ID: heading_color)
- Accent heading color (ID: heading_color_accent)
- Content color (ID: content_color)
- Show first item content (ID: show_first_item)
- Show all items content (ID: show_all_items)
- t:settings_schema.colors.settings.background_colors.content (ID: item_background_color)
- Header: Button settings (ID: N/A)
- Background (ID: btn_bg)
- Color (ID: btn_color)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- Top padding (ID: padding_top)
- Bottom padding (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: Section heading (`heading`)
- Heading (ID: section_title)
- Text bottom space desktop (ID: headin_space)

##### Block: Desctiption (`text`)
- t:sections.all.description (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_text (ID: description_color)

##### Block: t:sections.trio-showcase.blocks.button.name (`button`)
- t:sections.trio-showcase.blocks.button.settings.button_label.label (ID: button_label)
- t:sections.trio-showcase.blocks.button.settings.button_link.label (ID: button_link)
- Top space desktop (ID: top_space)

##### Block: FAQ item (`item`)
- Heading (ID: item_heading)
- t:sections.image-with-text.blocks.text.settings.text.label (ID: text)


---

### Accordion with images (`faq-with-images`)
> A customizable section for displaying accordion with images related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.all.heading (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- t:sections.all.description (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_description (ID: text_color)
- t:sections.all.heading_align.label__2 (ID: heading_align)
- Text bottom space desktop (ID: text_bottom_space)
- Header: Item settings (ID: N/A)
- t:sections.all.colors.label_heading (ID: item_heading_color)
- Content color (ID: content_color)
- t:settings_schema.colors.settings.background_colors.content (ID: item_background_color)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- Secondary background color (ID: secondary_background_color)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- Top padding (ID: padding_top)
- Bottom padding (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: FAQ item (`item`)
- Image (ID: image)
- Heading (ID: item_heading)
- t:sections.image-with-text.blocks.text.settings.text.label (ID: text)


---

### t:sections.featured-blog.name (`featured-blog`)
> A customizable section for displaying t:sections.featured-blog.name related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Layout (ID: layout)
- t:sections.all.heading (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- t:sections.all.heading_align.label__2 (ID: heading_align)
- Text bottom space desktop (ID: heading_bottom_space)
- t:sections.featured-blog.settings.blog.label (ID: blog)
- t:sections.featured-blog.settings.post_limit.label (ID: post_limit)
- t:sections.featured-blog.settings.columns_desktop.label (ID: columns_desktop)
- Header: Button options (ID: N/A)
- Button type (ID: button_type)
- t:sections.featured-blog.settings.show_view_all.label (ID: view_all)
- Label for post link (ID: author_link)
- Header: Slider options (ID: N/A)
- Enable slideshow (ID: enable_slider)
- Arrows color (ID: arrows_btn_color)
- Arrows color hover (ID: arrows_btn_color_hover)
- Arrows background (ID: arrows_btn_bg_color)
- Arrows background hover (ID: arrows_btn_bg_color_hover)
- Enable outline on hover (ID: arrows_outline)
- Header: Blog post card (ID: N/A)
- t:sections.featured-blog.settings.show_image.label (ID: show_image)
- Heading line limit (ID: line_limit_heading)
- t:sections.featured-blog.settings.show_date.label (ID: show_date)
- t:sections.featured-blog.settings.show_author.label (ID: show_author)
- Show info (ID: show_mins)
- Info label (ID: info_label)
- Show date above title (ID: show_above)
- Show badge (ID: show_badge)
- Show badge after image (ID: show_badge_bottom)
- Show excerpt (ID: show_excerpt)
- Show excerpt only for first blog in desktop (ID: show_excerpt_first)
- Excerpt line limit (ID: line_limit)
- t:sections.featured-blog.settings.show_comments.label (ID: show_comments)
- Author prefix (ID: author_prefix)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### Blog collage (`featured-blog-collage`)
> Displays grid of images, products, collections, and videos.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.all.heading (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- t:sections.all.description (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_description (ID: text_color)
- t:sections.all.heading_align.label__2 (ID: heading_align)
- Text bottom space desktop (ID: text_bottom_space)
- Header: Blog post card (ID: N/A)
- t:sections.featured-blog.settings.show_image.label (ID: show_image)
- Heading line limit (ID: line_limit_heading)
- Show badge (ID: show_badge)
- Show excerpt (ID: show_excerpt)
- Excerpt line limit (ID: line_limit)
- t:sections.featured-blog.settings.show_author.label (ID: show_author)
- t:sections.featured-blog.settings.show_date.label (ID: show_date)
- Show info (ID: show_mins)
- Show date above title (ID: show_above)
- t:sections.featured-blog.settings.show_comments.label (ID: show_comments)
- Author prefix (ID: author_prefix)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: Article (`article`)
- Article (ID: article)
- Info label (ID: info_label)


---

### t:sections.featured-collection.name (`featured-collection`)
> A customizable section for displaying t:sections.featured-collection.name related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.featured-collection.settings.collection.label (ID: collection)
- t:sections.all.heading (ID: title)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- t:sections.featured-collection.settings.description.label (ID: description)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_description (ID: text_color)
- t:sections.all.heading_align.label__2 (ID: heading_align)
- Content alignment mobile (ID: heading_alignment_mb)
- Text bottom space desktop (ID: text_bottom_space)
- Header: Header button (ID: N/A)
- Show button (ID: show_header_button)
- Button type (ID: button_type)
- Label (ID: header_button_label)
- Link (ID: header_button_url)
- Header: Collection banner (ID: N/A)
- Show collection banner (ID: show_collection_image)
- Desktop banner position (ID: image_position)
- Custom image (ID: custom_image)
- t:sections.image-banner.settings.image_overlay_opacity.label (ID: image_overlay_opacity)
- Enable custom border radius (ID: enable_border_radius)
- Border radius (ID: border_radius)
- Icon (ID: icon)
- Banner text (ID: banner_text)
- Text color (ID: banner_text_color)
- End date (ID: coundown_date)
- When date has passed (ID: coundown_end)
- Countdown style (ID: coundown_style)
- Days label (ID: days_label)
- t:settings_schema.colors.settings.background_colors.content (ID: days_background_color)
- Hours label (ID: hours_label)
- t:settings_schema.colors.settings.background_colors.content (ID: hours_background_color)
- Minutes label (ID: mins_label)
- t:settings_schema.colors.settings.background_colors.content (ID: mins_background_color)
- Seconds label (ID: secs_label)
- t:settings_schema.colors.settings.background_colors.content (ID: secs_background_color)
- Number color (ID: coundown_number_color)
- Number font size (ID: coundown_number_size)
- Number font size mobile (ID: coundown_number_size_mb)
- Number weight (ID: coundown_number_weight)
- Number letter spacing (ID: coundown_number_letter_spacing)
- Label color (ID: coundown_title_color)
- Label font size (ID: coundown_title_size)
- Label weight (ID: coundown_title_weight)
- t:sections.featured-collection.settings.full_width.label (ID: full_width)
- t:sections.featured-collection.settings.show_view_all.label (ID: show_view_all)
- t:sections.featured-collection.settings.products_to_show.label (ID: products_to_show)
- t:sections.featured-collection.settings.columns_desktop.label (ID: columns_desktop_grid)
- t:sections.featured-collection.settings.columns_mobile.label (ID: columns_mobile_grid)
- Header: Slider options (ID: N/A)
- Enable slideshow (ID: enable_slider)
- Center slide (ID: center_slide)
- t:sections.featured-collection.settings.columns_desktop.label (ID: columns_desktop)
- t:sections.featured-collection.settings.columns_mobile.label (ID: columns_mobile)
- Arrows color (ID: arrows_btn_color)
- Arrows color hover (ID: arrows_btn_color_hover)
- Arrows background (ID: arrows_btn_bg_color)
- Arrows background hover (ID: arrows_btn_bg_color_hover)
- Enable outline on hover (ID: arrows_outline)
- Show arrows at the top (ID: arrows_on_top)
- Header: t:sections.featured-collection.settings.header.content (ID: N/A)
- t:sections.featured-collection.settings.image_ratio.label (ID: image_ratio)
- t:sections.featured-collection.settings.show_secondary_image.label (ID: show_secondary_image)
- t:sections.featured-collection.settings.show_vendor.label (ID: show_vendor)
- t:sections.featured-collection.settings.show_rating.label (ID: show_rating)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### t:sections.featured-product.name (`featured-product`)
> A customizable section for displaying t:sections.featured-product.name related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Enable auto-scroll (ID: enable_autoscroll)
- Auto-scroll delay (ID: autoscroll_delay)
- t:sections.all.heading (ID: title)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- t:sections.all.description (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_description (ID: text_color)
- t:sections.all.heading_align.label__2 (ID: heading_align)
- t:sections.main-product.settings.enable_sticky_info.label (ID: enable_sticky_info)
- Products (ID: product_list)
- Header: t:sections.featured-product.settings.header.content (ID: N/A)
- t:sections.main-product.settings.media_size.label (ID: media_size)
- Media position (ID: global_media_position)
- t:sections.main-product.settings.constrain_to_viewport.label (ID: constrain_to_viewport)
- t:sections.main-product.settings.media_fit.label (ID: media_fit)
- t:sections.main-product.settings.gallery_layout.label (ID: gallery_layout)
- t:sections.featured-product.settings.media_position.label (ID: media_position)
- t:sections.main-product.settings.image_zoom.label (ID: image_zoom)
- t:sections.main-product.settings.hide_variants.label (ID: hide_variants)
- t:sections.featured-product.settings.enable_video_looping.label (ID: enable_video_looping)
- t:sections.main-product.settings.mobile_thumbnails.label (ID: mobile_thumbnails)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- Secondary background color (ID: secondary_background_color)
- Info background color (ID: info_background_color)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: @app (`@app`)
- No block-specific settings.

##### Block: t:sections.featured-product.blocks.text.name (`text`)
- t:sections.featured-product.blocks.text.settings.text.label (ID: text)
- t:sections.all.colors.label_text (ID: text_color)
- t:sections.featured-product.blocks.text.settings.text_style.label (ID: text_style)
- Block position (ID: block_position)

##### Block: t:sections.featured-product.blocks.title.name (`title`)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.heading_weight.label (ID: heading_weight)
- t:sections.all.colors.label_heading (ID: heading_color)
- Show tag badge (ID: title_price_badge)
- Show product type (ID: title_product_type)
- Additional text (ID: additional_text)
- Additional text color (ID: additional_text_color)

##### Block: t:sections.featured-product.blocks.price.name (`price`)
- t:sections.all.heading_size.label_price (ID: price_size)
- t:sections.all.heading_weight.label_price (ID: price_weight)
- Sale price weight (ID: sale_price_weight)
- Show discount badge (ID: price_badge)

##### Block: t:sections.featured-product.blocks.sku.name (`sku`)
- t:sections.featured-product.blocks.sku.settings.text_style.label (ID: text_style)

##### Block: t:sections.main-product.blocks.inventory.name (`inventory`)
- t:text.text_size (ID: heading_size)
- Text weight (ID: heading_weight)
- Inventory icon (ID: inventory_icon)
- t:sections.main-product.blocks.inventory.settings.show_inventory_quantity.label (ID: show_inventory_quantity)
- t:sections.main-product.blocks.inventory.settings.inventory_threshold.label (ID: inventory_threshold)
- t:sections.main-product.blocks.inventory.settings.show_inventory_low.label (ID: show_inventory_low)
- t:sections.main-product.blocks.inventory.settings.show_inventory_progress.label (ID: show_inventory_progress)
- t:sections.main-product.blocks.inventory.settings.inventory_threshold.label_max (ID: inventory_threshold_start)

##### Block: Countdown bar (`coundownBar`)
- End date (ID: coundown_date)
- When date has passed (ID: coundown_end)
- Countdown style (ID: coundown_style)
- Heading (ID: contdown_label)
- t:sections.all.heading_size.label_countdown_label (ID: contdown_label_size)
- Heading weight (ID: contdown_label_weight)
- t:sections.all.colors.label_contdown_label (ID: contdown_label_text_color)
- Heading icon (ID: countdown_icon)
- Days label (ID: days_label)
- t:settings_schema.colors.settings.background_colors.content (ID: days_background_color)
- Hours label (ID: hours_label)
- t:settings_schema.colors.settings.background_colors.content (ID: hours_background_color)
- Minutes label (ID: mins_label)
- t:settings_schema.colors.settings.background_colors.content (ID: mins_background_color)
- Seconds label (ID: secs_label)
- t:settings_schema.colors.settings.background_colors.content (ID: secs_background_color)
- Number color (ID: coundown_number_color)
- Number font size (ID: coundown_number_size)
- Number font size mobile (ID: coundown_number_size_mb)
- Number weight (ID: coundown_number_weight)
- Label color (ID: coundown_title_color)
- Label font size (ID: coundown_title_size)
- Label weight (ID: coundown_title_weight)

##### Block: t:sections.featured-product.blocks.variant_picker.name (`variant_picker`)
- t:sections.featured-product.blocks.variant_picker.settings.picker_type.label (ID: picker_type)
- Label size (ID: label_size)
- Header: Popup option (ID: N/A)
- Enable popup option (ID: enable_size_chart)
- Option name (ID: choose_variant)
- t:sections.main-product.blocks.popup.settings.link_label.label (ID: popup_label)
- t:sections.main-product.blocks.popup.settings.page.label (ID: page)

##### Block: t:sections.featured-product.blocks.buy_buttons.name (`buy_buttons`)
- t:sections.featured-product.blocks.buy_buttons.settings.show_dynamic_checkout.label (ID: show_dynamic_checkout)
- t:sections.main-product.blocks.buy_buttons.settings.show_gift_card_recipient.label (ID: show_gift_card_recipient)
- Hide quantity block (ID: hide_quantity)
- Full width buttons (ID: full_width)
- Show pickup availability (ID: show_availability)
- Block position (ID: block_position)
- Header: Add to Cart Button Customization (ID: N/A)
- Background Color (ID: atc_bg_color)
- Text Color (ID: atc_text_color)
- Border Color (ID: atc_border_color)
- Header: Buy It Now Button Customization (ID: N/A)
- Background Color (ID: bin_bg_color)
- Text Color (ID: bin_text_color)
- Border Color (ID: bin_border_color)
- Header: Global Button Settings (ID: N/A)
- Font Size (ID: button_font_size)
- Border Radius (ID: button_border_radius)

##### Block: t:sections.featured-product.blocks.share.name (`share`)
- t:sections.featured-product.blocks.share.settings.text.label (ID: share_label)
- t:sections.main-article.blocks.title.settings.show_linkedin_share.label (ID: show_linkedin_share)
- t:sections.main-article.blocks.title.settings.show_fb_share.label (ID: show_fb_share)
- t:sections.main-article.blocks.title.settings.show_twitter_share.label (ID: show_twitter_share)
- t:sections.main-article.blocks.title.settings.show_pinterest_share.label (ID: show_pinterest_share)
- t:sections.main-article.blocks.title.settings.show_telegram_share.label (ID: show_telegram_share)
- t:sections.main-article.blocks.title.settings.show_snapchat_share.label (ID: show_snapchat_share)
- t:sections.main-article.blocks.title.settings.show_tumblr_share.label (ID: show_tumblr_share)
- t:sections.all.colors.label_icon (ID: social_color)
- Social icons color hover (ID: social_color_hover)
-  (ID: N/A)
-  (ID: N/A)

##### Block: t:sections.featured-product.blocks.custom_liquid.name (`custom_liquid`)
- t:sections.featured-product.blocks.custom_liquid.settings.custom_liquid.label (ID: custom_liquid)

##### Block: Delivery date (`delivery_date`)
- Min date (ID: delivery_min)
- Max date (ID: delivery_max)
- Label (ID: delivery_text)
- t:sections.all.heading_size.label_delivery_label (ID: delivery_text_size)
- t:sections.all.colors.label_delivery_label (ID: delivery_text_color)
- t:settings_schema.colors.settings.background_colors.content (ID: delivery_background_color)

##### Block: t:sections.featured-product.blocks.rating.name (`rating`)
-  (ID: N/A)

##### Block: t:sections.main-product.blocks.icon_with_text.name (`icon-with-text`)
- t:sections.main-product.blocks.icon_with_text.settings.layout.label (ID: layout)
- Header: t:sections.main-product.blocks.icon_with_text.settings.content.label (ID: N/A)
- t:sections.main-product.blocks.icon_with_text.settings.icon_1.label (ID: icon_1)
- t:sections.main-product.blocks.icon_with_text.settings.image_1.label (ID: image_1)
- t:sections.main-product.blocks.icon_with_text.settings.heading_1.label (ID: heading_1)
- Description (ID: description_1)
- Heading style (ID: heading_1_size)
- t:sections.all.colors.label_heading (ID: heading_1_color)
- t:sections.main-product.blocks.icon_with_text.settings.icon_2.label (ID: icon_2)
- t:sections.main-product.blocks.icon_with_text.settings.image_2.label (ID: image_2)
- t:sections.main-product.blocks.icon_with_text.settings.heading_2.label (ID: heading_2)
- Description (ID: description_2)
- Heading style (ID: heading_2_size)
- t:sections.all.colors.label_heading (ID: heading_2_color)
- t:sections.main-product.blocks.icon_with_text.settings.icon_3.label (ID: icon_3)
- t:sections.main-product.blocks.icon_with_text.settings.image_3.label (ID: image_3)
- t:sections.main-product.blocks.icon_with_text.settings.heading_3.label (ID: heading_3)
- Description (ID: description_3)
- Heading style (ID: heading_3_size)
- t:sections.all.colors.label_heading (ID: heading_3_color)


---

### ucts Tabs (`featuredproducts`)
> A customizable section for displaying ucts tabs related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Heading Part 1 (ID: heading)
- Highlighted Word (ID: highlight_text)
- Heading Part 2 (ID: heading_suffix)
- Description (ID: description)
- View All Button Text (ID: view_all_text)

#### Blocks & Block Customizations
##### Block: @app (`@app`)
- No block-specific settings.

##### Block: Collection Tab (`collection`)
- Select Collection (ID: collection)


---

### Footer (`footer`)
> Displays global site footer with menus, social links, and newsletter signup.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Header: First column (ID: N/A)
- First column logo (ID: intro_logo)
- First column logo alt text (ID: intro_logo_alt)
- First column logo width (px) (ID: intro_logo_width)
- First column content (ID: intro_content)
- Header: Social icons (ID: N/A)
- Social icon circle color (ID: social_icon_bg)
- Header: Menus (ID: N/A)
- Footer menu (ID: menu)
- Bottom small links (ID: right_links_menu)
- Header: Get in touch (ID: N/A)
- Heading (ID: get_in_touch_heading)
- Header: Email signup (ID: N/A)
- Show email signup (ID: show_newsletter)
- Signup heading (ID: newsletter_heading)
- Signup subheading (ID: newsletter_subheading)
- Email input placeholder (ID: newsletter_placeholder)
- Button label (ID: newsletter_button_text)
- Header: Bottom logo (ID: N/A)
- Bottom logo (ID: logo)
- Bottom logo alt text (ID: logo_alt)
- Bottom logo max width (px) (ID: logo_width)
- Header: Footer bottom (ID: N/A)
- Copyright text (ID: copyright_text)

#### Blocks & Block Customizations
##### Block: Social icon (`social_link`)
- Icon image (ID: icon)
- Link (ID: link)
- Accessible label (ID: label)

##### Block: Get in touch item (`contact_item`)
- Logo (ID: contact_logo)
- Label (ID: label)
- Content (ID: value)


---

### Get Started Card (`get-started-card`)
> A customizable section for displaying get started card related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Section Background (ID: section_bg)
- Padding Top (ID: padding_top)
- Padding Bottom (ID: padding_bottom)
- Header: Card Design Settings (ID: N/A)
- Card Background Gradient (ID: card_bg_gradient)
- Card Background Image (ID: card_bg_image)
- Image Opacity (ID: card_image_opacity)
- Corner Radius (ID: card_radius)
- Header: Card Content (ID: N/A)
- Title (ID: title)
- Subtitle (ID: subtitle)
- Button Label (ID: btn_text)
- Button Link (ID: btn_link)
- Button Background Color (ID: btn_bg_color)
- Button Text Color (ID: btn_text_color)

---

### t:sections.header.name (`header`)
> Displays global site header with navigation, logo, and search.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.header.settings.logo_position.label (ID: logo_position)
- t:sections.header.settings.menu.label (ID: menu)
- t:sections.header.settings.sticky_header_type.label (ID: sticky_header_type)
- Active menu item icon (ID: active_menu_icon)
- Highlight last menu item with gradient (Mood 3) (ID: highlight_last_menu_item_gradient)
- t:sections.header.settings.show_line_separator.label (ID: show_line_separator)
- Separator line color (ID: separator_line_color)
- t:text.navigation_color (ID: text_color)
- t:text.navigation_color_hover (ID: text_color_hover)
- t:sections.header.settings.menu_type_desktop.label (ID: menu_type_desktop)
- Header: Mega menu settings (ID: N/A)
- Show mega menu image (ID: show_mm_image)
- Default mega menu image (ID: mega_menu_image)
- t:sections.header.settings.image_ratio.name (ID: image_ratio)
- Add image shape (ID: mm_image_shape)
- Promoted collection (ID: mm_collection)
- Mega menu overlay (ID: mm_overlay)
- Header: Drawer menu settings (ID: N/A)
- Add custom drawer menu (ID: dm_custom)
- Promoted product (ID: dm_product)
- Drawer menu overlay (ID: dm_image)
- Header: Search (ID: N/A)
- Enable search (ID: enable_search)
- Search icon color (ID: search_color)
- Custom search icon (ID: custom_search_icon)
- Header: Account (ID: N/A)
- Account icon color (ID: account_color)
- Header: Cart (ID: N/A)
- Cart icon color (ID: cart_color)
- Custom cart icon (ID: custom_cart_icon)
- Header: t:sections.header.settings.header__3.content (ID: N/A)
- t:sections.header.settings.enable_country_selector.label (ID: enable_country_selector)
- Show country flag (ID: show_image)
- Show country name (ID: show_name)
- Show currency code (ID: show_currency)
- Header: t:sections.header.settings.header__5.content (ID: N/A)
- t:sections.header.settings.enable_language_selector.label (ID: enable_language_selector)
- Header: t:sections.header.settings.mobile_layout.content (ID: N/A)
- Submenu style (ID: submenu_style)
- Burger icon color (ID: burger_color)
- Header: t:sections.all.spacing (ID: N/A)
- t:sections.header.settings.margin_bottom.label (ID: margin_bottom)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: @app (`@app`)
- No block-specific settings.


---

### Elevated Herobanner (`herobanner`)
> Displays large prominent banner with images and calls to action.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Header: Slider Arrows (ID: N/A)
- Show Slider Arrows at Bottom Right (ID: show_arrows)
- Enable auto-slide on desktop (ID: enable_autoplay_desktop)
- Auto-slide speed (ID: auto_slide_speed)
- Header: No Layout Settings - Hardcoded 40px Full Width (ID: N/A)

#### Blocks & Block Customizations
##### Block: Slide (`slide`)
- Header: Image & Background (ID: N/A)
- Background Image (ID: image)
- Mobile Background Image (Optional) (ID: image_mobile)
- Fallback/Solid Background Color (ID: fallback_bg_color)
- Image Overlay Color (ID: overlay_color)
- Image Overlay Opacity (ID: overlay_opacity)
- Use separate overlays for mobile and desktop (ID: enable_device_overlay)
- Mobile Overlay Color (ID: overlay_color_mobile)
- Mobile Overlay Opacity (ID: overlay_opacity_mobile)
- Desktop Overlay Color (ID: overlay_color_desktop)
- Desktop Overlay Opacity (ID: overlay_opacity_desktop)
- Header: Typography & Content (ID: N/A)
- Heading Part 1 (ID: heading)
- Highlighted Heading Part 2 (ID: highlight_text)
- Subheading/Paragraph (ID: text)
- Heading Color (ID: heading_color)
- Highlight Color (ID: highlight_color)
- Text Color (ID: text_color)
- Header: Primary Button (ID: N/A)
- Button Label (ID: button_label_1)
- Button Link (ID: button_link_1)
- Button Background Color (ID: btn_primary_bg)
- Button Text Color (ID: btn_primary_text)
- Header: Secondary Button (ID: N/A)
- Button Label (ID: button_label_2)
- Button Link (ID: button_link_2)
- Button Border/Text Color (ID: btn_secondary_color)


---

### How It Works (`how-it-works`)
> Displays stepped guide explaining the service or process.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Section Background Color (ID: bg_color)
- Header: Decorative Background Images (ID: N/A)
- Top Left Image (e.g. Dotted Line) (ID: top_left_image)
- Bottom Right Image (e.g. Character Illustration) (ID: bottom_right_image)
- Header: Heading & Content (ID: N/A)
- Heading Part 1 (ID: heading_1)
- Highlighted Word (ID: highlight_text)
- Heading Part 2 (ID: heading_2)
- Highlight Text & Button Color (ID: highlight_color)
- Subtitle (ID: subtitle)
- Header: Call To Action (ID: N/A)
- Button Label (ID: button_label)
- Button Link (ID: button_link)

#### Blocks & Block Customizations
##### Block: Process Step (`step`)
- Icon Box Background Color (ID: bg_color)
- Upload Icon (White SVG/PNG recommended) (ID: icon)
- Title (ID: title)
- Description (ID: description)


---

### t:sections.image-banner.name (`image-banner`)
> Displays simple banner for highlighting specific imagery or promotions.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
-  (ID: N/A)
- Hide first and second images (ID: hide_images)
- t:sections.image-banner.settings.image.label (ID: image)
- t:sections.image-banner.settings.image_2.label (ID: image_2)
- t:sections.image-with-text.settings.video.label (ID: video)
- t:sections.image-banner.settings.image_overlay_opacity.label (ID: image_overlay_opacity)
- t:sections.image-banner.settings.image_height.label (ID: image_height)
- Enable custom border radius (ID: enable_border_radius)
- Border radius (ID: border_radius)
- t:sections.image-banner.settings.desktop_content_position.label (ID: desktop_content_position)
- t:sections.image-banner.settings.show_text_box.label (ID: show_text_box)
- Remove the space inside the container (ID: remove_space_inside)
- t:sections.image-banner.settings.desktop_content_alignment.label (ID: desktop_content_alignment)
- Container background color (ID: background_color)
- Enable container custom background color (ID: enable_custom_container_bg_color)
- Container custom background color (ID: custom_container_bg_color)
- Container opacity (ID: container_opacity)
- Header: t:sections.image-banner.settings.mobile.content (ID: N/A)
- t:sections.image-banner.settings.mobile_content_alignment.label (ID: mobile_content_alignment)
- t:sections.image-banner.settings.stack_images_on_mobile.label (ID: stack_images_on_mobile)
- t:sections.image-banner.settings.show_text_below.label (ID: show_text_below)
- Container opacity mobile (ID: container_opacity_mobile)
- Header: t:sections.all.animation.content (ID: N/A)
- t:sections.all.animation.image_behavior.label (ID: image_behavior)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- Full width (ID: full_width)
- Backgroung image (ID: backgroung_image)
- Background image height (ID: backgroung_image_height)
- Background image height mobile (ID: backgroung_image_height_mobile)
- t:settings_schema.colors.settings.background_colors.content (ID: section_background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- Remove space from the sides (ID: remove_sides_space)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: t:sections.image-banner.blocks.heading.name (`heading`)
- t:sections.image-banner.blocks.heading.settings.heading.label (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- Enable custom color (ID: enable_custom_heading_color)
- Custom color (ID: custom_heading_color)

##### Block: t:sections.image-banner.blocks.text.name (`text`)
- t:sections.image-banner.blocks.text.settings.text.label (ID: text)
- t:sections.all.colors.label_text (ID: text_color)
- Enable custom color (ID: enable_custom_text_color)
- Custom color (ID: custom_text_color)
- Text size (ID: text_body_size)

##### Block: t:sections.image-banner.blocks.buttons.name (`buttons`)
- t:sections.image-banner.blocks.buttons.settings.button_label_1.label (ID: button_label_1)
- t:sections.image-banner.blocks.buttons.settings.button_link_1.label (ID: button_link_1)
- t:sections.image-banner.blocks.buttons.settings.button_label_2.label (ID: button_label_2)
- t:sections.image-banner.blocks.buttons.settings.button_link_2.label (ID: button_link_2)
- Top space desktop (ID: top_space)
- Enable custom color for button (ID: custom_btn_color)
- Button text (ID: button_text_color)
- Button background (ID: button_bg_color)
- Button border (ID: button_border_color)
- Button text hover (ID: button_text_color_hover)
- Button background hover (ID: button_bg_color_hover)
- Button border hover (ID: button_border_color_hover)

##### Block: Featured icon (`featured_icon`)
- Icon (ID: featured_icon)
- Icon width (ID: icon_width)
- Text (ID: featured_icon_text)
- t:sections.all.colors.label_text (ID: featured_icon_text_color)

##### Block: Countdown bar (`coundownBar`)
- End date (ID: coundown_date)
- When date has passed (ID: coundown_end)
- Countdown style (ID: coundown_style)
- Heading (ID: contdown_label)
- t:sections.all.heading_size.label_countdown_label (ID: contdown_label_size)
- t:sections.all.colors.label_contdown_label (ID: contdown_label_text_color)
- Heading icon (ID: countdown_icon)
- Days label (ID: days_label)
- t:settings_schema.colors.settings.background_colors.content (ID: days_background_color)
- Hours label (ID: hours_label)
- t:settings_schema.colors.settings.background_colors.content (ID: hours_background_color)
- Minutes label (ID: mins_label)
- t:settings_schema.colors.settings.background_colors.content (ID: mins_background_color)
- Seconds label (ID: secs_label)
- t:settings_schema.colors.settings.background_colors.content (ID: secs_background_color)
- Number color (ID: coundown_number_color)
- Number font size (ID: coundown_number_size)
- Number font size mobile (ID: coundown_number_size_mb)
- Number weight (ID: coundown_number_weight)
- Label color (ID: coundown_title_color)
- Label font size (ID: coundown_title_size)
- Label weight (ID: coundown_title_weight)

##### Block: Progress bar (`progress_bar`)
- Label (ID: progress_text)
- t:sections.all.colors.label_delivery_label (ID: progress_text_color)
- Label icon (ID: lablel_icon)
- Icon width (ID: icon_width)
- Progress status (ID: progress_status)
- Progress color (ID: progress_color)
- Current progress color (ID: current_progress_color)

##### Block: Image (`image`)
- Image (ID: image)
- Image width (ID: image_width)

##### Block: Float image (`float_image`)
- Image (ID: float_image_item)
- Image width (ID: float_image_width)
- Image width mobile (ID: float_image_width_mobile)
- Image vertical position (ID: float_image_vertical_position)
- Image vertical position mobile (ID: float_image_vertical_position_mobile)
- Hide image on mobile (ID: float_image_hide_mobile)
- Add box shadow to image (ID: float_image_shadow)

##### Block: Video (`video`)
- t:sections.video.settings.video.label (ID: video)
- Header: t:sections.video.settings.header__2.content (ID: N/A)
-  (ID: N/A)
- t:sections.video.settings.video_url.label (ID: video_url)
- t:sections.video.settings.cover_image.label (ID: cover_image)
- Autoplay (ID: autoplay)
- t:sections.video.settings.description.label (ID: description)
- Video width (ID: video_width)

##### Block: Social media icons (`social`)
-  (ID: N/A)
- t:sections.all.colors.label_icon (ID: social_color)
- Social icons color hover (ID: social_color_hover)


---

### Image gallery (`image-gallery`)
> Provides a visually rich gallery of images.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.all.heading (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- t:sections.all.description (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_description (ID: text_color)
- t:sections.all.heading_align.label__2 (ID: heading_align)
- Text bottom space desktop (ID: text_bottom_space)
- t:sections.multicolumn.settings.columns_desktop.label (ID: columns_desktop)
- t:sections.multicolumn.settings.columns_mobile.label (ID: columns_mobile)
- t:sections.multicolumn.settings.image_ratio.label (ID: image_ratio)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: t:sections.multicolumn.blocks.column.name (`image`)
- Image (ID: image)


---

### Hotspot banner (`image-hubspot-banner`)
> A banner section used for visual emphasis and messaging.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Header: Product settings (ID: N/A)
- Product (ID: product)
- t:sections.featured-collection.settings.image_ratio.label (ID: image_ratio)
- t:sections.featured-collection.settings.show_secondary_image.label (ID: show_secondary_image)
- t:sections.featured-collection.settings.show_vendor.label (ID: show_vendor)
- t:sections.featured-collection.settings.show_rating.label (ID: show_rating)
- Header: Media settings (ID: N/A)
- t:sections.image-with-text.settings.image.label (ID: image)
- t:sections.image-with-text.settings.video.label (ID: video)
- Media height (ID: image_height)
- Enable shift layout on mobile (ID: shift_layout_mb)
- Enable round shape (ID: round_shape)
- Enable custom border radius (ID: enable_border_radius)
- Border radius (ID: border_radius)
- t:sections.image-with-text.settings.image.label_mobile (ID: image_mobile)
- Media height mobile (ID: image_height_mobile)
- Media overlay opacity (ID: image_overlay_opacity)
- Header: Text content (ID: N/A)
- t:sections.rich-text.blocks.heading.settings.heading.label (ID: heading)
- t:sections.rich-text.blocks.heading.settings.heading.label_mobile (ID: heading_mobile)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- t:sections.all.heading_weight.label (ID: heading_weight)
- t:sections.all.text (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_text (ID: text_color)
- t:sections.all.heading_align.label__2 (ID: heading_align)
- Text bottom space desktop (ID: text_bottom_space)
- Stack content (ID: stack_content)
- Header: Button settings (ID: N/A)
- Button label (ID: button_label)
- Button link (ID: button_link)
- Header: Bullet settings (ID: N/A)
- Background color (ID: bullet_color)
- Cross color (ID: bullet_cross_color)
- Bullet color change on hover (ID: bullet_hover)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:sections.all.padding.full_width (ID: full_width)
- Backgroung image (ID: backgroung_image)
- Background image height (ID: backgroung_image_height)
- Background image height mobile (ID: backgroung_image_height_mobile)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: Hotspot product item (`item`)
- t:sections.featured-product.settings.product.label (ID: product)
- Custom bullet icon (ID: bullet_icon)
- Bullet size (ID: bullet_size)
- Horizontal position (ID: horizontal_position)
- Vertical position (ID: vertical_position)
- Horizontal position mobile (ID: horizontal_position_mobile)
- Vertical position mobile (ID: vertical_position_mobile)
- Bubble position (ID: bubble_position)
- Open bubble on desktop (ID: bubble_open)
- Hide item on mobile (ID: hide_mobile)

##### Block: Hotspot featured item (`featured_item`)
- Image (ID: item_image)
- Heading (ID: item_heading)
- Text (ID: item_text)
- Custom bullet icon (ID: bullet_icon)
- Bullet size (ID: bullet_size)
- Horizontal position (ID: horizontal_position)
- Vertical position (ID: vertical_position)
- Horizontal position mobile (ID: horizontal_position_mobile)
- Vertical position mobile (ID: vertical_position_mobile)
- Bubble position (ID: bubble_position)
- Open bubble on desktop (ID: bubble_open)
- Hide item on mobile (ID: hide_mobile)


---

### Image with text (`image-with-text`)
> Displays side-by-side layout of an image and descriptive text.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Layout (ID: layout_block)
- t:sections.image-with-text.settings.image.label (ID: image)
- Image on mobile (ID: image_mb)
- Add media shape (ID: image_shape)
- Enable custom border radius (ID: enable_border_radius)
- Border radius (ID: border_radius)
- Border radius mobile (ID: border_radius_mobile)
- Enable video (ID: enable_video)
- t:sections.video.settings.video.label (ID: video)
- t:sections.video.settings.video_url.label (ID: video_url)
- Autoplay (ID: autoplay)
- t:sections.video.settings.enable_video_looping.label (ID: enable_video_looping)
- Icon (ID: icon)
- t:sections.image-with-text.settings.height.label (ID: height)
- t:sections.image-with-text.settings.desktop_image_width.label (ID: desktop_image_width)
- t:sections.image-with-text.settings.layout.label (ID: layout)
- t:sections.image-with-text.settings.desktop_content_position.label (ID: desktop_content_position)
- t:sections.image-with-text.settings.desktop_content_alignment.label (ID: desktop_content_alignment)
- t:sections.image-with-text.settings.desktop_content_space.label (ID: desktop_content_space)
- Header: Mobile layout (ID: N/A)
- t:sections.image-with-text.settings.mobile_content_alignment.label (ID: mobile_content_alignment)
- Header: Icon settings (ID: N/A)
- Icon (ID: icon_top)
- Hide icon on mobile (ID: hide_icon_top_mb)
- Image width (ID: icon_top_width)
- Image vertical position (ID: icon_top_vertical)
- Image horizontal position (ID: icon_top_horizontal)
- Image width mobile (ID: icon_top_width_mobile)
- Image vertical position mobile (ID: icon_top_vertical_mobile)
- Image horizontal position mobile (ID: icon_top_horizontal_mobile)
- Icon (ID: icon_bottom)
- Hide icon on mobile (ID: hide_icon_bottom_mb)
- Image width (ID: icon_bottom_width)
- Image vertical position (ID: icon_bottom_vertical)
- Image horizontal position (ID: icon_bottom_horizontal)
- Image width mobile (ID: icon_bottom_width_mobile)
- Image vertical position mobile (ID: icon_bottom_vertical_mobile)
- Image horizontal position mobile (ID: icon_bottom_horizontal_mobile)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- Secondary background color (ID: secondary_background_color)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)
- Margin bottom (ID: margin_bottom)

#### Blocks & Block Customizations
##### Block: t:sections.image-with-text.blocks.heading.name (`heading`)
- t:sections.all.heading (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- Color-changing text (ID: text_heading)
- Custom color (ID: text_color_2)

##### Block: t:sections.image-with-text.blocks.text.name (`text`)
- t:sections.image-with-text.blocks.text.settings.text.label (ID: text)
- t:sections.image-with-text.blocks.text.settings.text_style.label (ID: text_style)
- t:sections.all.colors.label_text (ID: text_color)

##### Block: t:sections.image-with-text.blocks.button.name (`button`)
- t:sections.image-with-text.blocks.button.settings.button_label.label (ID: button_label)
- t:sections.image-with-text.blocks.button.settings.button_link.label (ID: button_link)
- Button space (ID: top_space)

##### Block: t:sections.image-with-text.blocks.button.name_link (`link`)
- t:sections.image-with-text.blocks.button.settings.button_label.label (ID: button_label)
- t:sections.image-with-text.blocks.button.settings.button_link.label (ID: button_link)

##### Block: Contact info (`contact_info`)
- Label (ID: contact_title)
- Label color (ID: text_color)
- Link (ID: contact_label)
- Link color on hover (ID: text_color_hover)

##### Block: Progress bar (`progress_bar`)
- Label (ID: progress_text)
- t:sections.all.colors.label_delivery_label (ID: progress_text_color)
- Label icon (ID: lablel_icon)
- Icon width (ID: icon_width)
- Progress status (ID: progress_status)
- Progress color (ID: progress_color)
- Current progress color (ID: current_progress_color)

##### Block: Countdown bar (`coundownBar`)
- End date (ID: coundown_date)
- When date has passed (ID: coundown_end)
- Countdown style (ID: coundown_style)
- Heading (ID: contdown_label)
- t:sections.all.heading_size.label_countdown_label (ID: contdown_label_size)
- t:sections.all.colors.label_contdown_label (ID: contdown_label_text_color)
- Heading icon (ID: countdown_icon)
- Days label (ID: days_label)
- t:settings_schema.colors.settings.background_colors.content (ID: days_background_color)
- Hours label (ID: hours_label)
- t:settings_schema.colors.settings.background_colors.content (ID: hours_background_color)
- Minutes label (ID: mins_label)
- t:settings_schema.colors.settings.background_colors.content (ID: mins_background_color)
- Seconds label (ID: secs_label)
- t:settings_schema.colors.settings.background_colors.content (ID: secs_background_color)
- Number color (ID: coundown_number_color)
- Number font size (ID: coundown_number_size)
- Number font size mobile (ID: coundown_number_size_mb)
- Number weight (ID: coundown_number_weight)
- Label color (ID: coundown_title_color)
- Label font size (ID: coundown_title_size)
- Label weight (ID: coundown_title_weight)

##### Block: Featured icon (`featured_icon`)
- Icon (ID: featured_icon)
- Icon width (ID: icon_width)
- Text (ID: featured_icon_text)
- t:sections.all.colors.label_text (ID: featured_icon_text_color)

##### Block: Social media icons (`social`)
-  (ID: N/A)
- t:sections.all.colors.label_icon (ID: social_color)
- Social icons color hover (ID: social_color_hover)

##### Block: Image (`image`)
- Image (ID: image)
- Image width (ID: image_width)

##### Block: Video (`video`)
- t:sections.video.settings.video.label (ID: video)
- Header: t:sections.video.settings.header__2.content (ID: N/A)
-  (ID: N/A)
- t:sections.video.settings.video_url.label (ID: video_url)
- t:sections.video.settings.cover_image.label (ID: cover_image)
- Autoplay (ID: autoplay)
- t:sections.video.settings.description.label (ID: description)
- Video width (ID: video_width)

##### Block: t:sections.main-product.blocks.custom_liquid.name (`custom_liquid`)
- t:sections.main-product.blocks.custom_liquid.settings.custom_liquid.label (ID: custom_liquid)


---

### Main 404 (`main-404`)
> The primary content section for 404 related pages.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.image-with-text.settings.image.label (ID: image)
- t:sections.all.colors.label_heading (ID: heading_color)
- t:sections.image-with-text.blocks.text.settings.text.label (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_description (ID: description_color)
- t:sections.all.heading_align.label (ID: heading_align)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### t:sections.main-account.name (`main-account`)
> The primary content section for account related pages.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.all.colors.label_heading (ID: heading_color)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### t:sections.main-activate-account.name (`main-activate-account`)
> The primary content section for activate-account related pages.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.all.colors.label_heading (ID: heading_color)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### t:sections.main-addresses.name (`main-addresses`)
> The primary content section for addresses related pages.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.all.colors.label_heading (ID: heading_color)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### t:sections.main-article.name (`main-article`)
> The primary content section for article related pages.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Icon left (ID: icon_left)
- Icon right (ID: icon_right)
- Show back to blog button (ID: show_back)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: @app (`@app`)
- No block-specific settings.

##### Block: Breadcrumbs (`breadcrumb`)
- Breadcrumbs color (ID: breadcrumb_color)
- Breadcrumbs color hover (ID: breadcrumb_color_hover)

##### Block: t:sections.main-article.blocks.featured_image.name (`featured_image`)
- t:sections.main-article.blocks.featured_image.settings.image_height.label (ID: image_height)

##### Block: t:sections.main-article.blocks.title.name (`title`)
- t:sections.all.heading_size.label (ID: heading_size)
- Heading weight (ID: heading_weight)
- t:sections.all.colors.label_heading (ID: heading_color)
- t:sections.all.heading_align.label (ID: heading_align)
- t:sections.main-article.blocks.title.settings.blog_show_date.label (ID: blog_show_date)
- t:sections.main-article.blocks.title.settings.blog_show_author.label (ID: blog_show_author)
- Header: Share (ID: N/A)
- t:sections.main-article.blocks.title.settings.blog_show_share.label (ID: blog_show_share)
- t:sections.main-article.blocks.share.settings.text.label (ID: share_label)
- t:sections.main-article.blocks.title.settings.show_linkedin_share.label (ID: show_linkedin_share)
- t:sections.main-article.blocks.title.settings.show_fb_share.label (ID: show_fb_share)
- t:sections.main-article.blocks.title.settings.show_twitter_share.label (ID: show_twitter_share)
- t:sections.main-article.blocks.title.settings.show_pinterest_share.label (ID: show_pinterest_share)
- t:sections.main-article.blocks.title.settings.show_telegram_share.label (ID: show_telegram_share)
- t:sections.main-article.blocks.title.settings.show_snapchat_share.label (ID: show_snapchat_share)
- t:sections.main-article.blocks.title.settings.show_tumblr_share.label (ID: show_tumblr_share)
- Share label color (ID: social_label_color)
- Share icons color (ID: social_color)
- Share icons color hover (ID: social_color_hover)
-  (ID: N/A)
-  (ID: N/A)

##### Block: t:sections.main-article.blocks.content.name (`content`)
- No block-specific settings.

##### Block: t:sections.main-article.blocks.share.name (`share`)
- t:sections.main-article.blocks.share.settings.text.label (ID: share_label)
-  (ID: N/A)
-  (ID: N/A)


---

### t:sections.main-blog.name (`main-blog`)
> The primary content section for blog related pages.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Header: Banner settings (ID: N/A)
- t:sections.all.heading_size.label (ID: heading_size)
- Heading weight (ID: text_weight)
- t:sections.all.colors.label_heading (ID: text_color)
- Banner backgroung image (ID: banner_backgroung_image)
- Banner background mobile (ID: banner_background_mb)
- Banner left overlay (ID: overlay_image)
- Banner right overlay (ID: overlay_image_right)
- t:sections.all.padding.full_width (ID: full_width)
- Enable shape in banner (ID: banner_shape)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: banner_padding_top)
- t:sections.all.padding.padding_bottom (ID: banner_padding_bottom)
- Header: Blog settings (ID: N/A)
- t:sections.main-blog.settings.layout.label (ID: layout)
- Blog count to show (ID: blog_count)
- Load more label (ID: load_more_label)
- Header: t:sections.main-blog.settings.header.content (ID: N/A)
- t:sections.main-blog.settings.show_image.label (ID: show_image)
- t:sections.main-blog.settings.image_height.label (ID: image_height)
- Heading line limit (ID: line_limit_heading)
- t:sections.main-blog.settings.show_date.label (ID: show_date)
- t:sections.main-blog.settings.show_author.label (ID: show_author)
- Show info (ID: show_mins)
- Info label (ID: info_label)
- Show date above title (ID: show_above)
- t:sections.featured-blog.settings.show_comments.label (ID: show_comments)
- Author prefix (ID: author_prefix)
- Show badge (ID: show_badge)
- Show excerpt (ID: show_excerpt)
- Show excerpt only for first blog in desktop (ID: show_excerpt_first)
- Excerpt line limit (ID: line_limit)
- Label for post link (ID: author_link)
-  (ID: N/A)
- Header: Pagination (ID: N/A)
- Select a way to expand the list (ID: load_pagination)
- Pagination color (ID: pagination_color)
- Pagination background (ID: pagination_background_color)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: main_background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: main_colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### t:sections.main-cart-items.name (`main-cart-items`)
> The primary content section for cart-items related pages.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Header: Countdown bar settings (ID: N/A)
- Show timer (ID: show_timer)
- Countdown label (ID: banner_text)
- Countdown label color (ID: banner_text_color)
- End date (ID: coundown_date)
- When date has passed (ID: coundown_end)
- Countdown style (ID: coundown_style)
- Days label (ID: days_label)
- t:settings_schema.colors.settings.background_colors.content (ID: days_background_color)
- Hours label (ID: hours_label)
- t:settings_schema.colors.settings.background_colors.content (ID: hours_background_color)
- Minutes label (ID: mins_label)
- t:settings_schema.colors.settings.background_colors.content (ID: mins_background_color)
- Seconds label (ID: secs_label)
- t:settings_schema.colors.settings.background_colors.content (ID: secs_background_color)
- Number color (ID: coundown_number_color)
- Number font size (ID: coundown_number_size)
- Number font size mobile (ID: coundown_number_size_mb)
- Number weight (ID: coundown_number_weight)
- Number letter spacing (ID: coundown_number_letter_spacing)
- Label color (ID: coundown_title_color)
- Label font size (ID: coundown_title_size)
- Label weight (ID: coundown_title_weight)
- Header: Banner settings (ID: N/A)
- t:sections.all.heading_size.label (ID: heading_size)
- Heading weight (ID: heading_weight_banner)
- t:sections.all.colors.label_heading (ID: text_color)
- Show continue shopping (ID: show_continue)
- Continue shopping custom link (ID: custom_link)
- Banner background color (ID: banner_background_color)
- Banner backgroung image (ID: banner_backgroung_image)
- Banner background mobile (ID: banner_background_mb)
- Banner left overlay (ID: overlay_image)
- Banner right overlay (ID: overlay_image_right)
- t:sections.all.padding.full_width (ID: full_width)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- t:sections.all.padding.padding_top (ID: banner_padding_top)
- t:sections.all.padding.padding_bottom (ID: banner_padding_bottom)
- Show breadcrumbs (ID: show_breadcrumbs)
- Breadcrumbs color (ID: breadcrumb_color)
- Breadcrumbs color hover (ID: breadcrumb_color_hover)
- Header: Empty cart settings (ID: N/A)
- Reduce space (ID: empty_style)
- t:sections.all.heading_size.label (ID: empty_heading_size)
- Heading weight (ID: empty_heading_weight)
- Login title size (ID: empty_title_size)
- Login title weight (ID: empty_title_weight)
- Login title color (ID: empty_title_color)
- Background color (ID: empty_background_color)
- Enable custom border radius (ID: enable_border_radius)
- Border radius (ID: border_radius)
- Header: Cart settings (ID: N/A)
- Cart type (ID: cart_type)
- Items background color (ID: items_background_color)
- Hide items border (ID: items_border)
- Checkout background color (ID: checkout_background_color)
- Hide checkout border (ID: checkout_border)
- Promoted background color (ID: promoted_background_color)
- t:sections.featured-collection.settings.image_ratio.label (ID: promoted_image_ratio)
- Hide promoted border (ID: promoted_border)
- Promoted collection (ID: cart_collection)
- Promoted collection title (ID: cart_collection_title)
- t:sections.all.shape_divider.settings.position (ID: shape_content_position)
- t:sections.all.shape_divider.settings.type (ID: shape_content_type)
- t:sections.all.shape_divider.settings.color (ID: shape_content_color)
- t:sections.all.shape_divider.settings.width (ID: shape_content_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: Countdown (`countdown`)
- No block-specific settings.

##### Block: Subtotal price (`subtotal`)
- No block-specific settings.

##### Block: Checkout button (`buttons`)
- No block-specific settings.

##### Block: Icon with text (`icon_with_text`)
- Icon (ID: icon)
- Text (ID: text)

##### Block: Trust badges (`trust_badges`)
- No block-specific settings.

##### Block: @app (`@app`)
- No block-specific settings.


---

### t:sections.main-collection-banner.name (`main-collection-banner`)
> Displays main product grid and filtering for collection pages.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Show breadcrumbs (ID: show_breadcrumbs)
- Breadcrumbs color (ID: breadcrumb_color)
- Breadcrumbs color hover (ID: breadcrumb_color_hover)
- Hide banner (ID: hide_banner)
- t:sections.all.heading_size.label (ID: heading_size)
- Heading weight (ID: text_weight)
- t:sections.all.colors.label_heading (ID: text_color)
- t:sections.all.colors.label_text (ID: description_color)
-  (ID: N/A)
- t:sections.main-collection-banner.settings.show_collection_description.label (ID: show_collection_description)
- t:sections.main-collection-banner.settings.show_collection_image.label (ID: show_collection_image)
- Banner backgroung image (ID: banner_backgroung_image)
- Banner background mobile (ID: banner_background_mb)
- Banner left overlay (ID: overlay_image)
- Banner right overlay (ID: overlay_image_right)
- t:sections.all.padding.full_width (ID: full_width)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### t:sections.main-collection-product-grid.name (`main-collection-product-grid`)
> Displays main product grid and filtering for collection pages.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.main-collection-product-grid.settings.products_per_page.label (ID: products_per_page)
- t:sections.main-collection-product-grid.settings.columns_desktop.label (ID: columns_desktop)
- Grid style (ID: grid_style)
- Show grid navigation (ID: grid_navigation)
- Header: t:sections.main-collection-product-grid.settings.header__3.content (ID: N/A)
- t:sections.main-collection-product-grid.settings.image_ratio.label (ID: image_ratio)
- t:sections.main-collection-product-grid.settings.show_secondary_image.label (ID: show_secondary_image)
- t:sections.main-collection-product-grid.settings.show_vendor.label (ID: show_vendor)
- t:sections.main-collection-product-grid.settings.show_rating.label (ID: show_rating)
- Header: t:sections.main-collection-product-grid.settings.header__1.content (ID: N/A)
- Filtering background (ID: filtering_background_color)
- t:sections.main-collection-product-grid.settings.enable_filtering.label (ID: enable_filtering)
- t:sections.main-collection-product-grid.settings.filter_type.label (ID: filter_type)
- Show filter checkboxes (ID: show_filter_checkbox)
- t:sections.main-collection-product-grid.settings.enable_sorting.label (ID: enable_sorting)
- Show sorting label (ID: show_sorting_label)
- Enable custom color (ID: enable_custom_color)
- Filters dropdown color (ID: facets_dropdown_background_color)
- Filtering size (ID: filter_size)
- Filtering and sorting colors on hover (ID: filter_color_hover)
- Header: Pagination (ID: N/A)
- Select a way to expand the list (ID: load_pagination)
- Pagination color (ID: pagination_color)
- Pagination background (ID: pagination_background_color)
- Header: t:sections.main-collection-product-grid.settings.header_mobile.content (ID: N/A)
- t:sections.main-collection-product-grid.settings.columns_mobile.label (ID: columns_mobile)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### t:sections.main-list-collections.name (`main-list-collections`)
> The primary content section for list-collections related pages.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Header: Banner settings (ID: N/A)
- Show breadcrumbs (ID: show_breadcrumbs)
- Breadcrumbs color (ID: breadcrumb_color)
- Breadcrumbs color hover (ID: breadcrumb_color_hover)
- t:sections.main-list-collections.settings.title.label (ID: title)
- t:sections.all.heading_size.label (ID: heading_size)
- Heading weight (ID: heading_weight)
- t:sections.all.colors.label_heading (ID: text_color)
- Banner backgroung image (ID: banner_backgroung_image)
- Banner background mobile (ID: banner_background_mb)
- Banner left overlay (ID: overlay_image)
- Banner right overlay (ID: overlay_image_right)
- t:sections.all.padding.full_width (ID: full_width)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)
- Header: Collection list settings (ID: N/A)
-  (ID: N/A)
- t:sections.main-list-collections.settings.sort.label (ID: sort)
- t:sections.main-list-collections.settings.image_ratio.label (ID: image_ratio)
- Add image shape (ID: image_shape)
- t:sections.all.heading_size.label (ID: collection_heading_size)
- t:sections.all.colors.label_heading (ID: collection_text_color)
- Heading weight (ID: collection_heading_weight)
- t:sections.main-list-collections.settings.columns_desktop.label (ID: columns_desktop)
- Enable slider for desktop (ID: enable_slider)
- t:sections.all.shape_divider.settings.position (ID: shape_content_position)
- t:sections.all.shape_divider.settings.type (ID: shape_content_type)
- t:sections.all.shape_divider.settings.color (ID: shape_content_color)
- t:sections.all.shape_divider.settings.width (ID: shape_content_width)
- Header: Product card settings (ID: N/A)
- t:sections.collection-list.settings.image_ratio.label (ID: product_image_ratio)
- t:sections.main-list-collections.settings.second_image.label (ID: second_image)
- Header: t:sections.main-list-collections.settings.header_mobile.content (ID: N/A)
- t:sections.main-list-collections.settings.columns_mobile.label (ID: columns_mobile)
- Header: Pagination (ID: N/A)
- Pagination color (ID: pagination_color)
- Pagination background (ID: pagination_background_color)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: main_background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: main_colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: collection_padding_top)
- t:sections.all.padding.padding_bottom (ID: collection_padding_bottom)

#### Blocks & Block Customizations
##### Block: Custom collection (`featured_collection`)
- t:sections.collection-list.blocks.featured_collection.settings.collection.label (ID: collection)
- t:sections.image-with-text.settings.video.label (ID: video)
- Icon (ID: icon)
- Background color (ID: background_color)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)


---

### t:sections.main-login.name (`main-login`)
> The primary content section for login related pages.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.image-with-text.settings.image.label (ID: image)
- Left Icon (ID: icon-left)
- Right Icon (ID: icon-right)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### t:sections.main-order.name (`main-order`)
> The primary content section for order related pages.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.all.colors.label_heading (ID: heading_color)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### t:sections.main-page.name (`main-page`)
> The primary content section for page related pages.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Header: Banner settings (ID: N/A)
- Show breadcrumbs (ID: show_breadcrumbs)
- Breadcrumbs color (ID: breadcrumb_color)
- Breadcrumbs color hover (ID: breadcrumb_color_hover)
- Hide banner (ID: hide_banner)
- t:sections.all.heading_size.label (ID: heading_size)
- Heading weight (ID: heading_weight)
- t:sections.all.colors.label_heading (ID: text_color)
- Banner backgroung image (ID: banner_backgroung_image)
- Banner backgroung image mobile (ID: banner_backgroung_image_mob)
- Banner left overlay (ID: overlay_image)
- Banner right overlay (ID: overlay_image_right)
- t:sections.all.padding.full_width (ID: full_width)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)
- Header: Content settings (ID: N/A)
-  (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_content_position)
- t:sections.all.shape_divider.settings.type (ID: shape_content_type)
- t:sections.all.shape_divider.settings.color (ID: shape_content_color)
- t:sections.all.shape_divider.settings.width (ID: shape_content_width)
- t:settings_schema.colors.settings.background_colors.content (ID: content_background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: content_colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: content_padding_top)
- t:sections.all.padding.padding_bottom (ID: content_padding_bottom)

---

### t:sections.main-password-footer.name (`main-password-footer`)
> Displays global site footer with menus, social links, and newsletter signup.

**Used in:**
- `layout/password.liquid`

#### Section Settings
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- Text color (ID: text_color)
- Text color on hover (ID: text_color_hover)

---

### t:sections.main-password-header.name (`main-password-header`)
> Displays global site header with navigation, logo, and search.

**Used in:**
- `layout/password.liquid`

#### Section Settings
- Header: t:sections.main-password-header.settings.logo_header.content (ID: N/A)
-  (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:text.navigation_color (ID: text_color)
- t:text.navigation_color_hover (ID: text_color_hover)

---

### t:sections.main-product.name (`main-product`)
> Displays the core product details section for product pages.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.main-product.settings.enable_sticky_info.label (ID: enable_sticky_info)
- Header: t:sections.main-product.settings.header.content (ID: N/A)
- t:sections.main-product.settings.media_size.label (ID: media_size)
- Media position (ID: global_media_position)
- t:sections.main-product.settings.constrain_to_viewport.label (ID: constrain_to_viewport)
- t:sections.main-product.settings.media_fit.label (ID: media_fit)
- t:sections.main-product.settings.gallery_layout.label (ID: gallery_layout)
- Desktop thumbnail position (ID: media_position)
- t:sections.main-product.settings.image_zoom.label (ID: image_zoom)
- t:sections.main-product.settings.hide_variants.label (ID: hide_variants)
- t:sections.main-product.settings.enable_video_looping.label (ID: enable_video_looping)
- t:sections.main-product.settings.mobile_thumbnails.label (ID: mobile_thumbnails)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- Secondary background color (ID: secondary_background_color)
- Info background color (ID: info_background_color)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: @app (`@app`)
- No block-specific settings.

##### Block: Breadcrumbs (`breadcrumb`)
- Breadcrumbs color (ID: breadcrumb_color)
- Breadcrumbs color hover (ID: breadcrumb_color_hover)
- Show in quick add (ID: show_in_quick_add)

##### Block: Buyback Guarantee (`buyback`)
- Percent (ID: percent)
- Title main (ID: title_main)
- Title emphasis (ID: title_emphasis)
- Description (ID: description)
- Accent color (ID: accent_color)
- Title color (ID: title_color)
- Emphasis color (ID: emphasis_color)
- Background color (ID: background_color)
- Block position (ID: block_position)

##### Block: t:sections.main-product.blocks.text.name (`text`)
- t:sections.main-product.blocks.text.settings.text.label (ID: text)
- Subtext (ID: subtext)
- Text weight (ID: text_weight)
- t:sections.all.colors.label_text (ID: text_color)
- t:sections.featured-product.blocks.text.settings.text_style.label (ID: text_style)
- Subtext color (ID: subtext_color)
- Subtext style (ID: subtext_style)
- Block position (ID: block_position)
- Show in quick add (ID: show_in_quick_add)

##### Block: Divider (`divider`)
- Divider color (ID: divider_color)
- Divider thickness (ID: divider_thickness)
- Block position (ID: block_position)
- Show in quick add (ID: show_in_quick_add)

##### Block: Effective price CTA (`effective_price_cta`)
- Price prefix (ID: price_prefix)
- Buyback percent (ID: buyback_percent)
- Caption (ID: caption)
- Button label (ID: button_label)
- Button link (ID: button_link)
- Block position (ID: block_position)
- Show in quick add (ID: show_in_quick_add)

##### Block: t:sections.main-product.blocks.title.name (`title`)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.heading_weight.label (ID: heading_weight)
- t:sections.all.colors.label_heading (ID: heading_color)
- Show tag badge (ID: title_price_badge)
- Show vendor (ID: show_vendor)
- Show product type (ID: title_product_type)

##### Block: t:sections.main-product.blocks.price.name (`price`)
- t:sections.all.heading_size.label_price (ID: price_size)
- t:sections.all.heading_weight.label_price (ID: price_weight)
- Sale price weight (ID: sale_price_weight)
- Show discount badge (ID: price_badge)

##### Block: t:sections.main-product.blocks.sku.name (`sku`)
- t:sections.main-product.blocks.sku.settings.text_style.label (ID: text_style)

##### Block: t:sections.main-product.blocks.inventory.name (`inventory`)
- t:text.text_size (ID: heading_size)
- Inventory icon (ID: inventory_icon)
- t:sections.main-product.blocks.inventory.settings.show_inventory_quantity.label (ID: show_inventory_quantity)
- t:sections.main-product.blocks.inventory.settings.inventory_threshold.label (ID: inventory_threshold)
- t:sections.main-product.blocks.inventory.settings.show_inventory_low.label (ID: show_inventory_low)
- t:sections.main-product.blocks.inventory.settings.show_inventory_progress.label (ID: show_inventory_progress)
- t:sections.main-product.blocks.inventory.settings.inventory_threshold.label_max (ID: inventory_threshold_start)

##### Block: Countdown bar (`coundownBar`)
- End date (ID: coundown_date)
- When date has passed (ID: coundown_end)
- Countdown style (ID: coundown_style)
- Heading (ID: contdown_label)
- t:sections.all.heading_size.label_countdown_label (ID: contdown_label_size)
- Heading weight (ID: contdown_label_weight)
- t:sections.all.colors.label_contdown_label (ID: contdown_label_text_color)
- Heading icon (ID: countdown_icon)
- Days label (ID: days_label)
- t:settings_schema.colors.settings.background_colors.content (ID: days_background_color)
- Hours label (ID: hours_label)
- t:settings_schema.colors.settings.background_colors.content (ID: hours_background_color)
- Minutes label (ID: mins_label)
- t:settings_schema.colors.settings.background_colors.content (ID: mins_background_color)
- Seconds label (ID: secs_label)
- t:settings_schema.colors.settings.background_colors.content (ID: secs_background_color)
- Number color (ID: coundown_number_color)
- Number font size (ID: coundown_number_size)
- Number font size mobile (ID: coundown_number_size_mb)
- Number weight (ID: coundown_number_weight)
- Label color (ID: coundown_title_color)
- Label font size (ID: coundown_title_size)
- Label weight (ID: coundown_title_weight)

##### Block: t:sections.main-product.blocks.variant_picker.name (`variant_picker`)
- t:sections.main-product.blocks.variant_picker.settings.picker_type.label (ID: picker_type)
- Label size (ID: label_size)
- Header: Popup option (ID: N/A)
- Enable popup option (ID: enable_size_chart)
- Option name (ID: choose_variant)
- t:sections.main-product.blocks.popup.settings.link_label.label (ID: popup_label)
- t:sections.main-product.blocks.popup.settings.page.label (ID: page)

##### Block: Pincode Validator (`pincode_validator`)
- Pincodes & Delivery Dates (ID: pincode_list)
- Invalid Pincode Message (ID: error_message)
- Checkout Warning Message (ID: warning_message)
- CSV File Link (ID: csv_url)
- Block position (ID: block_position)

##### Block: t:sections.main-product.blocks.buy_buttons.name (`buy_buttons`)
- t:sections.main-product.blocks.buy_buttons.settings.show_dynamic_checkout.label (ID: show_dynamic_checkout)
- t:sections.main-product.blocks.buy_buttons.settings.show_gift_card_recipient.label (ID: show_gift_card_recipient)
- Block position (ID: block_position)
- Hide quantity block (ID: hide_quantity)
- Full width buttons (ID: full_width)
- Show pickup availability (ID: show_availability)

##### Block: t:sections.main-product.blocks.description.name (`description`)
- Show table (ID: show_only_table)
- Show in quick add (ID: show_in_quick_add)

##### Block: Note (`note`)
- Show in quick add (ID: show_in_quick_add)

##### Block: Cross-sell product (`crossell_product`)
- Product (ID: crossell_product)
- Label size (ID: heading_size)
- Label weight (ID: heading_weight)
- Product label (ID: crossell_product_label)
- Label color (ID: label_color)
- Accent color (ID: accent_color)
- Product type (ID: crossell_product_type)
- Product type color (ID: product_type_color)
- Price color (ID: price_color)

##### Block: t:sections.main-product.blocks.share.name (`share`)
- t:sections.main-product.blocks.share.settings.text.label (ID: share_label)
- t:sections.main-article.blocks.title.settings.show_linkedin_share.label (ID: show_linkedin_share)
- t:sections.main-article.blocks.title.settings.show_fb_share.label (ID: show_fb_share)
- t:sections.main-article.blocks.title.settings.show_twitter_share.label (ID: show_twitter_share)
- t:sections.main-article.blocks.title.settings.show_pinterest_share.label (ID: show_pinterest_share)
- t:sections.main-article.blocks.title.settings.show_telegram_share.label (ID: show_telegram_share)
- t:sections.main-article.blocks.title.settings.show_snapchat_share.label (ID: show_snapchat_share)
- t:sections.main-article.blocks.title.settings.show_tumblr_share.label (ID: show_tumblr_share)
- t:sections.all.colors.label_icon (ID: social_color)
- Social icons color hover (ID: social_color_hover)
-  (ID: N/A)
-  (ID: N/A)

##### Block: t:sections.main-product.blocks.custom_liquid.name (`custom_liquid`)
- t:sections.main-product.blocks.custom_liquid.settings.custom_liquid.label (ID: custom_liquid)

##### Block: Delivery date (`delivery_date`)
- Min date (ID: delivery_min)
- Max date (ID: delivery_max)
- Label (ID: delivery_text)
- t:sections.all.heading_size.label_delivery_label (ID: delivery_text_size)
- t:sections.all.colors.label_delivery_label (ID: delivery_text_color)
- t:settings_schema.colors.settings.background_colors.content (ID: delivery_background_color)

##### Block: Delivery & pickup (`delivery_date_pickup`)
- Header: Delivery date (ID: N/A)
- Show delivery date (ID: show_delivery_date)
- Icon (ID: icon_delivery)
- Heading (ID: delivery_heading)
- Description (ID: delivery_text)
- Header: Pickup available (ID: N/A)
- Show pickup availability (ID: show_pickup_availability)
- Show in quick add (ID: show_in_quick_add)

##### Block: Collapsible description (`collapsible_description`)
- Content (ID: description_content)
- Content from product (ID: description_product_content)
- Label button (ID: collapsible_btn)
- Show in quick add (ID: show_in_quick_add)

##### Block: t:sections.main-product.blocks.collapsible_tab.name (`collapsible_tab`)
- t:sections.main-product.blocks.collapsible_tab.settings.heading.label (ID: heading)
- Heading size (ID: heading_size)
- t:sections.main-product.blocks.collapsible_tab.settings.icon.label (ID: icon)
- t:sections.main-product.blocks.collapsible_tab.settings.content.label (ID: content)
- Image (ID: image)
- t:sections.main-product.blocks.collapsible_tab.settings.page.label (ID: page)
- Row content from product (ID: product_content)
- Open by default (ID: default_open)
- Block position (ID: collapsible_row_position)
- Show in quick add (ID: show_in_quick_add)

##### Block: Video (`video`)
- t:sections.video.settings.video.label (ID: video)
- Header: t:sections.video.settings.header__2.content (ID: N/A)
-  (ID: N/A)
- t:sections.video.settings.video_url.label (ID: video_url)
- t:sections.video.settings.cover_image.label (ID: cover_image)
- Autoplay (ID: autoplay)
- t:sections.video.settings.description.label (ID: description)
- Video width (ID: video_width)
- Block position (ID: block_position)
- Show in quick add (ID: show_in_quick_add)

##### Block: Image (`image`)
- Image (ID: image)
- Enable custom border radius (ID: enable_border_radius)
- Border radius (ID: border_radius)
- Block position (ID: block_position)

##### Block: t:sections.main-product.blocks.popup.name (`popup`)
- t:sections.main-product.blocks.popup.settings.link_label.label (ID: text)
- t:sections.main-product.blocks.popup.settings.page.label (ID: page)
- Show in quick add (ID: show_in_quick_add)

##### Block: t:sections.main-product.blocks.rating.name (`rating`)
-  (ID: N/A)

##### Block: t:sections.main-product.blocks.complementary_products.name (`complementary`)
-  (ID: N/A)
- t:sections.main-product.blocks.complementary_products.settings.heading.label (ID: block_heading)
- Heading size (ID: heading_size)
- t:sections.main-product.blocks.complementary_products.settings.make_collapsible_row.label (ID: make_collapsible_row)
- t:sections.main-product.blocks.collapsible_tab.settings.icon.label (ID: icon)
- t:sections.main-product.blocks.complementary_products.settings.product_list_limit.label (ID: product_list_limit)
- t:sections.main-product.blocks.complementary_products.settings.products_per_page.label (ID: products_per_page)
- t:sections.main-product.blocks.complementary_products.settings.pagination_style.label (ID: pagination_style)
- Header: t:sections.main-product.blocks.complementary_products.settings.product_card.heading (ID: N/A)
- t:sections.main-product.blocks.complementary_products.settings.image_ratio.label (ID: image_ratio)
- t:sections.main-product.blocks.complementary_products.settings.enable_quick_add.label (ID: enable_quick_add)
- Horizontal product (ID: enable_horizontal)
- Block position (ID: block_position)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- Show in quick add (ID: show_in_quick_add)

##### Block: t:sections.main-product.blocks.icon_with_text.name (`icon-with-text`)
- t:sections.main-product.blocks.icon_with_text.settings.layout.label (ID: layout)
- Header: t:sections.main-product.blocks.icon_with_text.settings.content.label (ID: N/A)
- t:sections.main-product.blocks.icon_with_text.settings.icon_1.label (ID: icon_1)
- t:sections.main-product.blocks.icon_with_text.settings.image_1.label (ID: image_1)
- t:sections.main-product.blocks.icon_with_text.settings.heading_1.label (ID: heading_1)
- Description (ID: description_1)
- Heading style (ID: heading_1_size)
- t:sections.all.colors.label_heading (ID: heading_1_color)
- t:sections.main-product.blocks.icon_with_text.settings.icon_2.label (ID: icon_2)
- t:sections.main-product.blocks.icon_with_text.settings.image_2.label (ID: image_2)
- t:sections.main-product.blocks.icon_with_text.settings.heading_2.label (ID: heading_2)
- Description (ID: description_2)
- Heading style (ID: heading_2_size)
- t:sections.all.colors.label_heading (ID: heading_2_color)
- t:sections.main-product.blocks.icon_with_text.settings.icon_3.label (ID: icon_3)
- t:sections.main-product.blocks.icon_with_text.settings.image_3.label (ID: image_3)
- t:sections.main-product.blocks.icon_with_text.settings.heading_3.label (ID: heading_3)
- Description (ID: description_3)
- Heading style (ID: heading_3_size)
- t:sections.all.colors.label_heading (ID: heading_3_color)

##### Block: Skills learned (`skills-learned`)
- Heading (ID: heading)
- Show in quick add (ID: show_in_quick_add)

##### Block: Product tags (`tags`)
- Heading (ID: heading)
- Pill color (ID: pill_color)
- Block position (ID: position)

##### Block: Product meta tabs (`product_meta_tabs`)
- Description tab label (ID: description_tab_label)
- Specification tab label (ID: specification_tab_label)
- Buyback tab label (ID: buyback_tab_label)
- About heading (ID: about_heading)
- Key features heading (ID: key_features_heading)
- Why kids love it heading (ID: why_kids_heading)
- Header: Buyback content (ID: N/A)
- Buyback heading line 1 (ID: buyback_heading_line_1)
- Buyback heading line 2 (ID: buyback_heading_line_2)
- Buyback subtitle (ID: buyback_subtitle)
- Header: Stack 1 (ID: N/A)
- Stack 1 icon (ID: stack_1_icon)
- Stack 1 icon background (ID: stack_1_icon_color)
- Stack 1 title (ID: stack_1_title)
- Stack 1 description (ID: stack_1_description)
- Header: Stack 2 (ID: N/A)
- Stack 2 icon (ID: stack_2_icon)
- Stack 2 icon background (ID: stack_2_icon_color)
- Stack 2 title (ID: stack_2_title)
- Stack 2 description (ID: stack_2_description)
- Header: Stack 3 (ID: N/A)
- Stack 3 icon (ID: stack_3_icon)
- Stack 3 icon background (ID: stack_3_icon_color)
- Stack 3 title (ID: stack_3_title)
- Stack 3 description (ID: stack_3_description)
- Header: Stack 4 (ID: N/A)
- Stack 4 icon (ID: stack_4_icon)
- Stack 4 icon background (ID: stack_4_icon_color)
- Stack 4 title (ID: stack_4_title)
- Stack 4 description (ID: stack_4_description)
- Header: Stack 5 (ID: N/A)
- Stack 5 icon (ID: stack_5_icon)
- Stack 5 icon background (ID: stack_5_icon_color)
- Stack 5 title (ID: stack_5_title)
- Stack 5 description (ID: stack_5_description)
- Header: Stack 6 (ID: N/A)
- Stack 6 icon (ID: stack_6_icon)
- Stack 6 icon background (ID: stack_6_icon_color)
- Stack 6 title (ID: stack_6_title)
- Stack 6 description (ID: stack_6_description)
- Show in quick add (ID: show_in_quick_add)


---

### t:sections.main-register.name (`main-register`)
> The primary content section for register related pages.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.image-with-text.settings.image.label (ID: image)
- Left Icon (ID: icon-left)
- Right Icon (ID: icon-right)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### t:sections.main-reset-password.name (`main-reset-password`)
> The primary content section for reset-password related pages.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### t:sections.main-search.name (`main-search`)
> The primary content section for search related pages.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Header: Banner settings (ID: N/A)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: text_color)
- Banner left overlay (ID: overlay_image)
- Banner right overlay (ID: overlay_image_right)
- t:sections.all.padding.full_width (ID: full_width)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: banner_padding_top)
- t:sections.all.padding.padding_bottom (ID: banner_padding_bottom)
- Header: Grid settings (ID: N/A)
- t:sections.main-search.settings.columns_desktop.label (ID: columns_desktop)
- Grid style (ID: grid_style)
- Show grid navigation (ID: grid_navigation)
- Header: t:sections.main-search.settings.header__1.content (ID: N/A)
- t:sections.main-search.settings.image_ratio.label (ID: image_ratio)
- t:sections.main-search.settings.show_secondary_image.label (ID: show_secondary_image)
- t:sections.main-search.settings.show_vendor.label (ID: show_vendor)
- t:sections.main-search.settings.show_rating.label (ID: show_rating)
- Header: t:sections.main-search.settings.header__2.content (ID: N/A)
- t:sections.main-search.settings.article_show_date.label (ID: article_show_date)
- t:sections.main-search.settings.article_show_author.label (ID: article_show_author)
- Show badge (ID: show_badge)
- t:sections.featured-blog.settings.show_comments.label (ID: article_show_comments)
- Author prefix (ID: author_prefix)
- Header: t:sections.main-collection-product-grid.settings.header__1.content (ID: N/A)
- Pagination background (ID: filtering_background_color)
- t:sections.main-collection-product-grid.settings.enable_filtering.label (ID: enable_filtering)
- t:sections.main-collection-product-grid.settings.filter_type.label (ID: filter_type)
- Show filter checkboxes (ID: show_filter_checkbox)
- t:sections.main-collection-product-grid.settings.enable_sorting.label (ID: enable_sorting)
- Show sorting label (ID: show_sorting_label)
- Enable custom color (ID: enable_custom_color)
- Filters dropdown color (ID: facets_dropdown_background_color)
- Filtering size (ID: filter_size)
- Filtering and sorting colors on hover (ID: filter_color_hover)
- Header: Pagination (ID: N/A)
- Pagination color (ID: pagination_color)
- Pagination background (ID: pagination_background_color)
- Header: t:sections.main-search.settings.header_mobile.content (ID: N/A)
- t:sections.main-search.settings.columns_mobile.label (ID: columns_mobile)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: main_background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: main_colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### t:sections.mobile-sticky-bar.name (`mobile-sticky-bar`)
> A customizable section for displaying t:sections.mobile-sticky-bar.name related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
-  (ID: N/A)
- Enable test mode (ID: enable_in_customizer)
- Icons color (ID: text_color)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)

#### Blocks & Block Customizations
##### Block: t:sections.mobile-sticky-bar.blocks.home.name (`home`)
- No block-specific settings.

##### Block: t:sections.mobile-sticky-bar.blocks.collection.name (`collection`)
- No block-specific settings.

##### Block: t:sections.mobile-sticky-bar.blocks.cart.name (`cart`)
- No block-specific settings.

##### Block: t:sections.mobile-sticky-bar.blocks.search.name (`search`)
- No block-specific settings.

##### Block: t:sections.mobile-sticky-bar.blocks.account.name (`account`)
-  (ID: N/A)


---

### Multipalette (`multi-pallete`)
> A customizable section for displaying multipalette related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.before-after.settings.heading.label (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- t:sections.before-after.settings.text.label (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_text (ID: text_color)
- t:sections.all.heading_align.label__2 (ID: heading_align)
- Text bottom space desktop (ID: text_bottom_space)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: Item (`pallet`)
- Label (ID: pallet_label)
- Label color (ID: label_color)
- Image (ID: pallet_image)
- Link (ID: pallet_link)
- Background color (ID: background_color)


---

### t:sections.multicolumn.name (`multicolumn`)
> A customizable section for displaying t:sections.multicolumn.name related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Layout (ID: layout)
- t:sections.all.heading (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- t:sections.all.description (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_text (ID: text_color)
- t:sections.all.heading_align.label__2 (ID: heading_align)
- Text bottom space desktop (ID: text_bottom_space)
- t:sections.multicolumn.settings.button_label.label (ID: button_label)
- t:sections.multicolumn.settings.button_link.label (ID: button_link)
- Button top space desktop (ID: top_space)
- t:sections.multicolumn.settings.columns_desktop.label (ID: columns_desktop)
- Header: Card style (ID: N/A)
- t:sections.multicolumn.settings.image_width.label (ID: image_width)
- t:sections.multicolumn.settings.image_ratio.label (ID: image_ratio)
- t:sections.all.heading_size.label (ID: card_heading_size)
- t:sections.all.heading_weight.label (ID: card_heading_weight)
- t:sections.all.colors.label_heading (ID: card_heading_color)
- t:sections.all.colors.label_description (ID: card_description_color)
- t:sections.multicolumn.settings.column_alignment.label (ID: column_alignment)
- Header: t:sections.multicolumn.settings.header_mobile.content (ID: N/A)
- t:sections.multicolumn.settings.columns_mobile.label (ID: columns_mobile)
- t:sections.multicolumn.settings.column_alignment.label (ID: column_alignment_mobile)
- t:sections.multicolumn.settings.image_width.label_mobile (ID: image_width_mobile)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: t:sections.multicolumn.blocks.column.name (`column`)
- t:sections.multicolumn.blocks.column.settings.image.label (ID: image)
- Image position (ID: image_position)
- t:sections.multicolumn.blocks.column.settings.title.label (ID: title)
- t:sections.multicolumn.blocks.column.settings.text.label (ID: text)
- Custom heading color (ID: heading_color)
- t:sections.multicolumn.blocks.column.settings.link_label.label (ID: link_label)
- t:sections.multicolumn.blocks.column.settings.link.label (ID: link)
- Background image (ID: image_background)
- Secondary background color (ID: column_background_color)
- Enable custom border radius (ID: enable_border_radius)
- Border radius (ID: border_radius)
- Header: Icon settings (ID: N/A)
- Icon (ID: icon)
- Image width (ID: icon_width)
- Image vertical position (ID: icon_vertical)
- Image horizontal position (ID: icon_horizontal)
- Image width mobile (ID: icon_width_mobile)
- Image vertical position mobile (ID: icon_vertical_mobile)
- Image horizontal position mobile (ID: icon_horizontal_mobile)


---

### t:sections.multirow.name (`multirow`)
> A customizable section for displaying t:sections.multirow.name related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.all.heading (ID: title_heading)
- t:sections.all.heading_size.label (ID: title_heading_size)
- t:sections.all.colors.label_heading (ID: title_heading_color)
- t:sections.all.description (ID: title_text)
- Text size (ID: title_text_body_size)
- t:sections.all.colors.label_text (ID: title_text_color)
- t:sections.all.heading_align.label__2 (ID: title_heading_align)
- Text bottom space desktop (ID: text_bottom_space)
- Header: Card settings (ID: N/A)
- t:sections.multirow.settings.image_height.label (ID: image_height)
- t:sections.multirow.settings.desktop_image_width.label (ID: desktop_image_width)
- t:sections.multirow.settings.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: text_color)
- t:sections.multirow.settings.text_style.label (ID: text_style)
- t:sections.multirow.settings.desktop_content_position.label (ID: desktop_content_position)
- t:sections.multirow.settings.desktop_content_alignment.label (ID: desktop_content_alignment)
- t:sections.multirow.settings.image_layout.label (ID: image_layout)
- Remove left padding (ID: remove_left_padding)
- t:sections.multirow.settings.container_color_scheme.label (ID: row_color_scheme)
- Header: t:sections.multirow.settings.header_mobile.content (ID: N/A)
- t:sections.multirow.settings.mobile_content_alignment.label (ID: mobile_content_alignment)
- Mobile content paddings (ID: add_paddings_mobile)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: t:sections.multirow.blocks.row.name (`row`)
- t:sections.multirow.blocks.row.settings.image.label (ID: image)
- t:sections.multirow.blocks.row.settings.caption.label (ID: caption)
- t:sections.multirow.blocks.row.settings.heading.label (ID: heading)
- t:sections.multirow.blocks.row.settings.text.label (ID: text)
- t:sections.multirow.blocks.row.settings.button_label.label (ID: button_label)
- t:sections.multirow.blocks.row.settings.button_link.label (ID: button_link)
- Top space desktop (ID: top_space)


---

### t:sections.newsletter.name (`newsletter`)
> Displays signup form for email marketing subscriptions.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
-  (ID: N/A)
- Show image (ID: show_image)
- Hide image on mobile (ID: hide_image_mb)
- t:sections.image-with-text.settings.image.label (ID: image)
- Image width (ID: column_width)
- Image position (ID: image_position)
- Content alignment (ID: content_alignment)
- Container background color (ID: background_color)
- Container background gradient (ID: colors_background_section_gradient)
- Container background image (ID: bg_image)
- t:sections.newsletter.settings.full_width.label (ID: full_width)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:sections.all.padding.background_color (ID: background_color_main)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: color_background_main)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: t:sections.newsletter.blocks.heading.name (`heading`)
- t:sections.newsletter.blocks.heading.settings.heading.label (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- Heading weight (ID: heading_weight)
- t:sections.all.colors.label_heading (ID: heading_color)

##### Block: t:sections.newsletter.blocks.paragraph.name (`paragraph`)
- t:sections.newsletter.blocks.paragraph.settings.paragraph.label (ID: text)
- t:sections.image-with-text.blocks.text.settings.text_style.label (ID: text_style)
- Font size (ID: text_size)
- t:sections.all.colors.label_text (ID: text_color)

##### Block: Countdown bar (`coundownBar`)
- End date (ID: coundown_date)
- When date has passed (ID: coundown_end)
- Countdown style (ID: coundown_style)
- Heading (ID: contdown_label)
- t:sections.all.heading_size.label_countdown_label (ID: contdown_label_size)
- t:sections.all.colors.label_contdown_label (ID: contdown_label_text_color)
- Heading icon (ID: countdown_icon)
- Days label (ID: days_label)
- t:settings_schema.colors.settings.background_colors.content (ID: days_background_color)
- Hours label (ID: hours_label)
- t:settings_schema.colors.settings.background_colors.content (ID: hours_background_color)
- Minutes label (ID: mins_label)
- t:settings_schema.colors.settings.background_colors.content (ID: mins_background_color)
- Seconds label (ID: secs_label)
- t:settings_schema.colors.settings.background_colors.content (ID: secs_background_color)
- Number color (ID: coundown_number_color)
- Number font size (ID: coundown_number_size)
- Number font size mobile (ID: coundown_number_size_mb)
- Number weight (ID: coundown_number_weight)
- Label color (ID: coundown_title_color)
- Label font size (ID: coundown_title_size)
- Label weight (ID: coundown_title_weight)

##### Block: Image (`image`)
- Image (ID: image)
- Image width (ID: image_width)

##### Block: Video (`video`)
- t:sections.video.settings.video.label (ID: video)
- Header: t:sections.video.settings.header__2.content (ID: N/A)
-  (ID: N/A)
- t:sections.video.settings.video_url.label (ID: video_url)
- t:sections.video.settings.cover_image.label (ID: cover_image)
- Autoplay (ID: autoplay)
- t:sections.video.settings.description.label (ID: description)
- Video width (ID: video_width)

##### Block: Social media icons (`social`)
-  (ID: N/A)
- t:sections.all.colors.label_icon (ID: social_color)
- Social icons color hover (ID: social_color_hover)

##### Block: Progress bar (`progress_bar`)
- Label (ID: progress_text)
- t:sections.all.colors.label_delivery_label (ID: progress_text_color)
- Label icon (ID: lablel_icon)
- Icon width (ID: icon_width)
- Progress status (ID: progress_status)
- Progress color (ID: progress_color)
- Current progress color (ID: current_progress_color)

##### Block: Featured icon (`featured_icon`)
- Icon (ID: featured_icon)
- Icon width (ID: icon_width)
- Text (ID: featured_icon_text)
- t:sections.all.colors.label_text (ID: featured_icon_text_color)

##### Block: t:sections.newsletter.blocks.email_form.name (`email_form`)
- No block-specific settings.

##### Block: @app (`@app`)
- No block-specific settings.


---

### Notification (`notification`)
> A customizable section for displaying notification related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Enable test mode (ID: enable_in_customizer)
- Heading (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- Heading weight (ID: heading_weight)
- Notification (ID: text)
- Notification color (ID: text_color)
- Secondary color (ID: text_color_2)
- Text for secondary color (ID: text_2)
- Notification alignment (ID: text_alignment)
- Timeout (ID: timeout)
- Show dismissed popup times (ID: times)
- Background color (ID: background_color)
- Header: Subscribe popup (ID: N/A)
- Enable subscribe popup (ID: enable_popup)
- Heading (ID: popup_heading)
- t:sections.all.colors.label_heading (ID: popup_heading_color)
- Description (ID: popup_description)
- t:sections.all.colors.label_text (ID: popup_text_color)
- Content alignment (ID: popup_text_alignment)
- Customer tag (ID: popup_tag)
- Background color (ID: popup_background_color)
- Add popup shape (ID: subscribe_popup_shape)

---

### t:sections.page.name (`page`)
> A customizable section for displaying t:sections.page.name related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.page.settings.page.label (ID: page)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.heading_weight.label (ID: heading_weight)
- t:sections.all.colors.label_heading (ID: heading_color)
- Text bottom space desktop (ID: text_bottom_space)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:sections.all.colors.label (ID: color_scheme)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### Play Return (`play-return`)
> A customizable section for displaying play return related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Heading (ID: heading)
- Subtitle (ID: subtitle)
- Section Background Image (ID: bg_image)
- Section Background Gradient (Fallback) (ID: bg_gradient)
- Header: Colors & Backgrounds (ID: N/A)
- Heading Color (ID: heading_color)
- Subtitle Color (ID: subtitle_color)
- Card Background Color (ID: card_bg_color)
- Card Title Color (ID: card_title_color)
- Card Description Color (ID: card_desc_color)
- Header: Font Weights (ID: N/A)
- Heading Weight (ID: heading_weight)
- Subtitle Weight (ID: subtitle_weight)
- Card Title Weight (ID: card_title_weight)
- Card Description Weight (ID: card_desc_weight)
- Header: Typography - Desktop (ID: N/A)
- Heading Size (Desktop) (ID: heading_size_desktop)
- Subtitle Size (Desktop) (ID: subtitle_size_desktop)
- Card Title Size (Desktop) (ID: card_title_desktop)
- Card Desc Size (Desktop) (ID: card_desc_desktop)
- Header: Typography - Mobile (ID: N/A)
- Heading Size (Mobile) (ID: heading_size_mobile)
- Subtitle Size (Mobile) (ID: subtitle_size_mobile)
- Card Title Size (Mobile) (ID: card_title_mobile)
- Card Desc Size (Mobile) (ID: card_desc_mobile)

#### Blocks & Block Customizations
##### Block: Feature Card (`feature_card`)
- Icon Background Color (ID: icon_bg_color)
- Icon Image (White SVG/PNG recommended) (ID: icon)
- Title (ID: title)
- Description (ID: desc)


---

### Products banner (`product-banner`)
> A banner section used for visual emphasis and messaging.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Layout (ID: image_style)
- Hide banner product image (ID: hide_banner_product_image)
- Header: Slider settings (ID: N/A)
- Loop (ID: loop)
- Arrows color (ID: arrows_btn_color)
- Arrows color hover (ID: arrows_btn_color_hover)
- Arrows background (ID: arrows_btn_bg_color)
- Arrows background hover (ID: arrows_btn_bg_color_hover)
- Enable outline on hover (ID: arrows_outline)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: Hotspot product item (`item`)
- t:sections.featured-product.settings.product.label (ID: product)
- Custom collection title (ID: collection_title)
- Banner title (ID: banner_title)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- Heading alignment (ID: heading_alignment)
- Heading alignment mobile (ID: heading_alignment_mb)
- Banner description (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_description (ID: text_color)
- Banner background (ID: banner_background)
- Banner background mobile (ID: banner_background_mb)
- Background fit (ID: banner_background_type)
- Custom banner product image (ID: banner_product_image)
- Custom container product image (ID: container_product_image)
- Item background color (ID: content_box_color)
- Container background color (ID: container_color)
- Counter color (ID: numbers_color)
- Collection title color (ID: collection_color)
- Product title color (ID: product_color)
- Collection title weight (ID: collection_weight)
- Product title weight (ID: product_weight)
- Header: Cross sell products (ID: N/A)
- Products (ID: product_list)
- Custom bullet icon (ID: bullet_icon)
- Background color (ID: bullet_color)
- Cross color (ID: bullet_cross_color)
- Bullet size (ID: bullet_size)
- Open bubble on desktop (ID: bubble_open)
- Hide item on mobile (ID: hide_mobile)
- Header: Icon settings (ID: N/A)
- Icon (ID: icon)
- Image width (ID: icon_width)
- Image vertical position (ID: icon_vertical)
- Image horizontal position (ID: icon_horizontal)
- Image width mobile (ID: icon_width_mobile)
- Image vertical position mobile (ID: icon_vertical_mobile)
- Image horizontal position mobile (ID: icon_horizontal_mobile)
- Icon (ID: icon_2)
- Image width (ID: icon_width_2)
- Image vertical position (ID: icon_vertical_2)
- Image horizontal position (ID: icon_horizontal_2)
- Image width mobile (ID: icon_width_mobile_2)
- Image vertical position mobile (ID: icon_vertical_mobile_2)
- Image horizontal position mobile (ID: icon_horizontal_mobile_2)


---

### Product gallery (`product-gallery`)
> Provides a visually rich gallery of images.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.multicolumn.settings.title.label (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- t:sections.before-after.settings.text.label (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_text (ID: text_color)
- t:sections.all.heading_align.label (ID: heading_align)
- t:sections.multicolumn.settings.columns_desktop.label (ID: columns_desktop)
- t:sections.multicolumn.settings.columns_mobile.label (ID: columns_mobile)
- t:sections.multicolumn.settings.image_ratio.label (ID: image_ratio)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### Promo banner (`promo-banner`)
> Highlights special offers or promotional content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- Background color (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: Text (`text`)
- Text item (ID: text)
- t:sections.all.colors.label_text (ID: text_color)

##### Block: Icon (`icon`)
- Image (ID: image)
- Image width (ID: image_size)

##### Block: Button (`button`)
- t:sections.image-with-text.blocks.button.settings.button_label.label (ID: button_label)
- t:sections.image-with-text.blocks.button.settings.button_link.label (ID: button_link)

##### Block: Countdown (`countdown`)
- End date (ID: coundown_date)
- When date has passed (ID: coundown_end)
- Heading (ID: contdown_label)
- t:sections.all.heading_size.label_countdown_label (ID: contdown_label_size)
- t:sections.all.colors.label_contdown_label (ID: contdown_label_text_color)
- Heading icon (ID: countdown_icon)
- Days label (ID: days_label)
- t:settings_schema.colors.settings.background_colors.content (ID: days_background_color)
- Hours label (ID: hours_label)
- t:settings_schema.colors.settings.background_colors.content (ID: hours_background_color)
- Minutes label (ID: mins_label)
- t:settings_schema.colors.settings.background_colors.content (ID: mins_background_color)
- Seconds label (ID: secs_label)
- t:settings_schema.colors.settings.background_colors.content (ID: secs_background_color)
- Number color (ID: coundown_number_color)
- Number font size (ID: coundown_number_size)
- Number font size mobile (ID: coundown_number_size_mb)
- Number weight (ID: coundown_number_weight)
- Label color (ID: coundown_title_color)
- Label font size (ID: coundown_title_size)
- Label weight (ID: coundown_title_weight)


---

### Promo popup (`promo-popup`)
> Highlights special offers or promotional content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Header: Promo popup subscribe (ID: N/A)
-  (ID: N/A)
- Show promo popup (ID: enable_promo_popup)
- Enable test mode (ID: enable_in_customizer)
- Test mode popup type (ID: popup_type)
- Heading (ID: popup_heading)
- t:sections.all.colors.label_heading (ID: text_color)
- Description (ID: popup_description)
- t:sections.all.colors.label_description (ID: description_color)
- Content alignment (ID: text_alignment)
- Customer tag (ID: popup_tag)
- Timeout (ID: popup_timeout)
- Show dismissed popup times (ID: popup_times)
- Background color (ID: background_color)
- Header: Promo popup discount (ID: N/A)
- Heading (ID: discount_popup_heading)
- t:sections.all.colors.label_heading (ID: promo_text_color)
- Description (ID: discount_popup_description)
- t:sections.all.colors.label_description (ID: promo_description_color)
- Content alignment (ID: promo_text_alignment)
- Promo code (ID: discount_promocode)
- Discount background color (ID: discount_background)
- Link label (ID: discount_button_label)
- Background color (ID: discount_background_color)
- Add popup shape (ID: subscripbe_popup_shape)

---

### Recently viewed products (`recently-viewed-products`)
> A customizable section for displaying recently viewed products related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
-  (ID: N/A)
- t:sections.all.heading (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- t:sections.all.description (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_text (ID: description_color)
- t:sections.all.heading_align.label (ID: heading_align)
- Text bottom space desktop (ID: text_bottom_space)
- Header: t:sections.related-products.settings.header__2.content (ID: N/A)
- t:sections.related-products.settings.image_ratio.label (ID: image_ratio)
- t:sections.related-products.settings.show_secondary_image.label (ID: show_secondary_image)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### t:sections.related-products.name (`related-products`)
> Displays automatically suggests relevant items based on the current product.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
-  (ID: N/A)
- t:sections.all.heading (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- t:sections.all.description (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_text (ID: description_color)
- Header: Header button (ID: N/A)
- Show button (ID: show_header_button)
- Label (ID: header_button_label)
- Link (ID: header_button_url)
- t:sections.all.heading_align.label__2 (ID: heading_align)
- Text bottom space desktop (ID: text_bottom_space)
- t:sections.related-products.settings.products_to_show.label (ID: products_to_show)
- t:sections.related-products.settings.columns_desktop.label (ID: columns_desktop)
- Header: t:sections.related-products.settings.header__2.content (ID: N/A)
- t:sections.related-products.settings.image_ratio.label (ID: image_ratio)
- t:sections.related-products.settings.show_secondary_image.label (ID: show_secondary_image)
- t:sections.related-products.settings.show_vendor.label (ID: show_vendor)
- t:sections.related-products.settings.show_rating.label (ID: show_rating)
- Header: t:sections.related-products.settings.header_mobile.content (ID: N/A)
- t:sections.related-products.settings.columns_mobile.label (ID: columns_mobile)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### Rich text (`rich-text`)
> Displays customizable block for text-based content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.rich-text.settings.desktop_content_position.label (ID: desktop_content_position)
- t:sections.rich-text.settings.content_alignment.label (ID: content_alignment)
- t:sections.rich-text.settings.full_width.label (ID: full_width)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: t:sections.rich-text.blocks.heading.name (`heading`)
- t:sections.rich-text.blocks.heading.settings.heading.label (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: text_color)

##### Block: t:sections.rich-text.blocks.text.name (`text`)
- t:sections.rich-text.blocks.text.settings.text.label (ID: text)
- t:sections.all.colors.label_text (ID: text_color)
- t:sections.image-banner.blocks.text.settings.text_style.label (ID: text_style)

##### Block: Countdown bar (`coundownBar`)
- End date (ID: coundown_date)
- When date has passed (ID: coundown_end)
- Heading (ID: contdown_label)
- t:sections.all.heading_size.label_countdown_label (ID: contdown_label_size)
- t:sections.all.colors.label_contdown_label (ID: contdown_label_text_color)
- Heading icon (ID: countdown_icon)
- Days label (ID: days_label)
- t:settings_schema.colors.settings.background_colors.content (ID: days_background_color)
- Hours label (ID: hours_label)
- t:settings_schema.colors.settings.background_colors.content (ID: hours_background_color)
- Minutes label (ID: mins_label)
- t:settings_schema.colors.settings.background_colors.content (ID: mins_background_color)
- Seconds label (ID: secs_label)
- t:settings_schema.colors.settings.background_colors.content (ID: secs_background_color)
- Number color (ID: coundown_number_color)
- Number font size (ID: coundown_number_size)
- Number font size mobile (ID: coundown_number_size_mb)
- Number weight (ID: coundown_number_weight)
- Label color (ID: coundown_title_color)
- Label font size (ID: coundown_title_size)
- Label weight (ID: coundown_title_weight)

##### Block: Featured icon (`featured_icon`)
- Icon (ID: featured_icon)
- Icon width (ID: icon_width)
- Text (ID: featured_icon_text)
- t:sections.all.colors.label_text (ID: featured_icon_text_color)

##### Block: Image (`image`)
- Image (ID: image)
- Image width (ID: image_width)

##### Block: Video (`video`)
- t:sections.video.settings.video.label (ID: video)
- Header: t:sections.video.settings.header__2.content (ID: N/A)
-  (ID: N/A)
- t:sections.video.settings.video_url.label (ID: video_url)
- t:sections.video.settings.cover_image.label (ID: cover_image)
- Autoplay (ID: autoplay)
- t:sections.video.settings.description.label (ID: description)
- Video width (ID: video_width)

##### Block: Progress bar (`progress_bar`)
- Label (ID: progress_text)
- t:sections.all.colors.label_delivery_label (ID: progress_text_color)
- Label icon (ID: lablel_icon)
- Icon width (ID: icon_width)
- Progress status (ID: progress_status)
- Progress color (ID: progress_color)
- Current progress color (ID: current_progress_color)

##### Block: Social media icons (`social`)
-  (ID: N/A)
- t:sections.all.colors.label_icon (ID: social_color)
- Social icons color hover (ID: social_color_hover)

##### Block: t:sections.rich-text.blocks.buttons.name (`button`)
- t:sections.rich-text.blocks.buttons.settings.button_label_1.label (ID: button_label)
- t:sections.rich-text.blocks.buttons.settings.button_link_1.label (ID: button_link)
- t:sections.rich-text.blocks.buttons.settings.button_label_2.label (ID: button_label_2)
- t:sections.rich-text.blocks.buttons.settings.button_link_2.label (ID: button_link_2)
- Top space desktop (ID: top_space)


---

### t:sections.scroll-to-top.name (`scroll-to-top`)
> A customizable section for displaying t:sections.scroll-to-top.name related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.scroll-to-top.settings.hide_button.label (ID: hide_button)
- Arrow style (ID: arrow_style)
- Button color (ID: arrows_btn_color)
- Button color hover (ID: arrows_btn_color_hover)
- Button background (ID: arrows_btn_bg_color)
- Button background hover (ID: arrows_btn_bg_color_hover)

---

### Scrolling banner (`scrolling-banner`)
> A banner section used for visual emphasis and messaging.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.all.heading (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- t:sections.all.description (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_description (ID: description_color)
- t:sections.all.heading_align.label (ID: heading_align)
- Text bottom space desktop (ID: text_bottom_space)
- Header: Scrollbar settings (ID: N/A)
- Scroll on hover (ID: scroll_on_hover)
- Scroll speed (ID: scroll_speed)
- Scroll direction (ID: scroll_direction)
- Letter spacing (ID: letter_spacing)
- Font size (ID: text_size)
- Font size mobile (ID: text_size_mobile)
- Enable icon custom height (ID: enable_icon_custom_height)
- Icon custom height (ID: icon_custom_height)
- Icon custom height mobile (ID: icon_custom_height_mobile)
- Item paddings (ID: item_paddings)
- Text color (ID: text_color)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- Full width section (ID: section_full_width)
- Background color (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: Text (`heading`)
- Text item (ID: text)
- Text weight (ID: text_weight)

##### Block: Icon (`icon`)
- t:sections.multicolumn.blocks.column.settings.image.label (ID: image)


---

### Logos (`section-logos`)
> A customizable section for displaying logos related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Heading (ID: heading)
- t:sections.all.colors.label_heading (ID: heading_color)
- Enable a custom color for the header (ID: enable_heading_custom_color)
- Heading custom color (ID: text_color)
- Heading background color (ID: heading_background_color)
- Logo background color (ID: logo_background_color)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- Background color (ID: section_background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: Logo (`logo`)
- t:sections.multicolumn.blocks.column.settings.image.label (ID: image)
- Icon custom height (ID: icon_custom_height)
- Icon custom height mobile (ID: icon_custom_height_mobile)


---

### Understand Sellback Value (`selback-value`)
> A customizable section for displaying understand sellback value related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Header: Overall Section Theme (ID: N/A)
- Section anchor id (ID: anchor_id)
- Overall Background Gradient/Color (ID: bg_color)
- Overall Background Image (Optional override) (ID: bg_image)
- Header: Corner Images (Bottom) (ID: N/A)
- Bottom Left Image (ID: bottom_left_image)
- Bottom Left Image Width (ID: bottom_left_width)
- Bottom Right Image (ID: bottom_right_image)
- Bottom Right Image Width (ID: bottom_right_width)
- Header: Headings (ID: N/A)
- Heading Part 1 (ID: heading_1)
- Highlighted Phrase (ID: highlight_text)
- Heading Part 2 (ID: heading_2)
- Heading Text Color (ID: title_color)
- Highlight Text Color (ID: title_highlight_color)
- Subtitle (ID: subtitle)
- Subtitle Color (ID: subtitle_color)
- Center Arrow Color (ID: arrow_color)
- Header: Card Sizing (ID: N/A)
- Top Cards Max Width (ID: top_cards_width)
- Top Cards Min Height (ID: top_cards_height)
- Bottom Card Max Width (ID: bottom_card_width)
- Bottom Card Min Height (ID: bottom_card_height)
- Header: Typography: Headings (ID: N/A)
- Heading Font Size (Desktop) (ID: heading_size)
- Heading Font Size (Mobile) (ID: heading_size_m)
- Heading Font Weight (ID: heading_weight)
- Subtitle Font Size (Desktop) (ID: subtitle_size)
- Subtitle Font Size (Mobile) (ID: subtitle_size_m)
- Subtitle Font Weight (ID: subtitle_weight)
- Header: Typography: Top Cards (ID: N/A)
- Top Cards Title Color (ID: tc_title_color)
- Top Cards Title Size (Desktop) (ID: tc_title_size)
- Top Cards Title Size (Mobile) (ID: tc_title_size_m)
- Top Cards Title Weight (ID: tc_title_weight)
- Top Cards Price Color (ID: tc_price_color)
- Top Cards Price Size (Desktop) (ID: tc_price_size)
- Top Cards Price Size (Mobile) (ID: tc_price_size_m)
- Top Cards Price Weight (ID: tc_price_weight)
- Top Cards Subtext Color (ID: tc_subtext_color)
- Top Cards Subtext Size (Desktop) (ID: tc_subtext_size)
- Top Cards Subtext Size (Mobile) (ID: tc_subtext_size_m)
- Top Cards Subtext Weight (ID: tc_subtext_weight)
- Header: Typography: Bottom Card (ID: N/A)
- Bottom Title Size (Desktop) (ID: bc_title_size)
- Bottom Title Size (Mobile) (ID: bc_title_size_m)
- Bottom Title Weight (ID: bc_title_weight)
- Bottom Main Price Size (Desktop) (ID: bc_price_size)
- Bottom Main Price Size (Mobile) (ID: bc_price_size_m)
- Bottom Main Price Weight (ID: bc_price_weight)
- Bottom Pill Size (Desktop) (ID: bc_pill_size)
- Bottom Pill Size (Mobile) (ID: bc_pill_size_m)
- Bottom Pill Weight (ID: bc_pill_weight)
- Header: Left Card (Buy Setup) (ID: N/A)
- Card Background (ID: card_1_bg)
- Card Icon Image (PNG/SVG) (ID: card_1_icon)
- Icon Wrapper Background (ID: card_1_icon_bg)
- Title (ID: card_1_title)
- Price Detail (ID: card_1_price)
- Subtext (ID: card_1_subtext)
- Header: Right Card (Return Setup) (ID: N/A)
- Card Background (ID: card_2_bg)
- Card Icon Image (PNG/SVG) (ID: card_2_icon)
- Icon Wrapper Background (ID: card_2_icon_bg)
- Title (ID: card_2_title)
- Price Detail (ID: card_2_price)
- Subtext (ID: card_2_subtext)
- Header: Bottom Checkout Card (ID: N/A)
- Card Background/Gradient (ID: card_3_bg)
- Card Text Base Color (ID: card_3_text_color)
- Title Text (ID: card_3_title)
- Title BOLD Highlight Color (ID: card_3_highlight_color)
- Original Strikethrough Price (ID: card_3_strikethrough)
- Final Price (ID: card_3_price)
- Intersecting Pill Text (ID: pill_text)
- Intersecting Pill Background (ID: pill_bg)
- Intersecting Pill Text Color (ID: pill_text_color)

#### Blocks & Block Customizations
##### Block: Floating Flower/Icon (`icon`)
- Upload Decorative Image (ID: image)
- Vertical Target (Top to Bottom) (ID: top_pos)
- Horizontal Target (Left to Right) (ID: left_pos)
- Icon Scaling Box Size (ID: size)


---

### Shop By Age (`shopby-section`)
> A customizable section for displaying shop by age related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Heading (ID: heading)
- Subtitle (ID: subtitle)
- Decorative Top-Left Image (e.g., Beach ball) (ID: deco_image)
- Section Background Image (ID: bg_image)
- Section Background Gradient (Fallback) (ID: bg_gradient)
- Bottom Button Label (ID: main_btn_label)
- Bottom Button Link (ID: main_btn_link)
- Header: Typography - Desktop (ID: N/A)
- Heading Size (Desktop) (ID: heading_size_desktop)
- Subtitle Size (Desktop) (ID: subtitle_size_desktop)
- Card Title Size (Desktop) (ID: card_title_desktop)
- Card Desc Size (Desktop) (ID: card_desc_desktop)
- Header: Typography - Mobile (ID: N/A)
- Heading Size (Mobile) (ID: heading_size_mobile)
- Subtitle Size (Mobile) (ID: subtitle_size_mobile)
- Card Title Size (Mobile) (ID: card_title_mobile)
- Card Desc Size (Mobile) (ID: card_desc_mobile)

#### Blocks & Block Customizations
##### Block: Category Card (`category_card`)
- Card Background Image (ID: image)
- Overlay Image (ID: overlay_image)
- Bottom Overlay Gradient (ID: overlay_gradient)
- Pill Badge Text (ID: badge)
- Title (ID: title)
- Description (ID: desc)
- Button Text (ID: btn_label)
- Button Text Color (ID: btn_text_color)
- Card Link (ID: btn_link)


---

### Showcase (`showcase`)
> A customizable section for displaying showcase related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Layout (ID: layout)
- t:sections.all.heading (ID: title)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: text_color)
- Color-changing text (ID: text_heading)
- Custom color (ID: text_color_2)
- t:sections.all.description (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_text (ID: description_color)
- t:sections.all.heading_align.label__2 (ID: heading_align)
- Text bottom space desktop (ID: text_bottom_space)
- Header: t:sections.footer.settings.header__2.content (ID: N/A)
- t:sections.footer.settings.show_social.label (ID: show_social)
- Social label (ID: social_label)
- Social label size (ID: social_label_size)
- Social label color (ID: social_label_color)
- Social label weight (ID: social_label_weight)
- Social icons color (ID: social_color)
- Social icons color hover (ID: social_color_hover)
- Bottom space icons under section (ID: social_top_space)
- Show social icons under section (ID: under_section)
- Show icons in line with the title (ID: icon_on_title)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- Full width (ID: full_width)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)
- Margin bottom (ID: margin_bottom)

#### Blocks & Block Customizations
##### Block: t:sections.multicolumn.blocks.column.name (`column`)
- t:sections.multicolumn.blocks.column.settings.image.label (ID: image)
- Column width (ID: column_width)
- t:sections.multicolumn.blocks.column.settings.link.label (ID: link)
- Enable custom border radius (ID: enable_border_radius)
- Border radius (ID: border_radius)


---

### t:sections.slideshow.name (`slideshow`)
> Displays rotating banner slider for multiple promotions.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.slideshow.settings.layout.label (ID: layout)
- t:sections.slideshow.settings.slide_height.label (ID: slide_height)
- t:sections.slideshow.settings.slider_visual.label (ID: slider_visual)
- t:sections.slideshow.settings.auto_rotate.label (ID: auto_rotate)
- t:sections.slideshow.settings.change_slides_speed.label (ID: change_slides_speed)
- Header: t:sections.all.animation.content (ID: N/A)
- t:sections.all.animation.image_behavior.label (ID: image_behavior)
- Header: t:sections.slideshow.settings.mobile.content (ID: N/A)
- t:sections.slideshow.settings.show_text_below.label (ID: show_text_below)
- Header: t:sections.slideshow.settings.accessibility.content (ID: N/A)
- t:sections.slideshow.settings.accessibility.label (ID: accessibility_info)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: t:sections.slideshow.blocks.slide.name (`slide`)
- t:sections.slideshow.blocks.slide.settings.image.label (ID: image)
- t:sections.slideshow.blocks.slide.settings.heading.label (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: text_color)
- t:sections.slideshow.blocks.slide.settings.subheading.label (ID: subheading)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_text (ID: subheading_color)
- t:sections.slideshow.blocks.slide.settings.button_label.label (ID: button_label)
- t:sections.slideshow.blocks.slide.settings.link.label (ID: link)
- Top space desktop (ID: top_space)
- t:sections.slideshow.blocks.slide.settings.box_align.label (ID: box_align)
- t:sections.slideshow.blocks.slide.settings.show_text_box.label (ID: show_text_box)
- t:sections.slideshow.blocks.slide.settings.text_alignment.label (ID: text_alignment)
- t:sections.slideshow.blocks.slide.settings.image_overlay_opacity.label (ID: image_overlay_opacity)
- Container background color (ID: background_color)
- Header: t:sections.slideshow.settings.mobile.content (ID: N/A)
- t:sections.slideshow.blocks.slide.settings.text_alignment_mobile.label (ID: text_alignment_mobile)


---

### Features Solves Layout (`solves`)
> A customizable section for displaying features solves layout related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Header: Overall Section Theme (ID: N/A)
- Section Background Color (ID: bg_color)
- Section Background Image (ID: bg_image)
- Center Container Width (ID: row_max_width)
- Reverse Layout (Image on Right) (ID: flip_layout)
- Bottom Corner Character Overlay (ID: corner_character)
- Corner Character Width (ID: character_size)
- Header: Typography: Heading Setup (ID: N/A)
- Heading (ID: heading)
- Heading Base Color (ID: title_color)
- Heading BOLD Highlight Color (ID: highlight_color)
- Heading Font Size (ID: heading_size)
- Heading Font Weight (ID: heading_weight)
- Subtitle (ID: subtitle)
- Subtitle Color (ID: subtitle_color)
- Subtitle Font Size (ID: subtitle_size)
- Subtitle Font Weight (ID: subtitle_weight)
- Center Subtitle Decor Graphic (Optional) (ID: center_squiggle)
- Header: Left Block: Main Image (ID: N/A)
- Upload Large Content Image (ID: main_image)
- Image Corner Radius (ID: image_radius)
- Show White Frame Border (ID: show_white_border)
- Header: Right Block: Features Styling (ID: N/A)
- Checkmark Box Background (ID: icon_bg)
- Checkmark SVG Stroke (ID: icon_check_color)
- Feature List Text Color (ID: list_text_color)
- Feature Text Size (ID: list_font_size)
- Feature Text Weight (ID: list_font_weight)
- Header: Bottom Button (ID: N/A)
- Button Label (ID: btn_label)
- Button Link (ID: btn_link)
- Button Background Color (ID: btn_bg)
- Button Text Color (ID: btn_text)
- Button Font Size (ID: btn_font_size)
- Button Font Weight (ID: btn_font_weight)

#### Blocks & Block Customizations
##### Block: Checkmark Feature List (`feature`)
- Feature Text (ID: text)

##### Block: Floating Decor Icon (`decoration`)
- Upload Decorative Image (ID: image)
- Vertical Target (Top to Bottom) (ID: top_pos)
- Horizontal Target (Left to Right) (ID: left_pos)
- Icon Box Size (ID: size)


---

### t:sections.sticky-add-to-cart.name (`sticky-add-to-cart`)
> A customizable section for displaying t:sections.sticky-add-to-cart.name related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.sticky-add-to-cart.settings.style.label (ID: style)
- Section behavior (ID: behavior)
- Image ratio (ID: image_ratio)
- t:sections.featured-collection.settings.show_vendor.label (ID: show_vendor)

---

### Testimonials slider (`testimonials`)
> Displays carousel or grid of customer reviews and feedback.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.featured-blog.settings.heading.label (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: text_color)
- Color-changing text (ID: text_heading)
- Custom color (ID: text_color_2)
- Content alignment (ID: heading_alignment)
- Text bottom space desktop (ID: text_bottom_space)
- Header: Slider settings (ID: N/A)
- Full width (ID: full_width)
- t:sections.featured-blog.settings.columns_desktop.label (ID: columns_desktop)
- Center slide (ID: center_slide)
- Active testimonial background color (ID: testimonial_background)
- Enable custom background color for side block (ID: side_item_bg_enable)
- Active side block background color (ID: side_item_bg)
- Enable custom background color for block (ID: slide_item_bg_enable)
- Block background color (ID: slide_item_bg)
- Header: Arrows settings (ID: N/A)
- Show slider buttons on desktop in title (ID: show_btns)
- Show slider buttons on desktop in slider (ID: show_btns_in_slider)
- Arrows color (ID: arrows_btn_color)
- Arrows color hover (ID: arrows_btn_color_hover)
- Arrows background (ID: arrows_btn_bg_color)
- Arrows background hover (ID: arrows_btn_bg_color_hover)
- Enable outline on hover (ID: arrows_outline)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: Side Block (`side_block`)
- Category (ID: side_category)
- Text (ID: side_block_text)
- Text align (ID: text_align)
- t:settings_schema.colors.settings.background_colors.content (ID: side_block_background_color)
- Skew block (ID: skew_block)

##### Block: Testimonial (`testimonial`)
- Category (ID: testimonial_category)
- Content alignment (ID: content_alignment)
- Show rating (ID: show_rating)
- Star rating (ID: star_rating)
- Star color (ID: star_color)
- Star secondary color (ID: star_color_secondary)
- Heading (ID: testimonail_title)
- t:sections.all.colors.label_heading (ID: title_color)
- t:sections.all.heading_size.label (ID: title_size)
- Description (ID: testimonail_description)
- t:sections.all.colors.label_text (ID: description_color)
- Text size (ID: description_size)
- Author (ID: testimonail_author)
- Author color (ID: author_color)
- Author size (ID: author_size)
- Author weight (ID: author_weight)
- City (ID: testimonail_city)
- City color (ID: city_color)
- City size (ID: city_size)
- City weight (ID: city_weight)
- Header: Image settings (ID: N/A)
- Image (ID: image)
- Image ratio (ID: image_ratio)
- Enable border (ID: with_border)
- Enable custom border radius (ID: enable_border_radius)
- Border radius (ID: border_radius)
- Header: Image icon settings (ID: N/A)
- Icon (ID: icon)
- Image width (ID: icon_width)
- Image vertical position (ID: icon_vertical)
- Image horizontal position (ID: icon_horizontal)
- Image width mobile (ID: icon_width_mobile)
- Image vertical position mobile (ID: icon_vertical_mobile)
- Image horizontal position mobile (ID: icon_horizontal_mobile)


---

### Testimonials grid (`testimonials-grid`)
> Displays carousel or grid of customer reviews and feedback.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.all.heading (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- t:sections.all.description (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_text (ID: text_color)
- t:sections.all.heading_align.label__2 (ID: heading_align)
- Text bottom space desktop (ID: text_bottom_space)
- t:sections.image-with-text.settings.image.label (ID: image)
- t:sections.image-with-text.settings.height.label (ID: height)
- t:sections.image-with-text.settings.desktop_image_width.label (ID: desktop_image_width)
- t:sections.image-with-text.settings.layout.label (ID: layout)
- Desktop image position (ID: desktop_image_position)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: Testimonial (`testimonial`)
- Star rating (ID: star_rating)
- Star color (ID: star_color)
- Heading (ID: testimonail_title)
- t:sections.all.colors.label_heading (ID: title_color)
- Image (ID: image)
- Text (ID: testimonail_description)
- t:sections.all.colors.label_text (ID: description_color)
- Author (ID: testimonail_author)
- Author color (ID: author_color)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)


---

### Elevated Split Card (`text-image-card`)
> A customizable section for displaying elevated split card related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Header: Layout Options (ID: N/A)
- Section Background (ID: section_bg_color)
- Show Inner White Border Framing (ID: show_white_border)
- Card Corner Radius (ID: card_radius)
- Desktop Image Position (ID: image_position)
- Header: Content Block Setup (ID: N/A)
- Content Background Color (ID: card_bg_color)
- Heading (ID: heading)
- Heading Text Color (ID: title_color)
- Heading Highlight Color (for Bold text) (ID: highlight_color)
- Description (ID: description)
- Description Text Color (ID: desc_color)
- Header: Primary Button (Solid) (ID: N/A)
- Button Label (ID: button_label_1)
- Button Link (ID: button_link_1)
- Button Background Color (ID: btn_1_bg)
- Button Text Color (ID: btn_1_text)
- Header: Secondary Button (Outlined) (ID: N/A)
- Button Label (ID: button_label_2)
- Button Link (ID: button_link_2)
- Button Highlight/Outline Color (ID: btn_2_text)
- Header: Media Upload (ID: N/A)
- Card Image (ID: image)

---

### t:sections.trio-showcase.name (`trio-showcase`)
> A customizable section for displaying t:sections.trio-showcase.name related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.all.heading (ID: title)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: text_color)
- t:sections.all.heading_align.label (ID: heading_align_section)
- t:sections.trio-showcase.settings.content_width (ID: content_width)
- Space between columns desktop (ID: column_space_d)
- Space between columns mobile (ID: column_space_m)
- t:sections.trio-showcase.settings.content_align (ID: heading_align)
- Text bottom space desktop (ID: text_bottom_space)
- Content align vertical (ID: content_align_vertical)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

#### Blocks & Block Customizations
##### Block: t:sections.trio-showcase.blocks.heading.name (`heading`)
- t:sections.all.heading (ID: title)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: text_color)
- Color-changing text (ID: text_heading)
- Custom color (ID: text_color_2)

##### Block: t:sections.trio-showcase.blocks.text.name (`text`)
- t:sections.all.description (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_text (ID: description_color)

##### Block: t:sections.trio-showcase.blocks.button.name (`button`)
- t:sections.trio-showcase.blocks.button.settings.button_label.label (ID: button_label)
- t:sections.trio-showcase.blocks.button.settings.button_link.label (ID: button_link)
- Top space desktop (ID: top_space)

##### Block: t:sections.trio-showcase.blocks.left-image.name (`left-image`)
- t:sections.trio-showcase.blocks.all.image (ID: image)
- Enable custom border radius (ID: enable_border_radius)
- Border radius (ID: border_radius)
- Add box shadow to image (ID: float_image_shadow)
- Header: Icon settings (ID: N/A)
- Icon (ID: icon)
- Icon width (ID: icon_width)
- Icon vertical position (ID: icon_vertical)
- Icon horizontal position (ID: icon_horizontal)
- Icon width mobile (ID: icon_width_mobile)
- Icon vertical position mobile (ID: icon_vertical_mobile)
- Icon horizontal position mobile (ID: icon_horizontal_mobile)

##### Block: t:sections.trio-showcase.blocks.right-image.name (`right-image`)
- t:sections.trio-showcase.blocks.all.image (ID: image)
- Enable custom border radius (ID: enable_border_radius)
- Border radius (ID: border_radius)
- Add box shadow to image (ID: float_image_shadow)
- Header: Icon settings (ID: N/A)
- Icon (ID: icon)
- Icon width (ID: icon_width)
- Icon vertical position (ID: icon_vertical)
- Icon horizontal position (ID: icon_horizontal)
- Icon width mobile (ID: icon_width_mobile)
- Icon vertical position mobile (ID: icon_vertical_mobile)
- Icon horizontal position mobile (ID: icon_horizontal_mobile)


---

### Understand Sellback Value (`understand-sellback`)
> A customizable section for displaying understand sellback value related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Header: Overall Section Theme (ID: N/A)
- Overall Background Gradient/Color (ID: bg_color)
- Overall Background Image (Optional override) (ID: bg_image)
- Header: Corner Images (Bottom) (ID: N/A)
- Bottom Left Image (ID: bottom_left_image)
- Bottom Left Image Width (ID: bottom_left_width)
- Bottom Right Image (ID: bottom_right_image)
- Bottom Right Image Width (ID: bottom_right_width)
- Header: Headings (ID: N/A)
- Heading Part 1 (ID: heading_1)
- Highlighted Phrase (ID: highlight_text)
- Heading Part 2 (ID: heading_2)
- Heading Text Color (ID: title_color)
- Highlight Text Color (ID: title_highlight_color)
- Subtitle (ID: subtitle)
- Subtitle Color (ID: subtitle_color)
- Center Arrow Color (ID: arrow_color)
- Header: Card Sizing (ID: N/A)
- Top Cards Max Width (ID: top_cards_width)
- Top Cards Min Height (ID: top_cards_height)
- Bottom Card Max Width (ID: bottom_card_width)
- Bottom Card Min Height (ID: bottom_card_height)
- Header: Typography: Headings (ID: N/A)
- Heading Font Size (Desktop) (ID: heading_size)
- Heading Font Size (Mobile) (ID: heading_size_m)
- Heading Font Weight (ID: heading_weight)
- Subtitle Font Size (Desktop) (ID: subtitle_size)
- Subtitle Font Size (Mobile) (ID: subtitle_size_m)
- Subtitle Font Weight (ID: subtitle_weight)
- Header: Typography: Top Cards (ID: N/A)
- Top Cards Title Color (ID: tc_title_color)
- Top Cards Title Size (Desktop) (ID: tc_title_size)
- Top Cards Title Size (Mobile) (ID: tc_title_size_m)
- Top Cards Title Weight (ID: tc_title_weight)
- Top Cards Price Color (ID: tc_price_color)
- Top Cards Price Size (Desktop) (ID: tc_price_size)
- Top Cards Price Size (Mobile) (ID: tc_price_size_m)
- Top Cards Price Weight (ID: tc_price_weight)
- Top Cards Subtext Color (ID: tc_subtext_color)
- Top Cards Subtext Size (Desktop) (ID: tc_subtext_size)
- Top Cards Subtext Size (Mobile) (ID: tc_subtext_size_m)
- Top Cards Subtext Weight (ID: tc_subtext_weight)
- Header: Typography: Bottom Card (ID: N/A)
- Bottom Title Size (Desktop) (ID: bc_title_size)
- Bottom Title Size (Mobile) (ID: bc_title_size_m)
- Bottom Title Weight (ID: bc_title_weight)
- Bottom Main Price Size (Desktop) (ID: bc_price_size)
- Bottom Main Price Size (Mobile) (ID: bc_price_size_m)
- Bottom Main Price Weight (ID: bc_price_weight)
- Bottom Pill Size (Desktop) (ID: bc_pill_size)
- Bottom Pill Size (Mobile) (ID: bc_pill_size_m)
- Bottom Pill Weight (ID: bc_pill_weight)
- Header: Left Card (Buy Setup) (ID: N/A)
- Card Background (ID: card_1_bg)
- Card Icon Image (PNG/SVG) (ID: card_1_icon)
- Icon Wrapper Background (ID: card_1_icon_bg)
- Title (ID: card_1_title)
- Price Detail (ID: card_1_price)
- Subtext (ID: card_1_subtext)
- Header: Right Card (Return Setup) (ID: N/A)
- Card Background (ID: card_2_bg)
- Card Icon Image (PNG/SVG) (ID: card_2_icon)
- Icon Wrapper Background (ID: card_2_icon_bg)
- Title (ID: card_2_title)
- Price Detail (ID: card_2_price)
- Subtext (ID: card_2_subtext)
- Header: Bottom Checkout Card (ID: N/A)
- Card Background/Gradient (ID: card_3_bg)
- Card Text Base Color (ID: card_3_text_color)
- Title Text (ID: card_3_title)
- Title BOLD Highlight Color (ID: card_3_highlight_color)
- Original Strikethrough Price (ID: card_3_strikethrough)
- Final Price (ID: card_3_price)
- Intersecting Pill Text (ID: pill_text)
- Intersecting Pill Background (ID: pill_bg)
- Intersecting Pill Text Color (ID: pill_text_color)

#### Blocks & Block Customizations
##### Block: Floating Flower/Icon (`icon`)
- Upload Decorative Image (ID: image)
- Vertical Target (Top to Bottom) (ID: top_pos)
- Horizontal Target (Left to Right) (ID: left_pos)
- Icon Scaling Box Size (ID: size)


---

### t:sections.video.name (`video`)
> Displays embedded video player with optional text overlays.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- t:sections.all.heading (ID: heading)
- t:sections.all.heading_size.label (ID: heading_size)
- t:sections.all.colors.label_heading (ID: heading_color)
- t:sections.all.description (ID: text)
- Text size (ID: text_body_size)
- t:sections.all.colors.label_text (ID: description_color)
- t:sections.all.heading_align.label__2 (ID: heading_align)
- Text bottom space desktop (ID: text_bottom_space)
- t:sections.video.settings.enable_video_looping.label (ID: enable_video_looping)
- Header: t:sections.video.settings.header__1.content (ID: N/A)
- t:sections.video.settings.video.label (ID: video)
- Header: t:sections.video.settings.header__2.content (ID: N/A)
-  (ID: N/A)
- t:sections.video.settings.video_url.label (ID: video_url)
- t:sections.video.settings.cover_image.label (ID: cover_image)
- t:sections.video.settings.description.label (ID: description)
- Header: t:sections.video.settings.header__3.content (ID: N/A)
- t:sections.video.settings.full_width.label (ID: full_width)
- Header: Section overlay (ID: N/A)
- Image overlay (ID: image_overlay)
- Image width (ID: image_overlay_width)
- Image vertical position (ID: image_overlay_vertical)
- Image horizontal position (ID: image_overlay_horizontal)
- Image width mobile (ID: image_overlay_width_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_mobile)
- Animation (ID: image_overlay_animation)
- Image overlay (ID: image_overlay_2)
- Image width (ID: image_overlay_width_2)
- Image vertical position (ID: image_overlay_vertical_2)
- Image horizontal position (ID: image_overlay_horizontal_2)
- Image width mobile (ID: image_overlay_width_2_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_2_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_2_mobile)
- Animation (ID: image_overlay_animation_2)
- Image overlay (ID: image_overlay_3)
- Image width (ID: image_overlay_width_3)
- Image vertical position (ID: image_overlay_vertical_3)
- Image horizontal position (ID: image_overlay_horizontal_3)
- Image width mobile (ID: image_overlay_width_3_mobile)
- Image vertical position mobile (ID: image_overlay_vertical_3_mobile)
- Image horizontal position mobile (ID: image_overlay_horizontal_3_mobile)
- Animation (ID: image_overlay_animation_3)
- Header: t:sections.all.shape_divider.name (ID: N/A)
- t:sections.all.shape_divider.settings.position (ID: shape_position)
- t:sections.all.shape_divider.settings.type (ID: shape_type)
- t:sections.all.shape_divider.settings.color (ID: shape_color)
- t:sections.all.shape_divider.settings.width (ID: shape_width)
- Header: t:sections.all.padding.section_padding_heading (ID: N/A)
- t:settings_schema.colors.settings.background_colors.content (ID: background_color)
- t:settings_schema.colors.settings.colors_background_section_gradient.label (ID: colors_background_section_gradient)
- t:sections.all.padding.padding_top (ID: padding_top)
- t:sections.all.padding.padding_bottom (ID: padding_bottom)

---

### What This Means (`what-this-mean`)
> A customizable section for displaying what this means related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Heading (ID: heading)
- Subtitle (ID: subtitle)
- Left Banners/Flags Image (ID: banner_left)
- Right Banners/Flags Image (ID: banner_right)
- Section Background (ID: background_color)
- Card Background (ID: card_bg_color)
- Card Border Radius (ID: card_border_radius)
- Header: Typography - Desktop (ID: N/A)
- Heading Size (Desktop) (ID: heading_size_desktop)
- Subtitle Size (Desktop) (ID: subtitle_size_desktop)
- Card Title Size (Desktop) (ID: card_title_desktop)
- Card Desc Size (Desktop) (ID: card_desc_desktop)
- Card Bottom Size (Desktop) (ID: card_bottom_desktop)
- Header: Typography - Mobile (ID: N/A)
- Heading Size (Mobile) (ID: heading_size_mobile)
- Subtitle Size (Mobile) (ID: subtitle_size_mobile)
- Card Title Size (Mobile) (ID: card_title_mobile)
- Card Desc Size (Mobile) (ID: card_desc_mobile)
- Card Bottom Size (Mobile) (ID: card_bottom_mobile)

#### Blocks & Block Customizations
##### Block: Story Card (`card`)
- Card Image (ID: image)
- Theme Color (Badge & Line) (ID: theme_color)
- Badge Text (ID: badge_text)
- Card Title (ID: title)
- Card Subtitle (ID: subtitle)
- Bottom Spark Text (ID: bottom_text)


---

### Why EleFant Exists (`whyelefantexist`)
> A customizable section for displaying why elefant exists related content.

**Used in:** Not explicitly used in templates (Dynamically available)

#### Section Settings
- Heading (ID: heading)
- Description (ID: description)
- Button Label (ID: button_label)
- Button Link (ID: button_link)
- Floating Graphic Image (e.g. Kite) (ID: kite_image)
- Section Background Color (ID: background_color)
- Card Background Color (ID: card_bg_color)

#### Blocks & Block Customizations
##### Block: Card (`card`)
- Icon Image (ID: icon)
- Title (ID: title)
- Description (ID: text)


---

## 2. Snippet Analysis

### Snippet: `article-card`
**Called from:**
- `sections/featured-blog-collage.liquid`
- `sections/featured-blog.liquid`
- `sections/main-blog.liquid`
- `sections/main-search.liquid`
- `snippets/article-card.liquid`

---

### Snippet: `block-image`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `block-video`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `breadcrumb`
**Called from:**
- `sections/main-article.liquid`
- `sections/main-cart-items.liquid`
- `sections/main-collection-banner.liquid`
- `sections/main-list-collections.liquid`
- `sections/main-page.liquid`
- `sections/main-product.liquid`

---

### Snippet: `buy-button-styles`
**Called from:**
- `sections/featured-product.liquid`

---

### Snippet: `buy-buttons`
**Called from:**
- `snippets/buy-buttons.liquid`

---

### Snippet: `card-collection`
**Called from:**
- `sections/collage.liquid`
- `sections/collection-list.liquid`
- `sections/main-list-collections.liquid`
- `sections/trending-collections.liquid`
- `snippets/card-collection.liquid`
- `snippets/cart-drawer.liquid`

---

### Snippet: `card-product`
**Called from:**
- `sections/collage.liquid`
- `sections/collections-with-tabs.liquid`
- `sections/featured-collection.liquid`
- `sections/image-hubspot-banner.liquid`
- `sections/main-collection-product-grid.liquid`
- `sections/main-search.liquid`
- `sections/related-products.liquid`
- `snippets/card-collection.liquid`
- `snippets/card-product.liquid`
- `snippets/header-drawer-menu.liquid`
- `snippets/header-drawer.liquid`

---

### Snippet: `cart-drawer`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `color-swatch-style`
**Called from:**
- `snippets/card-product.liquid`

---

### Snippet: `color-swatches`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `complimentary-product`
**Called from:**
- `sections/main-cart-items.liquid`
- `sections/main-product.liquid`
- `snippets/cart-drawer.liquid`
- `snippets/complimentary-product.liquid`

---

### Snippet: `countdown-bar`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `country-localization`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `email-signup-banner-background`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `email-signup-banner-background-mobile`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `facets`
**Called from:**
- `sections/main-collection-product-grid.liquid`
- `sections/main-search.liquid`
- `snippets/facets.liquid`

---

### Snippet: `featured-icon`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `gift-card-recipient-form`
**Called from:**
- `snippets/gift-card-recipient-form.liquid`

---

### Snippet: `header-drawer`
**Called from:**
- `snippets/header-drawer.liquid`

---

### Snippet: `header-drawer-menu`
**Called from:**
- `sections/header.liquid`

---

### Snippet: `header-dropdown-menu`
**Called from:**
- `sections/header.liquid`
- `snippets/header-dropdown-menu.liquid`

---

### Snippet: `header-mega-menu`
**Called from:**
- `sections/header.liquid`
- `snippets/header-mega-menu.liquid`

---

### Snippet: `header-search`
**Called from:**
- `sections/header.liquid`
- `snippets/header-search.liquid`

---

### Snippet: `icon-3d-model`
**Called from:**
- `snippets/product-media-gallery.liquid`
- `snippets/product-media.liquid`
- `snippets/product-thumbnail.liquid`

---

### Snippet: `icon-accordion`
**Called from:**
- `sections/main-product.liquid`
- `snippets/icon-with-text.liquid`

---

### Snippet: `icon-account`
**Called from:**
- `sections/header.liquid`
- `snippets/header-drawer.liquid`

---

### Snippet: `icon-account-mood4`
**Called from:**
- `sections/header.liquid`
- `snippets/header-drawer.liquid`

---

### Snippet: `icon-account-style`
**Called from:**
- `sections/header.liquid`

---

### Snippet: `icon-arrow`
**Called from:**
- `sections/email-signup-banner.liquid`
- `sections/main-article.liquid`
- `sections/multicolumn.liquid`
- `sections/predictive-search.liquid`
- `sections/scroll-to-top.liquid`
- `snippets/card-collection.liquid`
- `snippets/facets.liquid`
- `snippets/header-drawer-menu.liquid`
- `snippets/header-drawer.liquid`

---

### Snippet: `icon-arrow-link`
**Called from:**
- `sections/collections-with-tabs.liquid`
- `sections/featured-blog.liquid`
- `sections/featured-collection.liquid`
- `sections/notification.liquid`
- `sections/promo-popup.liquid`
- `snippets/article-card.liquid`
- `snippets/cart-drawer.liquid`

---

### Snippet: `icon-arrow-mood6`
**Called from:**
- `sections/collection-list.liquid`
- `sections/collections-with-tabs.liquid`
- `sections/featured-blog.liquid`
- `sections/featured-collection.liquid`
- `sections/main-404.liquid`
- `sections/main-product.liquid`
- `sections/pickup-availability.liquid`
- `sections/related-products.liquid`
- `snippets/article-card.liquid`
- `snippets/complimentary-product.liquid`

---

### Snippet: `icon-arrow-red`
**Called from:**
- `sections/featured-blog.liquid`
- `sections/featured-collection.liquid`
- `sections/product-banner.liquid`
- `sections/testimonials.liquid`
- `sections/trending-collections.liquid`

---

### Snippet: `icon-arrow-short`
**Called from:**
- `sections/collections-with-tabs.liquid`
- `sections/featured-blog.liquid`
- `sections/featured-collection.liquid`
- `sections/main-404.liquid`
- `sections/main-product.liquid`
- `sections/pickup-availability.liquid`
- `sections/related-products.liquid`
- `sections/scroll-to-top.liquid`
- `snippets/card-collection.liquid`
- `snippets/cart-drawer.liquid`

---

### Snippet: `icon-arrow-slider`
**Called from:**
- `sections/featured-blog.liquid`
- `sections/featured-collection.liquid`
- `sections/main-product.liquid`
- `sections/product-banner.liquid`
- `sections/testimonials.liquid`
- `sections/trending-collections.liquid`

---

### Snippet: `icon-caret`
**Called from:**
- `sections/collection-list.liquid`
- `sections/header.liquid`
- `sections/main-collection-product-grid.liquid`
- `sections/main-product.liquid`
- `sections/main-search.liquid`
- `sections/scroll-to-top.liquid`
- `sections/slideshow.liquid`
- `sections/sticky-add-to-cart.liquid`
- `snippets/cart-drawer.liquid`
- `snippets/country-localization.liquid`
- `snippets/facets.liquid`
- `snippets/header-drawer-menu.liquid`
- `snippets/header-drawer.liquid`
- `snippets/header-dropdown-menu.liquid`
- `snippets/header-mega-menu.liquid`
- `snippets/language-localization.liquid`
- `snippets/product-variant-picker.liquid`

---

### Snippet: `icon-cart`
**Called from:**
- `sections/header.liquid`

---

### Snippet: `icon-cart-large`
**Called from:**
- `snippets/card-product.liquid`

---

### Snippet: `icon-cart-mood4`
**Called from:**
- `sections/header.liquid`

---

### Snippet: `icon-cart-style`
**Called from:**
- `sections/header.liquid`

---

### Snippet: `icon-clipboard`
**Called from:**
- `snippets/product-share-button.liquid`
- `snippets/share-button.liquid`

---

### Snippet: `icon-close`
**Called from:**
- `sections/collage.liquid`
- `sections/image-gallery.liquid`
- `sections/image-hubspot-banner.liquid`
- `sections/main-password-header.liquid`
- `sections/main-product.liquid`
- `sections/product-banner.liquid`
- `sections/product-gallery.liquid`
- `snippets/card-product.liquid`
- `snippets/cart-drawer.liquid`
- `snippets/complimentary-product.liquid`
- `snippets/header-drawer-menu.liquid`
- `snippets/header-drawer.liquid`
- `snippets/product-media-modal.liquid`
- `snippets/product-share-button.liquid`
- `snippets/product-variant-picker.liquid`
- `snippets/share-button.liquid`

---

### Snippet: `icon-close-small`
**Called from:**
- `snippets/facets.liquid`

---

### Snippet: `icon-discount`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `icon-dot-mood6`
**Called from:**
- `snippets/article-card.liquid`

---

### Snippet: `icon-error`
**Called from:**
- `sections/main-article.liquid`
- `snippets/gift-card-recipient-form.liquid`

---

### Snippet: `icon-eye`
**Called from:**
- `snippets/card-product.liquid`

---

### Snippet: `icon-eye-mood6`
**Called from:**
- `snippets/card-product.liquid`

---

### Snippet: `icon-facebook`
**Called from:**
- `sections/main-article.liquid`
- `snippets/product-share-button.liquid`

---

### Snippet: `icon-filter`
**Called from:**
- `snippets/facets.liquid`

---

### Snippet: `icon-hamburger`
**Called from:**
- `snippets/header-drawer.liquid`

---

### Snippet: `icon-hamburger-mood4`
**Called from:**
- `snippets/header-drawer.liquid`

---

### Snippet: `icon-heart`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `icon-heart-style`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `icon-instagram`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `icon-linkedin`
**Called from:**
- `sections/main-article.liquid`
- `snippets/product-share-button.liquid`

---

### Snippet: `icon-minus`
**Called from:**
- `sections/main-cart-items.liquid`
- `sections/sticky-add-to-cart.liquid`
- `snippets/buy-buttons.liquid`
- `snippets/cart-drawer.liquid`

---

### Snippet: `icon-padlock`
**Called from:**
- `sections/main-password-header.liquid`

---

### Snippet: `icon-pause`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `icon-pinterest`
**Called from:**
- `sections/main-article.liquid`
- `snippets/product-share-button.liquid`

---

### Snippet: `icon-play`
**Called from:**
- `snippets/product-thumbnail.liquid`

---

### Snippet: `icon-plus`
**Called from:**
- `sections/main-cart-items.liquid`
- `sections/sticky-add-to-cart.liquid`
- `snippets/buy-buttons.liquid`
- `snippets/card-product.liquid`
- `snippets/cart-drawer.liquid`

---

### Snippet: `icon-product-share`
**Called from:**
- `snippets/product-share-button.liquid`

---

### Snippet: `icon-remove`
**Called from:**
- `sections/main-cart-items.liquid`

---

### Snippet: `icon-remove-mood4`
**Called from:**
- `sections/main-cart-items.liquid`

---

### Snippet: `icon-search-mood4`
**Called from:**
- `snippets/header-search.liquid`

---

### Snippet: `icon-share`
**Called from:**
- `snippets/share-button.liquid`

---

### Snippet: `icon-snapchat`
**Called from:**
- `sections/main-article.liquid`
- `snippets/product-share-button.liquid`

---

### Snippet: `icon-spinner`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `icon-success`
**Called from:**
- `sections/contact-form.liquid`
- `sections/email-signup-banner.liquid`
- `sections/main-article.liquid`
- `sections/newsletter.liquid`

---

### Snippet: `icon-telegram`
**Called from:**
- `sections/main-article.liquid`
- `snippets/product-share-button.liquid`

---

### Snippet: `icon-tick`
**Called from:**
- `sections/pickup-availability.liquid`

---

### Snippet: `icon-tiktok`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `icon-trash`
**Called from:**
- `sections/main-cart-items.liquid`
- `snippets/cart-drawer.liquid`

---

### Snippet: `icon-tumblr`
**Called from:**
- `sections/main-article.liquid`
- `snippets/product-share-button.liquid`

---

### Snippet: `icon-twitter`
**Called from:**
- `sections/main-article.liquid`
- `snippets/product-share-button.liquid`

---

### Snippet: `icon-unavailable`
**Called from:**
- `sections/main-product.liquid`
- `snippets/buy-buttons.liquid`

---

### Snippet: `icon-vimeo`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `icon-with-text`
**Called from:**
- `sections/main-product.liquid`
- `snippets/icon-with-text.liquid`

---

### Snippet: `icon-youtube`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `icon-zoom`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `language-localization`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `meta-tags`
**Called from:**
- `layout/password.liquid`
- `layout/theme.liquid`

---

### Snippet: `pagination`
**Called from:**
- `sections/main-article.liquid`
- `sections/main-collection-product-grid.liquid`
- `sections/main-list-collections.liquid`
- `sections/main-search.liquid`
- `snippets/pagination.liquid`

---

### Snippet: `pincode-validator`
**Called from:**
- `sections/main-product.liquid`

---

### Snippet: `price`
**Called from:**
- `sections/predictive-search.liquid`
- `sections/sticky-add-to-cart.liquid`
- `snippets/card-product.liquid`
- `snippets/complimentary-product.liquid`
- `snippets/price.liquid`

---

### Snippet: `product-media`
**Called from:**
- `snippets/product-media.liquid`

---

### Snippet: `product-media-gallery`
**Called from:**
- `sections/featured-product.liquid`
- `sections/main-product.liquid`
- `snippets/product-media-gallery.liquid`

---

### Snippet: `product-media-modal`
**Called from:**
- `sections/featured-product.liquid`
- `sections/main-product.liquid`
- `snippets/product-media-modal.liquid`

---

### Snippet: `product-share-button`
**Called from:**
- `sections/featured-product.liquid`
- `sections/main-product.liquid`

---

### Snippet: `product-thumbnail`
**Called from:**
- `snippets/product-media-gallery.liquid`
- `snippets/product-thumbnail.liquid`

---

### Snippet: `product-variant-options`
**Called from:**
- `snippets/product-variant-picker.liquid`

---

### Snippet: `product-variant-picker`
**Called from:**
- `sections/main-product.liquid`

---

### Snippet: `progress-bar`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `section-overlay`
**Called from:**
- `sections/before-after.liquid`
- `sections/collage.liquid`
- `sections/collection-list.liquid`
- `sections/collections-with-tabs.liquid`
- `sections/contact-form.liquid`
- `sections/faq-with-images.liquid`
- `sections/faq.liquid`
- `sections/featured-blog-collage.liquid`
- `sections/featured-blog.liquid`
- `sections/featured-collection.liquid`
- `sections/featured-product.liquid`
- `sections/image-banner.liquid`
- `sections/image-gallery.liquid`
- `sections/image-with-text.liquid`
- `sections/main-collection-product-grid.liquid`
- `sections/multi-pallete.liquid`
- `sections/multicollage.liquid`
- `sections/multicolumn.liquid`
- `sections/multirow.liquid`
- `sections/newsletter.liquid`
- `sections/page.liquid`
- `sections/promo-banner.liquid`
- `sections/recently-viewed-products.liquid`
- `sections/related-products.liquid`
- `sections/rich-text.liquid`
- `sections/showcase.liquid`
- `sections/slideshow.liquid`
- `sections/testimonials-grid.liquid`
- `sections/testimonials.liquid`
- `sections/trio-showcase.liquid`
- `sections/video.liquid`

---

### Snippet: `shape`
**Called from:**
- `sections/before-after.liquid`
- `sections/collage.liquid`
- `sections/collection-list.liquid`
- `sections/collections-with-tabs.liquid`
- `sections/contact-form.liquid`
- `sections/faq-with-images.liquid`
- `sections/faq.liquid`
- `sections/featured-blog-collage.liquid`
- `sections/featured-blog.liquid`
- `sections/featured-collection.liquid`
- `sections/featured-product.liquid`
- `sections/image-banner.liquid`
- `sections/image-gallery.liquid`
- `sections/image-hubspot-banner.liquid`
- `sections/image-with-text.liquid`
- `sections/main-blog.liquid`
- `sections/main-cart-items.liquid`
- `sections/main-collection-banner.liquid`
- `sections/main-collection-product-grid.liquid`
- `sections/main-list-collections.liquid`
- `sections/main-page.liquid`
- `sections/multi-pallete.liquid`
- `sections/multicollage.liquid`
- `sections/multicolumn.liquid`
- `sections/multirow.liquid`
- `sections/newsletter.liquid`
- `sections/page.liquid`
- `sections/product-banner.liquid`
- `sections/promo-banner.liquid`
- `sections/recently-viewed-products.liquid`
- `sections/related-products.liquid`
- `sections/rich-text.liquid`
- `sections/showcase.liquid`
- `sections/slideshow.liquid`
- `sections/testimonials-grid.liquid`
- `sections/testimonials.liquid`
- `sections/trio-showcase.liquid`
- `sections/video.liquid`

---

### Snippet: `share-button`
**Called from:**
- `sections/main-article.liquid`
- `snippets/product-share-button.liquid`
- `snippets/share-button.liquid`

---

### Snippet: `social-icons`
**Called from:** Not found (May be unused or called via dynamic variable)

---

### Snippet: `visual-display`
**Called from:**
- `snippets/facets.liquid`
- `snippets/visual-display.liquid`

---

