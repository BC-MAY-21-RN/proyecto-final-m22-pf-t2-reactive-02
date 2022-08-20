import React from 'react';
import {Card} from 'react-native-elements';
import auth from '../../../services/auth';
import {View, Text} from 'react-native';
import UserPost from '../UserPost';
import styles from './styles';
import helpers from '../../../utils/helpers';
import CommentOptions from './CommentOptions';

export default function CardData({data, text, comments, navigation}) {
  return (
    <Card containerStyle={{}}>
      <View style={styles.iconPosition}>
        <UserPost
          image={data.photo}
          name={data.userName}
          time={helpers.dateToString(data)}
          navigation={navigation}
          id={data.userId}
        />
        {data.userId === auth.getId() ? (
          <CommentOptions text={text} data={data} comments={comments} />
        ) : null}
      </View>
      <Text>{data.texto}</Text>
    </Card>
  );
}
