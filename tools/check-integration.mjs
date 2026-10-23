import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

function blocked( reason ) {
	console.error( `blocked: ${ reason }` );
	process.exit( 2 );
}

const docker = spawnSync( 'docker', [ 'info' ], { encoding: 'utf8' } );
if ( docker.error || docker.status !== 0 || ! existsSync( '/var/run/docker.sock' ) ) {
	blocked( 'Docker daemon is not available' );
}

const wpEnv = 'node_modules/.bin/wp-env';
if ( ! existsSync( wpEnv ) ) {
	blocked( 'wp-env is not installed' );
}

function run( args ) {
	return spawnSync( wpEnv, args, { encoding: 'utf8' } );
}

const start = run( [ 'start' ] );
process.stdout.write( start.stdout || '' );
process.stderr.write( start.stderr || '' );
if ( start.status !== 0 ) {
	console.error( 'check:integration: fail' );
	process.exit( start.status || 1 );
}

function wp( args ) {
	const result = run( [ 'run', 'cli', 'wp', ...args ] );
	process.stdout.write( result.stdout || '' );
	process.stderr.write( result.stderr || '' );
	if ( result.status !== 0 ) {
		console.error( 'check:integration: fail' );
		process.exit( result.status || 1 );
	}
	return ( result.stdout || '' ).trim();
}

wp( [ 'theme', 'activate', 'pol-magnetic' ] );
wp( [ 'plugin', 'activate', 'pol-site-core', 'pol-demo', 'autodescription' ] );

const theme = wp( [ 'theme', 'list', '--status=active', '--field=name' ] );
const plugins = wp( [ 'plugin', 'list', '--status=active', '--field=name' ] );
const blogPublic = wp( [ 'option', 'get', 'blog_public' ] );
const schema = wp( [ 'option', 'get', 'pol_site_core_schema_version' ] );

const activePlugins = plugins.split( /\s+/ );
const missing = [ 'pol-site-core', 'pol-demo', 'autodescription' ].filter(
	( slug ) => ! activePlugins.includes( slug )
);

if ( theme !== 'pol-magnetic' || missing.length > 0 || blogPublic !== '0' || schema !== '1' ) {
	console.error( 'check:integration: fail' );
	console.error(
		JSON.stringify( {
			theme,
			missing,
			blogPublic,
			schema,
		} )
	);
	process.exit( 1 );
}

console.log( 'check:integration: pass' );
