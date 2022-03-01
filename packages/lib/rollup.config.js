import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

import pkg from './package.json';


export default {
    input: 'src/index.js',
    output: [{
        file: pkg.main,
        format: 'cjs'
    }, {
        file: pkg.module,
        format: 'esm'
    }],
    plugins: [
        nodeResolve({
            extensions: ['.js', '.jsx']
        }),
        commonjs(),
        babel({
            include: 'src/**/*',
            presets: [
                '@babel/preset-env',
                '@babel/preset-react'
            ],
            comments: false
        })
    ]
};
