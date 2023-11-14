<script>
     import Card from '../ui/molecules/Card.svelte';
     export let data;
</script>
<div class="content">
     <div class="block md:flex justify-between w-[100%]">
          {#each data.data as card}
               <Card card={card} hostUrl={data.API_HOST} />
          {/each}
     </div>
</div>
<style lang="scss">
     :global(h1) {
          @apply text-xl;
      }
  </style>