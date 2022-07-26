class NewPost {
  constructor(hashtags = '#Normal') {
    this.valuesPost = {
      text: '',
      hashtags: hashtags,
      images: undefined,
      location: undefined,
    };
  }
}

export default NewPost;
