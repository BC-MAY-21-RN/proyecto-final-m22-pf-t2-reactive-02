import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import nameHeader from '../../../assets/icons/nameHeader.svg';
import logoHeader from '../../../assets/icons/LogoHeader.svg';
import Icons from '../../atoms/Icons';
import {Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import menuStyle from './styles';

export default function TopBar({navigation, iconVisible}) {
  const [visible, setVisible] = useState(false);
  const seeButton = iconVisible;
  const InputText = () => {
    return (
      <Animatable.View
        animation="lightSpeedIn"
        duration={1500}
        style={menuStyle.inputContainer}>
        <TextInput placeholder="Buscar" style={menuStyle.input} />
        <TouchableOpacity
          onPress={() => {
            setVisible(false);
          }}>
          <Icon
            name="close"
            type="antdesign"
            style={menuStyle.iconSearch2}
            color="#979797"
            size={20}
          />
        </TouchableOpacity>
      </Animatable.View>
    );
  };
  return (
    <View style={menuStyle.container}>
      <View style={menuStyle.iconsPosition}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon
            name="menu"
            type="feather"
            style={menuStyle.iconMenu}
            color="#6C6C6C"
          />
        </TouchableOpacity>
        {visible ? null : (
          <Animatable.View animation="slideInLeft">
            <Icons IconProp={nameHeader} />
          </Animatable.View>
        )}
        {visible ? (
          <Animatable.View animation="slideInRight">
            <Icons IconProp={logoHeader} style={menuStyle.logo} />
          </Animatable.View>
        ) : (
          <Animatable.View animation="slideInLeft">
            <Icons IconProp={logoHeader} style={menuStyle.logo} />
          </Animatable.View>
        )}

        {visible ? <InputText /> : null}
        {seeButton ? (
          <TouchableOpacity
            onPress={() => {
              setVisible(true);
            }}>
            <Icon
              name="search"
              type="fontisto"
              style={menuStyle.iconSearch}
              color="#6C6C6C"
              size={20}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}
