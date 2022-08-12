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

const components = [TextInput, TouchableIcon];
const styles = [menuStyle.input, menuStyle.iconSearch2];

const InputText = ({navigation, setVisible}) => {
  return (
    <Animatable.View
      animation="lightSpeedIn"
      duration={1500}
      style={menuStyle.inputContainer}>
      {components.map((Componente, i) => (
        <Componente
          key={i}
          placeholder="Buscar"
          style={styles[i]}
          onSubmitEditing={e => navigate(e, navigation)}
          iconName={'close'}
          onPress={() => setVisible(false)}
          type={'antdesign'}
        />
      ))}
    </Animatable.View>
  );
};

/*
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
*/

export default function TopBar({navigation, iconVisible}) {
  const [visible, setVisible] = useState(false);
  const seeButton = iconVisible;
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
        {visible && (
          <InputText navigation={navigation} setVisible={setVisible} />
        )}
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
