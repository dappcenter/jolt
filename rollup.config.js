/* imports */
import { terser } from "rollup-plugin-terser";

/* build config */
export default {
    input: "src/main.js",
    output: [
        {
            file: "dist/jolt.esm.js",
            format: "esm",
            banner: "/* Copyright (c) 2020 Outwalk Studios */"
        },
        {
            file: "dist/jolt.cjs.js",
            format: "cjs",
            banner: "/* Copyright (c) 2020 Outwalk Studios */"
        },
        {
            file: "dist/jolt.umd.js",
            format: "umd",
            name: "Jolt",
            plugins: [
                terser({
                    output: {
                        preamble: "/* Copyright (c) 2020 Outwalk Studios */"
                    }
                })
            ]
        }

    ]
}