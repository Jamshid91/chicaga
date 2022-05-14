module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            colors: {
                primary_bg: "#26225E",
                primary_text: "#3A2752",
                text_black: '#2F2F2F',
                white_light: '#fff6',
                black_light: '#0005',
            },
            screens: {
                '2xl': {'max': '1535px'},
                'xl': {'max': '1279px'},
                'lg': {'max': '1023px'},
                'md': {'max': '767px'},
                'sm': {'max': '639px'},
            },
            container: {
                center: true,
                maxWidth: '1920px',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['odd', 'even'],
        },
    },
    plugins: [],
}
