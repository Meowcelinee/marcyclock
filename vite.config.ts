import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [tailwindcss()],
}) satisfies UserConfig;
