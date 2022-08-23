import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import useNotification from '../../hooks/useNotification';
import Header from '../../components/atoms/Header';
import DataNotFound from '../../components/atoms/DataNotFound';
import UserPost from '../../components/atoms/UserPost';
import helpers from '../../utils/helpers';
import styles from './styles';
import AdoptionInfo from '../../components/atoms/AdoptionInfo';
import useStateHook from '../../hooks/useStateHook';

const NotificationData = ({data, modalvisible}) => {
  return (
    <Modal
      visible={modalvisible.state}
      transparent={true}
      animationType="fade"
      onRequestClose={() => {
        modalvisible.changeState(false);
      }}>
      <View style={styles.info}>
        <AdoptionInfo data={data} />
        <Pressable
          style={styles.close}
          onPress={() => {
            modalvisible.changeState(false);
          }}>
          <Text>Cerrar</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default function NotificationScreen({navigation}) {
  const notifications = useNotification();
  const modalData = useStateHook(null);
  const modalvisible = useStateHook(false);

  return (
    <View>
      <NotificationData data={modalData.state} modalvisible={modalvisible} />
      <Header text={'Notificaciones'} navigation={navigation} />
      {notifications.data.length === 0 && notifications.finish === true ? (
        <DataNotFound
          title={'¡No hay nada por aqui!'}
          text={'Aqui aparecerán las respuestas a tus formularios de adopción'}
        />
      ) : (
        <FlatList
          data={notifications.data}
          refreshing={!notifications.finish}
          onRefresh={() => {
            notifications.refres();
          }}
          style={styles.flatlist}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                modalData.changeState(item);
                modalvisible.changeState(true);
              }}>
              <UserPost
                id={item.uidUsuario}
                image={item.imagenUsuario}
                name={item.nombreUsuario}
                navigation={navigation}
                time={helpers.dateToString(item)}
              />
              <Text style={styles.text}>
                Ha respondido tu formulario de adopción
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
