<script>
   import { ShowProcess } from '../lib/store/store';
   import Sidebar from '../lib/components/Sidebar.svelte';
   import Step1 from '../lib/components/Step1/Step1.svelte';
   import Step2 from '../lib/components/Step2/Step2.svelte';
   import Step3 from '../lib/components/Step3/Step3.svelte';
   import Step4 from '../lib/components/Step4/Step4.svelte';


   $: show = $ShowProcess
	
</script>


<div class="flex flex-col md:flex-row  gap-5 w-full">
   <Sidebar/>
   <main class="w-full md:min-w-3/4 bg-white/10 rounded-lg p-3">
      <h1 class=" capitalize">{$ShowProcess} of 5</h1>
      
      {#if show === "step-1"}
      <Step1/>
      {/if}
      {#if  show === "step-2"}
      <Step2/>
      {/if}
      {#if  show === "step-3"}
      <Step3/>
      {/if}
      {#if  show === "step-4"}
      <Step4/>
      {/if}
   </main>
</div>

