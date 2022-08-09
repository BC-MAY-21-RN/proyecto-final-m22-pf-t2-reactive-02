import firestore from '@react-native-firebase/firestore';

const fireBaseDataConsult = changeGetData => {
  firestore()
    .collection('comentarios')
    .where('postUid', '==', 'hd54gg')
    .get()
    .then(querySnapshot => {
      var dataComment = [];
      querySnapshot.forEach(documentSnapshot => {
        dataComment.push({
          ...documentSnapshot.data(),
          idDoc: documentSnapshot.ref.id,
        });
        changeGetData(dataComment);
        console.log(dataComment);
      });
    });
};

export default fireBaseDataConsult;
