<script>
    import { onMount } from "svelte";

    export let toEdit, handleBacktoPageList ;

    onMount(()=>{

    })
</script>

<div>
    <div class="flex items-center gap-3 p-3 md:p-5 capitalize">
        <p class="text-lg">Open Editor for <span class="font-bold">{toEdit}</span></p>
        <button on:click={handleBacktoPageList} class="rounded bg-sky-500 hover:bg-sky-600 p-1 px-3">All Pages</button>
    </div>
</div>