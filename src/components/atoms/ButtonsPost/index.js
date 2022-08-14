import React, {useState} from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';
import functions from './functions';

const components = [
  {
    name: 'paw',
    type: 'font-awesome',
    disabled: true,
    multicolor: true,
    marginright: true,
    onPress: (
      _,
      data,
      like,
      __,
      setLike,
      ___,
      ____,
      setdisableL,
      getData,
      setGetData,
      hashtag,
    ) => {
      functions.buttonsFunction(
        like,
        setLike,
        data,
        'likes',
        getData,
        setGetData,
        hashtag,
        setdisableL,
      );
    },
  },
  {
    name: 'home-sharp',
    type: 'ionicon',
    visiblecheck: true,
    onPress: (navigation, data) => {
      navigation.navigate('AdoptionForm', {data: data});
    },
  },
  {
    name: 'message',
    type: 'material-community',
    onPress: (navigation, data) => {
      navigation.navigate('Comments', {data: data});
    },
  },
  {
    name: 'bookmark',
    type: 'ionicon',
    disabled: true,
    multicolor: true,
    onPress: (
      _,
      data,
      __,
      favorite,
      ___,
      setFavorite,
      setdisableF,
      ____,
      getData,
      setGetData,
      hashtag,
    ) => {
      functions.buttonsFunction(
        favorite,
        setFavorite,
        data,
        'favoritos',
        getData,
        setGetData,
        hashtag,
        setdisableF,
      );
    },
  },
];

export default function ButtonsPost({
  navigation,
  data,
  getData,
  setGetData,
  hashtag,
}) {
  const [like, setLike] = useState(functions.foundLikes(data));
  const [favorite, setFavorite] = useState(functions.foundFavorite(data));
  const [disabledL, setdisableL] = useState(false);
  const [disabledF, setdisableF] = useState(false);
  return (
    <View style={styles().container}>
      {components.map((element, i) =>
        functions.foundAdoption(data) || i !== 1 ? (
          <Icon
            key={i}
            name={element.name}
            type={element.type}
            containerStyle={
              styles(element.marginright, functions.foundAdoption(data)).buttons
            }
            disabled={
              element.disabled ? (i === 0 ? disabledL : disabledF) : false
            }
            color={
              element.multicolor
                ? i === 0
                  ? like
                    ? '#6FCF97'
                    : 'black'
                  : favorite
                  ? '#6FCF97'
                  : 'black'
                : 'black'
            }
            onPress={() =>
              element.onPress(
                navigation,
                data,
                like,
                favorite,
                setLike,
                setFavorite,
                setdisableF,
                setdisableL,
                getData,
                setGetData,
                hashtag,
              )
            }
          />
        ) : null,
      )}
    </View>
  );
}
