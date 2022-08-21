import {useState} from 'react';

export default function useStateHook(value) {
  const [state, setState] = useState(value);

  function changeState(newValue) {
    setState(newValue);
  }

  return {state, changeState};
}
