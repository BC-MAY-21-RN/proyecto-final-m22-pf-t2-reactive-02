import React, {useState} from 'react';
import {View, Text} from 'react-native';
import NameAppSVG from '../../assets/icons/nameapp.svg';
import LogoRegisterSVG from '../../assets/icons/logoRegister.svg';
import InputComponent from '../../components/atoms/InputComponent';
import EmailSVG from '../../assets/icons/email.svg';
import BottomText from '../../components/atoms/BottomText';
import Loading from '../../components/atoms/Loading';
import styles from './styles';
import globalstyles from '../../const/globalStyles';
import TopDesign from '../../components/atoms/TopDesign';

export default function LoginScreen({navigation}) {
  const [loading, setLoading] = useState(false);
  const changeLoading = bool => setLoading(bool);

  return (
    <View style={styles.container}>
      <Loading isvisible={loading} />
      <TopDesign
        styles={styles}
        NameAppSVG={NameAppSVG}
        LogoRegisterSVG={LogoRegisterSVG}
      />
      <View style={{...globalstyles.formContainer, ...{marginTop: 20}}}>
        <Text style={styles.text}>INICIAR SESIÓN</Text>
        <InputComponent
          visibleAlert={false}
          title={'E-mail'}
          Icon={EmailSVG}
          input={'email'}
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
