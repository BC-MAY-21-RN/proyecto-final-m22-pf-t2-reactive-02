import auth from '../../../services/auth';
import firestore from '../../../services/firestore';
import {Alert} from 'react-native';

const regexpassword =
  /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?+*-¿!#%&/()=¡\-_]){1})\S{8,16}$/;
const regexemail =
  /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

function _addUser(user, loading) {
  const data = {
    correo: user.object.email,
    nombre: user.object.name,
    uid: auth.getId(),
    imagenurl: getPhotoUrl(auth.getPhoto()),
    fecharegistro: firestore.dateNow(),
  };

  firestore
    .addFunction('usuarios', data)
    .then(() => {
      auth.updateUser(user, getPhotoUrl);
      loading.changeState(false);
    })
    .catch(err => {
      loading.changeState(false);
      Alert.alert('Error', '' + err, [{text: 'OK'}]);
    });
}

function emailRegister(loading, user) {
  loading.changeState(true);
  auth
    .registerEmailUser(user)
    .then(() => {
      _addUser(user, loading);
    })
    .catch(err => {
      loading.changeState(false);
      Alert.alert('Error', '' + err, [{text: 'OK'}]);
    });
}

const getPhotoUrl = value => {
  if (value === null) {
    return 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2022/08/03/2798885.jpg';
  } else {
    return value;
  }
};

function getUser() {
  return {
    object: {
      name: auth.getName(),
      email: auth.getEmail(),
    },
  };
}

function googleInit(loading) {
  loading.changeState(true);
  auth
    .onGoogleButtonPress()
    .then(() => {
      const uid = auth.getId();
      const user = getUser();
      firestore
        .getFunction('usuarios', 'uid', '==', uid)
        .then(querySnapshot => {
          if (querySnapshot.size === 0) {
            _addUser(user, loading);
          }
        })
        .catch(err => {
          loading.changeState(false);
          Alert.alert('Error', '' + err, [{text: 'OK'}]);
        });
    })
    .catch(err => {
      loading.changeState(false);
      Alert.alert('Error', '' + err, [{text: 'OK'}]);
    });
}

function onPress1(form, changeForm, loading) {
  const inputs = [
    form.object.name.lenght > 0,
    regex('email', form.object.email),
    regex('password', form.object.password),
    repeatPassword(form.object.password, form.object.password2),
  ];

  if (inputs.includes(true)) {
    changeForm({alert: inputs});
  } else {
    emailRegister(loading, form);
  }
}

function onPress2(loading) {
  googleInit(loading);
}

function regex(type, text) {
  if (type === 'email') {
    return !regexemail.test(text);
  } else {
    return !regexpassword.test(text);
  }
}

function repeatPassword(password1, password2) {
  if (password2 === password1) {
    return regex('password', password2);
  } else {
    return true;
  }
}

function validatebtn1(form) {
  if (
    form.object.name !== '' &&
    form.object.email !== '' &&
    form.object.password !== '' &&
    form.object.password2 !== '' &&
    form.object.term === true
  ) {
    return true;
  } else {
    return false;
  }
}

function validatebtn2(form) {
  if (form.object.term === true) {
    return true;
  } else {
    return false;
  }
}

export default {onPress1, onPress2, validatebtn1, validatebtn2};
