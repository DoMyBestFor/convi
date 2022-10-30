import pkg from './package.json';

export default {
	external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)],
};
