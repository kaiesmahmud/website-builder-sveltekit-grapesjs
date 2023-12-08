<script>
	import { styleManager } from './editor_utils.js';
    import 'grapesjs/dist/css/grapes.min.css';
    import grapesjs from 'grapesjs';
    import gjsBlocksBasic from 'grapesjs-blocks-basic'
    import { onMount } from "svelte";

    // export let toEdit, handleBacktoPageList ;

    onMount(()=>{
        const editor = grapesjs.init({
            container: '#gjs',
            plugins:[gjsBlocksBasic],
            pluginOpts:{
                gjsBlocksBasic:{}
            },
        })

         // Listen for component changes
      editor.on('component:update', () => {
        let updatedHtml = editor.getHtml();
        console.log(updatedHtml)
      });
    })
</script>

<div class="w-full p-5">
    <!-- <div class="flex items-center gap-3 p-3 md:p-5 capitalize">
        <p class="text-lg">Open Editor for <span class="font-bold">{toEdit}</span></p>
        <button on:click={handleBacktoPageList} class="rounded bg-sky-500 hover:bg-sky-600 p-1 px-3">All Pages</button>
    </div> -->
    <div  class="w-full">
        <div id="gjs" class="w-full rounded overflow-hidden">
            <h1>Hello World Component!</h1>
        </div>
    </div>
</div>

<style>

    .gjs-pn-panels{
        @apply bg-white/50;
    }
</style>