import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import NameAppSVG from '../../assets/icons/nameapp.svg';
import LogoRegisterSVG from '../../assets/icons/logoRegister.svg';
import InputComponent from '../../components/atoms/InputComponent';
import EmailSVG from '../../assets/icons/email.svg';
import TextScreenSVG from '../../assets/icons/TextScreen.svg';
import BottomText from '../../components/atoms/BottomText';
import ButtonForgetScreen from '../../components/atoms/ButtonForgetScreen';
import styles from './styles';
import globalstyles from '../../const/globalStyles';
import TopDesign from '../../components/atoms/TopDesign';
import auth from '@react-native-firebase/auth';

export default function ForgetScreen({navigation}) {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <TopDesign
        styles={styles}
        NameAppSVG={NameAppSVG}
        LogoRegisterSVG={LogoRegisterSVG}
      />
      <TextScreenSVG style={styles.imagetext} />
      <View
        style={{
          ...globalstyles.formContainer,
          ...{marginTop: 20},
        }}>
        <InputComponent
          visibleAlert={false}
          title={'E-mail'}
          Icon={EmailSVG}
          input={'email'}
          changeUser={setText}
        />
        <ButtonForgetScreen
          text={'RECUPERAR'}
          onPress={() =>
            auth().sendPasswordResetEmail(text)
              ? Alert.alert(
                  'Se ha mandado un correo, por favor revisa tu bandeja de spam.',
                )
              : Alert.alert('Ha ocurrido un error, inténtalo nuevamente.')
          }
        />
        <BottomText
          text={'Ingresa a tu cuenta aquí'}
          navigation={navigation}
          namescreen={'loginScreen'}
        />
      </View>
    </View>
  );
}
