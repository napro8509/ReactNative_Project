const update =(token,name,address,phone) =>(
    fetch('http://funnyshopjonah.000webhostapp.com/change_info.php',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            Accept:'application/json'
        },
        body:JSON.stringify({token,name,address,phone})
    })
    .then(res=>res.json()
    )
);
module.exports= update;