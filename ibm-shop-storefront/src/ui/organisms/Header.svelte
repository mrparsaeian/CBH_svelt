<script lang="ts">
	import { onDestroy } from "svelte";
    import cart from "../../store/store";
    let cartItems: ICartItem[];
    let cartCount = 0;
    const unsubscribe = cart.subscribe((data) => {
        cartItems = data;
        cartCount = cartItems.length;
    });

    onDestroy(unsubscribe);
</script>
<div class="content flex justify-between p-4">
    <a href="/" class="border-solid border-2 hover:border-dotted p-4">Home</a>
    <a href="/cart" class="border-solid border-2 hover:border-dotted p-4">Shopping basket: {cartCount}</a>
</div>