<script>
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
	import Icon from '@iconify/svelte';

	export let nodes ,itemToShowSettings ,itemToShow
	export let node,parentId
	// console.log("got itemToShowSettings",itemToShow,itemToShowSettings,)


	let inputStyle="p-1 text-sm md:text-base md:p-5 bg-white/10 border-slate-500 focus:border-none w-[70%] rounded"

	const flipDurationMs = 300;
	function handleDndConsider(e) {
		node.items = e.detail.items;
	}
	function handleDndFinalize(e) {
		node.items = e.detail.items;
		nodes = {...nodes};
		console.log(node);
		itemToShowSettings.update((i)=>({...i, name:"",id:''}))
		// console.log(nodes);
		// console.log(nodes.node1.items);
	}

	const logme = () =>{
		console.log("log for -",node)
	}
	let deletePopUp = false ;
	const handleDeletePopUp = ()=>{
		deletePopUp = !deletePopUp
		openUpdateSection = false
		needtoAddNewPage = false
		viewSubPage = false
	}
	const deleteNode = () => {
		// console.log("DeleteNode  ",node)
			if (parentId) { 
			// If the node have a parent to catch === 
				console.log("parentId  ",parentId)
				if (parentId == 'home') {
					//If it comes from root parent
					// console.log("Have to Delete from root Parent  ",nodes.node1)
					const items = nodes.node1.items.filter(i=> i.id != node.id)
					// console.log("Remaining",items)
					nodes.node1.items = items;

					//Delete the Node Info from root 
					delete nodes[node.id]
					console.log(nodes)
					
					
				} else {
					//If it comes from root parent
					console.log("Have to Delete from Sub Parent  ",nodes[parentId])

					//Filter and Get Others Childs in a bucket(array)
					const items = nodes[parentId].items.filter(i=> i.id != node.id)
					console.log("Remaining",items)
					nodes[parentId].items = items //Give new Array

					//Delete the Node Info from root 
					delete nodes[node.id]
					console.log(nodes)
				}
			} else {
			// If the node don't have a parent to catch ===
				console.log("parentId Not Found ",parentId)
			}
		
	}
	let viewSubPage = true
	const handleSubPageView = () => {
		viewSubPage = !viewSubPage
		console.log("HandleSubPageView clicked",viewSubPage)
	}

	let needtoAddNewPage = false
	const handleNeedtoAddNewPage = ()=>{
		openUpdateSection = false
		needtoAddNewPage = !needtoAddNewPage
		showSettings=!showSettings
	}
	let subPageName = ""
	const handleAddSubPages = ()=>{
		if(subPageName.length > 3 && subPageName.length < 13 ){
			//Create a Node Object 
			let  pageName = subPageName
			let  pageURl = subPageName.toLowerCase().replace(/ /g, '-')
			let pageObj = {
				name : pageName, id: pageURl 
			}
			console.log(pageObj)
			subPageName =""
			//Add Node to Parent items 
			if(!nodes[pageURl]){
				nodes[node.id].items.push({id:pageURl})
				//Add Node in main Obj
				nodes = {...nodes,[pageURl]: pageObj}
				console.log(nodes)
			}else{
				alert("Duplicate page Name !")
			}
			
		}else{
			alert("Please Give a page Name  less-than 12 & Greater-than 3 character!")

		}
		needtoAddNewPage = false
	}
	// let updatePopUp = false
	// const handleUpdatePopUp = () => updatePopUp = !updatePopUp
	let updateName = ""
	let openUpdateSection = false 
	const handleUpdate = () => {
		needtoAddNewPage = false
		showSettings = false
		deletePopUp = false 
		if($itemToShowSettings?.id == node.id){
			// console.log("Matched the item !")
			openUpdateSection = !openUpdateSection
		}else{
			// console.log("Didn't Matched the item ! Changing that",itemToShowSettings)
			itemToShowSettings.update((i)=>node)
			openUpdateSection = !openUpdateSection
		}
		console.log("got Node to update", node)
		updateName = nodes?.[node.id]?.name ;
	}
	const handleUpdatePageName = () => {
		if(updateName.length > 3 ){
			nodes = {...nodes, [node.id]: {...node, name: updateName} }
			openUpdateSection = false
			// updatePopUp = false
		}else{
			alert("Please Enter a Name")
		}
	}
	let showSettings = false ;
	const handleShowSettings = () => {
		showSettings = !showSettings
		
		if($itemToShowSettings?.id == node.id){
			// console.log("Matched the item !")
			openUpdateSection = false
		}else{
			// console.log("Didn't Matched the item ! Changing that",itemToShowSettings)
			itemToShowSettings.update((i)=>node)
			showSettings = true
			openUpdateSection = false
		}
	}
</script>

