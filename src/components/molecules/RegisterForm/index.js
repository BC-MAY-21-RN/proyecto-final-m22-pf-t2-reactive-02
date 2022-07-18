import React from 'react';
import {View, Text} from 'react-native';
import Term from '../../atoms/Term';
import ButtonsForInit from '../../atoms/ButtonsForInit';
import BottomText from '../../atoms/BottomText';
import InputComponent from '../../atoms/InputComponent';
import NameAppSVG from '../../../assets/icons/nameapp.svg';
import LogoRegisterSVG from '../../../assets/icons/logoRegister.svg';
import UserSVG from '../../../assets/icons/userIcon.svg';
import EmailSVG from '../../../assets/icons/email.svg';
import PasswordSVG from '../../../assets/icons/password.svg';
import styles from './styles';
import globalstyles from '../../../const/globalStyles';
import TopDesign from '../../atoms/TopDesign';

const dataInputs = [
  {
    title: 'Nombre de usuario',
    icon: UserSVG,
    keyattribute: 'name',
    visibleicon: false,
  },
  {title: 'E-mail', icon: EmailSVG, keyattribute: 'email', visibleicon: false},
  {
    title: 'Contraseña',
    icon: PasswordSVG,
    keyattribute: 'password',
    visibleicon: true,
  },
  {
    title: 'Repetir contraseña',
    icon: PasswordSVG,
    keyattribute: 'password2',
    visibleicon: true,
  },
];

const Inputs = ({changeUser, alerts}) => {
  return dataInputs.map((item, index) => (
    <InputComponent
      key={index}
      title={item.title}
      Icon={item.icon}
      changeUser={changeUser}
      input={item.keyattribute}
      visibleAlert={alerts[index]}
      visibleIcon={item.visibleicon}
    />
  ));
};

export default function RegisterForm({
  user,
  alerts,
  changeAlerts,
  changeLoading,
  changeUser,
  navigation,
}) {
  return (
    <View style={styles.container}>
      <TopDesign
        styles={styles}
        NameAppSVG={NameAppSVG}
        LogoRegisterSVG={LogoRegisterSVG}
      />
      <View style={{...globalstyles.formContainer, ...{marginTop: 20}}}>
        <Text style={styles.text}>REGISTRO</Text>
        <Inputs changeUser={changeUser} alerts={alerts} />
        <Term
          text={'Acepto todos los terminos y condiciones'}
          isSelect={user.valuesRegister.term}
          change={changeUser}
          term={'term'}
        />
        <ButtonsForInit
          user={user}
          changeAlerts={changeAlerts}
          changeLoading={changeLoading}
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
