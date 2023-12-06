<script>
	// import { Dropzone } from 'svelte-file-dropzone/Dropzone.svelte';
    import Dropzone from "svelte-file-dropzone/Dropzone.svelte";
let inputStyle="w-full p-2 py-4 bg-white/10 border-slate-500  focus:border-none  rounded ring-none focus:ring-none focus-within:ring-none focus-visible:ring-none focus:border-none "

</script>

<section class="p-1 w-full my-10 flex flex-col lg:flex-row items-center md:items-start justify-center gap-3">
    <div class="w-full md:w-1/2 min-w-[350px] order-2 lg:order-1 flex flex-col items-center justify-center gap-3 ">
        <input  required class={`${inputStyle} w-[80%]`} type="text" placeholder="Enter Website Name:" />
        <!-- {#if !files.accepted.length > 0 && !tryChange} -->
        <!-- ---- on:drop={handleFilesSelect} ------ -->
        <div class="w-[80%] py-5 md:py-10 rounded-lg bg-white/10 shadow hover:text-blue-500 hover:border-blue-500 text-xs font-bold md:text-sm flex items-center justify-center flex-col gap-10">
            <p class=" text-center text-white/50 text-xl">Upload Website logo:</p>

            <Dropzone on:drop={()=>{}} accept="image/png, image/jpeg" multiple={false} disableDefaultStyles={true} containerClasses="w-[80%] border rounded-lg border-white/40 text-center font-light text-white/40 hover:text-white/60  py-20 capitalize"   />
        </div>
        <!-- {/if} -->
        <button class="p-3 my-3 rounded bg-sky-700 font-bold text-center">Save & Next</button>
    </div>
    <div class="w-full  order-1 lg:order-2 lg:w-1/2 flex items-center flex-col">
        <p>Preview Image: Best Ratio 1:1</p>
        <div class="w-1/2 max-w-[300px] overflow-hidden rounded flex items-center justify-center   ">
            <img class="w-full hover:scale-110 transition-all ease-in-out" src="https://images.unsplash.com/photo-1699164802258-19f3d460a0d7?dpr=1&h=280&w=280&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzAxNTcyNDQ3fA&ixlib=rb-4.0.3" alt="demo">
        </div>
        <p>Image Name Here</p>
    </div>
</section>