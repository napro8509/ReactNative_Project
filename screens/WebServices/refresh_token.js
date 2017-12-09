import saveToken from ''
const refreshToken =(token) =>(
    fetch('http://funnyshopjonah.000webhostapp.com/register.php',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            Accept:'application/json'
        },
        body:JSON.stringify({token})
    })
    .then(res=>res.text())
    .then(tokenToSave=>saveToken(tokenToSave);
module.exports= refreshToken;