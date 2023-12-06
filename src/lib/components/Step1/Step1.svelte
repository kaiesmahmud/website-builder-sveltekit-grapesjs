<script>
    import Dropzone from "svelte-file-dropzone/Dropzone.svelte";
    import { ShowProcess, UserAllData, newLogoData, newWebsiteName } from "../../store/store";
    let inputStyle=" p-2 py-4 bg-white/10  focus:border-none  rounded ring-none focus:ring-offset-0 focus-within:ring-offset-0 focus-visible:ring-offset-0 focus:border-none ring-black"

    //========Image Handling -- Base64 Data ===========
    let files = {
        accepted: [],
        rejected: []
    };

    const handleFilesSelect=(e)=> {
        const { acceptedFiles, fileRejections } = e.detail;
        files.accepted = [...files.accepted, ...acceptedFiles];
        files.rejected = [...files.rejected, ...fileRejections];

        console.log("Files - ", files)
        console.log("Details - ", e.detail)

        //Get Base64 image data--------
        for (const file of acceptedFiles) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64Data = e.target.result;
            console.log("image data is , ",base64Data)
            file.base64Data = base64Data; // Store base64 data in the file object
            if(file?.base64Data){
                newLogoData.set(base64Data)
            }
        };
        reader.readAsDataURL(file);
        }
  }
  //=========Website Name Handle ============
  let webname = ""
    if($UserAllData.websiteName.length > 5){
        webname = $UserAllData.websiteName
  }

    // regex
    const regex = /^[a-zA-Z][a-zA-Z0-9_]*$/;

    // Check if the name is valid
    const isValidName= (name)=> {
        if(webname.length >1){
            return regex.test(name);
        }
    }

    // error message
    let errorMessage = "";

    // Update the error message based on the input value
    $: errorMessage = isValidName(webname) ? "" : "Site name must start with a letter and contain only a-z, 0-9 & underscore(_)";


  //===========Handle Submit Button ======Store name ,logo data ======
  const handleSaveNext = () =>{
    if(webname.length >4 && errorMessage.length < 2){
        UserAllData.update(data=>{ 
            return {
                ...data, 
                websiteName: webname,
                logo:$newLogoData,
    
                } 
            }    
        )
        if($UserAllData.stepAccess == 1 ){
            UserAllData.update(data=> {return {...data,stepAccess:2}})
            ShowProcess.set(2)
        }else{
            ShowProcess.set(2)
        }
        console.log("UserAllData is -",$UserAllData)

    }else{
        alert("Name is too short | Invalid Character")
    }
  }
</script>
<section class="  ">
    <h1 class=" capitalize font-semibold text-xl text-white/80 p-3">{$ShowProcess} of 5 | Add Website Name & Logo</h1>
    <div class=" w-full my-10 flex flex-col lg:flex-row items-center md:items-start justify-center gap-3">
        <div class="w-full lg:w-1/2 min-w-[350px] order-2 lg:order-1 flex flex-col items-center justify-center gap-3 ">
            <input bind:value={webname}  required class={`${inputStyle} w-[80%]`} type="text" placeholder="Enter Website Name:" />
            <p class="text-xs md:text-sm font-semibold text-red-500 w-[80%]">{errorMessage}</p>
            <div class="w-[80%] py-5 md:py-10 rounded-lg bg-white/10 shadow hover:text-blue-500 hover:border-blue-500 text-xs font-bold md:text-sm flex items-center justify-center flex-col gap-10">
                <p class=" text-center text-white/50 text-xl">Upload Logo: ( png / jpg )</p>
    
                <Dropzone on:drop={handleFilesSelect} accept="image/png, image/jpeg" multiple={false} disableDefaultStyles={true} containerClasses="w-[80%] border rounded-lg border-white/40 text-center font-light text-white/40 hover:text-white/60  py-20 capitalize"   />
            </div>
            <button on:click={handleSaveNext} class="p-3 my-3 rounded bg-green-500/50 hover:bg-green-600 font-bold text-center transition-all ease-in">Save & Next</button>
        </div>
        <div class="w-full  order-1 lg:order-2 lg:w-1/2 flex items-center flex-col gap-3 md:gap-5">
            <p>Preview Image: Best Ratio 1:1</p>
            <div class="w-1/2 max-w-[300px] overflow-hidden rounded flex items-center justify-center   ">
                {#if $newLogoData.length}
                    <img src={$newLogoData} alt="name" class="w-full hover:scale-110 transition-all ease-in-out">
                {:else}
                <img class="w-full hover:scale-110 transition-all ease-in-out" 
                    src="https://images.unsplash.com/photo-1699164802258-19f3d460a0d7?dpr=1&h=280&w=280&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzAxNTcyNDQ3fA&ixlib=rb-4.0.3"
                    alt="demo">
                {/if}
            </div>
            <p class="py-5 text-lg font-light">
            {#if webname}
                {webname}
            {:else}
                Website Name Here
            {/if}
            </p>
        </div>

    </div>
</section>