import auth from '../../services/auth';
import Alert from '../../components/atoms/Input/Alert';

function onPress2(loading) {
  loading.changeState(true);
  auth
    .onGoogleButtonPress()
    .then(() => {
      loading.changeState(false);
    })
    .catch(err => {
      loading.changeState(false);
      Alert.alert('Error', '' + err, [{text: 'OK'}]);
    });
}

function onPress1(loading, form) {
  loading.changeState(true);
  const email = form.object.email;
  const password = form.object.password;
  auth
    .loginAccount(email, password)
    .then(() => {
      loading.changeState(false);
    })
    .catch(err => {
      loading.changeState(false);
      Alert.alert('Error', '' + err, [{text: 'OK'}]);
    });
}

export default {onPress1, onPress2};
