import {useState} from 'react';
import Form from '../models/Form';

export default function useFormData(value) {
  const [dataForm, setDataForm] = useState(value);

  function handleData(newValue) {
    setDataForm(new Form({...dataForm.object, ...newValue}));
  }

  return {dataForm, handleData};
}
