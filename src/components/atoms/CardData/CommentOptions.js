import React, {useRef} from 'react';
import {Tooltip, Icon} from 'react-native-elements';
import {View} from 'react-native';
import Button from '../Button';
import styles from './styles';
import functions from './functions';

export default function CommentOptions({text, data, comments}) {
  const tooltipRef = useRef(null);
  return (
    <View style={styles.tooltipcontainer}>
      <Tooltip
        containerStyle={styles.tooltip}
        backgroundColor={'white'}
        ref={tooltipRef}
        height={83}
        width={107}
        overlayColor={'rgba(92, 92, 92, 0.6)'}
        withPointer={false}
        popover={
          <View>
            <Button
              style={styles}
              text={'editar'}
              disabled={true}
              onPress={() => {
                functions.edit(text, data);
                tooltipRef.current.toggleTooltip();
              }}
            />
            <Button
              style={styles}
              text={'eliminar'}
              disabled={true}
              onPress={() => {
                functions.deleteComment(data.idDoc, comments);
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
