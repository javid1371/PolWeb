# وضعیت

موج: اول، مرحلهٔ صفر. شاخه: `cursor/pol-magnetic-site-7c7e`.

| کار | وضعیت |
| --- | --- |
| POLWEB-001 | Done |
| POLWEB-002 | Done |
| POLWEB-003 | Done |
| POLWEB-004 | Done |
| POLWEB-005 تا POLWEB-010 | Backlog |

کار In progress وجود ندارد.

## مانع wp-env

دلیل: در ۲۳ اکتبر ۲۰۲۶ دیمون Docker بالا نیامد. باینری `docker` نیست، `/var/run/docker.sock` نیست، و systemd در این ماشین PID 1 نیست.

اثر روی همین ماشین: فعال‌سازی وردپرس اجرا نشده و blocked است، نه pass و نه fail. در GitHub Actions همان فرمان pass شده است. جزئیات در `docs/evidence/POLWEB-004.md`.

فرمان رفع، بعد از در دسترس بودن دیمون Docker:

```bash
npm ci
npm run check:integration
```

## نتیجهٔ فرمان‌ها در ۲۳ اکتبر ۲۰۲۶

| فرمان | کد خروج | نتیجه |
| --- | --- | --- |
| `npm run lint` | ۰ | pass |
| `npm run test` | ۰ | pass روی PHP CLI `8.3.6`، نه روی PHP `8.4` |
| `npm run package` | ۰ | pass |
| `npm run check:integration` | ۲ | blocked |

## قدم بعدی

POLWEB-005
