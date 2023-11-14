import type { Writable } from "svelte/types/runtime/store";

function addToCartFunction(inCart: boolean, cart: Writable<ICartItem[]>, item: ICartItem) {
    if (!inCart) {
            cart.update((state: ICartItem[]) => [item, ...state ]);
    }
}

export { addToCartFunction }