<script>
	import Editor from './sub-components/Editor.svelte';
    import { ShowProcess } from "../../store/store";
    import PagesList from './sub-components/PagesList.svelte';

    let edit = false ;
    $: toEdit = ""
    const handleEditPageName = (name)=> {
        toEdit = name ;
        edit = true ;
    }
    const handleBacktoPageList = () => {
        edit  = false ;
        toEdit = "" ;
    }
</script>

<div>
    <h1 class="font-semibold text-xl text-white p-3">STEP {$ShowProcess} of 6 | Page Customization</h1>
    <div>
        {#if edit}
             <Editor {toEdit} {handleBacktoPageList}/>
        {:else}
             <PagesList {handleEditPageName}/>
        {/if}
    </div>
</div>