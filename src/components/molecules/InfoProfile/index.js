import React from 'react';
import {View} from 'react-native';
import TextInfo from '../../atoms/TextInfo';
import TwoTexts from '../../atoms/TwoTexts';
import styles from './styles';

const barStats = ['Publicaciones', 'Me gusta', 'Guardados'];

export default function InfoProfile({profileData}) {
  return (
    <View style={styles.infoProfileContainer}>
      <View style={styles.statspostContainer}>
        {barStats.map((text, i) => (
          <TwoTexts
            key={i}
            text2={text}
            text={profileData.stats[i]}
            styles={styles}
          />
        ))}
      </View>
      <TextInfo
        icon={'mail'}
        text={'Correo'}
        info={profileData.userData.correo}
      />
      <TextInfo
        icon={'phone'}
        text={'Teléfono'}
        info={profileData.userData.phoneNumber}
      />
      <TextInfo
        icon={'map-pin'}
        text={'Ciudad'}
        info={profileData.userData.ciudad}
      />
    </View>
  );
}
