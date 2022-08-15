import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import {Button, Card, Icon} from 'react-native-elements';
import UserPost from '../UserPost';
import Verify from '../DrawerItems/functions';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import {Tooltip} from 'react-native-elements';

export default function NotificationComponent({
  data,
  setEditComment,
  setEditText,
  newComment,
  setNewCommet,
  getData,
  setGetData,
}) {
  const deleteComments = (id, setGetDatas, getDatas) => {
    firestore()
      .collection('comentarios')
      .doc(id)
      .delete()
      .then(() => {
        setGetDatas(
          getDatas.filter(item => {
            item.idDoc !== id;
          }),
        );
      });
  };

  const callInputComment = () => {
    setEditText({text: data.texto, id: data.idDoc});
  };
  const tooltipRef = useRef(null);
  return (
    <Card>
      <View style={styles.iconPosition}>
        <UserPost
          name={Verify(data.userName) ? data.userName : 'Funganito'}
          time={'7 hrs'}
          image={
            Verify(data.photo)
              ? data.photo
              : 'https://www.lolitamoda.com/uploads/post/image/61/56.Reglas_de_estilo_que_todo_hombre_debe_conocer.jpg'
          }
        />
        <Tooltip
          containerStyle={styles.tooltip}
          backgroundColor={'white'}
          ref={tooltipRef}
          height={80}
          width={100}
          withPointer={false}
          overlayColor={'rgba(92, 92, 92, 0.6)'}
          popover={
            <View>
              <Button
                title="Editar"
                titleStyle={{color: '#263238'}}
                buttonStyle={styles.button}
                onPress={() => {
                  callInputComment();
                  setEditComment(true);
                  setNewCommet(!newComment);
                  tooltipRef.current.toggleTooltip();
                }}
              />
              <Button
                title="Eliminar"
                buttonStyle={styles.button}
                titleStyle={{color: '#263238'}}
                onPress={() => {
                  deleteComments(data.idDoc, setGetData, getData);
                  setNewCommet(!newComment);
                }}
              />
            </View>
          }>
          <Icon
            name={'dots-three-vertical'}
            type={'entypo'}
            size={20}
            containerStyle={styles.icon}
          />
        </Tooltip>
      </View>
      <Text style={{marginHorizontal: 15}}>{data.texto}</Text>
    </Card>
  );
}
