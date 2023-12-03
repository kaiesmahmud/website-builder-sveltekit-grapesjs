<script>
	import Navbar from './../lib/components/Navbar.svelte';
    import "../app.css";
    import Footer from '../lib/components/Footer.svelte';
  </script>
  <div class="flex items-center justify-center flex-col gap-10 ">
    <div class="min-h-screen p-3 max-w-[3240px] w-full ">
      <Navbar/>
      <slot />
      <Footer/>
    </div>
  </div>