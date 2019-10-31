import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';

import packageDetails from './package.json';

export default {
    input: 'src/scripts/template-web-library.js',
    output: {
        file: packageDetails.main,
        format: 'umd',
        name: 'templateWebLibrary'
    },
    plugins: [
        external(),
        resolve(),
        commonjs(),
        babel(),
        process.env.NODE_ENV === 'production' && uglify(),
        postcss({
            extract: true,
            extensions: [
                '.less'
            ]
        })
    ]
}
