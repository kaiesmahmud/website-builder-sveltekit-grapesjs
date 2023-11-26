<script>
	import { newWebsiteName, processStep } from '../../store/store.js';

    let inputStyle="p-2 md:p-5 bg-white/10 border-slate-500  focus:border-none  rounded"
    console.log(newWebsiteName)
    console.log($newWebsiteName)
    //======New website Name Section ---> Save to newWebsiteName in store ======
    let websiteName = ""
    const handleNewWebsiteName = () => {
        if(websiteName.length > 3 && websiteName.length< 10){
        websiteName = websiteName.toLowerCase().replaceAll(" ", "-")
        newWebsiteName.update(p => websiteName )
        // console.log(newWebsiteName)
        // console.log($newWebsiteName)
        processStep.set(2)
        console.log($processStep)
        }else{
        alert("Enter Valid Name")
        }
    }
</script>
<div class="md:w-[60%] flex flex-col min-h-[30vh] items-center justify-center gap-5 bg-white/10">
    <div class="text-center ">
      <h3 class="font-semibold text-xl md:text-3xl">Create Your First Website</h3>
    </div>
    <div>
      <input bind:value={websiteName} class={`${inputStyle}`} type="text" placeholder="website Name" />
      <button on:click={handleNewWebsiteName} class="bg-green-500/10 hover:bg-green-500/50 p-2 md:p-5 rounded text-sm md:text-md">Create</button>
    </div>
  </div>