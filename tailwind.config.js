/** @type {import('tailwindcss').Config} */

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            poppins: ['Poppins'],
            montserrat: ['Montserrat'],
        },
        colors: {
            je: {
                magical: {
                    fata_morgana: '#efe9ce',
                    sonnenglanz: '#ffdd00',
                    korallenriff: '#ff6347',
                },
                mystical: {
                    waldtiefe: {
                        100: '#009d5f',
                        200: '#009058',
                        300: '#008451',
                        400: '#00784a',
                        500: '#006d44',
                        600: '#00613e',
                        700: '#005538',
                        800: '#004834',
                        900: '#003c2e',
                    },
                    schwarzgruen: {
                        100: '#008b7f',
                        200: '#007f73',
                        300: '#007367',
                        400: '#00685c',
                        500: '#005d56',
                        600: '#00534c',
                        700: '#004a43',
                        800: '#00413a',
                        900: '#003831',
                    },
                    nachtblau: {
                        100: '#1e283f',
                        200: '#19233d',
                        300: '#162037',
                        400: '#141d31',
                        500: '#111a2b',
                        600: '#0f1726',
                        700: '#0e1521',
                        800: '#0c131d',
                        900: '#0a1119',
                    },
                },
                misty: {
                    sturmwolke: '#c0c0c0',
                    nebelmeer: '#7a8b8b',
                },
                luminous: {
                    mondlicht: '#ffffff',
                    nebellicht: '#e0e0e0',
                },
            },
            gruene: {
                tanne: '#005538',
                klee: '#008939',
                grashalm: '#8abd24',
                sand: '#f5f1e9',
                himmel: '#0ba1dd',
                sonne: '#fff17a',
            },
            gingco: {
                blau: '#00dcfe'
            },
        },
        extend: {},
    },
    plugins: []
};
