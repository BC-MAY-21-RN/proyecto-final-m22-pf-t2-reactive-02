import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import UserContext from '../context/UserContext';

export default function useAuthChange() {
  const {user, setUser} = React.useContext(UserContext);

  function onAuthStateChanged(userInfo) {
    setUser(userInfo);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });

  return {user};
}
