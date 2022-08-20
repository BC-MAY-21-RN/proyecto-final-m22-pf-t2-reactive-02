const location = newCoordinate => {
  return {
    latitude: newCoordinate.nativeEvent.coordinate.latitude,
    longitude: newCoordinate.nativeEvent.coordinate.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
};

export default {location};
