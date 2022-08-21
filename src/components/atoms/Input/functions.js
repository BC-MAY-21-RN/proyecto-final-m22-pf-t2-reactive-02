function getText(title) {
  switch (title) {
    case 'Nombre de usuario':
      return 'Ingrese nombre de usuario';
    case 'E-mail':
      return 'Ingrese un correo válido';
    case 'Contraseña':
      return 'Contraseña incorrecta';
    case 'Repetir contraseña':
      return 'Contraseña incorrecta';

    default:
      break;
  }
}

export default {getText};
