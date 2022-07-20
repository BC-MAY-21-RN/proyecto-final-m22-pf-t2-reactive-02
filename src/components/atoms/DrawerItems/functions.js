import auth from '@react-native-firebase/auth';

const VerifyName = () => {
  const user = auth().currentUser;
  var auxName = user.displayName;
  if (auxName === null) {
    return false;
  } else {
    return true;
  }
};

const VerifyPhoto = () => {
  const user = auth().currentUser;
  var auxPhoto = user.photoURL;
  if (auxPhoto === null) {
    return false;
  } else {
    return true;
  }
};

const functions = {
  VerifyName,
  VerifyPhoto,
};

export default functions;
