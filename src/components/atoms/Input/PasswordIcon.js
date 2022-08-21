import React from 'react';
import {TouchableOpacity} from 'react-native';
import VisibleSVG from '../../../assets/icons/visibility.svg';
import Visible2SVG from '../../../assets/icons/visibility2.svg';
import Icons from '../Icons';
import styles from './styles';

export default function PasswordIcon({visible}) {
  return (
    <TouchableOpacity
      style={styles.visible}
      onPress={() => visible.changeState(!visible.state)}>
      <Icons IconProp={visible.state ? VisibleSVG : Visible2SVG} style={null} />
    </TouchableOpacity>
  );
}
