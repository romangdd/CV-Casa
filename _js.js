let tagName = "work-experience-list";

window.onload = () => {
  customElements.define(tagName, WorckExperienceList);
  inicializarValores();
}

function inicializarValores() {
  let json = localJson();

  let nombre = document.getElementById("nombre");
  let titulacion = document.getElementById("titulacion");
  let descripcion = document.getElementById("descripcion");


  let imagen = document.getElementById("foto");
  let email = document.getElementById("email")
  let telefono = document.getElementById("telefono");
  let ubicacion = document.getElementById("ubicacion");
  let linkedin = document.getElementById("linkedin");
  let skype = document.getElementById("skype");

  nombre.textContent = json.nombre;
  titulacion.textContent = json.titulacion;
  descripcion.textContent = json.descripcion;

  imagen.src = json.rutaImagen;
  email.textContent = json.email;
  telefono.textContent = json.telefono;
  ubicacion.textContent = json.ubicacion;
  linkedin.textContent = json.linkedin;
  skype.textContent = json.skype;

  let experienciasComponente = document.getElementsByTagName(tagName)[0];
  experienciasComponente.setAttribute("data", JSON.stringify(json.experienciasTrabajo));

//cargarExperiencias(json.experienciasTrabajo);
  cargarFormaciones(json.educacion);
  cargarLenguajes(json.lenguajes);
  cargarSkills(json.skills);
  cargarOrganizaciones(json.organizaciones);
  cargarPremios(json.premios);
}

function localJson() {
  let exUnoContenidoUno = "Succesfully managed $2-3 millon budget projects and sucessfully achived the project scheduled goals.";
  let exUnoContenidoDos = "Developed and implemented new marketing and sales plans ahd defined the strategy for the next 5 years.";
  let exUnoContenidoTres = "Reviewed constantly the customer feedback and then suggested ways to improve the processes and customer service levels which incresed the satsfaction rate from 81% tu 95%.";
  let exUnoContenidoCuatro = "Ensured that new clients will grow into a loyal customer base in a specialist niche market by implementing a new loyalty program.";

  let exDosContenidoUno = "Incresed the customer satisfaction rate by 25% by improving the customer service.";
  let exDosContenidoDos = "Planned, supervised and coordineted dialy activity oj junior buisiness analysts.";
  let exDosContenidoTres = "Inproved the communication with the Marketing department to better undestand the comparative position.";
  let exDosContenidoCuatro = "Directed the creation and implementation of a Buisiness Continuity Plan, and managment the audit programs.";

  let contenidosExUno = [exUnoContenidoUno, exUnoContenidoDos, exUnoContenidoTres, exUnoContenidoCuatro];
  let contenidosExDos = [exDosContenidoUno, exDosContenidoDos, exDosContenidoTres, exDosContenidoCuatro];
  let experienciaUno = {
    puesto: "Buisiness Development Manager", empresa: "AirState Solutions",
    fechas: "09/2014-06/2017", ubicacion: "New York, USA", contenidos: contenidosExUno
  };

  let experienciaDos = {
    puesto: "Buisiness Development Assistant", empresa: "AirState Solutions",
    fechas: "09/2012-06/2014", ubicacion: "New York, USA", contenidos: contenidosExDos
  };

  let experienciasTrabajo = [experienciaUno, experienciaDos];

  let educacionUno = {
    titulo: "MSc in Economist and Buisuness Administration", centro: "The University of Chicago", fechas: "09/2008-06/2010"
  }

  let educacion = [educacionUno];

  let lenguajeUno = {
    nombre: "Java", nivel: 4
  }
  let lenguajeDos = {
    nombre: "JavaScript", nivel: 4
  }
  let lenguajeTres = {
    nombre: "C#", nivel: 2
  }
  let lenguajeCuatro = {
    nombre: "PHP", nivel: 3
  }

  let lenguajes = [lenguajeUno, lenguajeDos, lenguajeTres, lenguajeCuatro];

  let skillUno = {
    nombre: "SEO", nivel: 90
  }

  let skillDos = {
    nombre: "Public Speaking", nivel: 95
  }

  let skillTres = {
    nombre: "Negociation", nivel: 75
  }

  let skillCuatro = {
    nombre: "Teamworck", nivel: 100
  }

  let skillCinco = {
    nombre: "Decision Making", nivel: 100
  }

  let skillSeis = {
    nombre: "Reserarch & Strategy", nivel: 100
  }

  let skillSiete = {
    nombre: "Emotional Intelligence", nivel: 80
  }

  let skillOcho = {
    nombre: "Outbound Marketing", nivel: 95
  }

  let skillNueve = {
    nombre: "Email Marketing", nivel: 85
  }

  let skillDiez = {
    nombre: "Google Analytics", nivel: 80
  }

  let skillOnce = {
    nombre: "Sales & Marketing", nivel: 80
  }

  let skills = [skillUno, skillDos, skillTres, skillCuatro, skillCinco, skillSeis, skillSiete,
    skillOcho, skillNueve, skillDiez, skillOnce];

  let organizacionUno = {
    empresa: "American Managment Association", fechas: "2015-Present"
  }

  let organizacionDos = {
    empresa: "Association of Private Enterprise Education", fechas: "2014-Present"
  }

  let organizacionTres = {
    empresa: "eBuisiness Association (eBA)", fechas: "2013-Present"
  }

  let organizaciones = [organizacionUno, organizacionDos, organizacionTres];

  let premioUno = {
    nombre: "Jury Member, Venture Cup Entrepreneurship Competition", fecha: 2016, ubicacion: "Venture Cup USA"
  }

  let premioDos = {
    nombre: "Sales Individual & Buisiness Development Award", fecha: 2015, ubicacion: "AirState Buisiness Award"
  }

  let premioTres = {
    nombre: "Excellence in Customer Partnering Award", fecha: null, ubicacion: "IES - Institute of Excellence in Sales"
  }
  let premios = [premioUno, premioDos, premioTres]

  return {
    nombre: "Manolo", titulacion: "Buissines Development Manager",
    descripcion: "Professional buisness developper whith more thanvfive years of experience in the buisiness development process. Involed in product testing, managment, and development of new buisiness opportunities",
    rutaImagen: "./Recursos/foto-cara.avif",
    email: "jhom@gmail.com",
    telefono: "619-45-32-32", ubicacion: "New York, USA",
    linkedin: "linkedin.com/in/jhon.doe", skype: "jhom.doe",
    experienciasTrabajo, educacion, lenguajes, skills, organizaciones, premios
  };
}

