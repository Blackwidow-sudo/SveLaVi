import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/ts/app.ts"],
            refresh: true,
        }),
        svelte({
            preprocess: sveltePreprocess(),
        }),
    ],
    resolve: {
        alias: {
            "@": "/resources/ts",
        },
    },
});
