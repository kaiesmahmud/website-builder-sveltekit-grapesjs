export const createPageWithDummy = (nodes,websiteName)=>{
    const allPagesData = [
        {url:`/${websiteName}` , data:"<h1>Welcome to Home Page</h1>"},
    ]

    if(nodes){
        for(let i = 0 ; i<nodes.node1.items.length; i++){
            const path = nodes[nodes.node1.items[i].id].name ;
            console.log(path) ;
            if(path){
                const url = "/"+websiteName+"/"+path
                allPagesData.push({url:url ,data:"<h1>Welcome to Page. Edit to show more Content</h1>"})
                if(nodes[nodes?.node1?.items[i]?.id]?.items){
                    for(let j = 0 ; j < nodes[nodes?.node1?.items[i]?.id]?.items.length ; j++){
                        const searchNode = nodes[nodes?.node1?.items[i]?.id]?.items[j].id
                        const path = nodes[searchNode]?.name 
                        if(path){
                            const url = "/"+websiteName+"/"+path
                            allPagesData.push({url:url ,data:"<h1>Welcome to Page. Edit to show more Content</h1>"})
                        }else{
                            continue;
                        }

                    }
                }
            }else{
                continue;
            }
        }
        console.log("Allpages Data is - ", allPagesData )
        return allPagesData ;
    }
}

// let nodes = {
//     node1:{
//             name:'Home',
//             id:'home',
//             items:[ 
//                 {id: 'courses'},
//                 {id: 'experience'},
//                 {id: 'services'}
//              ], 
//     },
//     courses: {
//         name:'courses', id:"courses" ,url:"courses"
//     },
//     experience: {
//         name:'experience', id:"experience" ,url:"experience",items:[]
//     },
//     services: {
//         name:'services',
//         id:"services",
//         url:"services",
//          items:[
//              {id: 'service1'},
//              {id: 'service2'},
//              {id: 'service3'},
//              {id: 'service4'}
//          ],
//     },
//     service1: {
//         name:'service1', id:"service1" ,url:"service1"
//     },
//     service2: {
//         name:'service2', id:"service2" ,url:"service2"
//     },
//     service3: {
//         name:'service3', id:"service3" ,url:"service3"
//     },
//     service4: {
//         name:'service4', id:"service4" ,url:"service4"
//     },

// }