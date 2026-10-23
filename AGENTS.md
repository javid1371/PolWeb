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
