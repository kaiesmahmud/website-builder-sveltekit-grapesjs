<script>
    import { UserAllData } from "../../../store/store";

    export let handleEditPageName ;


</script>

<div class="flex flex-col gap-3 p-3 max-w-[700px] w-full ">
    <!-- ----------Home page ------------ -->
    <div class="rounded p-2 bg-white/10 font-semibold text-md flex items-center justify-between px-5">
        <p class=" capitalize">
            {$UserAllData?.websiteName}
        </p>
        <a href={`/${$UserAllData?.websiteName}`} class=" text-white/70 hover:text-white/90">
            /{$UserAllData?.websiteName}
        </a>
        <button on:click={()=>{handleEditPageName($UserAllData?.websiteName)}} class="rounded bg-sky-500 hover:bg-sky-600 p-1 px-3">Edit</button>
     </div>

    <!-- ---------Others page-------------- -->
    {#if $UserAllData?.navbarData}
    {#each $UserAllData?.navbarData?.node1?.items as item}
        {#if $UserAllData?.navbarData[item.id] }
             <div class="rounded p-2 bg-white/10 font-semibold text-md flex items-center justify-between px-5">
                <p class=" capitalize">
                    {$UserAllData?.navbarData[item.id].name}
                </p>
                <a href={`/${$UserAllData?.websiteName}/${$UserAllData?.navbarData[item.id].name}`} class=" text-white/70 hover:text-white/90">
                    /{$UserAllData?.websiteName}/{$UserAllData?.navbarData[item.id].name}
                </a>
                <button on:click={()=>{handleEditPageName($UserAllData?.navbarData[item.id].name)}} class="rounded bg-sky-500 hover:bg-sky-600 p-1 px-3">Edit</button>

             </div>
        {/if}
        <!-- -------------sub-category page------------------ -->
        {#if $UserAllData?.navbarData[item.id]?.items }
             {#each $UserAllData?.navbarData[item.id].items as subItem}
                {#if $UserAllData?.navbarData[subItem.id] }
                <div class="rounded p-2 bg-white/10 font-semibold text-md flex items-center justify-between px-5">
                    <p class=" capitalize">
                        {$UserAllData?.navbarData[subItem.id].name}
                    </p>
                    <a href={`/${$UserAllData?.websiteName}/${$UserAllData?.navbarData[subItem.id].name}`} class=" text-white/70 hover:text-white/90">
                        /{$UserAllData?.websiteName}/{$UserAllData?.navbarData[subItem.id].name}
                    </a>
                    <button on:click={()=>{handleEditPageName($UserAllData?.navbarData[subItem.id].name)}} class="rounded bg-sky-500 hover:bg-sky-600 p-1 px-3">Edit</button>

                </div>
                {/if}
             {/each}
        {/if}
    {/each}
    <!-- content here -->
    {:else}
         <!-- else content here -->
         <div class="bg-red-100 p-5 text-red-500">No Data Found !!</div>
    {/if}
</div>