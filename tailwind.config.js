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
				'smokey-white':'#f2f2f2',
				'dark-green': '#202000',
				'sand-dollar': '#EFCFA0',
				'gold': '#E1A140',
				'burnt-orange': '#914110',
				'burgundy': '#532200',
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