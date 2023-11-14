<script lang="ts">
    import { marked } from 'marked';
	import cart from '../../../store/store';
	import { onDestroy } from 'svelte';
	import { addToCartFunction } from '../../../cart-functions';
    export let data;

    let inCart = false;

    const unsubscribe = cart.subscribe((cartItems) => {
        inCart = !!cartItems.find((item: ICartItem) => item.id === data.data.id);
    });

    let itemProduced = {
        img: `${data.API_HOST}${data.data?.attributes?.media?.data[0].attributes.url}`,
        id: data.data?.id,
        name: data.data?.attributes?.name,
        description: data.data?.attributes?.description || '',
        price: data.data?.attributes?.basePrice
    };
    
    function addToCart() {
        addToCartFunction(inCart, cart, itemProduced);
    }

    onDestroy(unsubscribe);
</script>
<div class="content p-4">
    <div class="flex">
        <div class="mr-14 max-w-[30%]">
            <img class="w-full" src={itemProduced.img} alt={itemProduced.name} />
        </div>
        <div>
            <h1 class="text-xl">{itemProduced.name}</h1>
            <p class="mb-8">{@html marked.parse(itemProduced.description)}</p>
            <div class="mb-8">
                <h2>Parameters:</h2>
                <div>Color: {data.data.attributes.Parameters.color}</div>
                <div>Inches: {data.data.attributes.Parameters.inches}"</div>
            </div>
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
</div>
