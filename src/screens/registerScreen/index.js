import React, {useState} from 'react';
import {View} from 'react-native';
import Loading from '../../components/atoms/Loading';
import RegisterUser from '../../models/RegisterUser';
import RegisterForm from '../../components/molecules/RegisterForm';

const newObject = (object, key, value) => {
  object.setValues({[key]: value});
  return new RegisterUser(
    object.valuesRegister.name,
    object.valuesRegister.email,
    object.valuesRegister.password,
    object.valuesRegister.password2,
    object.valuesRegister.term,
  );
};

export default function RegisterScreen({navigation}) {
  const [user, setUser] = useState(new RegisterUser());
  const [alerts, setAlerts] = useState([false, false, false, false]);
  const [loading, setLoading] = useState(false);
  const changeAlerts = arr => setAlerts(arr);
  const changeLoading = bool => setLoading(bool);
  const changeUser = (value, key) => setUser(newObject(user, key, value));

  return (
    <View>
      <Loading isvisible={loading} />
      <RegisterForm
        user={user}
        alerts={alerts}
        changeAlerts={changeAlerts}
        changeLoading={changeLoading}
        changeUser={changeUser}
        navigation={navigation}
      />
    </View>
  );
}
