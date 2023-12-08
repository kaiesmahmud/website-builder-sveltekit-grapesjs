
export const compareAndGiveData = (givenName,givenURL,websitename, allPagesData)=> {
    if(givenName === websitename){
        const data = allPagesData.filter(p => p.url === givenURL)[0]
        console.log("found Page Data ", data)
        return data.data ;
    }else{
        return `<div>404 , Not Found !!</div>`
    }
}