<div class="bg-white/10 w-full rounded p-1 md:p-2 transition-all ease-in relative cursor-move">
	<div class="flex justify-between p-1 md:p-3 rounded items-center">
		<div class="flex items-center gap-1">
			<!-- ========= Update Page Name ======== -->
			{#if openUpdateSection && ($itemToShowSettings.id == node.id)}
				<div class="flex md:gap-2 ">
					<input bind:value={updateName} class={inputStyle}/>
				</div>
			{/if}
			{#if !openUpdateSection || !($itemToShowSettings.id == node.id)}
			<div class="flex items-center gap-1 md:gap-2">
				{#if node?.id != "home"}
					<div class="text-lg md:text-2xl font-bold text-green-500">
						<Icon icon="ant-design:drag-outlined" />
					</div>
				{/if}
				<button on:click={handleUpdate} class="text-sm md:text-xl font-light italic md:font-semibold capitalize">{node?.name}</button> 
			</div>
			{/if}
			
		</div>
		<div class="flex items-center gap-1 ">
			
			{#if node?.id != "home"}
				{#if node?.hasOwnProperty("items") }
					{#if node?.items?.length != 0}
						<button on:click={handleSubPageView} class="bg-slate-800 p-1 md:p-2 rounded  text-lg md:text-2xl">
							{#if viewSubPage}
							<Icon icon="icon-park-outline:up" />
							{:else}
							<Icon icon="icon-park-outline:down" />
							{/if}
						</button>
					{/if}
				{/if}
				<!-- ======Delete Buttons inline popup======= -->
				{#if deletePopUp && ($itemToShowSettings.id == node.id)}
					<div class="flex items-center justify-center gap-1">
						<button on:click={deleteNode} class="p-1 md:p-2 rounded  text-sm bg-red-500">Delete</button>
						<button on:click={handleDeletePopUp} class="p-1 md:p-2 rounded text-sm  bg-teal-500">No</button>
					</div>
				{/if}
				<!-- =======UpdateName -- Buttons========= -->
				{#if openUpdateSection && ($itemToShowSettings.id == node.id)}
				<div class="flex gap-1 w-full h-full">
					<button on:click={handleUpdatePageName} class="bg-green-500/60 hover:bg-green-500 hover:text-black p-3 md:px-5  rounded flex items-center text-xs md:text-sm">
						<Icon icon="icon-park-solid:correct" />					
					</button>
					<button on:click={handleUpdate} class="bg-red-500/60 hover:bg-red-500 hover:text-black p-3 md:px-5  rounded flex items-center text-xs md:text-sm">
						<Icon icon="icomoon-free:cross" />
					</button>
				</div>
				{/if}
				{#if showSettings && ($itemToShowSettings.id == node.id) && !deletePopUp}
					{#if node?.hasOwnProperty("items")}
						<button on:click={handleNeedtoAddNewPage} class={` bg-green-200 text-green-800  p-1 md:p-2 rounded  md:text-2xl`}>
								<Icon icon="carbon:add-filled" />
						</button>
					{/if}
				
					<button on:click={handleUpdate} class="text-cyan-700 bg-cyan-200 p-1 md:p-2 rounded  md:text-2xl">
						<Icon icon="ic:twotone-drive-file-rename-outline" />
					</button>
					<button on:click={handleDeletePopUp} class="text-red-500 bg-red-200 p-1 md:p-2 rounded  md:text-2xl">
						<Icon icon="material-symbols:delete" />
					</button>
					<button on:click={handleShowSettings} class="bg-white/20 p-1 md:p-2 rounded  md:text-2xl">
						<!-- <Icon icon="entypo:dots-three-vertical" />  -->
						<Icon icon="uil:setting" />
					</button>
				{:else}
					<button on:click={handleShowSettings} class=" p-1 md:p-2 rounded md:text-2xl">
						<!-- <Icon icon="entypo:dots-three-vertical" />	 -->
						<Icon icon="uil:setting" />
					</button>
				{/if}
			{/if}
				
		</div>
	</div>
	
	<!-- {#if updatePopUp && ($itemToShowSettings.id == node.id)}
	<div class="flex gap-1">
		<input bind:value={updateName} class={inputStyle}/>
		<button on:click={handleUpdatePageName} class="bg-green-500/20 hover:bg-green-500 hover:text-black p-3 md:p-5 w- rounded flex items-center text-xl">
			<Icon icon="icon-park-solid:correct" />					</button>
		<button on:click={handleUpdate} class="bg-red-500/20 hover:bg-red-500 hover:text-black p-3 md:p-5 w- rounded flex items-center text-xl">
			<Icon icon="icomoon-free:cross" />
		</button>
	</div>
	{/if} -->
	<!-- =========== Add Sub page ============== -->
	{#if node?.hasOwnProperty("items") && ($itemToShowSettings.id == node.id) && !showSettings}
		{#if needtoAddNewPage}
			<div class="md:m-2 md:p-1 flex items-center  gap-1 pl-2 justify-center">
				<input bind:value={subPageName} class="p-1  text-sm md:text-base md:p-4 bg-white/10 border-slate-500 focus:border-none w-[60%] rounded" placeholder="Sub-Page" />
				<div>
					<button on:click={handleAddSubPages} class="text-green-800 bg-green-200 rounded  p-1 md:p-4 ">
						<Icon icon="icon-park-outline:correct" />					</button>
					<button on:click={handleNeedtoAddNewPage} class="bg-red-200 text-red-500 rounded  p-1 md:p-4 ">
						<Icon icon="icomoon-free:cross" />
					</button>
				</div>
			</div>
		{/if}
	{/if}

	{#if viewSubPage}
		{#if node?.hasOwnProperty("items")}
			<section class=" p-1 md:p-2 rounded transition-all ease-in " use:dndzone={{items:node.items, flipDurationMs, centreDraggedOnCursor: false }}
							 on:consider={handleDndConsider} 
							 on:finalize={handleDndFinalize}>		
					{#each node.items as item(item.id)}
						<div animate:flip="{{duration: flipDurationMs,}}" class=" md:p-2 m-1 my-3 md:m-3">
							<svelte:self bind:nodes={nodes} node={nodes[item.id]} parentId={node.id} {itemToShow} {itemToShowSettings} />
							<!-- <svelte:self bind:nodes={nodes} node={nodes[item.id]} nodeChild={true} /> -->
						</div>
					{/each}
			</section>
		{/if}
	{/if}

</div>
<style>
	section{
		overflow-y: auto ;
		height: auto;
	}
</style>


