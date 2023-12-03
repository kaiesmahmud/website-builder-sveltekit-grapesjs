<script>
	import { UserAllData } from './../../store/store.js';
  import Dropzone from "svelte-file-dropzone/Dropzone.svelte";
  import { newWebsiteName, processStep } from '../../store/store.js';
  let inputStyle="w-full md:w-1/2 p-2 md:p-5 bg-white/10 border-slate-500  focus:border-none  rounded"
  // console.log(newWebsiteName)
  // console.log($newWebsiteName)
  //======New website Name Section ---> Save to newWebsiteName in store ======
  let websiteName = ""
  $: obj = $UserAllData
      
  let files = {
      accepted: [],
      rejected: []
    };
  let imagedata =""
  function setImage(base64String) {
    imagedata = base64String;
  }
  const handleFilesSelect=(e)=> {
    const { acceptedFiles, fileRejections } = e.detail;

    console.log(files)

    files.accepted = [...files.accepted, ...acceptedFiles];
    files.rejected = [...files.rejected, ...fileRejections];

    const file = files.accepted[files.accepted.length-1]; // Get the first dropped file
    // console.log(files.accepted)
    const reader = new FileReader();
    reader.onloadend = () => {
      console.log("On Load End success !")
      const base64String = reader.result;
      // console.log("Base64Data - ", base64String)
      setImage(base64String); // Update component state with base64 image
    }
    // console.log(reader)
    reader.readAsDataURL(file);
    tryChange = true 
  } ;

  let tryChange = false 
  const handletrychange = ()=>{ 
    tryChange=!tryChange 
    files.accepted = []
    setImage("")
  }

  const handleNewWebsiteName = () => {
    if(websiteName.length > 3 && websiteName.length< 10){
      websiteName = websiteName.toLowerCase().replaceAll(" ", "-")
      newWebsiteName.update(p => websiteName )
      // console.log(newWebsiteName)
      // console.log($newWebsiteName)
      obj = {...obj, websiteName: $newWebsiteName, imagedata: imagedata}
      UserAllData.update(i=>{return {...i,...obj}})
      processStep.set(2) //----Move to Second Step
      console.log($processStep)
    }else{
    alert("Enter Valid Name")
    }
  }
</script>
<div class="w-full md:w-[70%] max-w-[1000px] flex flex-col min-h-[30vh] items-center justify-center gap-5 bg-white/10 py-5">
    <div class="text-center ">
      <h3 class="font-semibold text-xl md:text-3xl">Create Your First Website</h3>
    </div>
    <div class="w-full px-10 flex items-center justify-center ">
      <input bind:value={websiteName} required class={`${inputStyle}`} type="text" placeholder="website Name" />
    </div>
    <div>
    <p class="font-semibold text-xl text-center">Upload logo:</p>
    {#if !files.accepted.length > 0 && !tryChange}
       <Dropzone  on:drop={handleFilesSelect} accept="image/png, image/jpeg" multiple={false} disableDefaultStyles containerClasses="border border-white p-20 rounded shadow  m-5 hover:text-blue-500 hover:border-blue-500"  />
    {/if}
    {#if tryChange}
    <ol>
      {#each files.accepted as item}
        <li class="p-5">
          <img src={`${imagedata}`} alt="User uploaded " />
          <p>
             {item.name}
           </p>
           <button on:click={handletrychange} class="bg-white/10 rounded p-3 px-5 m-5">Change Photo</button>
          </li>
      {/each}
    </ol>
    {/if}
    <div class="flex w-full items-center justify-center">
      <button type="submit" on:click={handleNewWebsiteName} class="bg-green-500/50 hover:bg-green-500 p-2 md:p-5 rounded text-sm md:text-md w-[60%] font-bold">Create</button>
    </div>
    </div>
  </div>