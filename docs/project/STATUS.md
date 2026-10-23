# وضعیت

موج: اول، مرحلهٔ صفر. شاخه: `cursor/pol-magnetic-site-7c7e`.

| کار | وضعیت |
| --- | --- |
| POLWEB-001 | Review |
| POLWEB-002 | Review |
| POLWEB-003 | Review |
| POLWEB-004 | In progress |
| POLWEB-005 تا POLWEB-010 | Backlog |

کار In progress فقط POLWEB-004 است. اجرای ثبت‌شدهٔ lint و test و package هنوز در شواهد این کار نوشته نشده است.

## مانع wp-env

دلیل: در ۲۳ اکتبر ۲۰۲۶ دیمون Docker بالا نیامد. باینری `docker` نیست، `/var/run/docker.sock` نیست، و systemd در این ماشین PID 1 نیست.

اثر: فعال‌سازی قالب و افزونه روی نصب تمیز وردپرس اجرا نشده است. این مورد blocked است، نه pass و نه fail.

فرمان رفع، بعد از در دسترس بودن دیمون Docker:

```bash
npm ci
npm run check:integration
```

## قدم بعدی

تا وقتی POLWEB-004 بسته نشده، قدم بعدی بستن همین کار است. بعد از آن قدم بعدی دقیقاً POLWEB-005 است.
