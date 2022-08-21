import React, {useRef} from 'react';
import {View} from 'react-native';
import {Icon, Tooltip} from 'react-native-elements';
import styles from './styles';
import Button from '../../atoms/Button';
import functions from './functions';

export default function OptionsPost({data, navigation}) {
  const tooltipRef = useRef(null);

  return (
    <View style={styles.optionsContainer}>
      <Tooltip
        overlayColor={'rgba(92, 92, 92, 0.6)'}
        ref={tooltipRef}
        backgroundColor={'white'}
        height={40}
        width={100}
        withPointer={false}
        popover={
          <View>
            <Button
              text={'Editar'}
              style={styles}
              disabled={true}
              onPress={() => {
                functions.editPublication(data, navigation);
                tooltipRef.current.toggleTooltip();
              }}
            />
          </View>
        }>
        <Icon
          name={'dots-three-vertical'}
          type={'entypo'}
          size={20}
          containerStyle={styles.icon}
        />
      </Tooltip>
    </View>
  );
}
