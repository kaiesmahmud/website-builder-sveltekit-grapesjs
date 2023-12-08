export const GetDataToEdit = (url, allPageData ) => {
    const data = allPageData.filter(p => p.url === url)[0]
    return data.data;
}