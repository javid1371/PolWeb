# POLWEB-001

## مسئله و خروجی

مخزن فقط یک README بود. خروجی اسکلت قابل نگهداری است: پین‌ها، wp-env، gitignore، ADRهای ۰۰۰۱ تا ۰۰۰۷، و سندهای معماری و سئو و عملکرد و مدل محتوا.

## محدوده و خارج از محدوده

داخل محدوده: فایل‌های پیکربندی و سندهای همین موج. خارج از محدوده: قالب، افزونه، قواعد Cursor، صفحات و طراحی.

## وابستگی

ندارد.

## فایل‌ها

`README.md`، `AGENTS.md`، `.wp-env.json`، `.nvmrc`، `.gitignore`، `package.json`، `composer.json`، `docs/PROJECT.md`، `docs/ARCHITECTURE.md`، `docs/SEO.md`، `docs/PERFORMANCE.md`، `docs/CONTENT-MODEL.md`، `docs/adr/0001` تا `0007`.

## معیار پذیرش

نسخه‌ها دقیق‌اند، `core` برابر null نیست، MariaDB برابر `11.4` است، و بودجهٔ عملکرد پیش از CSS و JS اختصاصی نوشته شده است.

## روش اعتبارسنجی

خواندن `.wp-env.json` و ADR ۰۰۰۲ در برابر API هسته و API افزونه. ساخت `package-lock.json` و `composer.lock`.

## ریسک و بازگشت

پین اشتباه نصب را ناسازگار می‌کند. بازگشت یعنی برگرداندن همان فایل قفل، نه شل کردن نسخه به latest.

## وضعیت

Done

## نتیجهٔ تست

`package-lock.json` و `composer.lock` ساخته شدند. اجرای lint در POLWEB-004 برابر pass است.

## لینک شواهد

`docs/evidence/POLWEB-001.md`
