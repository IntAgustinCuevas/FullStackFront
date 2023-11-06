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

    const defaultCara = document.getElementById('defaultCara');
    const defaultDorso = document.getElementById('defaultDorso');
    const defaultPiernas = document.getElementById('defaultPiernas');
    const defaultPies = document.getElementById('defaultPies');

    const personajeBox = document.getElementById('personajes');
    personajeBox.addEventListener('click', (event) =>{
        if(event.target.tagName === "IMG"){
            let imgSrc = event.target.src;
            defaultCara.src = imgSrc;
        }
    })

    const parteSuperiorBox = document.getElementById('parteSuperior');
    parteSuperiorBox.addEventListener('click', (event) =>{
        if(event.target.tagName === "IMG"){
            let imgSrc = event.target.src;
            defaultDorso.src = imgSrc;
        }
    })

    const pantalonBox = document.getElementById('pantalon');
    pantalonBox.addEventListener('click', (event) =>{
        if(event.target.tagName === "IMG"){
            let imgSrc = event.target.src;
            defaultPiernas.src = imgSrc;
        }
    })

    const calzadoBox = document.getElementById('calzado');
    calzadoBox.addEventListener('click', (event) =>{
        if(event.target.tagName === "IMG"){
            let imgSrc = event.target.src;
            defaultPies.src = imgSrc;
        }
    })

    const boton = document.getElementById('enviarVestimenta');
    boton.addEventListener('click' , () => {
        const inputName = document.getElementById('nombreVestimenta').value;
        let datos = {
            userId: userLogin,
            name: inputName,
            personaje: defaultCara.src,
            parteSuperior: defaultDorso.src,
            pantalon: defaultPiernas.src,
            calzado: defaultPies.src
        }
        console.log(datos)
        let url = 'http://localhost:4000/characters/add';
        fetch(url , {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.ok){
                let mensajeCheck = document.getElementById('check');
                mensajeCheck.style.display = 'block';
                setTimeout(() => {
                    window.location.reload();
                },2000);
            }
        })
        .catch(error => console.error(error))
    })

    const misPersonajes = document.getElementById('misPersonajes');
    misPersonajes.addEventListener('click' , () => {
        window.location.href = `characters.html?id=${userLogin}`;
    })
})