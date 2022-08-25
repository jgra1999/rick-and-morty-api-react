import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: 'https://jgra1999.github.io/rick-and-morty-api-react/',
	plugins: [react()],
});
