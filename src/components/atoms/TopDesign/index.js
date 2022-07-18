import React from 'react';
import {View} from 'react-native';
import Icons from '../Icons';

export default function TopDesign({styles, NameAppSVG, LogoRegisterSVG}) {
  return (
    <View style={styles.logoscontainer}>
      <View style={styles.logosdireccion}>
        <Icons IconProp={NameAppSVG} style={styles.namecontainer} />
        <Icons IconProp={LogoRegisterSVG} style={styles.logocontainer} />
      </View>
    </View>
  );
}
