import React from 'react';
import {View} from 'react-native';
import Header from '../../components/atoms/Header';
import Loading from '../../components/atoms/Loading';
import TopBar from '../../components/atoms/TopBar';
import AdoptionForm from '../../components/molecules/AdoptionForm';
import Form from '../../models/Form';
import useFormData from '../../hooks/useFormData';
import useStateHook from '../../hooks/useStateHook';
import initialValues from '../../const/initialValues';

export default function AdoptionScreen({navigation, route}) {
  const form = useFormData(new Form(initialValues.initialAdoption));
  const loading = useStateHook(false);

  return (
    <View>
      <TopBar iconVisible={false} navigation={navigation} />
      <Header text={'Formulario de adopción'} navigation={navigation} />
      <Loading isVisible={loading.state} />
      <AdoptionForm
        form={form}
        loading={loading}
        navigation={navigation}
        params={route.params}
      />
    </View>
  );
}
