import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  StyleSheet 
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { ProductFormProps } from '@/types/product.type';
import showToast from '@/utils/Toast';

const ProductForm = ({ title, onAddProduct, isEdit, productToEdit, onEditProduct, children}: ProductFormProps) => {
  const [product, setProduct] = useState({
    productName: '',
    color: '',
    category: 'HOME',
    price: '',
    ...productToEdit,
  });
  
  const handleChange = (name: string, value: string) => {
    const updatedProduct = { ...product, [name]: value };
    setProduct(updatedProduct);
  };

  const handleAdd = () => {
    if (product.productName && product.color && product.price) {
      const newProduct = { ...product };
      if (isEdit) {
        showToast("Product successfully upgraded!");
      } else {
        onAddProduct(newProduct);
        showToast("New product added!", "success");
      }
      setProduct({ 
        productName: '', 
        color: '', 
        category: '', 
        price: '' 
      });
    } else {
      showToast("All fields are required");
    }
  };

  return (
    <View style={styles.form}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.body}>
          <Text style={styles.label}>PRODUCT NAME</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange('productName', text)}
            placeholder="your product name"
            value={product.productName}
          />

          <Text style={styles.label}>COLOR</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange('color', text)}
            placeholder="silver, black, white, etc"
            value={product.color}
          />

          <Text style={styles.label}>CATEGORY</Text>
          <Picker
            onValueChange={(itemValue: string) => handleChange('category', itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Choose a category" value="" />
            <Picker.Item label="Home" value="HOME" />
            <Picker.Item label="Music" value="MUSIC" />
            <Picker.Item label="Baby" value="BABY" />
            <Picker.Item label="Books" value="BOOKS" />
          </Picker>

          <Text style={styles.label}>PRICE</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange('price', text)}
            placeholder="$1999.99"
            keyboardType="numeric"
            value={product.price}
          />
          
          {children}

          <Button title="Submit" onPress={handleAdd} />
        </View>
      </View>
    </View>
  );
};

ProductForm.propTypes = {
  title: PropTypes.string.isRequired, 
  onAddProduct: PropTypes.func.isRequired, 
  isEdit: PropTypes.bool.isRequired, 
  productToEdit: PropTypes.object, 
  onEditProduct: PropTypes.func.isRequired, 
  children: PropTypes.node 
};


const styles = StyleSheet.create({
  form: {
    width: '100%',
  },
  container: {
    width: '100%',
    flexDirection: 'column',
  },
  title: {
    fontSize: 30,
    paddingBottom: 20,
    marginBottom: 5,
  },
  body: {
    width: '93%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgb(247, 247, 247)',
    shadowColor: 'rgba(201, 201, 201, 1)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  label: {
    width: '100%',
    textAlign: 'left',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 35,
    color: 'rgb(101, 101, 101)',
    paddingLeft: 5,
    marginBottom: 30,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: 'rgb(223, 222, 222)',
    textTransform: 'capitalize',
  },
  picker: {
    width: '100%',
    height: 35,
    color: 'rgb(101, 101, 101)',
    paddingLeft: 5,
    marginBottom: 30,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: 'rgb(223, 222, 222)',
  },
});

export default ProductForm;
