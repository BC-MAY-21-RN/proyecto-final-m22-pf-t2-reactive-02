import React, {Fragment} from 'react';
import {Text, View} from 'react-native';
import initialValues from '../../const/initialValues';
import useStateHook from '../../hooks/useStateHook';
import useFormData from '../../hooks/useFormData';
import Form from '../../models/Form';
import Loading from '../../components/atoms/Loading';
import TopDesign from '../../components/atoms/TopDesign';
import LogoSVG from '../../assets/icons/logo.svg';
import NameAppSVG from '../../assets/icons/nameapp.svg';
import styles from './styles';
import globalstyles from '../../const/globalStyles';
import Input from '../../components/atoms/Input';
import EmailSVG from '../../assets/icons/email.svg';
import PasswordSVG from '../../assets/icons/password.svg';
import BottomText from '../../components/atoms/BottomText';
import ButtonsForInit from '../../components/atoms/ButtonsForInit';
import functions from './functions';

export default function LoginScreen({navigation}) {
  const form = useFormData(new Form(initialValues.initialLogin));
  const loading = useStateHook(false);

  return (
    <Fragment>
      <Loading isVisible={loading.state} />
      <TopDesign styles={styles} LogoSVG={LogoSVG} NameAppSVG={NameAppSVG} />
      <View style={globalstyles.formContainer}>
        <Text style={styles.text}>INICIAR SESIÓN</Text>
        <Input
          keyObj={'email'}
          Icon={EmailSVG}
          title={'E-mail'}
          changeInput={form.handleData}
        />
        <Input
          keyObj={'password'}
          Icon={PasswordSVG}
          title={'Contraseña'}
          isPassword={true}
          changeInput={form.handleData}
        />
        <BottomText
          text={'¿Contraseña Olvidada?'}
          navigation={navigation}
          namescreen={'forgetScreen'}
        />
        <ButtonsForInit
          validationbtn1={true}
          validationbtn2={true}
          textButton={'INICIAR SESIÓN'}
          onPress1={() => functions.onPress1(loading, form.dataForm)}
          onPress2={() => functions.onPress2(loading)}
        />
        <BottomText
          text={'¿Aún no tienes una cuenta?'}
          navigation={navigation}
          namescreen={'registerScreen'}
        />
      </View>
    </Fragment>
  );
}
