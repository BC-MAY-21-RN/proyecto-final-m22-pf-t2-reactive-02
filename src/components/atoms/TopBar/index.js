import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import nameHeader from '../../../assets/icons/nameHeader.svg';
import logoHeader from '../../../assets/icons/LogoHeader.svg';
import Icons from '../../atoms/Icons';
import {Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import menuStyle from './styles';

const navigate = (e, navigation) => {
  const arrayText = e.nativeEvent.text.split('#');
  const array = arrayText.filter((_, i) => i !== 0);
  if (array.length > 0) {
    navigation.navigate('Home', {
      hashtag: e.nativeEvent.text,
      goback: true,
    });
  }
};

const TouchableIcon = ({onPress, iconName, style, type}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Icon name={iconName} type={type} style={style} color="#6C6C6C" />
    </TouchableOpacity>
  );
};

export default function TopBar({navigation, iconVisible}) {
  const [visible, setVisible] = useState(false);
  const seeButton = iconVisible;
  const InputText = () => {
    return (
      <Animatable.View
        animation="lightSpeedIn"
        duration={1500}
        style={menuStyle.inputContainer}>
        <TextInput
          placeholder="Buscar"
          style={menuStyle.input}
          onSubmitEditing={e => navigate(e, navigation)}
        />
        <TouchableIcon
          iconName={'close'}
          style={menuStyle.iconSearch2}
          onPress={() => setVisible(false)}
          type={'antdesign'}
        />
      </Animatable.View>
    );
  };
  return (
    <View style={menuStyle.container}>
      <View style={menuStyle.iconsPosition}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon
            name="menu"
            type="feather"
            style={menuStyle.iconMenu}
            color="#6C6C6C"
          />
        </TouchableOpacity>
        {!visible && (
          <Animatable.View animation="slideInLeft">
            <Icons IconProp={nameHeader} />
          </Animatable.View>
        )}
        <Animatable.View animation={visible ? 'slideInRight' : 'slideInLeft'}>
          <Icons IconProp={logoHeader} style={menuStyle.logo} />
        </Animatable.View>
        {visible && <InputText />}
        {seeButton && (
          <TouchableIcon
            iconName={'search'}
            style={menuStyle.iconSearch}
            onPress={() => setVisible(true)}
            type={'feather'}
          />
        )}
      </View>
    </View>
  );
}
