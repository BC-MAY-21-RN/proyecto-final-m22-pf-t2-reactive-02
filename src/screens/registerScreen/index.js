import React from 'react';
import {View} from 'react-native';
/*import NameAppSVG from '../../assets/icons/nameapp.svg';
import LogoRegisterSVG from '../../assets/icons/logoRegister.svg';
import Icons from '../../components/atoms/Icons';
import InputComponent from '../../components/atoms/InputComponent';
import UserSVG from '../../assets/icons/userIcon.svg';
import EmailSVG from '../../assets/icons/email.svg';
import PasswordSVG from '../../assets/icons/password.svg';
import Term from '../../components/atoms/Term';
import ButtonsForInit from '../../components/atoms/ButtonsForInit';
import BottomText from '../../components/atoms/BottomText';*/
import Loading from '../../components/atoms/Loading';
//import styles from './styles';
import {useState} from 'react';
import RegisterUser from '../../models/RegisterUser';
import RegisterForm from '../../components/molecules/RegisterForm';

/*const newObject = object => {
  return new RegisterUser(
    object.valuesRegister.name,
    object.valuesRegister.email,
    object.valuesRegister.password,
    object.valuesRegister.password2,
    object.valuesRegister.term,
  );
};*/

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
  /*const [user, setUser] = useState(new RegisterUser());
  const [alerts, setAlerts] = useState([false, false, false, false]);
  const [loading, setLoading] = useState(false);
  const changeUser = (value, key) => {
    user.setValues({[key]: value});
    setUser(newObject(user));
    setAlerts(user.valuesRegister.alert);
  };
  const changeLoading = value => setLoading(value);
  return (
    <View style={styles.container}>
      <Loading isvisible={loading} />
      <View style={styles.logoscontainer}>
        <View style={styles.logosdireccion}>
          <Icons IconProp={NameAppSVG} style={styles.namecontainer} />
          <Icons IconProp={LogoRegisterSVG} style={styles.logocontainer} />
        </View>
      </View>
      <View style={styles.formcontainer}>
        <Text style={styles.text}>REGISTRO</Text>
        <InputComponent
          title={'Nombre de usuario'}
          Icon={UserSVG}
          changeUser={changeUser}
          input={'name'}
          visibleAlert={alerts[0]}
        />
        <InputComponent
          title={'E-mail'}
          Icon={EmailSVG}
          changeUser={changeUser}
          input={'email'}
          visibleAlert={alerts[1]}
        />
        <InputComponent
          title={'Contraseña'}
          Icon={PasswordSVG}
          visibleIcon={true}
          changeUser={changeUser}
          input={'password'}
          visibleAlert={alerts[2]}
        />
        <InputComponent
          title={'Repetir contraseña'}
          Icon={PasswordSVG}
          visibleIcon={true}
          changeUser={changeUser}
          input={'password2'}
          visibleAlert={alerts[3]}
        />
        <Term
          text={'Acepto todos los terminos y condiciones'}
          isSelect={user.valuesRegister.term}
          change={changeUser}
          term={'term'}
        />
        <ButtonsForInit
          navigation={navigation}
          nameScreen={'Home'}
          user={user}
          changeUser={changeUser}
          changeLoading={changeLoading}
        />
        <BottomText text={'¿Ya tienes una cuenta?'} />
      </View>
    </View>
  );*/
}
