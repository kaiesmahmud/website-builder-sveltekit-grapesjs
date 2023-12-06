<script>
	import DNDNavbar from './DNDNavbar.svelte';
    import ParentDND from './ParentDND.svelte';
	import { writable } from 'svelte/store';
	import { MenuListResult, ShowProcess, UserAllData } from '../../../store/store.js';

let editNavbar = writable(false) ;
const handleEditNavbar = ()=> {
    console.log("handleEditNavbar Clicked result - ", $editNavbar)
    editNavbar.set(!$editNavbar)
}

//=========Update to Next Step ===========
const handleStepNext = () => {
	if($ShowProcess == 2){
		UserAllData.update(data=>{return {...data,stepAccess:3,navbarData:$MenuListResult}})
		ShowProcess.set(3)
		console.log($UserAllData)
	}else{
		ShowProcess.set(3)
	}
}
</script>


<div class="w-[100%] min-h-[70vh] max-w-[1500px]">
	<div class="w-[100%] flex flex-col items-center  justify-center gap-10 py-10 px-3">
		{#if !$editNavbar}
		<div class="w-[100%]">
			<DNDNavbar nodes={$MenuListResult}/>
		</div>
		<div class="w-[100%] flex items-center justify-center gap-5 font-semibold">
			<button class="bg-green-500/50 hover:bg-green-600 p-3 rounded  " on:click={handleEditNavbar}>Edit Navbar</button>
			<button class="bg-green-500/50 hover:bg-green-600 p-3 rounded  " on:click={handleStepNext}>Next Step</button>
		</div>
		{/if}
		{#if $editNavbar}

			<ParentDND handleEditNavbar={handleEditNavbar} {MenuListResult} nodes={$MenuListResult} />
		{/if}
	</div>
</div>