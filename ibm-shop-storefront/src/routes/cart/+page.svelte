<script lang="ts">
    import { onDestroy } from "svelte";
    import cart from "../../store/store";
    import { PUBLIC_API_HOST } from '$env/static/public'

    let visibleCart: ICartItem[] = [];
    const unsubscribe = cart.subscribe((items: ICartItem[]) => {
        visibleCart = items;
    });

    function removeFromCart(id: number) {
        const itemId = visibleCart.findIndex((item: ICartItem) => item.id === id);
        visibleCart.splice(itemId, 1);
        cart.update((state: ICartItem[]) => visibleCart);
    }
    
    async function checkout() {
        const cartPrice = visibleCart.reduce((accumulator, cartItem) => accumulator + cartItem.price, 0);
        const itemsInOrder = visibleCart.map(cartItem => {
            return {
                "item": [cartItem.id],
                "amount": 1
            }
        });
        
        const dataToSend = {
            "data": {
                "address": "Some address",
                "itemsInOrder": itemsInOrder,
                "paid": false,
                "delivered": false,
                "recipe": cartPrice
            }
        }
        await fetch(`${PUBLIC_API_HOST}/api/orders`,
            {
            method: 'POST',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify(dataToSend),
            cache: 'default'
        });
        cart.update((state: ICartItem[]) => []);
    }

    onDestroy(unsubscribe);
</script>
<div class="content p-4">
    <h1>Cart</h1>
    <ul class="mt-8">
        {#each visibleCart as card}
            <li class="mb-4">
                <div class="flex content-center gap-12 items-center">
                    <div><img class="w-[100px]" src={card.img} alt={card.name} /></div>
                    <div>{card.name}</div>
                    <div>{card.price} Euro</div>
                    <div>
                        <button class="toCart" on:click={() => removeFromCart(card.id)}>remove from cart</button>
                    </div>
                </div>
            </li>
        {/each}
        {#if visibleCart.length === 0}
            <span>No items in cart</span>
        {/if}
    </ul>
    <button class="toCart mt-8" on:click={checkout}>Checkout</button>
</div>