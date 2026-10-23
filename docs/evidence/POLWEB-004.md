# شواهد POLWEB-004

تاریخ شروع: ۲۰۲۶-۱۰-۲۳.

## محیط

واقعیت Docker و PHP در `docs/adr/0007-runtime-environment.md` است. خلاصه: PHP CLI محلی `8.3.6`، پین wp-env و CI همان `8.4`، wp-env محلی blocked.

## SHA گردش کار

در ۲۰۲۶-۱۰-۲۳ از API رسمی git هر مخزن اکشن خوانده شد. برچسب major در فایل workflow نیست.

- `actions/checkout` برچسب `v7.0.1`، منتشرشده `2026-07-20`، کامیت `3d3c42e5aac5ba805825da76410c181273ba90b1`. برچسب سبک و مستقیم به همین کامیت است.
- `actions/setup-node` برچسب `v7.1.0`، منتشرشده `2026-10-08`، کامیت `949feb2413d6458794dcd2491c4babbbce0c15c1`.
- `shivammathur/setup-php` برچسب `2.40.0`، منتشرشده `2026-10-08`. شیء برچسب `4424c9aab975b57bd706ee5a39c6b4334d6e4f60` به کامیت `eb7c497e18156a6bbabfef1d3a82760b9eda3962` اشاره می‌کند. workflow کامیت را پین کرده است، نه شیء برچسب را.

## اجرای فرمان‌ها

۲۳ اکتبر ۲۰۲۶، روی همین ماشین. Node نصب‌شده `v22.23.4` است و پین `22.23.3` عوض نشده.

| فرمان | کد خروج | نتیجه | خروجی کوتاه |
| --- | --- | --- | --- |
| `npm run lint` | ۰ | pass | `theme.json: pass` و `phpcs: pass` |
| `npm run test` | ۰ | pass | PHPUnit `12.5.40`، سه آزمون، PHP `8.3.6` |
| `npm run package` | ۰ | pass | `dist/pol-magnetic-0.1.0.zip` و `dist/pol-site-core-0.1.0.zip` |
| `npm run check:integration` | ۲ | blocked | `blocked: Docker daemon is not available` |

ZIP افزونه فقط `pol-site-core.php` و کلاس نسخه را دارد. `tests` و `pol-demo` داخل آن نیستند.

اندازهٔ صفحهٔ واقعی: not run. دادهٔ میدانی وجود ندارد.

## GitHub Actions

اجرای pull request [39957975615](https://github.com/javid1371/PolWeb/actions/runs/39957975615) با نتیجهٔ success تمام شد. هر دو job موفق بودند.

- `lint test package`: Node `v22.23.3`، PHP `8.4.27`، Composer `2.10.3`. خروجی lint و test و package برابر pass.
- `wp-env activation`: `wp theme activate pol-magnetic` قالب Pol Magnetic را فعال کرد. `pol-site-core` و `pol-demo` و `autodescription` از قبل فعال بودند. سپس `check:integration: pass` ثبت شد، یعنی `blog_public` برابر ۰ و `pol_site_core_schema_version` برابر ۱ بود.

اجرای push [39957956961](https://github.com/javid1371/PolWeb/actions/runs/39957956961) هم success بود. این نتیجه جایگزین blocked محلی نمی‌شود.
