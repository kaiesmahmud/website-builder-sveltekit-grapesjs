
export const load = async(events) => {

    const {params} = events;
    const {userwebsite} = params ;
    return {
        viewUserWebsiteName: userwebsite,
        viewUserWebsiteNameurl: "/"+userwebsite
    }
}