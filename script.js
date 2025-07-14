const materias = [
  //primer año. primer cuatrimestre
  { id: 'ei', nombre: 'Elementos de Informática', correlativas: [] },
  { id: 'algebra', nombre: 'Álgebra', correlativas: [] },
  { id: 'epya', nombre: 'Expresión de Problemas y Algoritmos', correlativas: [] },

  //primer año. segundo cuatrimestre
  { id: 'ayp1', nombre: 'Algorítmica y Programación I', correlativas: ['epya'] },
  { id: 'am', nombre: 'Analisis Matemático', correlativas: [] },
  { id: 'elymd', nombre: 'Elementos de lógica y matemática discretaa', correlativas: [] },
  { id: 'ingles', nombre: 'Ingles', correlativas: [] },

  //segundo año. primer cuatrimestre
  { id: 'ayp2', nombre: 'Algorítmica y Programación II', correlativas: ['ingles', 'ayp1'] },
  { id: 'adc', nombre: 'Arquitectura de Computadoras', correlativas: ['ingles', 'ei'] },
  { id: 'syo', nombre: 'Sistemas y Organizaciones', correlativas: ['ingles'] },

  //segundo año. segundo cuatrimestre
  { id: 'bd1', nombre: 'Base de Datos I', correlativas: ['ingles', 'ayp2'] },
  { id: 'estadistica', nombre: 'Estadística', correlativas: ['ingles', 'algebra', 'am'] },
  { id: 'poo', nombre: 'Programación Orientada a Objetos', correlativas: ['ingles', 'ayp2'] },

  //tercer año. primer cuatrimestre
  { id: 'lpyl', nombre: 'Laboratorio de programación y lenguajes', correlativas: ['poo'] },
  { id: 'ayds', nombre: 'Análisis y diseño de sistemas', correlativas: ['syo', 'bd1'] },
  { id: 'so', nombre: 'Sistemas operativos', correlativas: ['adc', 'ayp2'] },

  //tercer año. segundo cuatrimestre

  { id: 'ds', nombre: 'Desarrollo de Software', correlativas: ['poo', 'ayds'] },

];

const estado = {};  // Guarda qué materias están hechas

// Función que crea la malla
function Malla() {
  // Cambiar color y bloquea correlativas
  materias.forEach(m => {
    const div = document.getElementById(m.id);
    if (estado[m.id]) {
      div.classList.add('hecha');
    } else {
      div.classList.remove('hecha');
    }

    if (!m.correlativas.every(id => estado[id])) {
      div.classList.add('bloqueada');
    } else {
      div.classList.remove('bloqueada');
    }

    // Marca la materia como "hecha"
    div.onclick = () => {
      if (!div.classList.contains('bloqueada')) {
        estado[m.id] = !estado[m.id];
        Malla();
      }
    };
  });
}

Malla();
