let shadow = null;
class WorckExperienceList extends HTMLElement {
    constructor() {
        super();

        shadow = this.attachShadow({ mode: "closed" });
    }

    static get observedAttributes() {
        return ['data'];
    }

    attributeChangedCallback() {
        let json = this.getAttribute("data");
        if (json != "") {
            json = JSON.parse(json);
            this.render(json, shadow);
        }
    }

    render(json, shadow) {
        this.cargarExperiencias(json, shadow);
        this.cargarEstilos(shadow);
    }

    cargarExperiencias(experiencias, contenedorPadre) {
        for (let i = 0; i < experiencias.length; i++) {
            let experienciaX = experiencias[i];
            let contenidos = experienciaX.contenidos;

            let h3Puesto = document.createElement("h3");
            h3Puesto.textContent = experienciaX.puesto;

            let divReferencias = document.createElement("div");
            divReferencias.setAttribute("class", "referencia");

            let h3Titulo = document.createElement("h3");
            h3Titulo.setAttribute("class", "titulo-referencia");
            h3Titulo.textContent = experienciaX.empresa;

            let imgRedirigir = document.createElement("img");
            imgRedirigir.setAttribute("src", "./Recursos/cerrar-sesion.png");
            imgRedirigir.setAttribute("class", "logo-redirigir");
            imgRedirigir.setAttribute("alt", "Redireccion a Referencia");

            divReferencias.appendChild(h3Titulo);
            divReferencias.appendChild(imgRedirigir);

            let divUbicacion = document.createElement("div");
            divUbicacion.setAttribute("class", "ubicacion");

            let pFecha = document.createElement("p");
            pFecha.textContent = experienciaX.fechas;
            let pUbicacion = document.createElement("p");
            pUbicacion.textContent = experienciaX.ubicacion;

            divUbicacion.appendChild(pFecha);
            divUbicacion.appendChild(pUbicacion);

            let ulContenido = document.createElement("ul");

            for (let j = 0; j < contenidos.length; j++) {
                let contenidoX = contenidos[j];

                let liX = document.createElement("li");
                liX.textContent = contenidoX;

                ulContenido.appendChild(liX);
            }

            contenedorPadre.appendChild(h3Puesto);
            contenedorPadre.appendChild(divReferencias);
            contenedorPadre.appendChild(divUbicacion);
            contenedorPadre.appendChild(ulContenido);
        }
    }

    cargarEstilos(shadow) {
        let etiquetaEstilos = document.createElement("style");
        shadow.appendChild(etiquetaEstilos);

        let hojaEstilos = etiquetaEstilos.sheet;

        hojaEstilos.insertRule(".titulo-referencia { font-weight: normal; margin-top: 0px}", 0);
        hojaEstilos.insertRule(".referencia { display: flex; margin-top: 0px}", 1);
        hojaEstilos.insertRule(".logo-redirigir { padding-left: .4rem; width: 1.25rem; height: 1.25rem}", 1);
        hojaEstilos.insertRule(".ubicacion { display: flex; justify-content: space-between}", 1);
    }
}