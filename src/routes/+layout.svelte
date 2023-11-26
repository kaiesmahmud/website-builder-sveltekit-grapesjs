<script>
	import { newWebsiteName } from './../lib/store/store.js';
    import { onMount } from "svelte";
    import "../app.css";
  
    onMount(()=>{
       let userData = {
       username: $newWebsiteName,
        }
        console.log(userData)
    })
  </script>
    <slot />
  