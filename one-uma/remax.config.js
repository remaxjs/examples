
import { terser } from "rollup-plugin-terser";

module.exports = {
    one: true,
    output: 'dist/' + process.env.REMAX_PLATFORM,
    rollupOptions: (options) => {
        //options.plugins.push();
        return options;
    }
};