const questions = [
  {text: '¿Cuántas mascotas tienes?', keyObj: 'q1'},
  {
    text: '¿Convivencon otras mascotas de forma pacifica?',
    keyObj: 'q2',
    type: 'select',
    data: ['Si', 'Aveces', 'Muy amenudo', 'Nunca'],
  },
  {text: '¿Cuántas horas al dia pasará tu mascota sola?', keyObj: 'q3'},
  {
    text: 'Tu mascota estará mayormente...',
    keyObj: 'q4',
    type: 'select',
    data: ['Casa', 'Patio', 'Calle', 'Nose'],
  },
];

export default questions;
