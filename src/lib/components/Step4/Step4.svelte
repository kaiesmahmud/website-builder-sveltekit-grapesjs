<script>
	import { UserAllData, MenuListResult } from './../../store/store.js';
    import { ShowProcess } from "../../store/store";

    $: showCmpntToCustomize = "navbar"

    const handleChangeComponent = (arg) => {
        showCmpntToCustomize = arg
    }

    const handleStepNext = () =>{
        if($UserAllData.stepAccess == 4){
		UserAllData.update(data=>{return {...data,stepAccess:6}})
		ShowProcess.set(5)
		console.log(UserAllData)
        }else{
            ShowProcess.set(5)
        }
    }
</script>

<section>
    <h1 class="font-semibold text-xl text-white p-3">STEP {$ShowProcess} of 6 | Component Customization</h1>
    <div class="bg-black/20 flex items-center md:justify-between flex-wrap md:flex-nowrap gap-10 text-xl font-bold  ">
        <div class=" flex items-center  gap-10   ">
            <button on:click={()=>{handleChangeComponent("navbar")}} class={`${showCmpntToCustomize == "navbar" && "text-cyan-500 border-sky-500"} border-b-2 border-black/20 hover:border-sky-500 p-4`}>Navbar</button>
            <button on:click={()=>{handleChangeComponent("footer")}} class={`${showCmpntToCustomize == "footer" && "text-cyan-500 border-sky-500"} border-b-2 border-black/20 hover:border-sky-500 p-4`}>Footer</button>
            <button on:click={()=>{handleChangeComponent("card")}} class={`${showCmpntToCustomize == "card" && "text-cyan-500 border-sky-500    "} border-b-2 border-black/20 hover:border-sky-500 p-4`} >Course Card</button>
        </div>
        <button 
        on:click={handleStepNext}
        class="p-3 my-3 rounded bg-green-500/50 hover:bg-green-600 font-bold text-center transition-all ease-in mr-5"
        >Next Step</button>
    </div>
    <div class="bg-black/20 p-2 m-2">
        {#if showCmpntToCustomize === "navbar"}
             <h2>Choose Navbar Style:</h2>
        {/if}
        {#if showCmpntToCustomize === "footer"}
             <h2>Choose Footer Style:</h2>
        {/if}
        {#if showCmpntToCustomize === "card"}
             <h2>Choose Card Style:</h2>
        {/if}
    </div>
</section>