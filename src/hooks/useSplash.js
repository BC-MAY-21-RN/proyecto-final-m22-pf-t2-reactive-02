import {useEffect} from 'react';

export default function useSplash(splash, navigation) {
  useEffect(() => {
    setTimeout(() => {
      splash.changeState(true);
    }, 3000);
    if (splash.state) {
      navigation.replace('registerScreen');
    }
  });

  return {bool: true};
}
