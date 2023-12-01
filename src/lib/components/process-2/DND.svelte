<script>
	import DNDNavbar from './DNDNavbar.svelte';
	import ParentDND from './ParentDND.svelte';
	import { writable } from 'svelte/store';
	import { MenuListResult } from './../../store/store.js';

let editNavbar = writable(false) ;
const handleEditNavbar = ()=> {
    console.log("handleEditNavbar Clicked result - ", $editNavbar)
    editNavbar.set(!$editNavbar)
}
// MenuListResult
</script>


<div class="w-[100%] min-h-screen">
	<div class=" flex flex-col items-start md:items-center  justify-center gap-10 py-10 px-3">
		<h3 class="p-2 font-bold text-4xl lg:text-8xl text-transparent capitalize bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
			NavBar Editor
		</h3>
		{#if !$editNavbar}
			<div class="w-[100%]">
				<DNDNavbar nodes={$MenuListResult}/>
			</div>
			<div class="w-[100%] flex items-center justify-center gap-5">
				<button class="bg-green-500/20 p-5 rounded  " on:click={handleEditNavbar}>Edit Navbar</button>
				<button class="bg-green-500/20 p-5 rounded  " on:click={handleEditNavbar}>Next slide</button>
			</div>
		{/if}
		{#if $editNavbar}
			<ParentDND handleEditNavbar={handleEditNavbar} {MenuListResult} nodes={$MenuListResult} />
		{/if}
	</div>
</div>