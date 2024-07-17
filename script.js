window.addEventListener('load', obtenerDatos);

function obtenerDatos() {
    const apiKey = "s5G2pihNdE0wiUkORlzDzNkvZcg65yhgRAuqaAN8";
    const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    const fechas = ['2023-07-01', '2023-07-02', '2023-07-03', '2023-07-04'];

    fechas.forEach((fecha, index) => {
        const apiUrl = `${baseUrl}&date=${fecha}`;
        fetch(apiUrl)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarDatos(resultado, index + 1));
    });
}

function mostrarDatos({ explanation, title, url }, index) {
    const titulo = document.querySelector(`#titulo${index}`);
    titulo.innerHTML = title;

    const descripcion = document.querySelector(`#descripcion${index}`);
    const primerPunto = explanation.indexOf('.');
    if (primerPunto !== -1) {
        explanation = explanation.substring(0, primerPunto + 1);
    }
    descripcion.innerHTML = explanation;

    const multimedia = document.querySelector(`#imagen${index}`);
    multimedia.innerHTML = `<img src="${url}" alt="${title}" class="imagen">`;
}
