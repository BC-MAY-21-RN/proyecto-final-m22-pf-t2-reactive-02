import React from 'react';
import {View} from 'react-native';
import initialValues from '../../const/initialValues';
import Form from '../../models/Form';
import useFormData from '../../hooks/useFormData';
import useStateHook from '../../hooks/useStateHook';
import Loading from '../../components/atoms/Loading';
import useModals from '../../hooks/useModals';
import ModalImage from '../../components/atoms/ModalImage';
import ModalMap from '../../components/atoms/ModalMap';
import PublicationForm from '../../components/molecules/PublicationForm';

export default function PublicationScreen({navigation, route}) {
  const {dataForm, handleData} = useFormData(
    new Form(
      route.params.init === undefined
        ? initialValues.initialPublication('#' + route.params.hashtag)
        : route.params.init,
    ),
  );
  const loading = useStateHook(false);
  const modals = useModals({i: 0, a: {}, v: false}, initialValues.initLocation);
  return (
    <View>
      <Loading isVisible={loading.state} />
      <ModalImage modals={modals} />
      <ModalMap modals={modals} changePost={true} handleData={handleData} />
      <PublicationForm
        navigation={navigation}
        loading={loading}
        modals={modals}
        dataForm={dataForm}
        handleData={handleData}
        hashtags={dataForm.object.hashtags}
        idDoc={route.params.idDoc}
      />
    </View>
  );
}
