document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginBox');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const datos = {
            name: name,
            email: email,
            password: password
        };

        let url = 'http://localhost:4000/users/add';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                const mensaje = document.getElementById('mensajeCheck');
                mensaje.style.display = 'block';
                mensaje.textContent = 'Usuario Creado Correctamente';
                return window.location.href = 'login.html';
            } else {
                throw new Error('La solicitud no fue exitosa');
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
    });
});