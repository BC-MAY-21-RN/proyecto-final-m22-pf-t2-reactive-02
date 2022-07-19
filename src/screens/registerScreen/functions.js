import RegisterUser from '../../models/RegisterUser';

const newObject = (object, key, value) => {
    object.setValues({[key]: value});
    return new RegisterUser(
      object.valuesRegister.name,
      object.valuesRegister.email,
      object.valuesRegister.password,
      object.valuesRegister.password2,
      object.valuesRegister.term,
    );
  };

const functions = {
    newObject,
}

export default functions;

