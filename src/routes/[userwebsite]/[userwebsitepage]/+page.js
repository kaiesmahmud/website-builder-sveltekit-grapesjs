// viewUserWebsitePage

export const load = async({params,fetch}) => {
    // console.log(params.userwebsitepage)

    return {
        viewUserWebsiteName: params.userwebsite,
        viewUserWebsitePage: params.userwebsitepage
    }
}