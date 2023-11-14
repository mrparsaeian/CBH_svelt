import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store'

let initialState: ICartItem[] = [];
if (browser) {
    initialState = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart') as string) : initialState;
}
const cart: Writable<ICartItem[]> = writable(initialState);

cart.subscribe((items) => {
    if (browser) {
        sessionStorage.setItem('cart', JSON.stringify(items));
    }
});
export default cart;