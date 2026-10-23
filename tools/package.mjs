import { existsSync, mkdirSync, rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

function fail( message ) {
	console.error( `package: fail (${ message })` );
	process.exit( 1 );
}

const zip = spawnSync( 'zip', [ '-v' ], { encoding: 'utf8' } );
if ( zip.error || zip.status !== 0 ) {
	fail( 'zip command missing' );
}

rmSync( 'dist', { recursive: true, force: true } );
mkdirSync( 'dist' );

function runZip( cwd, args ) {
	const result = spawnSync( 'zip', args, { cwd, encoding: 'utf8' } );
	if ( result.status !== 0 ) {
		process.stderr.write( result.stderr || '' );
		fail( `zip exited ${ result.status }` );
	}
}

runZip(
	'themes',
	[ '-r', '../dist/pol-magnetic-0.1.0.zip', 'pol-magnetic', '-x', '*.DS_Store' ]
);
runZip(
	'plugins',
	[
		'-r',
		'../dist/pol-site-core-0.1.0.zip',
		'pol-site-core',
		'-x',
		'pol-site-core/tests/*',
		'-x',
		'*/node_modules/*',
		'-x',
		'*/vendor/*',
	]
);

function listing( file ) {
	const result = spawnSync( 'unzip', [ '-Z1', file ], { encoding: 'utf8' } );
	if ( result.status !== 0 ) {
		fail( `cannot list ${ file }` );
	}
	return result.stdout.split( '\n' ).filter( Boolean );
}

const themeFiles = listing( 'dist/pol-magnetic-0.1.0.zip' );
const pluginFiles = listing( 'dist/pol-site-core-0.1.0.zip' );

for ( const required of [
	'pol-magnetic/style.css',
	'pol-magnetic/theme.json',
	'pol-magnetic/templates/index.html',
	'pol-magnetic/parts/header.html',
	'pol-magnetic/parts/footer.html',
] ) {
	if ( ! themeFiles.includes( required ) ) {
		fail( `missing ${ required }` );
	}
}

if ( ! pluginFiles.includes( 'pol-site-core/pol-site-core.php' ) ) {
	fail( 'missing plugin bootstrap' );
}

const forbidden = pluginFiles.filter( ( file ) =>
	file.includes( '/tests/' ) ||
	file.includes( 'node_modules' ) ||
	file.includes( 'vendor/' ) ||
	file.includes( 'pol-demo' )
);
if ( forbidden.length > 0 ) {
	fail( `excluded path in plugin zip: ${ forbidden.join( ', ' ) }` );
}

if ( existsSync( 'dist/pol-demo-0.1.0.zip' ) ) {
	fail( 'demo zip must not be built' );
}

console.log( 'package: pass' );
console.log( 'dist/pol-magnetic-0.1.0.zip' );
console.log( 'dist/pol-site-core-0.1.0.zip' );
