#!/bin/sh
# بعد از بالا آمدن wp-env، ایندکس شدن محیط محلی را خاموش می‌کند.
set -eu
cd "$(dirname "$0")/.."
exec ./node_modules/.bin/wp-env run cli wp option update blog_public 0
