const sendOrder =(token,arrayDetail) =>(
    fetch('http://funnyshopjonah.000webhostapp.com/cart.php',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            Accept:'application/json'
        },
        body:JSON.stringify({token,arrayDetail})
    })
    .then(res=>res.text()
    )
);
module.exports= sendOrder;