import React, {useState} from 'react';

const LocationContext = React.createContext();

const initLocation = () => {
  return {
    latitude: 19.123197,
    longitude: -104.349663,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
};

export function LocationContextProvider({children}) {
  const [modalVisible, setmodalVisible] = useState(false);
  const [image, setImage] = useState(false);
  const [coordinates, setCoordinates] = useState(initLocation());
  return (
    <LocationContext.Provider
      value={{
        modalVisible,
        setmodalVisible,
        image,
        setImage,
        coordinates,
        setCoordinates,
      }}>
      {children}
    </LocationContext.Provider>
  );
}

export default LocationContext;
