<script>
    import { ShowProcess, UserAllData } from "../../store/store";
    import Dnd from "./sub-components/DND.svelte";


</script>

<section class="w-full ">
    <h1 class=" capitalize font-semibold text-xl text-white/80 p-3">{$ShowProcess} of 5 | Edit Navbar Menulist</h1>
    <Dnd/>
</section>