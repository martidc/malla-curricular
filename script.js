const materias = [
  { id: 'ei', nombre: 'Elementos de Informática', correlativas: [], año: '1° año - 1° cuatrimestre' },
  { id: 'algebra', nombre: 'Álgebra', correlativas: [], año: '1° año - 1° cuatrimestre' },
  { id: 'epa', nombre: 'Expresión de Problemas y Algoritmos', correlativas: [], año: '1° año - 1° cuatrimestre' },

  { id: 'api', nombre: 'Algorítmica y Programación I', correlativas: ['epa'], año: '1° año - 2° cuatrimestre' },
  { id: 'am', nombre: 'Análisis Matemático', correlativas: [], año: '1° año - 2° cuatrimestre' },
  { id: 'logica', nombre: 'Elementos de la Lógica y Matemática Discreta', correlativas: [], año: '1° año - 2° cuatrimestre' },
  { id: 'ingles', nombre: 'Acreditación de idioma Inglés', correlativas: [], año: '1° año - 2° cuatrimestre' },

  { id: 'syso', nombre: 'Sistemas y Organizaciones', correlativas: ['ingles'], año: '2° año - 1° cuatrimestre' },
  { id: 'arq', nombre: 'Arquitectura de Computadoras', correlativas: ['ei'], año: '2° año - 1° cuatrimestre' },
  { id: 'apii', nombre: 'Algorítmica y Programación II', correlativas: ['api', 'logica'], año: '2° año - 1° cuatrimestre' },

  { id: 'bd1', nombre: 'Base de Datos I', correlativas: ['apii'], año: '2° año - 2° cuatrimestre' },
  { id: 'estad', nombre: 'Estadística', correlativas: ['algebra', 'am'], año: '2° año - 2° cuatrimestre' },
  { id: 'poo', nombre: 'Programación Orientada a Objetos', correlativas: ['apii'], año: '2° año - 2° cuatrimestre' },

  { id: 'lab', nombre: 'Laboratorio de Programación y Lenguajes', correlativas: ['poo'], año: '3° año - 1° cuatrimestre' },
  { id: 'ads', nombre: 'Análisis y Diseño de Sistemas', correlativas: ['bd1'], año: '3° año - 1° cuatrimestre' },
  { id: 'so', nombre: 'Sistemas Operativos', correlativas: ['arq'], año: '3° año - 1° cuatrimestre' },

  { id: 'ds', nombre: 'Desarrollo de Software', correlativas: ['poo'], año: '3° año - 2° cuatrimestre' }
];

const estado = {};
const container = document.getElementById('malla');

function renderMalla() {
  container.innerHTML = '';
  const años = [...new Set(materias.map(m => m.año))];

  años.forEach(año => {
    const añoDiv = document.createElement('div');
    añoDiv.className = 'año';

    const label = document.createElement('div');
    label.className = 'año-label';
    label.textContent = año;
    añoDiv.appendChild(label);

    materias.filter(m => m.año === año).forEach(m => {
      const div = document.createElement('div');
      div.className = 'materia';
      div.id = m.id;
      div.textContent = m.nombre;

      const desbloqueada = m.correlativas.every(id => estado[id]);
      if (estado[m.id]) div.classList.add('hecha');
      else if (!desbloqueada) div.classList.add('bloqueada');

      div.onclick = () => {
        if (!div.classList.contains('bloqueada')) {
          estado[m.id] = !estado[m.id];
          renderMalla();
        }
      };

      añoDiv.appendChild(div);
    });

    container.appendChild(añoDiv);
  });
}

renderMalla();