function cargarFormaciones(formaciones) {
  let contenedorFormaciones = document.getElementById("contenedor-formaciones");
  for (let i = 0; i < formaciones.length; i++) {
    let formacionX = formaciones[i];
    let h3Titulo = document.createElement("h3");
    h3Titulo.textContent = formacionX.titulo;

    let h3Centro = document.createElement("h3");
    h3Centro.textContent = formacionX.centro;
    h3Centro.setAttribute("class", "titulo-referencia");
    let pFecha = document.createElement("p");
    pFecha.textContent = formacionX.fechas;

    contenedorFormaciones.appendChild(h3Titulo);
    contenedorFormaciones.appendChild(h3Centro);
    contenedorFormaciones.appendChild(pFecha);
  }
}

function cargarLenguajes(lenguajes) {
  let contenedorLenguajes = document.getElementById("contenedor-lenguajes");

  for (let i = 0; i < lenguajes.length; i++) {
    let lenguajeX = lenguajes[i];

    let divLenguajeX = document.createElement("div");
    divLenguajeX.setAttribute("class", "lenguaje");

    let pLenguaje = document.createElement("p");
    pLenguaje.textContent = lenguajeX.nombre;

    divLenguajeX.appendChild(pLenguaje);

    for (let j = 0; j < 5; j++) {
      let imagenX = document.createElement("img");

      imagenX.setAttribute("class", "valoracion");
      if (lenguajeX.nivel > j) {
        imagenX.src = "./Recursos/checked-dos.png";
      } else {
        imagenX.src = "./Recursos/checked-Uno.png";
      }

      divLenguajeX.appendChild(imagenX);
    }
    contenedorLenguajes.appendChild(divLenguajeX);
  }
}

function cargarSkills(skills) {
  let contenedorSkills = document.getElementById("contenedor-skills");

  for (let i = 0; i < skills.length; i++) {
    let skillX = skills[i];

    let divSkillX = document.createElement("div");
    divSkillX.setAttribute("class", "skill");

    let pNombre = document.createElement("p");
    pNombre.textContent = skillX.nombre;

    let barraProgresoValor = document.createElement("progress");
    barraProgresoValor.setAttribute("max", "100");
    barraProgresoValor.setAttribute("value", skillX.nivel);

    divSkillX.appendChild(pNombre);
    divSkillX.appendChild(barraProgresoValor);

    contenedorSkills.appendChild(divSkillX);
  }
}

function cargarOrganizaciones(organizaciones) {
  let contenedorOrganizaciones = document.getElementById("contenedor-organizaciones");

  for (let i = 0; i < organizaciones.length; i++) {
    let organizacionX = organizaciones[i];
    let pOrganizacion = obtenerPTextoFecha(organizacionX.empresa, organizacionX.fechas);

    contenedorOrganizaciones.appendChild(pOrganizacion);
  }
}

function cargarPremios(premios) {
  let contenedorPremios = document.getElementById("contenedor-premios");

  for (let i = 0; i < premios.length; i++) {
    let premioX = premios[i];

    let divPremio = document.createElement("div");
    divPremio.setAttribute("class", "premio");

    let pPremio = obtenerPTextoFecha(premioX.nombre, premioX.fecha);

    let pUbicacion = document.createElement("p");
    pUbicacion.setAttribute("class", "ubicacion-premios");
    pUbicacion.textContent = premioX.ubicacion;

    divPremio.appendChild(pPremio);
    divPremio.appendChild(pUbicacion);

    contenedorPremios.appendChild(divPremio);
  }
}

function obtenerPTextoFecha(texto, fecha) {
  let pOrganizacion = document.createElement("p");

  if (fecha != null) {
    pOrganizacion.textContent = `${texto} (${fecha})`;
  } else {
    pOrganizacion.textContent = texto;
  }

  return pOrganizacion;
}




