import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import less from 'rollup-plugin-less';

export default {
    input: 'src/scripts/template-web-library.js',
    output: {
        file: 'build/scripts/template-web-library.js',
        format: 'umd',
        name: 'templateWebLibrary'
    },
    plugins: [
        babel(babelrc()),
        less()
    ]
}
