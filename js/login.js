document.addEventListener('DOMContentLoaded' , () => {
    const form = document.getElementById('loginBox');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const datos = {
            email: email,
            password: password
        }

        let url = 'http://localhost:4000/users/login';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.ok){
                const mensaje = document.getElementById('mensajeCheck');
                mensaje.style.display = 'block';
                mensaje.textContent = 'Identificacion exitosa.';
                return response.json();
            }else{
                const mensaje = document.getElementById('mensajeCheck');
                mensaje.style.display = 'block';
                mensaje.textContent = 'Usuario incorrecto, intente nuevamente.';
            }
        })
        .then(data => {
            console.log(data);
            const userID = data.loginUser.id;
            console.log(userID);
            window.location.href = `index.html?id=${userID}`;
        })
        .catch(error => console.log(error))
    })
})