import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import firestore from '../services/firestore';
import auth from '../services/auth';

const getNotifications = (handleData, setFinish) => {
  firestore
    .getFunctionorderBy(
      'adopciones',
      'uidPosteo',
      '==',
      auth.getId(),
      'fecha',
      'desc',
    )
    .then(documents => {
      let data = [];
      documents.forEach(document => {
        data.push({...document.data()});
      });
      handleData(data);
    })
    .catch(() => Alert.alert('Error al consultar notificaciones.'))
    .finally(() => setFinish(true));
};

export default function useNotification() {
  const [data, setData] = useState([]);
  const [finish, setFinish] = useState(false);
  const handleData = value => setData(value);
  const refres = () => {
    setFinish(false);
    getNotifications(handleData, setFinish);
  };

  useEffect(() => {
    if (!finish) {
      getNotifications(handleData, setFinish);
    }
  }, [finish]);

  return {data, finish, refres};
}
