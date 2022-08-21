import React, {Fragment} from 'react';
import useFormData from '../../hooks/useFormData';
import useStateHook from '../../hooks/useStateHook';
import Form from '../../models/Form';
import initialValues from '../../const/initialValues';
import Loading from '../../components/atoms/Loading';
import RegisterForm from '../../components/molecules/RegisterForm';

export default function RegisterScreen({navigation}) {
  const {dataForm, handleData} = useFormData(
    new Form(initialValues.initialRegister),
  );
  const loading = useStateHook(false);

  return (
    <Fragment>
      <Loading isVisible={loading.state} />
      <RegisterForm
        dataForm={dataForm}
        loading={loading}
        handleData={handleData}
        navigation={navigation}
      />
    </Fragment>
  );
}
