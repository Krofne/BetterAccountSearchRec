fetch('https://apim.rec.net/accounts/account?username=krofne')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
