# assets/images 命名方案

后续替换图片时，优先保留当前文件名，这样不需要再改 HTML。

## 目录建议

- `assets/images/placeholders/`
  当前项目内置的占位图文件
- `assets/images/home/`
  首页使用的正式图片
- `assets/images/features/`
  特色内容页使用的正式图片
- `assets/images/themes/`
  主题介绍页使用的正式图片

## 首页建议文件名

- `assets/images/home/sidebar-illustration-home.png`
- `assets/images/home/hero-mascot-home.png`
- `assets/images/home/promo-banner-island.png`
- `assets/images/home/hotel-image-01.png`
- `assets/images/home/hotel-image-02.png`
- `assets/images/home/hotel-image-03.png`
- `assets/images/home/hotel-image-04.png`
- `assets/images/home/assistant-avatar-home.png`

## 特色内容页建议文件名

- `assets/images/features/sidebar-illustration-features.png`
- `assets/images/features/feature-banner-image.png`
- `assets/images/features/route-cover-image.png`
- `assets/images/features/spot-image-01.png`
- `assets/images/features/spot-image-02.png`
- `assets/images/features/food-city-shanghai.png`
- `assets/images/features/food-city-chengdu.png`
- `assets/images/features/food-city-guangzhou.png`
- `assets/images/features/assistant-avatar-features.png`

## 主题介绍页建议文件名

- `assets/images/themes/sidebar-illustration-themes.png`
- `assets/images/themes/theme-banner-image.png`
- `assets/images/themes/theme-romance-cover.png`
- `assets/images/themes/theme-romance-sub-01.png`
- `assets/images/themes/theme-romance-sub-02.png`
- `assets/images/themes/theme-city-cover.png`
- `assets/images/themes/theme-city-sub-01.png`
- `assets/images/themes/theme-city-sub-02.png`
- `assets/images/themes/theme-green-cover.png`
- `assets/images/themes/theme-green-sub-01.png`
- `assets/images/themes/theme-green-sub-02.png`
- `assets/images/themes/assistant-avatar-themes.png`

## 替换方式

1. 把正式图片放到对应目录。
2. 把页面里的 `src="assets/images/placeholders/..."` 改成对应正式路径。
3. `data-slot` 可以保留，方便继续识别图片位，也可以删除。
