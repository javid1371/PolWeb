<?php
/**
 * Plugin Name: Pol Site Core
 * Description: هستهٔ حداقلی سایت پل. بدون قابلیت محصول.
 * Version: 0.1.0
 * Requires at least: 7.1
 * Requires PHP: 8.4
 * Tested up to: 7.1.3
 * Text Domain: pol-site-core
 * License: GPL-2.0-or-later
 *
 * @package PolSiteCore
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/includes/class-pol-site-core-schema-version.php';

/**
 * اگر نسخهٔ طرح نباشد، آن را روی نسخهٔ فعلی کلاس می‌گذارد.
 */
function pol_site_core_activate() {
	$stored = get_option( Pol_Site_Core_Schema_Version::OPTION_NAME, false );
	if ( 'absent' === Pol_Site_Core_Schema_Version::state( $stored ) ) {
		add_option( Pol_Site_Core_Schema_Version::OPTION_NAME, Pol_Site_Core_Schema_Version::CURRENT );
	}
}
register_activation_hook( __FILE__, 'pol_site_core_activate' );

// غیرفعال‌سازی option را پاک نمی‌کند.
register_deactivation_hook( __FILE__, '__return_null' );
