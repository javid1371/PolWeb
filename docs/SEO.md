# سئو

مالک title، meta description، canonical، robots، sitemap، Open Graph و structured data افزونهٔ The SEO Framework است. قالب این خروجی‌ها را تولید نمی‌کند.

قالب فقط H1، سلسله‌مراتب عنوان و لینک HTML را مالک است. BreadcrumbList در قالب ساخته نمی‌شود.

جست‌وجوی داخلی noindex است. این قانون در robots.txt نوشته نمی‌شود، چون robots.txt جای noindex یک مسیر پویا نیست.

محیط محلی قابل ایندکس نیست. `blog_public` با `tools/wp-env-after-start.sh` از lifecycle اسکریپت wp-env روی ۰ گذاشته می‌شود. تا وقتی wp-env بالا نیامده، این تنظیم فقط در پیکربندی است و روی یک نصب زنده بررسی نشده است.
