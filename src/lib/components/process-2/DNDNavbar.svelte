<script>
	import DNDNavMainItem from './DNDNavMainItem.svelte';
    // import NavMainItem from './navMainItem.svelte';
    export let nodes 

</script>
<p class="text-lg md:text-2xl text-center font-bold">Show Updated Navbar Here</p>
<div class="p-5 bg-black/10">
    {#if nodes?.node1?.items}
    <div class="flex flex-col md:flex-row md:items-center justify-evenly flex-wrap gap-3">
            {#each nodes?.node1?.items as mainItem }
            <DNDNavMainItem mainItem={mainItem} nodes={nodes} />
            {/each}
    </div>
    {/if}
</div>