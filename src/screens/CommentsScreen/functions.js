import firestore from '@react-native-firebase/firestore';

const fireBaseDataConsult = (changeGetData, id) => {
  firestore()
    .collection('comentarios')
    .where('postUid', '==', id)
    .get()
    .then(querySnapshot => {
      var dataComment = [];
      querySnapshot.forEach(documentSnapshot => {
        dataComment.push({
          ...documentSnapshot.data(),
          idDoc: documentSnapshot.ref.id,
        });
        changeGetData(dataComment);
      });
    });
};

export default fireBaseDataConsult;
