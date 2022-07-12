import React from 'react';
import {View, Text} from 'react-native';
import NameAppSVG from '../../assets/icons/nameapp.svg';
import LogoSVG from '../../assets/icons/logo.svg';
import Icons from '../../components/atoms/Icons';
import InputComponent from '../../components/atoms/InputComponent';
import EmailSVG from '../../assets/icons/email.svg';
import PasswordSVG from '../../assets/icons/password.svg';
import ButtonsForInit from '../../components/atoms/ButtonsForInit';
import BottomText from '../../components/atoms/BottomText';
import Loading from '../../components/atoms/Loading';
import styles from './styles';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Loading isvisible={false} />
      <View style={styles.logoscontainer}>
        <View style={styles.logosdireccion}>
          <Icons IconProp={NameAppSVG} style={styles.namecontainer} />
          <Icons IconProp={LogoSVG} style={styles.logocontainer} />
        </View>
      </View>
      <View style={styles.formcontainer}>
        <Text style={styles.text}>INICIAR SESIÓN</Text>
        <InputComponent title={'E-mail'} Icon={EmailSVG} />
        <InputComponent
          title={'Contraseña'}
          Icon={PasswordSVG}
          visibleIcon={true}
        />
        <BottomText text={'¿Contraseña Olvidada?'} />
        <ButtonsForInit text="INGRESAR" />
        <BottomText text={'¿Aún no tienes una cuenta?'} />
      </View>
    </View>
  );
}
