# شواهد POLWEB-003

تاریخ: ۲۰۲۶-۱۰-۲۳.

قالب فایل‌های Block Theme را دارد: `style.css`، `theme.json` نسخهٔ ۳، `templates/index.html`، `parts/header.html` و `parts/footer.html`. `appearanceTools` بسته است. رنگ و فاصله و شعاع سفارشی خام خاموش است. `settings.custom.direction` برابر `rtl` است و `add_theme_support( 'rtl' )` در `functions.php` است.

منطق نسخه در کلاس `Pol_Site_Core_Schema_Version` است و از توابع قالب جداست. مهاجرت نوشته نشده است.

فعال‌سازی واقعی وردپرس: blocked. دیمون Docker بالا نیست. این نتیجه fail یا pass نیست. جزئیات در `docs/adr/0007-runtime-environment.md`.

خروجی PHPUnit بعد از اجرای POLWEB-004 در `docs/evidence/POLWEB-004.md` ثبت می‌شود.
