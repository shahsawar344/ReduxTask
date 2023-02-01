import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
const {width, height} = Dimensions.get('screen');
import {AssignValue} from '../store/action';

const CartDetail = ({dataCart, navigation, index}) => {
  const data = useSelector(state => state?.cartItem);
  const index1 = data?.findIndex(x => x.id == dataCart.id);
  const item = data ? data[index1]?.l : 0;

  const dispatch = useDispatch();
  const GoingMove = () => {
    dispatch(AssignValue(parseInt(dataCart.l), parseInt(dataCart.id)));
    navigation.navigate('SingleCart', {item: dataCart});
  };
  return (
    <TouchableOpacity
      key={index}
      onPress={() => GoingMove()}
      style={styles.card}>
      <Text style={styles.cardName}>{dataCart.name}</Text>

      <View
        style={{
          width: '90%',
        }}>
        <Text style={{height: 20}}>{dataCart.description}</Text>

        <View style={styles.colorText}>
          {dataCart?.colors?.map((itemColor, index) => (
            <View
              style={[
                styles.color,
                {
                  backgroundColor: itemColor?.color,
                },
              ]}
            />
          ))}
        </View>

        <View style={styles.numberText}>
          <Text>Large size</Text>
          <Text style={styles.countNumber}>{item}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CartDetail;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    padding: 6,
    alignItems: 'center',
    borderRadius: 8,
    width: width / 2 - 25,
    margin: 2,
  },
  countNumber: {fontSize: 18, fontWeight: '600'},
  color: {
    width: 13,
    height: 13,
    borderRadius: 8,
    margin: 2,
  },
  numberText: {flexDirection: 'row', justifyContent: 'space-between'},
  cardName: {fontWeight: '600', fontSize: 17},
  colorText: {flexDirection: 'row', marginVertical: 12},
});
