// store.js
import { writable } from "svelte/store";

// Personal
export const name = "Jonas Ebert";
export const pronouns = 'xier/xies';
export const address = {
    street: 'Postfach 5835',
    zipcode: '38049',
    city: 'Braunschweig',
    country: 'Deutschland'
};
export const contact = {
    tel: '+49 5307 9402 831',
    fax: '+49 3222 5002 428',
    mail: 'contact@jonasebert.de',
    web: '/contact'
}

// Pictures
// Logo
export const logo = '/logo/logo_500x100.png';
export const logo_clear = '/logo/logo_500x100_clear.png';
export const logo_small = '/logo/logo_500x500.png';
export const logo_small_clear = '/logo/logo_500x500_clear.png';

// Image Context Menu
export function handleContextMenu(event) {
    event.preventDefault();
}