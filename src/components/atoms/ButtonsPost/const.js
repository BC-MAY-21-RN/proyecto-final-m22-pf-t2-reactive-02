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

export default components;
