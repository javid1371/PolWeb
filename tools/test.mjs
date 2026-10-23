import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const php = spawnSync( 'php', [ '-v' ], { encoding: 'utf8' } );
if ( php.error || php.status !== 0 ) {
	console.error( 'phpunit: not-run' );
	process.exit( 1 );
}

const phpunit = 'vendor/bin/phpunit';
if ( ! existsSync( phpunit ) ) {
	console.error( 'phpunit: not-run' );
	process.exit( 1 );
}

const result = spawnSync( 'php', [ phpunit ], { encoding: 'utf8' } );
process.stdout.write( result.stdout || '' );
process.stderr.write( result.stderr || '' );
if ( result.status !== 0 ) {
	console.error( 'phpunit: fail' );
	process.exit( result.status || 1 );
}

console.log( 'phpunit: pass' );
