<?php
/**
 * راه‌اندازی حداقلی قالب.
 *
 * @package PolMagnetic
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * پشتیبانی راست‌چین و دامنهٔ ترجمه.
 */
function pol_magnetic_setup() {
	add_theme_support( 'rtl' );
	load_theme_textdomain( 'pol-magnetic', get_template_directory() . '/languages' );
}
add_action( 'after_setup_theme', 'pol_magnetic_setup' );

/**
 * ویژگی زبان را راست‌چین می‌کند.
 *
 * @param string $output ویژگی‌های فعلی زبان.
 * @return string
 */
function pol_magnetic_language_attributes( $output ) {
	$output = str_replace( array( 'dir="ltr"', "dir='ltr'" ), 'dir="rtl"', $output );
	if ( false === strpos( $output, 'dir=' ) ) {
		$output .= ' dir="rtl"';
	}
	return $output;
}
add_filter( 'language_attributes', 'pol_magnetic_language_attributes' );

add_filter( 'should_load_remote_block_patterns', '__return_false' );
