---
name: prepare-release
description: ساخت ZIPها و مرور چک‌لیست بدون انتشار
---

`npm run package` را اجرا کن. دو ZIP باید در `dist/` باشند: قالب `pol-magnetic` و افزونهٔ `pol-site-core`.

خروجی ZIP را با `docs/RELEASE.md` تطبیق بده. demo و tests و node_modules نباید داخل ZIP هسته باشند.

انتشار، برچسب، DNS و دست‌کاری production انجام نشود. اگر فرمان fail شد، همان را گزارش کن.
