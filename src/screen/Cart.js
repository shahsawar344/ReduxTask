import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CartDetail from '../component/CartDetail';
import {importArray} from '../store/action';
import {useDispatch, useSelector} from 'react-redux';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const [dataCart, setDataCart] = useState('');

  useEffect(() => {
    CartData();
  }, []);
  const CartData = async () => {
    try {
      const response = await fetch(
        `https://teamsuit.co/reportSv/2/api/products/getAll.php`,
        {
          method: 'Get',
        },
      );
      const result = await response.json();
      setDataCart(result);
      dispatch(importArray(result));
    } catch (error) {
      console.log(error);
    }
  };
  const renderItem = ({item, index}) => {
    return <CartDetail index={index} navigation={navigation} dataCart={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList data={dataCart} numColumns={2} renderItem={renderItem} />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 70, paddingHorizontal: 20},
});
