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