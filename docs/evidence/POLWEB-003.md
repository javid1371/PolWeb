# شواهد POLWEB-003

تاریخ: ۲۰۲۶-۱۰-۲۳.

قالب فایل‌های Block Theme را دارد: `style.css`، `theme.json` نسخهٔ ۳، `templates/index.html`، `parts/header.html` و `parts/footer.html`. `appearanceTools` بسته است. رنگ و فاصله و شعاع سفارشی خام خاموش است. `settings.custom.direction` برابر `rtl` است و `add_theme_support( 'rtl' )` در `functions.php` است.

منطق نسخه در کلاس `Pol_Site_Core_Schema_Version` است و از توابع قالب جداست. مهاجرت نوشته نشده است.

فعال‌سازی روی همین ماشین: blocked. دیمون Docker بالا نیست. این نتیجهٔ محلی fail یا pass نیست. جزئیات محیط در `docs/adr/0007-runtime-environment.md`.

همان بررسی در GitHub Actions، اجرای `39957975615`، برابر pass شد: قالب `pol-magnetic` فعال شد و هر دو افزونه به‌همراه The SEO Framework فعال بودند.

`npm run test` در ۲۳ اکتبر ۲۰۲۶ کد خروج ۰ داد: PHPUnit `12.5.40`، سه آزمون و نه assertion، روی PHP CLI `8.3.6`. این اجرا روی PHP `8.4` نبود.
