const getPhoneDetail = (idPhone) => {
    let url;
    url = `https://funnyshopjonah.000webhostapp.com/product_detail.php?id=${idPhone}`;
    return fetch(url)
    .then(res => res.json());
};

export default getPhoneDetail;