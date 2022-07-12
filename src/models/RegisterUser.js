class RegisterUser {
  constructor(
    name = '',
    email = '',
    password = '',
    password2 = '',
    term = true,
    alert = [false, false, false, false],
  ) {
    this.valuesRegister = {
      name: name,
      email: email,
      password: password,
      password2: password2,
      term: term,
      alert: alert,
    };
  }

  validateName(user) {
    if (user.valuesRegister.name === '') {
      return true;
    } else {
      return false;
    }
  }

  validateEmail(user) {
    const regexmail =
      /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
    if (regexmail.test(user.valuesRegister.email)) {
      return false;
    } else {
      return true;
    }
  }

  validatePassword(user) {
    const regexpassword =
      /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?+*-¿!#%&/()=¡\-_]){1})\S{8,16}$/;
    if (regexpassword.test(user.valuesRegister.password)) {
      return false;
    } else {
      return true;
    }
  }

  validatePassword2(user) {
    const regexpassword =
      /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?+*-¿!#%&/()=¡\-_]){1})\S{8,16}$/;
    if (
      regexpassword.test(user.valuesRegister.password2) &&
      user.valuesRegister.password2 === user.valuesRegister.password
    ) {
      return false;
    } else {
      return true;
    }
  }

  getValues() {
    return this.valuesRegister;
  }

  setValues(value) {
    this.valuesRegister = {...this.valuesRegister, ...value};
  }

  getalert1() {
    return this.valuesRegister.alert1;
  }

  getalert2() {
    return this.valuesRegister.alert2;
  }

  getalert3() {
    return this.valuesRegister.alert3;
  }

  getalert4() {
    return this.valuesRegister.alert4;
  }

  getBool() {
    if (
      this.valuesRegister.name.length > 0 &&
      this.valuesRegister.email.length > 0 &&
      this.valuesRegister.password.length > 0 &&
      this.valuesRegister.password2.length > 0 &&
      this.valuesRegister.term === true
    ) {
      return false;
    } else {
      return true;
    }
  }
}

export default RegisterUser;
