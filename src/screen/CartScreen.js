import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Add, Sub} from '../store/action';

const CartScreen = ({navigation, route}) => {
  const {item} = route.params;

  const id = useSelector(e => e.id);
  const l = useSelector(e => e.l);

  const data1 = useSelector(state => state?.cartItem);
  const index1 = data1?.findIndex(x => x.id == item.id);
  const item1 = data1 ? data1[index1].l : 0;

  const dispatch = useDispatch();
  const addToRedux = item => {
    dispatch(Add(id, l));
  };
  const SubToRedux = () => {
    dispatch(Sub(id, l));
  };
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={[styles.buttonText]}>Back</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={{fontWeight: '600', fontSize: 17}}>{item.name}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{width: 80}}>large size</Text>

          <TouchableOpacity
            onPress={() => addToRedux(item.l)}
            style={[styles.button, {backgroundColor: 'blue'}]}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>

          <Text style={styles.count}>{item1}</Text>
          <TouchableOpacity
            onPress={() => SubToRedux()}
            style={[styles.button, {backgroundColor: 'red'}]}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>

        <Text style={{}}>{item.description}</Text>
        <View style={{flexDirection: 'row'}}>
          {item?.colors?.map((itemColor, index) => (
            <View
              key={index}
              style={[styles.color, {backgroundColor: itemColor?.color}]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

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
    width: '90%',
  },
  button: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 10,
    margin: 3,
  },
  color: {
    width: 13,
    height: 13,
    borderRadius: 8,
    margin: 2,
  },
  count: {fontSize: 18, fontWeight: '600', marginHorizontal: 10},
  mainContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  buttonText: {fontWeight: '700', fontSize: 17, color: 'white'},
  backButton: {
    width: '80%',
    paddingVertical: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    borderRadius: 10,marginBottom:10
  },
});
