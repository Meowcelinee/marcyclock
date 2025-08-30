import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    server: {
        port: 3160, // im so straight
    },

    plugins: [tailwindcss()],
}) satisfies UserConfig;
