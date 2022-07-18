import React, {useState} from 'react';
import {View, Text} from 'react-native';
import NameAppSVG from '../../assets/icons/nameapp.svg';
import LogoSVG from '../../assets/icons/logo.svg';
import InputComponent from '../../components/atoms/InputComponent';
import EmailSVG from '../../assets/icons/email.svg';
import PasswordSVG from '../../assets/icons/password.svg';
import ButtonsForInit from '../../components/atoms/ButtonsForInit';
import BottomText from '../../components/atoms/BottomText';
import Loading from '../../components/atoms/Loading';
import styles from './styles';
import LoginUser from '../../models/LoginUser';
import globalstyles from '../../const/globalStyles';
import TopDesign from '../../components/atoms/TopDesign';
import functions from './functions';

export default function LoginScreen({navigation}) {
  const [user, setUser] = useState(new LoginUser());
  const [loading, setLoading] = useState(false);
  const changeUser = (value, key) =>
    setUser(functions.newObject(user, key, value));
  const changeLoading = bool => setLoading(bool);

  return (
    <View style={styles.container}>
      <Loading isvisible={loading} />
      <TopDesign
        styles={styles}
        LogoRegisterSVG={LogoSVG}
        NameAppSVG={NameAppSVG}
      />
      <View style={globalstyles.formContainer}>
        <Text style={styles.text}>INICIAR SESIÓN</Text>
        <InputComponent
          visibleAlert={false}
          title={'E-mail'}
          Icon={EmailSVG}
          changeUser={changeUser}
          input={'email'}
        />
        <InputComponent
          title={'Contraseña'}
          visibleAlert={false}
          Icon={PasswordSVG}
          visibleIcon={true}
          changeUser={changeUser}
          input={'password'}
        />
        <BottomText text={'¿Contraseña Olvidada?'} />
        <ButtonsForInit
          text="INGRESAR"
          user={user}
          changeLoading={changeLoading}
        />
        <BottomText
          text={'¿Aún no tienes una cuenta?'}
          navigation={navigation}
          namescreen={'registerScreen'}
        />
      </View>
    </View>
  );
}
