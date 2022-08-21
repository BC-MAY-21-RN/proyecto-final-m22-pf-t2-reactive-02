import React, {Fragment} from 'react';
import {View} from 'react-native';
import NameAppSVG from '../../assets/icons/nameapp.svg';
import LogoRegisterSVG from '../../assets/icons/logoRegister.svg';
import EmailSVG from '../../assets/icons/email.svg';
import TextScreenSVG from '../../assets/icons/TextScreen.svg';
import TopDesign from '../../components/atoms/TopDesign';
import useFormData from '../../hooks/useFormData';
import Form from '../../models/Form';
import styles from './styles';
import globalstyles from '../../const/globalStyles';
import initialValues from '../../const/initialValues';
import Input from '../../components/atoms/Input';
import BottomText from '../../components/atoms/BottomText';
import Button from '../../components/atoms/Button';
import functions from './functions';

export default function ForgetScreen({navigation}) {
  const form = useFormData(new Form(initialValues));

  return (
    <Fragment>
      <TopDesign
        styles={styles}
        LogoSVG={LogoRegisterSVG}
        NameAppSVG={NameAppSVG}
      />
      <TextScreenSVG style={styles.imagetext} />
      <View
        style={{
          ...globalstyles.formContainer,
          ...{marginTop: 20},
        }}>
        <Input
          keyObj={'email'}
          Icon={EmailSVG}
          title={'E-mail'}
          changeInput={form.handleData}
        />
        <Button
          text={'RECUPERAR CUENTA'}
          onPress={() => functions.sendForgetPassword(form.dataForm)}
          style={styles}
          disabled={form.dataForm.object.email !== ''}
        />
        <BottomText
          text={'Ingresa a tu cuenta aquí'}
          navigation={navigation}
          namescreen={'loginScreen'}
        />
      </View>
    </Fragment>
  );
}
