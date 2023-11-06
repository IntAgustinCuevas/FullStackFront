document.addEventListener('DOMContentLoaded' , () => {
    const parametro = new URLSearchParams(window.location.search);
    const userLogin = parametro.get('id');

    const nombre1 = document.getElementById('namePersonaje1')
    const rostro1 = document.getElementById('rostro1');
    const cuerpo1 = document.getElementById('cuerpo1');
    const piernas1 = document.getElementById('piernas1');
    const pies1 = document.getElementById('pies1');

    const nombre2 = document.getElementById('namePersonaje2')
    const rostro2 = document.getElementById('rostro2');
    const cuerpo2 = document.getElementById('cuerpo2');
    const piernas2 = document.getElementById('piernas2');
    const pies2 = document.getElementById('pies2');

    const nombre3 = document.getElementById('namePersonaje3')
    const rostro3 =document.getElementById('rostro3');
    const cuerpo3 = document.getElementById('cuerpo3');
    const piernas3 =document.getElementById('piernas3');
    const pies3 =document.getElementById('pies3');

    const nombre4 = document.getElementById('namePersonaje4')
    const rostro4 = document.getElementById('rostro4');
    const cuerpo4 = document.getElementById('cuerpo4');
    const piernas4 = document.getElementById('piernas4');
    const pies4 = document.getElementById('pies4');

    const nombre5 = document.getElementById('namePersonaje5')
    const rostro5 = document.getElementById('rostro5');
    const cuerpo5 = document.getElementById('cuerpo5');
    const piernas5 = document.getElementById('piernas5');
    const pies5 = document.getElementById('pies5');


    let url = `http://localhost:4000/characters/${userLogin}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        nombre1.textContent = data[0].name;
        rostro1.src = data[0].personaje;
        cuerpo1.src = data[0].parteSuperior;
        piernas1.src = data[0].pantalon;
        pies1.src = data[0].calzado;

        nombre2.textContent = data[1].name;
        rostro2.src = data[1].personaje;
        cuerpo2.src = data[1].parteSuperior;
        piernas2.src = data[1].pantalon;
        pies2.src = data[1].calzado;

        nombre3.textContent = data[2].name;
        rostro3.src = data[2].personaje;
        cuerpo3.src = data[2].parteSuperior;
        piernas3.src = data[2].pantalon;
        pies3.src = data[2].calzado;

        nombre4.textContent = data[3].name;
        rostro4.src = data[3].personaje;
        cuerpo4.src = data[3].parteSuperior;
        piernas4.src = data[3].pantalon;
        pies4.src = data[3].calzado;

        nombre5.textContent = data[4].name;
        rostro5.src = data[4].personaje;
        cuerpo5.src = data[4].parteSuperior;
        piernas5.src = data[4].pantalon;
        pies5.src = data[4].calzado;
    })
    .catch(error => console.log(error))
})

