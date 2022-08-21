const months = {
  1: 'Enero',
  2: 'Febrero',
  3: 'Marzo',
  4: 'Abril',
  5: 'Mayo',
  6: 'Junio',
  7: 'Julio',
  8: 'Agosto',
  9: 'Septiembre',
  10: 'Octubre',
  11: 'Noviembre',
  12: 'Diciembre',
};

const dateToString = data => {
  const date = new Date(data.fecha.toDate());
  return (
    '' +
    date.getDate() +
    ' ' +
    months[date.getMonth() + 1] +
    ' ' +
    date.getFullYear()
  );
};

const jsonImgs = data => {
  const array = data.map(url => ({url: url}));
  return array;
};

const createUrl = coordinates => {
  return (
    'https://maps.googleapis.com/maps/api/staticmap?center=' +
    coordinates.latitude +
    ',' +
    coordinates.longitude +
    '&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C' +
    coordinates.latitude +
    ',' +
    coordinates.longitude +
    '&key=AIzaSyAuHp-FozzKYeVbQpEYjo2T-9d9M5XLFWY'
  );
};

export default {createUrl, dateToString, jsonImgs};
