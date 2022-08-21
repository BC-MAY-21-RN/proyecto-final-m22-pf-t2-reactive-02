import helpers from '../../../utils/helpers';

function editPublication(data, navigation) {
  const url =
    data.ubicacion.latitude !== 0 && data.ubicacion.longitude !== 0
      ? helpers.createUrl(data.ubicacion)
      : '';
  navigation.navigate('publicationScreen', {
    idDoc: data.idDoc,
    init: {
      text: data.texto,
      hashtags: data.hashtags.join('#'),
      images: helpers.jsonImgs(data.listaUrl),
      location: data.ubicacion,
      urlMap: url,
      date: data.fecha,
      favorites: data.favoritos,
      likes: data.likes,
    },
  });
}

export default {editPublication};
