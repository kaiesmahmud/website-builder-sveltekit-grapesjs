<script>
	import Navbar from './../lib/components/Navbar.svelte';
    import "../app.css";
    import Footer from '../lib/components/Footer.svelte';
  </script>
  <div class="w-full flex items-center justify-center flex-col gap-10 overflow-hidden max-w-[3240px]">
    <div class="min-h-screen flex flex-col items-center ">
      <Navbar/>
      <slot />
      <Footer/>
    </div>
  </div>