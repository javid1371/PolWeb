# PolWeb

مخزن قالب بلوکی و افزونه‌های سایت پل. این مخزن CRM نیست و به سامانهٔ فروش وصل نمی‌شود.

موج اول فقط مرحلهٔ صفر است: مخزن قابل نگهداری، محیط قابل بازتولید، قواعد Cursor، مدیریت کار، اسکریپت‌های کیفیت، و یک قالب و افزونه که روی نصب تمیز وردپرس فعال می‌شوند. سیستم طراحی، صفحات، فرم، نوع محتوا، دادهٔ دمو و انتشار production در این موج نیستند.

## پیش‌نیاز

- Node `22.23.3`، مطابق `.nvmrc`
- PHP `8.4` داخل wp-env، و PHP CLI برای lint محلی
- Composer `2.10.3` برای ابزار توسعه
- Docker برای `npm run check:integration`

## فرمان‌ها

```bash
npm ci
composer install --no-interaction --prefer-dist
npm run lint
npm run test
npm run package
npm run check:integration
```

`npm run package` به Docker نیاز ندارد. `check:integration` بدون دیمون Docker با کد خروج ۲ و عبارت `blocked` تمام می‌شود.

## وضعیت فعلی محیط

بررسی ۲۳ اکتبر ۲۰۲۶ روی همین ماشین:

- Node نصب‌شده `v22.23.4` و npm `10.9.9` است. پین پروژه `22.23.3` می‌ماند.
- PHP CLI بعد از یک نصب از مخزن اوبونتو `8.3.6` است. PHP 8.4 در مخزن رسمی نبود و PPA اضافه نشد. پین wp-env همان `8.4` است.
- Docker نصب نیست، `/var/run/docker.sock` وجود ندارد، و `systemctl` بالا نمی‌آید. wp-env محلی blocked است.
- جزئیات و فرمان رفع مانع در `docs/project/STATUS.md` و `docs/adr/0007-runtime-environment.md`.

قدم بعدی: POLWEB-005. نقشهٔ اجرا: `docs/project/PLAN.md`.
