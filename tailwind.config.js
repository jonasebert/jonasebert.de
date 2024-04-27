/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'je-gray': {
                    100: '#abb2bf',
                    200: '#949ca9',
                    300: '#7e8694',
                    400: '#676f7e',
                    500: '#161618',
                    600: '#131315',
                    700: '#0f0f10',
                    800: '#0b0b0c',
                    900: '#060607',
                },
                'je-green': {
                    100: '#a3b5a6',
                    200: '#8ca392',
                    300: '#768f7e',
                    400: '#5f7b6a',
                    500: '#293731',
                    600: '#25332c',
                    700: '#202e26',
                    800: '#1c2921',
                    900: '#17241b',
                },
                'je-sand': '#efe9ce',
                'je-gingco': '#00dcfe',
                'je-gruene': {
                    'tanne': '#005538',
                    'klee': '#008939',
                    'grashalm': '#8abd24',
                    'sand': '#f5f1e9',
                    'himmel': '#0ba1dd',
                    'sonne': '#fff17a',
                }
            },
        },
    },
    plugins: []
};
