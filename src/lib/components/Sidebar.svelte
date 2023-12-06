<script>
    import Icon from '@iconify/svelte';
    import { ShowProcess, UserAllData } from '../store/store';
    let sideBarData = [
        {title:"Website Name & Logo", value:1 ,icon:"icon-park-outline:edit-name"},
        {title:"Website Menulists", value:2 ,icon:"material-symbols-light:dashboard-customize-outline" },
        {title:"Page List", value:3 ,icon:"iconoir:page" },
        {title:"Components Customize", value:4 ,icon:"mynaui:components" },
        {title:"Page Customization", value:5 ,icon:"gridicons:customize"  },
        {title:"Add Meta Data", value:6 ,icon:"carbon:flow-data" },
    ]
    // for collapsing sidbar -----------
    let minify =false ; 
    const handleMinify = ()=>{
        minify =!minify
    }
    let short = false
    const handleshortingSideBar = ()=>{short=!short}
    // ============Change Process View ==============
    const handleProcessChange = (newProcessToView)=>{
        if($UserAllData.stepAccess >= newProcessToView){
            ShowProcess.set(newProcessToView)
        }else{
            alert("You Don't Have Permission. Complete Step by Step")
        }
    }

</script>

<div class={`  text-white border-white rounded p-3  ${!minify && " lg:w-1/4 "} `}>

    <div class="flex items-center justify-between">
        {#if !minify}
        <h1 class="md:hidden lg:block text-xl md:text-2xl font-bold text-transparent capitalize bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-600">Magic Creator</h1>
        {/if}
        <button on:click={handleMinify} class=" hidden md:block p-3 text-xl font-bold rounded-full bg-white/10 hover:bg-white/20 hover:text-cyan-500">
            <Icon icon="gridicons:menus" />
        </button>
        <button on:click={handleshortingSideBar} class=" md:hidden  p-3 text-xl font-bold rounded-full bg-white/10 hover:bg-white/20 hover:text-cyan-500">
            <Icon icon="gridicons:menus" />
        </button>
    </div>
    <div class="hidden md:flex flex-col gap-3 text-start items-start justify-normal w-full my-5">
        {#each sideBarData as {title,value,icon}}
        <button 
        on:click={()=> handleProcessChange(value)} 
        class={`w-auto lg:w-full  text-start bg-white/10 hover:bg-white/20 hover:text-cyan-500 rounded-lg flex gap-2 justify-between p-3 text-xs md:text-sm font-semibold ${$ShowProcess === value && " bg-white/20 text-cyan-500 "}`}
        
        >
            <div class="flex gap-2 items-center">
                <div class="text-xl">
                    <Icon icon={icon} />
                </div>
                {#if !minify}
                     <p class="hidden lg:block">{title}</p>
                {/if}
            </div>
            {#if !minify}
            <div class="text-xl hidden lg:block">
                <Icon icon="solar:arrow-right-line-duotone" />
            </div>
            {/if}
        </button>
        {/each}
    </div>
    {#if short}
    <!-- ====== It will work for mobile view -->
    <div class="flex md:hidden flex-col gap-3 text-start items-start justify-normal w-full my-5">
        {#each sideBarData as {title,value,icon}}
        <button 
        on:click={()=>{handleProcessChange(value) ; handleshortingSideBar();}} 
        class={`w-full  text-start bg-white/10 hover:bg-white/20 hover:text-cyan-500 rounded-lg flex gap-2 justify-between p-3 text-xs md:text-sm font-semibold ${$ShowProcess === value && " bg-white/20 text-cyan-500 "}`}
        
        >
            <div class="flex gap-2 items-center w-full">
                <div class="text-xl">
                    <Icon icon={icon} />
                </div>
                <!-- {#if !minify} -->
                     <p>{title}</p>
                <!-- {/if} -->
            </div>
            {#if !minify}
            <div class="text-xl">
                <Icon icon="solar:arrow-right-line-duotone" />
            </div>
            {/if}
        </button>
        {/each}

    </div>
    {/if}
</div>