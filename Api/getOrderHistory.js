const getOrderHistory=(token)=>{
    return fetch(`https://funnyshopjonah.000webhostapp.com/order_history.php?token=${token}`)
.then(res=>res.json())
};
module.exports = getOrderHistory;