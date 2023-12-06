<script>
    import { ShowProcess, UserAllData } from "../../store/store";
</script>

<section>
    <h1 class=" capitalize font-semibold text-xl text-white/80 p-3">{$ShowProcess} of 5 | All Page List</h1>
    <div class="flex flex-col gap-3 p-3 max-w-[600px] w-full ">
        <!-- ----------Home page ------------ -->
        <div class="rounded p-2 bg-white/10 font-semibold text-lg flex justify-between px-5">
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
                 <div class="rounded p-2 bg-white/10 font-semibold text-lg flex justify-between px-5">
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
                    <div class="rounded p-2 bg-white/10 font-semibold text-lg flex justify-between px-5">
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
        {/if}
    </div>
</section>