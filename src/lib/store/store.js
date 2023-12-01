import { writable } from "svelte/store";


export let newWebsiteName = writable("");
export let processStep = writable(1);

export let userData = writable("");
let dummyData =  {
    id: "", // website name
    home: "", //websitename
    userName: "username" , //Username from Moodle
    navbarStyle: 1, // 1/2/3/4
    navbarData: {}, // Custom Nav Data will be here
    coursesStyle: 1, //1/2/3/4
    homeBodyHtml: "string from Grapesjs",
    defaultHomeBodyHtml: "Default UI will be here",
    defaultPageBodyHtml: "Default Page Body Html",
    allPageData: [] , // from custom navbar to custom UI
    footerHtml: "Default Footer Design"
}

let nodes = {
    node1:{
            name:'Home',
            id:'home',
            items:[ 
                {id: 'courses'},
                {id: 'experience'},
                {id: 'services'}
             ], 
    },
    courses: {
        name:'courses', id:"courses"
    },
    experience: {
        name:'experience', id:"experience",items:[]
    },
    services: {
        name:'services',
        id:"services",
         items:[
             {id: 'service1'},
             {id: 'service2'},
             {id: 'service3'},
             {id: 'service4'}
         ],
    },
    service1: {
        name:'service1', id:"service1"
    },
    service2: {
        name:'service2', id:"service2"
    },
    service3: {
        name:'service3', id:"service3"
    },
    service4: {
        name:'service4', id:"service4"
    },

}
export let MenuListResult = writable(nodes)