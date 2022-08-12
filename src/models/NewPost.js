class NewPost {
  constructor(
    hashtags = '#Normal',
    text = '',
    images = [],
    location = {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04,
    },
    urlMap = '',
  ) {
    this.valuesPost = {
      text: text,
      hashtags: hashtags,
      images: images,
      location: location,
      urlMap: urlMap,
    };
  }

  setValues(value) {
    this.valuesPost = {...this.valuesPost, ...value};
  }
}

export default NewPost;
