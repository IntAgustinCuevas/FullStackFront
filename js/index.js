document.addEventListener('DOMContentLoaded' , () => {
    const parametro = new URLSearchParams(window.location.search);
    const userLogin = parametro.get('id');

    let url = `http://localhost:4000/users/${userLogin}`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const userName = data.name;
        document.getElementById('usuario').textContent = userName;
    })
    .catch(error => console.log(error)) 
})