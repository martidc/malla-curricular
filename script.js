const materias = [
  { id: 'EI', nombre: 'Elementos de Informática', correlativas: [], año: '1° año - 1° cuatrimestre' },
  { id: 'Algebra', nombre: 'Álgebra', correlativas: [], año: '1° año - 1° cuatrimestre' },
  { id: 'EPyA', nombre: 'Expresión de Problemas y Algoritmos', correlativas: [], año: '1° año - 1° cuatrimestre' },

  { id: 'AyP1', nombre: 'Algorítmica y Programación I', correlativas: ['EPyA'], año: '1° año - 2° cuatrimestre' },
  { id: 'AM', nombre: 'Análisis Matemático', correlativas: [], año: '1° año - 2° cuatrimestre' },
  { id: 'ELyMD', nombre: 'Elementos de la Lógica y Matemática Discreta', correlativas: [], año: '1° año - 2° cuatrimestre' },
  { id: 'Ingles', nombre: 'Acreditación de idioma Inglés', correlativas: [], año: '1° año - 2° cuatrimestre' },

  { id: 'SyO', nombre: 'Sistemas y Organizaciones', correlativas: ['Ingles'], año: '2° año - 1° cuatrimestre' },
  { id: 'AdC', nombre: 'Arquitectura de Computadoras', correlativas: ['EI'], año: '2° año - 1° cuatrimestre' },
  { id: 'AyP2', nombre: 'Algorítmica y Programación II', correlativas: ['AyP1', 'ELyMD'], año: '2° año - 1° cuatrimestre' },

  { id: 'BD1', nombre: 'Base de Datos I', correlativas: ['AyP2'], año: '2° año - 2° cuatrimestre' },
  { id: 'Estadistica', nombre: 'Estadística', correlativas: ['Algebra', 'AM'], año: '2° año - 2° cuatrimestre' },
  { id: 'POO', nombre: 'Programación Orientada a Objetos', correlativas: ['AyP2'], año: '2° año - 2° cuatrimestre' },

  { id: 'LPyL', nombre: 'Laboratorio de Programación y Lenguajes', correlativas: ['POO'], año: '3° año - 1° cuatrimestre' },
  { id: 'AyDS', nombre: 'Análisis y Diseño de Sistemas', correlativas: ['BD1'], año: '3° año - 1° cuatrimestre' },
  { id: 'SO', nombre: 'Sistemas Operativos', correlativas: ['AdC'], año: '3° año - 1° cuatrimestre' },

  { id: 'DS', nombre: 'Desarrollo de Software', correlativas: ['POO'], año: '3° año - 2° cuatrimestre' }
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
      div.className = 'Materia';
      div.id = m.id;
      div.textContent = m.nombre;

      const desbloqueada = m.correlativas.every(id => estado[id]);
      if (estado[m.id]) div.classList.add('Hecha');
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
