<?php
/**
 * Plugin Name: Pol Demo
 * Description: افزونهٔ توسعه. در این موج داده‌ای نمی‌سازد و داخل ZIP انتشار نیست.
 * Version: 0.1.0
 * Requires at least: 7.1
 * Requires PHP: 8.4
 * Tested up to: 7.1.3
 * Text Domain: pol-demo
 * License: GPL-2.0-or-later
 *
 * @package PolDemo
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * در production فقط یک خط لاگ می‌نویسد و هیچ داده‌ای نمی‌سازد.
 */
function pol_demo_boot() {
	if ( function_exists( 'wp_get_environment_type' ) && 'production' === wp_get_environment_type() ) {
		error_log( 'pol-demo: seeding refused because WP_ENVIRONMENT_TYPE is production.' );
		return;
	}
}
add_action( 'plugins_loaded', 'pol_demo_boot' );
