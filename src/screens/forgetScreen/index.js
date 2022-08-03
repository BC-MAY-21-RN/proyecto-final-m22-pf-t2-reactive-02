import React, {useState} from 'react';
import {View} from 'react-native';
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

export default function ForgetScreen({navigation}) {
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
        />
        <ButtonForgetScreen text={'RECUPERAR'} />
        <BottomText
          text={'Ingresa a tu cuenta aquí'}
          navigation={navigation}
          namescreen={'loginScreen'}
        />
      </View>
    </View>
  );
}
