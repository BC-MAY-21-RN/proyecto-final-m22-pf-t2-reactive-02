import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

function forgetPassword(text) {
  return auth().sendPasswordResetEmail(text);
}

function getId() {
  return auth().currentUser.uid;
}

function getName() {
  return auth().currentUser.displayName;
}

function getEmail() {
  return auth().currentUser.email;
}

function getPhoto() {
  return auth().currentUser.photoURL;
}

async function loginAccount(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

function logout() {
  auth()
    .signOut()
    .then(() => {});
}

async function registerEmailUser(user) {
  return auth().createUserWithEmailAndPassword(
    user.object.email,
    user.object.password,
  );
}

async function onGoogleButtonPress() {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
}

function updateUser(user, getPhotoUrl) {
  const update = {
    displayName: user.object.name,
    photoURL: getPhotoUrl(auth().currentUser.photoURL),
  };
  auth().currentUser.updateProfile(update);
}

export default {
  forgetPassword,
  getId,
  getName,
  getEmail,
  getPhoto,
  loginAccount,
  logout,
  onGoogleButtonPress,
  registerEmailUser,
  updateUser,
};
