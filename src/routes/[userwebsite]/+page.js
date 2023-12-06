export const load = async({params,fetch}) => {
    console.log(params.userwebsite)

    return {
        viewUserWebsiteName: params.userwebsite
    }
}