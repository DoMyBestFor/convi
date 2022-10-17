// webpack.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	entry: {
		main: ['./src/index.ts'],
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index.js',
	},
	module: {
		rules: [
			{
				test: /\.ts|\.tsx$/,
				include: path.resolve(__dirname, './src'),
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-typescript'],
						},
					},
					'ts-loader',
				],
			},
		],
	},
	watch: true,
};
