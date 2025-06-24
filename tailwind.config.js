//tailwind.config.js
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                coshend: {
                    orange: '#F97316',
                    blue: '#2563EB',
                    yellow: '#FACC15',
                    brown: '#8B5E3C'
                }
            }
        },
    },
    plugins: [],
}