import values from '../../../const/hashtags';
import auth from '../../../services/auth';

const foundFavorite = data => {
  return data.favoritos[auth.getId()];
};

const foundLikes = data => {
  return data.likes[auth.getId()];
};

const foundAdoption = data => {
  const hashtags = data.hashtags;
  let contador = 0;
  values.adoption.map(element => {
    if (hashtags.indexOf(element) >= 0) {
      contador++;
    }
  });
  return contador;
};

export default {foundFavorite, foundLikes, foundAdoption};
