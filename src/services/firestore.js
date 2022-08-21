import firestore from '@react-native-firebase/firestore';

function addFunction(collection, data) {
  return firestore().collection(collection).add(data);
}

function dateNow() {
  return firestore.Timestamp.fromMillis(Date.now());
}

function deleteFunction(id, collection) {
  return firestore().collection(collection).doc(id).delete();
}

function getFunction(collection, key, operator, value) {
  return firestore().collection(collection).where(key, operator, value).get();
}

const getFunctionorderBy = (
  collection,
  key,
  operator,
  value,
  keyOrder,
  typeOrder,
) => {
  return firestore()
    .collection(collection)
    .where(key, operator, value)
    .orderBy(keyOrder, typeOrder)
    .get();
};

function setFunction(collection, id, data) {
  return firestore().collection(collection).doc(id).set(data);
}

function updateFunction(collection, id, key, data) {
  return firestore()
    .collection(collection)
    .doc(id)
    .update(key === undefined ? data : {[key]: data});
}

export default {
  addFunction,
  deleteFunction,
  dateNow,
  getFunction,
  getFunctionorderBy,
  setFunction,
  updateFunction,
};
