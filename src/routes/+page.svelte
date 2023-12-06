<script>
   import { ShowProcess } from '../lib/store/store';
   import Sidebar from '../lib/components/Sidebar.svelte';
   import Step1 from '../lib/components/Step1/Step1.svelte';
   import Step2 from '../lib/components/Step2/Step2.svelte';
   import Step3 from '../lib/components/Step3/Step3.svelte';
   import Step4 from '../lib/components/Step4/Step4.svelte';
   import Step5 from '../lib/components/Step5/Step5.svelte';
   import Step6 from '../lib/components/Step6/Step6.svelte';


   $: show = $ShowProcess
	
</script>


<div class="flex flex-col md:flex-row  gap-5 w-[100vw] px-2">
   <Sidebar/>
   <main class="w-full md:min-w-[73%] bg-white/10 rounded-lg">
      
      
      {#if show === 1}
      <Step1/>
      {/if}
      {#if  show === 2}
      <Step2/>
      {/if}
      {#if  show === 3}
      <Step3/>
      {/if}
      {#if  show === 4}
      <Step4/>
      {/if}
      {#if  show === 5}
      <Step5/>
      {/if}
      {#if  show === 5}
      <Step6/>
      {/if}
   </main>
</div>

