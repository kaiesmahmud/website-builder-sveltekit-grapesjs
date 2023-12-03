<script>
   import { writable } from 'svelte/store';
	import DND from './../lib/components/process-2/DND.svelte';
	import NewWebsiteNameComponent from '../lib/components/process-1/NewWebsiteNameComponent.svelte';
   import { ShowProcess, processStep } from '../lib/store/store';
	import ParentDND from './../lib/components/process-2/ParentDND.svelte';
	import { MenuListResult } from './../lib/store/store.js';
   import Sidebar from '../lib/components/Sidebar.svelte';
   import Step1 from '../lib/components/Step1/Step1.svelte';
   import Step2 from '../lib/components/Step2/Step2.svelte';
   import Step3 from '../lib/components/Step3/Step3.svelte';
   import Step4 from '../lib/components/Step4/Step4.svelte';


   $: show = $ShowProcess
	// eport let MenuListResult.set()
	
</script>


<div class="flex flex-col md:flex-row  gap-5 w-full">
   <Sidebar/>
   <main class="w-full md:min-w-3/4 bg-white/10 rounded-lg">
      {$ShowProcess}
      
      {#if show === "step-1"}
         <!-- First Step Component here -->
         <Step1/>
         <div class="flex gap-3 items-center justify-center w-full">
            <!-- <NewWebsiteNameComponent/> -->
         </div>
      {/if}
      {#if  show === "step-2"}
      <Step2/>
      <!-- <h1>Step 2 Now</h1> -->
      <!-- <DND/> -->
      {/if}
      {#if  show === "step-3"}
      <Step3/>
      {/if}
      <!-- Third Step Component here -->
      {#if  show === "step-4"}
      <Step4/>
      {/if}
         <!-- Fourth Step Component here -->
      <!-- {:else if  $ShowProcess == "step-1"} -->
         <!-- else if content here -->
         <!-- else content here -->

   </main>

</div>

