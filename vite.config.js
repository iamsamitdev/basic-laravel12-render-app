import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(() => {

    return {
        plugins: [
            laravel({
                input: ['resources/css/app.css', 'resources/js/app.js'],
                refresh: true,
            }),
            tailwindcss(),
        ],
        server: {
            https: true, // Enable HTTPS
        },
        base: '/build/', // หรือปล่อยว่างเป็น '' เพื่อให้ Vite ใช้ relative path
        build: {
            manifest: true,
            manifestFileName: 'manifest.json',
            outDir: 'public/build',
            emptyOutDir: true,
            assetsDir: '', // ทำให้ assets ไม่อยู่ในโฟลเดอร์ย่อย
            rollupOptions: {
                input: [
                    'resources/css/app.css',
                    'resources/js/app.js',
                ],
            }
        }
    }
})