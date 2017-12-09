const checkLogIn=(token)=>(
    fetch('https://funnyshopjonah.000webhostapp.com/check_login.php',
    {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            Accept:'application/json'
        },
        body: JSON.stringify({token})
        })
.then(res=>res.json())
);
module.exports = checkLogIn;