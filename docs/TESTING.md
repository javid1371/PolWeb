# آزمون

| فرمان | انتظار |
| --- | --- |
| `npm run lint` | JSON بودن `theme.json` و PHPCS. اگر PHP یا PHPCS نباشد: خروج غیر صفر و `not-run`. |
| `npm run test` | PHPUnit منطق نسخهٔ طرح. اگر PHP یا PHPUnit نباشد: خروج غیر صفر و `not-run`. |
| `npm run package` | دو ZIP در `dist/`، بدون demo و tests و node_modules. به Docker نیاز ندارد. |
| `npm run check:integration` | اگر Docker یا wp-env نباشد: خروج ۲ و `blocked`. اگر باشد: فعال‌سازی قالب و هر دو افزونه روی نصب تمیز. |

وضعیت مجاز گزارش: pass، fail، not-run، blocked. اجرا‌نشده pass نیست.

فعال‌سازی واقعی وردپرس بدون Docker نه fail است و نه pass؛ blocked است. دلیل و فرمان رفع در `docs/project/STATUS.md` می‌ماند.

آزمون نسخهٔ طرح رفتار را می‌سنجد: مقدار غایب، مقدار برابر با ثابت کلاس، و مقدار کمتر که نیاز به مهاجرت بعدی را علامت می‌زند. خود مهاجرت نوشته نمی‌شود. پوشهٔ `tests` در `phpcs.xml.dist` استثنا شده است تا نام کلاس PHPUnit با قواعد نام فایل وردپرس قاطی نشود.
