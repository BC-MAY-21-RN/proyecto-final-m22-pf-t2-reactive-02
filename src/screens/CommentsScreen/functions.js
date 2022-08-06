import firestore from '@react-native-firebase/firestore';

const fireBaseDataConsult = changeGetData => {
  firestore()
    .collection('comentarios')
    .where('postUid', '==', 'hd54gg')
    .get()
    .then(querySnapshot => {
      var dataComment = [];
      querySnapshot.forEach(documentSnapshot => {
        dataComment.push(documentSnapshot.data());
        changeGetData(dataComment);
      });
    });
};

export default fireBaseDataConsult;
