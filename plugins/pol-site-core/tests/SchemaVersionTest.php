<?php
/**
 * رفتار مقایسهٔ نسخهٔ طرح، بدون تکرار عدد نسخه در انتظارها.
 *
 * @package PolSiteCore
 */

use PHPUnit\Framework\TestCase;

/**
 * نسخهٔ غایب، نسخهٔ فعلی، و نسخهٔ قدیمی‌تر.
 */
class SchemaVersionTest extends TestCase {

	/**
	 * نبودن option وضعیت غایب است.
	 */
	public function test_missing_value_is_absent() {
		$this->assertSame( 'absent', Pol_Site_Core_Schema_Version::state( false ) );
		$this->assertSame( 'absent', Pol_Site_Core_Schema_Version::state( null ) );
		$this->assertNotSame(
			'current',
			Pol_Site_Core_Schema_Version::state( false )
		);
	}

	/**
	 * مقدار برابر با ثابت کلاس، چه عدد و چه رشتهٔ ذخیره‌شده در option، فعلی است.
	 */
	public function test_value_equal_to_class_current_is_current() {
		$current = Pol_Site_Core_Schema_Version::CURRENT;
		$this->assertSame( 'current', Pol_Site_Core_Schema_Version::state( $current ) );
		$this->assertSame( 'current', Pol_Site_Core_Schema_Version::state( (string) $current ) );
	}

	/**
	 * مقدار کمتر از ثابت کلاس نیاز به مهاجرت بعدی را علامت می‌زند و داده را عوض نمی‌کند.
	 */
	public function test_older_value_marks_migration_and_does_not_change_input() {
		$older = Pol_Site_Core_Schema_Version::CURRENT - 1;
		$this->assertLessThan( Pol_Site_Core_Schema_Version::CURRENT, $older );
		$this->assertSame( 'migration_required', Pol_Site_Core_Schema_Version::state( $older ) );
		$this->assertSame( 'migration_required', Pol_Site_Core_Schema_Version::state( (string) $older ) );
		$this->assertSame( 'migration_required', Pol_Site_Core_Schema_Version::state( $older ) );
	}
}
