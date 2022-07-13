class LoginUser {
  constructor(email = '', password = '') {
    this.valuesLogin = {
      email: email,
      password: password,
    };
  }
  getValues() {
    return this.valuesLogin;
  }

  setValues(value) {
    this.valuesLogin = {...this.valuesLogin, ...value};
  }

  getBoolGoogle() {
    return true;
  }

  getBool() {
    if (
      this.valuesLogin.email.length > 0 &&
      this.valuesLogin.password.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }
}

export default LoginUser;
