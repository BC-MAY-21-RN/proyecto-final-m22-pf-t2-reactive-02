import React from 'react';
import {View, Text} from 'react-native';
import NameAppSVG from '../../assets/icons/nameapp.svg';
import LogoRegisterSVG from '../../assets/icons/logoRegister.svg';
import Icons from '../../components/icons';
import InputComponent from '../../components/InputComponent';
import UserSVG from '../../assets/icons/userIcon.svg';
import EmailSVG from '../../assets/icons/email.svg';
import PasswordSVG from '../../assets/icons/password.svg';
import Term from '../../components/Term';
import ButtonsForInit from '../../components/ButtonsForInit';
import BottomText from '../../components/BottomText';
import Loading from '../../components/Loading';
import styles from './styles';
import {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import RegisterUser from '../../models/RegisterUser';

const newObject = object => {
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
  );
}
