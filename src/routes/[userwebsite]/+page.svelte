<script>
    import { UserAllData } from '../../lib/store/store.js';
	import { compareAndGiveData } from './../../lib/functions/compareAndGiveData.js';

    export let data

    $: bodyData = compareAndGiveData(data.viewUserWebsiteName,data.viewUserWebsiteNameurl , $UserAllData.websiteName, $UserAllData.allPagesData)
</script>

<div class="bg-white w-full h-full min-h-screen text-black">
    <p>{@html bodyData}</p>

</div>