# ۰۰۰۲ پین نسخه‌ها

وضعیت: پذیرفته. تاریخ: ۲۰۲۶-۱۰-۲۳.

نسخهٔ شناور و برچسب latest استفاده نمی‌شود.

- وردپرس `7.1.3`، منتشرشده در ۶ اکتبر ۲۰۲۶. API هسته در ۲۰۲۶-۱۰-۲۳ همین نسخه را فعلی اعلام کرد: `https://downloads.wordpress.org/release/wordpress-7.1.3.zip`. فیلد `core` در `.wp-env.json` همین URL است، نه `null`.
- PHP محیط وردپرس `8.4`.
- MariaDB `11.4` در فیلد `mariadbVersion`. نه `lts` و نه `latest`.
- Node `22.23.3` در `.nvmrc` و `engines`. Active LTS بودن Node 24 این پین را عوض نمی‌کند. باینری همین ماشین `v22.23.4` است و پین عوض نشده است.
- `@wordpress/env` دقیقاً `12.0.0`. این نسخه `lifecycleScripts` و `mariadbVersion` دارد. `package-lock.json` commit می‌شود.
- The SEO Framework، اسلاگ `autodescription`، نسخهٔ `5.2.0` از API رسمی افزونه‌ها در ۲۰۲۶-۱۰-۲۳. URL: `https://downloads.wordpress.org/plugin/autodescription.5.2.0.zip`.
- PHPCS `3.13.6` چون WPCS `3.4.1` به `phpcs ^3.13.5` نیاز دارد و PHPCS 4 با آن سازگار نیست.
- PHPUnit `12.5.40` چون PHP `>=8.3` می‌خواهد و روی PHP 8.4 هم اجرا می‌شود. PHPUnit `13.4.3` به PHP `>=8.4.1` نیاز دارد و روی CLI نصب‌شدهٔ `8.3.6` اجرا نمی‌شود.
- نصب‌کنندهٔ استاندارد PHPCS دقیقاً `1.2.1`. Composer `2.10.3` برای ساخت `composer.lock`.

اختلاف PHP محلی در ADR ۰۰۰۷ است. پین ۸.۴ عوض نشده است.
