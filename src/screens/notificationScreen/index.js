import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import NotificationAdoption from '../../components/atoms/NotificationAdoption';
import Header from '../../components/atoms/header';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import AdoptionInfo from '../../components/atoms/AdoptionInfo';
import MessageAdoption from '../../components/atoms/MessageAdoption';

function info(changeGetData) {
  const id = auth().currentUser.uid;
  firestore()
    .collection('adopciones')
    .where('uidPosteo', '==', id)
    .get()
    .then(querySnapshot => {
      var data = [];
      querySnapshot.forEach(documentSnapshot => {
        data.push({
          ...documentSnapshot.data(),
          idDoc: documentSnapshot.ref.id,
        });
        changeGetData(data);
      });
    });
}

export default function NotificationScreen({navigation, data}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [getData, setGetData] = useState([]);
  const [infoModal, setInfoModal] = useState([]);
  const changeGetData = adoptions => setGetData(adoptions);
  useEffect(() => {
    info(changeGetData);
  }, []);
  const array = () => {
    let contador = 0;
    getData.map(element => {
      if (getData.indexOf(element) >= 0) {
        contador++;
      }
    });
    return contador;
  };
  return (
    <View>
      <Header text={'Notificaciones'} navigation={navigation} />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.info}>
          <AdoptionInfo data={infoModal} />
          <Pressable
            style={styles.close}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text>Cerrar</Text>
          </Pressable>
        </View>
      </Modal>
      {array() > 0 ? (
        <FlatList
          data={getData}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                setInfoModal(item);
                setModalVisible(true);
              }}>
              <NotificationAdoption
                data={item}
                setGetData={setGetData}
                getData={getData}
              />
            </TouchableOpacity>
          )}
        />
      ) : (
        <MessageAdoption />
      )}
    </View>
  );
}
