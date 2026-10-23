# شواهد POLWEB-002

تاریخ: ۲۰۲۶-۱۰-۲۳.

سند قواعد Cursor در `https://cursor.com/docs/rules` فرمت `.mdc` را با `alwaysApply` و `globs` رشته‌ای توضیح می‌دهد. چند الگو با ویرگول جدا می‌شوند، نه با آرایه.

فرمان‌ها هنوز در سند رسمی زنده‌اند: Customize Cursor فرمان را فایل Markdown قابل فراخوانی با `/` می‌داند، deeplink مسیر `.cursor/commands` را نام می‌برد، و مرجع پلاگین frontmatter با `name` و `description` را نشان می‌دهد. صفحهٔ Skills مهاجرت اختیاری با `/migrate-to-skills` را توضیح می‌دهد و مسیر فرمان را غیرفعال اعلام نمی‌کند.

به همین دلیل پنج فرمان در `.cursor/commands` ساخته شدند و فایل نمایشی جایگزین ساخته نشد.

فقط `00-project.mdc` مقدار `alwaysApply: true` دارد.
