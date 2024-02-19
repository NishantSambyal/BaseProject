import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductsRequest} from '../reducers/slices/exampleSlice';
import {myProducts} from '../selectors/productReducer';
import {getProduct} from './dataController';

const Sample = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const rProducts = useSelector(myProducts);
  useEffect(() => {
    setProducts(rProducts);
  }, [rProducts]);

  const fetchWithRedux = () => {
    dispatch(fetchProductsRequest());
  };
  const fetchWithApiController = () => {
    getProduct()
      .then((response: any) => {
        setProducts(response);
        console.log('response', response);
      })
      .catch((error: any) => {
        console.log('err,', error);
      });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => fetchWithRedux()}>
        <Text>Call API with Redux</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => fetchWithApiController()}>
        <Text>Call API with apiController</Text>
      </TouchableOpacity>

      <ScrollView>
        {products &&
          products?.map((product: any) => (
            <View style={styles.view} key={product.id}>
              <Text>{product.body}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default Sample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginHorizontal: 16,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    marginVertical: 6,
    borderRadius: 8,
    alignSelf: 'center',
    borderColor: 'lightgray',
  },
  view: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 6,
    borderRadius: 8,
    borderColor: 'lightgray',
  },
});
