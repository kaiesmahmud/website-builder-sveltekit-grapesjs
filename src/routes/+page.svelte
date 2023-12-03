<script>
   import { writable } from 'svelte/store';
	import DND from './../lib/components/process-2/DND.svelte';
	import NewWebsiteNameComponent from '../lib/components/process-1/NewWebsiteNameComponent.svelte';
   import { processStep } from '../lib/store/store';
	import ParentDND from './../lib/components/process-2/ParentDND.svelte';
	import { MenuListResult } from './../lib/store/store.js';


    
	// eport let MenuListResult.set()
	
</script>


<div>
  <h1 class="py-5 p-1 w-full text-3xl md:text-5xl font-bold  text-center text-transparent capitalize bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600">
    Custom-Website-Builder
  </h1>
  {#if $processStep == 1}
     <!-- First Step Component here -->
     <div class="flex gap-3 items-center justify-center w-full">
      <NewWebsiteNameComponent/>
    </div>
  {:else if  $processStep == 2}
     <!-- <h1>Step 2 Now</h1> -->
     <DND/>
  {:else if  $processStep == 3}
     <!-- Third Step Component here -->
  {:else if  $processStep == 4}
     <!-- Fourth Step Component here -->
  {:else if  $processStep == 5}
     <!-- else if content here -->
  {:else}
     <!-- else content here -->
  {/if}

</div>

