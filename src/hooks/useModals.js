import {useState} from 'react';

export default function useModals(
  img = {i: 0, a: {}},
  location = {},
  imgvisible = false,
  mapvisible = false,
) {
  const [urlImgs, setUrlImgs] = useState(img);
  const [dataMap, setLocation] = useState(location);
  const [imgVisible, setImgsVisible] = useState(imgvisible);
  const [mapVisible, setMapVisible] = useState(mapvisible);

  const handleUrlImgs = value => setUrlImgs(value);
  const handleLocation = value => setLocation(value);
  const handleImgsVisible = value => setImgsVisible(value);
  const handleMapVisible = value => setMapVisible(value);

  return {
    urlImgs,
    dataMap,
    imgVisible,
    mapVisible,
    handleUrlImgs,
    handleLocation,
    handleImgsVisible,
    handleMapVisible,
  };
}
