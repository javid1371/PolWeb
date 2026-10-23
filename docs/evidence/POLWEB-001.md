# شواهد POLWEB-001

تاریخ: ۲۰۲۶-۱۰-۲۳.

- API هسته، نسخهٔ فعلی `7.1.3` و ZIP `https://downloads.wordpress.org/release/wordpress-7.1.3.zip`.
- API افزونه، اسلاگ `autodescription`، نسخهٔ `5.2.0`، URL `https://downloads.wordpress.org/plugin/autodescription.5.2.0.zip`. آخرین به‌روزرسانی اعلام‌شده `2026-10-14`.
- `@wordpress/env` روی npm نسخهٔ `12.0.0` است. کد همان نسخه `mariadbVersion`، `lifecycleScripts.afterStart` و گزینهٔ `--scripts` با پیش‌فرض روشن را دارد. `testsEnvironment` در این نسخه اگر نیاید هنوز محیط دوم را می‌سازد؛ فایل آن را `false` کرده است.
- وابستگی‌های `@php-wasm/*` داخل همین نصب، `node >= 24.18.0` می‌خواهند و npm هشدار می‌دهد. خود `@wordpress/env` نسخهٔ `>=22.13.0` می‌خواهد. پین Node پروژه `22.23.3` می‌ماند.
- `blog_public` گزینهٔ wp-config نیست. lifecycle به `tools/wp-env-after-start.sh` وصل است. این گزینه بی‌صدا حذف نشده است.
- Node `22.23.3` در فهرست رسمی Node در تاریخ `2026-09-23` وجود دارد. ماشین فعلی `v22.23.4` است.

`package-lock.json` نسخهٔ `@wordpress/env` را روی `12.0.0` قفل کرده است. `composer.lock` ابزارها را روی همان شماره‌های ADR ۰۰۰۲ قفل کرده است.

تجزیهٔ `.wp-env.json` با همین نسخه: PHP `8.4`، MariaDB `11.4`، پورت `8888`، افزونه‌ها `pol-site-core` و `pol-demo` و `autodescription`، قالب `pol-magnetic`، و `afterStart` برابر `sh tools/wp-env-after-start.sh`. نام پوشهٔ کش هسته در این نسخه به `wordpress-7` کوتاه می‌شود، ولی URL دانلود همان `wordpress-7.1.3.zip` می‌ماند.
