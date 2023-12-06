<script>
    import { ShowProcess, UserAllData } from "../../store/store";

    const handleStepNext = () =>{
        ShowProcess.set(4)
    }
</script>

<section>
    <h1 class="font-semibold text-xl text-white p-3">STEP {$ShowProcess} of 6 | All Page List</h1>
    <div class="flex flex-col gap-3 p-3 max-w-[600px] w-full ">
        <!-- ----------Home page ------------ -->
        <div class="rounded p-2 bg-white/10 font-semibold text-md flex justify-between px-5">
            <p class=" capitalize">
                {$UserAllData?.websiteName}
            </p>
            <a href={`/${$UserAllData?.websiteName}`} class=" text-white/70 hover:text-white/90">
                /{$UserAllData?.websiteName}
            </a>
         </div>

        <!-- ---------Others page-------------- -->
        {#if $UserAllData?.navbarData}
        {#each $UserAllData?.navbarData?.node1?.items as item}
            {#if $UserAllData?.navbarData[item.id] }
                 <div class="rounded p-2 bg-white/10 font-semibold text-md flex justify-between px-5">
                    <p class=" capitalize">
                        {$UserAllData?.navbarData[item.id].name}
                    </p>
                    <a href={`/${$UserAllData?.websiteName}/${$UserAllData?.navbarData[item.id].name}`} class=" text-white/70 hover:text-white/90">
                        /{$UserAllData?.websiteName}/{$UserAllData?.navbarData[item.id].name}
                    </a>
                 </div>
            {/if}
            <!-- -------------sub-category page------------------ -->
            {#if $UserAllData?.navbarData[item.id]?.items }
                 {#each $UserAllData?.navbarData[item.id].items as subItem}
                    {#if $UserAllData?.navbarData[subItem.id] }
                    <div class="rounded p-2 bg-white/10 font-semibold text-md flex justify-between px-5">
                        <p class=" capitalize">
                            {$UserAllData?.navbarData[subItem.id].name}
                        </p>
                        <a href={`/${$UserAllData?.websiteName}/${$UserAllData?.navbarData[subItem.id].name}`} class=" text-white/70 hover:text-white/90">
                            /{$UserAllData?.websiteName}/{$UserAllData?.navbarData[subItem.id].name}
                        </a>
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
        <button on:click={handleStepNext} class="p-3 my-3 rounded bg-green-500/50 hover:bg-green-600 font-bold text-center transition-all ease-in">Save & Next</button>
    </div>
</section>