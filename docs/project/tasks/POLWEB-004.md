# POLWEB-004

## مسئله و خروجی

بدون اسکریپت و CI، کیفیت قابل تکرار نیست. خروجی lint و test و package و check-integration، گردش CI، شواهد محیط، و STATUS است.

## محدوده و خارج از محدوده

داخل محدوده: `tools/`، `package.json`، CI، قفل وابستگی، شواهد و به‌روزرسانی صف. خارج از محدوده: بالا آوردن اجباری Docker اگر دیمون شکست بخورد، و انتشار.

## وابستگی

POLWEB-001 و POLWEB-002 و POLWEB-003

## فایل‌ها

`tools/`، `.github/workflows/ci.yml`، `phpcs.xml.dist`، `composer.lock`، `package-lock.json`، `docs/TESTING.md`، `docs/project/STATUS.md`، `docs/evidence/POLWEB-004.md`.

## معیار پذیرش

هر چهار فرمان واقعاً اجرا می‌شوند. package در همین موج pass است. lint و test یا pass هستند یا با not-run یا blocked صادقانه ثبت می‌شوند. job یکپارچه از job کیفیت جداست و actionها SHA ثابت دارند.

## روش اعتبارسنجی

اجرای `npm run lint` و `npm run test` و `npm run package` و `npm run check:integration` و ثبت کد خروج.

## ریسک و بازگشت

SHA تأییدنشده نباید با برچسب major عوض شود. اگر SHA قابل تأیید نباشد job نوشته نمی‌شود و مانع ثبت می‌شود.

## وضعیت

In progress

## نتیجهٔ تست

هنوز در شواهد ثبت نشده است.

## لینک شواهد

`docs/evidence/POLWEB-004.md`
