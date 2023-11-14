<script lang="ts">
    import { marked } from 'marked';
    import cart from "../../store/store";
	import { onDestroy } from 'svelte';
	import { addToCartFunction } from '../../cart-functions';
    export let card: Partial<any>;
    export let hostUrl: string;
    let cartItems: ICartItem[];
    let inCart = false;

    const unsubscribe = cart.subscribe((data) => {
        cartItems = data;
        inCart = !!cartItems.find((item: ICartItem) => item.id === card.id);
    });

    let item = {
        img: `${hostUrl}${card?.attributes?.media?.data[0].attributes.url}`,
        id: card?.id,
        name: card?.attributes?.name,
        description: card?.attributes?.description || '',
        price: card?.attributes?.basePrice
    };

    function addToCart() {
        addToCartFunction(inCart, cart, item);
    }
    onDestroy(unsubscribe);
</script>

<div class="md:max-w-sm rounded overflow-hidden shadow-lg m-4 mb-12">
    <a href="/shop/{item.id}"><img class="w-full" src={item.img} alt={item.name} /></a>
    <div class="px-6 py-4">
        <a href="/shop/{item.id}" tabindex="-1" class="font-bold text-xl mb-2">{item.name}</a>
        <p class="text-gray-700 text-base">{@html marked.parse(item.description)}</p>
        <div class="text-xl my-2">{item.price} Euro</div>
    </div>
    <div class="px-6 pt-4 pb-2 text-center">
        {#if !inCart} 
            <button on:click={addToCart} class="toCart">
                To cart
            </button>
        {:else}
            <button class="inCart disabled">
                In Cart
            </button>
        {/if}
    </div>
</div>




