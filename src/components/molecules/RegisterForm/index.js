import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import TopDesign from '../../atoms/TopDesign';
import NameAppSVG from '../../../assets/icons/nameapp.svg';
import LogoSVG from '../../../assets/icons/logoRegister.svg';
import UserSVG from '../../../assets/icons/userIcon.svg';
import EmailSVG from '../../../assets/icons/email.svg';
import PasswordSVG from '../../../assets/icons/password.svg';
import globalStyles from '../../../const/globalStyles';
import Inputs from './Inputs';
import Term from '../../atoms/Term';
import ButtonsForInit from '../../atoms/ButtonsForInit';
import functions from './functions';
import BottomText from '../../atoms/BottomText';

const dataInputs = [
  {
    title: 'Nombre de usuario',
    icon: UserSVG,
    key: 'name',
    isPassword: false,
  },
  {title: 'E-mail', icon: EmailSVG, key: 'email', isPassword: false},
  {
    title: 'Contraseña',
    icon: PasswordSVG,
    key: 'password',
    isPassword: true,
  },
  {
    title: 'Repetir contraseña',
    icon: PasswordSVG,
    key: 'password2',
    isPassword: true,
  },
];

export default function RegisterForm({
  loading,
  dataForm,
  handleData,
  navigation,
}) {
  return (
    <View style={styles.container}>
      <TopDesign styles={styles} LogoSVG={LogoSVG} NameAppSVG={NameAppSVG} />
      <View style={{...globalStyles.formContainer, ...{marginTop: 20}}}>
        <Text style={styles.text}>REGISTRO</Text>
        <Inputs
          dataInputs={dataInputs}
          changeInput={handleData}
          alerts={dataForm.object.alert}
        />
        <Term
          text={'Acepto todos los terminos y condiciones'}
          change={handleData}
          term={'term'}
          isSelect={dataForm.object.term}
        />
        <ButtonsForInit
          validationbtn1={functions.validatebtn1(dataForm)}
          validationbtn2={functions.validatebtn2(dataForm)}
          textButton={'REGISTRAR CUENTA'}
          onPress1={() => functions.onPress1(dataForm, handleData, loading)}
          onPress2={() => functions.onPress2(loading)}
        />
        <BottomText
          text={'¿Ya tienes una cuenta?'}
          navigation={navigation}
          namescreen={'loginScreen'}
        />
      </View>
    </View>
  );
}
