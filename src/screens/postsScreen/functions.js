function onPress(navigation, hashtag) {
  navigation.navigate('publicationScreen', {
    hashtag: hashtag.toString().split('#')[1],
  });
}

export default {onPress};
