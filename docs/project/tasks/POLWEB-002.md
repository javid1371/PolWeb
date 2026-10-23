# POLWEB-002

## مسئله و خروجی

عامل بدون قاعدهٔ پایدار و فرمان تکراری کار می‌کند. خروجی هفت قاعدهٔ `.mdc` و پنج فرمان قابل اجراست.

## محدوده و خارج از محدوده

داخل محدوده: `.cursor/rules` و `.cursor/commands`. خارج از محدوده: جایگزین کردن lint و CI با متن قاعده.

## وابستگی

POLWEB-001

## فایل‌ها

`.cursor/rules/00-project.mdc` تا `60-workflow.mdc` و `.cursor/commands/` برای `next-task`، `quality-check`، `review-changes`، `prepare-release`، `handoff`.

## معیار پذیرش

فقط `00-project.mdc` مقدار `alwaysApply: true` دارد. بقیه `false` هستند و `globs` رشتهٔ جداشده با ویرگول است. هر فرمان `name` و `description` دارد.

## روش اعتبارسنجی

خواندن frontmatter قاعده‌ها و فرمان‌ها. تطبیق با سند قواعد Cursor.

## ریسک و بازگشت

قاعدهٔ alwaysApply اضافی زمینه را شلوغ می‌کند. بازگشت یعنی همان فایل حذف یا محدود شود، نه بی‌اثر کردن CI.

## وضعیت

Done

## نتیجهٔ تست

بررسی frontmatter در شواهد. آزمون خودکار برای فرمان‌ها تعریف نشده و not run است.

## لینک شواهد

`docs/evidence/POLWEB-002.md`
