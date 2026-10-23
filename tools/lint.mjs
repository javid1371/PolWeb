import { existsSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const themeJsonPath = 'themes/pol-magnetic/theme.json';

try {
	const parsed = JSON.parse( readFileSync( themeJsonPath, 'utf8' ) );
	if ( ! parsed || typeof parsed !== 'object' || Array.isArray( parsed ) ) {
		console.error( 'theme.json: fail' );
		process.exit( 1 );
	}
	console.log( 'theme.json: pass' );
} catch ( error ) {
	console.error( `theme.json: fail ${ error.message }` );
	process.exit( 1 );
}

const php = spawnSync( 'php', [ '-v' ], { encoding: 'utf8' } );
if ( php.error || php.status !== 0 ) {
	console.error( 'phpcs: not-run' );
	process.exit( 1 );
}

const phpcs = 'vendor/bin/phpcs';
if ( ! existsSync( phpcs ) ) {
	console.error( 'phpcs: not-run' );
	process.exit( 1 );
}

const result = spawnSync( 'php', [ phpcs ], { encoding: 'utf8' } );
process.stdout.write( result.stdout || '' );
process.stderr.write( result.stderr || '' );
if ( result.status !== 0 ) {
	console.error( 'phpcs: fail' );
	process.exit( result.status || 1 );
}

console.log( 'phpcs: pass' );
