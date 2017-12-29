const getListPhone = (idType, page) => {
    let url;
    if (idType == 'COLLECTION') {
        url = `https://funnyshopjonah.000webhostapp.com/get_collection.php?page=${page}`;      
    } else if(idType=='FLAGSHIP')
    {
        url=   `https://funnyshopjonah.000webhostapp.com/flagship.php?page=${page}`
    }  
    else {
        url = `https://funnyshopjonah.000webhostapp.com/product_by_type.php?id_type=${idType}&page=${page}`;
    }
    return fetch(url)
    .then(res => res.json());
};

export default getListPhone;