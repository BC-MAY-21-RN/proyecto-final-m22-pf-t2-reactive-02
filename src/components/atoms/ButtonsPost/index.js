import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';
import functions from './functions';
import useButtonsPost from '../../../hooks/useButtonsPost';
import colors from '../../../const/colors';

const icons = [
  {
    name: 'paw',
    type: 'font-awesome',
    marginright: true,
    disabled: true,
    multicolor: true,
  },
  {name: 'home-sharp', type: 'ionicon'},
  {name: 'message', type: 'material-community'},
  {name: 'bookmark', type: 'ionicon', disabled: true, multicolor: true},
];

export default function ButtonsPost({data, navigation, hashtag, posts}) {
  const buttons = useButtonsPost(
    functions.foundLikes(data),
    functions.foundFavorite(data),
    posts,
    hashtag,
  );

  return (
    <View style={styles().container}>
      {icons.map((element, i) =>
        functions.foundAdoption(data) || i !== 1 ? (
          <Icon
            key={i}
            color={buttons.color[i] ? colors.green : colors.black}
            name={element.name}
            containerStyle={
              styles(element.marginright, functions.foundAdoption(data)).buttons
            }
            type={element.type}
            onPress={() => buttons.onPress[i](data, navigation)}
          />
        ) : null,
      )}
    </View>
  );
}
