class NewPost {
  constructor(
    hashtags = '#Normal',
    text = '',
    images = [],
    location = undefined,
  ) {
    this.valuesPost = {
      text: text,
      hashtags: hashtags,
      images: images,
      location: location,
    };
  }

  setValues(value) {
    this.valuesPost = {...this.valuesPost, ...value};
  }
}

export default NewPost;