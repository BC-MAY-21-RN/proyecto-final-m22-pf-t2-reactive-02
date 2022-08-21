import auth from '../../services/auth';
import {Alert} from 'react-native';

function sendForgetPassword(form) {
  const text = form.object.email;
  auth
    .forgetPassword(text)
    .then(() => {
      Alert.alert(
        'Se ha mandado un correo, por favor revisa tu bandeja de spam.',
      );
    })
    .catch(() => {
      Alert.alert('Ha ocurrido un error, inténtalo nuevamente.');
    });
}

export default {sendForgetPassword};
