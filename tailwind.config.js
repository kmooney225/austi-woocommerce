module.exports = {
	purge: [
		'./src/components/**/*.js',
		'./pages/**/*.js'],
	theme: {
		extend: {
			colors: {
				current: 'currentColor',
				'yellow-green': '#ECF87F',
				'lime-green': '#81B622',
				'olive': '#3D550C',
				'olive-green': '#59981A',
			},
		},
	},
	variants: {},
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
	]
}