const initialRegister = {
  name: '',
  email: '',
  password: '',
  password2: '',
  term: true,
  alert: [false, false, false, false],
};

const initialPublication = hashtags => {
  return {
    text: '',
    hashtags: hashtags,
    images: [],
    location: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04,
    },
    urlMap: '',
  };
};

const initialLogin = {
  email: '',
  password: '',
};

const initialForget = {
  email: '',
};

const initLocation = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0.09,
  longitudeDelta: 0.04,
};

const initialComment = {
  text: '',
  updateComment: false,
  idComment: '',
};

const initialAdoption = {
  phone: '',
  email: '',
  city: '',
  q1: '',
  q2: '',
  q3: '',
  q4: '',
};

export default {
  initialAdoption,
  initialComment,
  initialForget,
  initLocation,
  initialRegister,
  initialLogin,
  initialPublication,
};
