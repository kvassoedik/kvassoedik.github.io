import typescript from '@rollup/plugin-typescript';

import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'src/comic.ts',
    output: { file: 'dist/bundle.js' },
    plugins: [typescript(), resolve()],

};
