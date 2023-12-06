<script>
    import { UserAllData } from '../../../store/store';
	import DNDNavMainItem from './DNDNavMainItem.svelte';
    // import NavMainItem from './navMainItem.svelte';
    export let nodes 

</script>
<p class="text-lg md:text-2xl text-center font-bold">Your Navbar Here</p>
<div class="p-5 bg-black/10">
    <div class="flex flex-col md:flex-row md:items-center justify-evenly flex-wrap gap-3">
        <div class="flex items-center ">
            {#if $UserAllData.logo.length > 5}
            <div class="w-20   rounded-full overflow-hidden flex items-center justify-center">
                <img class="w-20 rounded-full aspect-square" src={$UserAllData.logo} alt="logo">
            </div>
            {/if}
            <h3 class="p-2 font-bold text-md lg:text-xl  text-transparent capitalize bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {$UserAllData.websiteName}
            </h3>
        </div>
        {#if nodes?.node1?.items}
            {#each nodes?.node1?.items as mainItem }
            <DNDNavMainItem mainItem={mainItem} nodes={nodes} />
            {/each}
        {/if}
    </div>
</div>