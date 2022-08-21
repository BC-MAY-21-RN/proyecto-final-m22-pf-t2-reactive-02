class Form {
  constructor(object) {
    this.object = object;
  }

  setValues(newValue) {
    this.object = {...this.object, ...newValue};
  }
}

export default Form;
