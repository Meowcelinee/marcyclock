import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';

const viteConfig: UserConfig = defineConfig({
    server: { port: 3160 }, // im so straight
    plugins: [tailwindcss()],
});

export default viteConfig;
