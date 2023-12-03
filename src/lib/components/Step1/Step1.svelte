<script>
	// import { Dropzone } from 'svelte-file-dropzone/Dropzone.svelte';
    import Dropzone from "svelte-file-dropzone/Dropzone.svelte";
let inputStyle="w-full p-2 bg-white/10 border-slate-500  focus:border-none  rounded ring-none focus:ring-none focus-within:ring-none focus-visible:ring-none focus:border-none"

</script>

<section class="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-3">
    <div class="w-full md:w-1/2 order-2 md:order-1">
        <p class="font-semibold text-xl ">Enter Website Name:</p>
        <div class="w-full md:px-10 flex items-center md:justify-center ">
            <input  required class={`${inputStyle}`} type="text" placeholder="Website Name" />
        </div>
        <p class="font-semibold text-xl ">Upload logo:</p>
        <!-- {#if !files.accepted.length > 0 && !tryChange} -->
        <!-- ---- on:drop={handleFilesSelect} ------ -->
        <Dropzone  on:drop={()=>{}} accept="image/png, image/jpeg" multiple={false} disableDefaultStyles containerClasses=" p-5 md:p-20 rounded-lg bg-white/10 shadow  md:m-5  hover:text-blue-500 hover:border-blue-500 text-xs font-bold md:text-sm"  />
        <!-- {/if} -->
        <p class="p-3 my-3 rounded bg-sky-700 font-bold text-center">Save & Next</p>
    </div>
    <div class="w-full order-1 md:order-2 md:w-1/2 flex items-center flex-col">
        <p>Preview Image: Best Ratio 1:1</p>
        <div class="w-1/2 max-w-[300px] overflow-hidden rounded flex items-center justify-center   ">
            <img class="w-full hover:scale-110 transition-all ease-in-out" src="https://images.unsplash.com/photo-1699164802258-19f3d460a0d7?dpr=1&h=280&w=280&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzAxNTcyNDQ3fA&ixlib=rb-4.0.3" alt="demo">
        </div>
        <p>Image Name Here</p>
    </div>
</section>