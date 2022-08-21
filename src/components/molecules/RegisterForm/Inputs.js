import React from 'react';
import Input from '../../atoms/Input';

export default function Inputs({changeInput, alerts, dataInputs = []}) {
  return dataInputs.map((item, i) => (
    <Input
      key={i}
      changeInput={changeInput}
      Icon={item.icon}
      title={item.title}
      keyObj={item.key}
      isPassword={item.isPassword}
      visibleAlert={alerts[i]}
    />
  ));
}
