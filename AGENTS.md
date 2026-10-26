# راهنمای عامل

## ترتیب خواندن

1. `.cursor/rules/00-project.mdc`
2. `docs/project/STATUS.md`
3. `docs/PROJECT.md` و `docs/ARCHITECTURE.md`
4. `docs/adr/0001` تا `docs/adr/0007`
5. پیش از تغییر مرتبط: `docs/SEO.md`، `docs/PERFORMANCE.md`، `docs/CONTENT-MODEL.md`
6. `docs/TESTING.md` پیش از ادعای pass

`docs/DESIGN-SYSTEM.md`، `docs/BLOCK-CATALOG.md`، `docs/EDITOR-GUIDE.md` و `docs/RELEASE.md` در این موج فقط محدودهٔ موج بعد هستند.

## مرز موج‌ها

- موج اول، مرحلهٔ صفر: اسکلت مخزن، پین‌ها، قواعد، کارها، اسکریپت‌ها، قالب و دو افزونهٔ حداقلی.
- از POLWEB-005 به بعد: سیستم طراحی، صفحات، منبع، فرم محلی و چک‌لیست انتشار. تا وقتی کارشان Ready نشده و از STATUS انتخاب نشده، ساخته نمی‌شوند.

انتشار عمومی، DNS، production، فرم واقعی و سرویس خارجی خارج از هر دو موجِ فعلی است.

## Cursor Cloud specific instructions

نصب محیط این‌ها را آماده می‌کند: PHP CLI `8.4`، Composer `2.10.3`، و Docker CE با درایور `fuse-overlayfs` و `iptables-legacy`. Node روی تصویر `v22.23.4` و npm `10.9.9` است. پین مخزن در `.nvmrc` همان `22.23.3` می‌ماند. `npm ci` هشدار `EBADENGINE` می‌دهد و همین هشدار خروج را غیرصفر نمی‌کند.

`start` دیمون را با `sudo service docker start` بالا می‌آورد، بعد `wp-env start` می‌کند. `systemctl` اینجا PID 1 نیست. کاربر `ubuntu` در گروه `docker` است. اگر `/tmp/cursor/start-user/` نباشد، `start` در این بوت اجرا نشده است.

فرمان‌ها از ریشهٔ مخزن، همان فهرست `README.md`:

- `npm ci`
- `composer install --no-interaction --prefer-dist`
- `npm run lint`
- `npm run test`
- `npm run package`
- `npm run check:integration`

سایت محلی `http://127.0.0.1:8888` است. ورود مدیریت پیش‌فرض wp-env است: `admin` / `password`.
