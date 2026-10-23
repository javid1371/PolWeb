<?php
/**
 * Bootstrap برای PHPUnit بدون وردپرس.
 *
 * @package PolSiteCore
 */

if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

require dirname( __DIR__ ) . '/includes/class-pol-site-core-schema-version.php';
