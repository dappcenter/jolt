/* imports */
import { terser } from "rollup-plugin-terser";

/* build config */
export default {
    input: "src/main.js",
    output: [
        {
            file: "dist/esm/jolt.js",
            format: "esm",
            banner: "/* Copyright (c) 2020 Outwalk Studios */"
        },
        {
            file: "dist/cjs/jolt.js",
            format: "cjs",
            banner: "/* Copyright (c) 2020 Outwalk Studios */"
        },
        {
            file: "dist/umd/jolt.js",
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