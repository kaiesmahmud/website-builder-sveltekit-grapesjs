<script>
    import { UserAllData } from '../../../store/store';
	import DNDPageSubPage from './DNDPageSubPage.svelte';
    // import DndPageSubPage from '$lib/components/DNDPageSubPage.svelte';
    import { writable } from 'svelte/store';
	export let MenuListResult,nodes ,handleEditNavbar
	let parentId ,newPageName;
	


	const handleAddNewPage = ()=> {
		//Create a Node Object 
		if( newPageName?.length > 3 && newPageName?.length < 13){
			console.log("length ",newPageName.length)
			let  pageName = newPageName
			let  pageURl = newPageName?.toLowerCase().replace(/ /g, '-')
			let pageObj = {
				name : pageName, 
				id: pageURl , 
				url:{pageURl} ,
				items:[]
			}
			console.log(pageObj)
			newPageName = ""
			if(!nodes[pageURl]){
				//Add Node to Home items 
				nodes.node1.items.push({id:pageURl})
		
				//Add New Page to Main Obj
				nodes = {...nodes, [pageURl] : pageObj}
				console.log(nodes)
			}else{
				alert("Duplicate page Name !")
			}
		}else{
			alert("Please Insert a new page Name !")

		}
	}
	let inputStyle="p-2  bg-white/10 border-slate-500 focus:border-none w-[70%] rounded"
	const handleSaveList = () =>{
		console.log(nodes)
		
		MenuListResult.update(()=> nodes)
		handleEditNavbar()
		//========Update the Navbar Data to UserAllData Store====
		UserAllData.update(data=>{return {...data, navbarData:$MenuListResult}})
		console.log(" update UserAllData", $UserAllData)
		
	}
	let itemToShowSettings = writable({name:"",id:""})
	console.log(itemToShowSettings)
	console.log($itemToShowSettings)
</script>


<div class=" w-full p-3 md:p-5 flex justify-center gap-1">
    <input bind:value={newPageName} class={inputStyle} placeholder="Type Page Name Here"/>
    <button class="bg-green-500/30 hover:bg-green-500/50 p-2 md:p-5 rounded w-[20%] text-sm md:text-md" on:click={handleAddNewPage}>Add Page</button>
</div>

<div class="w-[90%] md:w-[80%] border ">
	<DNDPageSubPage {itemToShowSettings} itemToShow={$itemToShowSettings}  node={nodes.node1} bind:nodes={nodes} parentId={parentId}  />
</div>
<button class="bg-green-500/30 hover:bg-green-500/50 p-3 md:p-5 rounded w-[30%] text-sm md:text-md " on:click={handleSaveList}>Save List</button>

	
	





