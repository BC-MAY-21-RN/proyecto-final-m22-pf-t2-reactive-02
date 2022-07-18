import LoginUser from '../../models/LoginUser';

const newObject = (object, key, value) => {
  object.setValues({[key]: value});
  return new LoginUser(object.valuesLogin.email, object.valuesLogin.password);
};

const functions = {
  newObject,
};

export default functions;
