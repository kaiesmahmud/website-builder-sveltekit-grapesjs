<script>
	import DNDNavbar from './DNDNavbar.svelte';
    import ParentDnd from './ParentDND.svelte';
	// import ParentDND from '.ParentDND.svelte';
	ParentDnd
	// import { writable } from 'svelte/store';
	// import { MenuListResult, UserAllData } from '../../../store/store.js';

// let editNavbar = writable(false) ;
// const handleEditNavbar = ()=> {
//     console.log("handleEditNavbar Clicked result - ", $editNavbar)
//     editNavbar.set(!$editNavbar)
// }
// MenuListResult
</script>


<div class="w-[100%] min-h-[80vh]">
	<div class=" flex flex-col items-center  justify-center gap-10 py-10 px-3">
		<!-- {#if $UserAllData.logo.length > 5}
		<div class="w-40 md:w-32 rounded">
			<img src={$UserAllData.logo} alt="logo">
		</div>
		{/if} -->
		<!-- <h3 class="p-2 font-bold text-xl lg:text-4xl  text-transparent capitalize bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
			{$UserAllData.websiteName}
		</h3>
		{#if !$editNavbar}
		<div class="w-[100%] flex items-center justify-center gap-5">
			<button class="bg-green-500/20 p-5 rounded  " on:click={handleEditNavbar}>Edit Navbar</button>
			<button class="bg-green-500/50 p-5 rounded  " on:click={handleEditNavbar}>Next Step</button>
		</div>
		<div class="w-[100%]">
			<DNDNavbar nodes={$MenuListResult}/>
		</div>
		{/if}
		{#if $editNavbar}
			<ParentDND handleEditNavbar={handleEditNavbar} {MenuListResult} nodes={$MenuListResult} />
		{/if} -->
	</div>
</div>