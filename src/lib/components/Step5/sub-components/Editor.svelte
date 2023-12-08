<script>
	import { GetDataToEdit } from './../../../functions/GetDataToEdit.js';
	import { classInfo1, classTrainer1, header1, intro1, journey1 } from './editor_blocks_components.js';
	import { styleManager, scripts } from './editor_utils.js';
    import 'grapesjs/dist/css/grapes.min.css';
    import './editor.css'
    import grapesjs from 'grapesjs';
    import gjsBlocksBasic from 'grapesjs-blocks-basic'
    import { onMount } from "svelte";
    import tailwindComponent from './plugins/tailwind'
    import { UserAllData } from '../../../store/store.js';
    export let toEdit, handleBacktoPageList ;

    $:getData = GetDataToEdit(toEdit, $UserAllData.allPagesData )
    let updatedHtml
    onMount(()=>{
        const editor = grapesjs.init({
            container : '#gjs',
            plugins:[
                gjsBlocksBasic,
                // tailwindComponent
            ],
            storageManager: false,
            pluginOpts:{
                gjsBlocksBasic:{},
                tailwindComponent:{}
            },
            canvas:{
                styles: ["./editor.css"],
                scripts: [
                    "https://cdn.tailwindcss.com"
                ],
            },
            blockManager: {
                blocks: [
                    // Frame Section
                    {
                    id: 'header',
                    label: '<img src="./header1.jpeg" >Header-1',
                    category: 'Frame',
                    // attributes: { class: 'fa fa-header' },
                    content: header1,
                    },
                    // {
                    // id: 'footer',
                    // label: 'Footer',
                    // category: 'Frame',
                    // attributes: { class: 'fa fa-fire' },
                    // content: "<div>This is a Header </div>",
                    // },
                    {
                    id: 'intro1-section',
                    label: '<img src="./intro1.jpeg"  >Intro-1',
                    category: 'Frame',
                    // attributes: { class: 'fa fa-star' },
                    content: intro1,
                    },
                    {
                    id: 'class-info-1',
                    label: '<img src="./classinfo1.jpeg"  >ClassInfo-1',
                    category: 'Frame',
                    // attributes: { class: 'fa fa-star' },
                    content: classInfo1,
                    },
                    {
                    id: 'class-trainer-1',
                    label: '<img src="./classtrainer1.jpeg"  >ClassTrainer-1',
                    category: 'Frame',
                    // attributes: { class: 'fa fa-star' },
                    content: classTrainer1,
                    },
                    {
                    id: 'journey-section-1',
                    label: '<img src="./journey1.jpeg"  >Journey-1',
                    category: 'Frame',
                    // attributes: { class: 'fa fa-list' },
                    content: journey1,
                    },
                ],
            },

        })
        let newPageData = `<div>${toEdit}</div>`
      // Set the initial HTML content
      editor.setComponents(getData);
         // Listen for component changes
      editor.on('component:update', () => {
        updatedHtml = editor.getHtml();

        let findData = $UserAllData.allPagesData.filter(p=> p.url === toEdit)[0] ;
        findData.data = updatedHtml ;
        console.log("Find Data" , findData)
        UserAllData.update(p=> {return{ ...p , findData}})
        console.log($UserAllData.allPagesData)
        // console.log(updatedHtml)
      });

      editor.on('block:drag:stop', (component, block) => { 
        updatedHtml = editor.getHtml();

        let findData = $UserAllData.allPagesData.filter(p=> p.url === toEdit)[0] ;
        findData.data = updatedHtml ;
        console.log("Find Data" , findData)
        UserAllData.update(p=> {return{ ...p , findData}})
        console.log("from- Block:drag:stop ",$UserAllData.allPagesData)
      });

      // Store and load events
      editor.on('storage:load', function(e) { console.log('Loaded ', e) });
      editor.on('storage:store', function(e) { console.log('Stored ', e) });
    })

    let handleSave = ()=>{
        let findData = $UserAllData.allPagesData.filter(p=> p.url === toEdit)[0] ;
        findData.data = updatedHtml ;
        console.log("Find Data" , findData)
        UserAllData.update(p=> {return{ ...p , findData}})
        console.log($UserAllData.allPagesData)
    }
</script>

<div class="w-full p-5">
    <div class="flex items-center gap-3 p-3 md:p-5 ">
        <p class="text-lg capitalize">Open Editor for <span class="font-bold lowercase">{toEdit}</span></p>
        <button on:click={()=>{handleSave() ; handleBacktoPageList() }} class="rounded bg-sky-500 hover:bg-sky-600 p-1 px-3">All Pages</button>
    </div>
    <div  class="w-full">
        <div id="gjs" class="w-full rounded overflow-hidden text-sm">
            <h1>Hello World Component!</h1>
        </div>
    </div>
</div>
