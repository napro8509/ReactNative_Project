const searchPhone=(key)=>{
    return fetch(`https://funnyshopjonah.000webhostapp.com/search.php?key=${key}`)
.then(res=>res.json())
};
module.exports = searchPhone;