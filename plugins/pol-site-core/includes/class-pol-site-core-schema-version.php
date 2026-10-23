<?php
/**
 * خواندن و مقایسهٔ نسخهٔ طرح داده.
 *
 * @package PolSiteCore
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * وضعیت نسخهٔ ذخیره‌شده نسبت به نسخهٔ فعلی.
 */
class Pol_Site_Core_Schema_Version {

	const OPTION_NAME = 'pol_site_core_schema_version';

	const CURRENT = 1;

	/**
	 * مقدار خام option را به یک وضعیت تبدیل می‌کند.
	 *
	 * مهاجرت انجام نمی‌شود. نسخهٔ قدیمی‌تر فقط علامت می‌خورد.
	 *
	 * @param mixed $raw مقدار ذخیره‌شده یا false وقتی option نیست.
	 * @return string absent، current، migration_required یا newer.
	 */
	public static function state( $raw ) {
		if ( false === $raw || null === $raw || '' === $raw ) {
			return 'absent';
		}

		if ( ! is_int( $raw ) && ! ( is_string( $raw ) && 1 === preg_match( '/^-?[0-9]+$/', $raw ) ) ) {
			return 'absent';
		}

		$stored = (int) $raw;
		if ( self::CURRENT === $stored ) {
			return 'current';
		}
		if ( $stored < self::CURRENT ) {
			return 'migration_required';
		}
		return 'newer';
	}
}
