import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import less from 'rollup-plugin-less';

export default {
    input: 'src/scripts/template-library.js',
    output: {
        file: 'build/scripts/template-library.js',
        format: 'umd',
        name: 'templateLibrary'
    },
    plugins: [
        babel(babelrc()),
        less()
    ]
}