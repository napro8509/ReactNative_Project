const signIn =(email,password) =>(
    fetch('http://funnyshopjonah.000webhostapp.com/login.php',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            Accept:'application/json'
        },
        body:JSON.stringify({email,password})
    })
    .then(res=>res.json()
    )
);
module.exports= signIn;