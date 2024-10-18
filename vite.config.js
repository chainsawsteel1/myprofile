import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			registerType: 'autoUpdate',
			manifest: {
				name: 'chiansのサイト',
				short_name: 'csws',
				description: 'chainsの自己満ウェブサイト',
				icons: [
					{
						src: '/appicon/icon-192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/appicon/icon-512.png',
						sizes: '512x512',
						type: 'image/png'
					},
					{
						src: '/appicon/icon-512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable'
					}
				],
				start_url: 'index.html',
				display: 'standalone',
				background_color: '#26233f',
				theme_color: '#c9c1ff',
				lang: 'ja',
			}
		})
	]
});
