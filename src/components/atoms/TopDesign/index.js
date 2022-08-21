import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import Icons from '../Icons';
import colors from '../../../const/colors';
import useStateHook from '../../../hooks/useStateHook';
import Help from '../Help';
import stylestop from './styles';

export default function TopDesign({styles, NameAppSVG, LogoSVG}) {
  const overlay = useStateHook(false);

  return (
    <View style={styles.logosContainer}>
      <Help overlay={overlay} />
      <Icon
        name="help-circle"
        type="material-community"
        color={colors.pink2}
        size={35}
        containerStyle={stylestop.icon}
        onPress={() => overlay.changeState(true)}
      />
      <View style={styles.logosDireccion}>
        <Icons IconProp={NameAppSVG} styles={styles.nameContainer} />
        <Icons IconProp={LogoSVG} styles={styles.logoContainer} />
      </View>
    </View>
  );
}
