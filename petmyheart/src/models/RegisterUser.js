class RegisterUser {
  constructor(
    name = '',
    email = '',
    password = '',
    password2 = '',
    term = true,
    alert1 = false,
    alert2 = false,
    alert3 = false,
    alert4 = false,
  ) {
    this.valuesRegister = {
      name: name,
      email: email,
      password: password,
      password2: password2,
      term: term,
      alert1: alert1,
      alert2: alert2,
      alert3: alert3,
      alert4: alert4,
    };
  }

  getValues() {
    return this.valuesRegister;
  }

  setValues(value) {
    this.valuesRegister = {...this.valuesRegister, ...value};
  }

  getBool() {
    if (
      this.valuesRegister.name.length > 0 &&
      this.valuesRegister.email.length > 0 &&
      this.valuesRegister.password.length > 0 &&
      this.valuesRegister.password2.length > 0 &&
      this.valuesRegister.term === true
    ) {
      return true;
    } else {
      return false;
    }
  }
}

export default RegisterUser;
