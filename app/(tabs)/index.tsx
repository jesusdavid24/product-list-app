import React, { useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import {
  getProduct,
  postProduct,
  editProduct,
  deleteProduct
} from '@/api/product';

import ProductForm from '@/components/ProductForm';
import Header from '@/components/Header';
import TableForm from '@/components/Table';
import Contact from '@/components/Contact';
import { Product } from '@/types/product.type';
import { Loading } from '@/components/Loading';


export default function HomeScreen() {

  const [viewPage, setViewPage] = useState('products');
  const [showForm, setShowForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [productToEdit, setProductToEdit] = useState<Product | null>(null); 

  useEffect(() => {   
    getProduct().then((x) => {     
      setProducts(x);      
      setIsLoading(false);
    });
  }, []);

  const handleAddButtonClick = () => {
    !showForm && (setIsEdit(false), setProductToEdit(null));
    setShowForm(!showForm);
  };

  const handleViewPage = (newViewPage: string) => {
    setViewPage(newViewPage);
  };

  const handleAddProduct = async (newProduct: Product) => {
    const { id } = newProduct;
    if (isEdit) {
      const data = await editProduct(id, newProduct);

      const editedProductsList = products.map((product) =>
        product.id == data.id ? data : product
      );

      setProducts(editedProductsList);
      setShowForm(false);

    } else {
      const data = await postProduct(newProduct);
      setProducts([...products, data]);
      setShowForm(false);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    await deleteProduct(id);
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEditProduct = (productToEdit: Product) => {
    setProductToEdit(productToEdit);
    setIsEdit(true);
    setShowForm(true);
  };

  return (
    <View style={styles.container}>
      <Header handleViewPage={handleViewPage} />

      {viewPage === 'products' ? (
        <View style={styles.appForm}>
          <View style={styles.tableContainer}>
            <View style={styles.presentation}>
              <Text style={styles.presentationTitle}>Products List</Text>
              <TouchableOpacity style={styles.presentationButton} onPress={handleAddButtonClick}>
                <Text style={styles.buttonText}>{showForm ? 'Hide' : 'Add'}</Text>
              </TouchableOpacity>
            </View>

            {isLoading ? (
              <Loading />
            ) : (
              <TableForm
                products={products}
                onDeleteProduct={handleDeleteProduct}
                onEditProduct={handleEditProduct}
              />
            )}
          </View>

          {showForm && (
            <ProductForm
              title={isEdit ? 'Edit Product' : 'Add Product'}
              products={products}
              isEdit={isEdit}
              onAddProduct={handleAddProduct}
              onEditProduct={handleEditProduct}
              productToEdit={productToEdit}>
              {isEdit ? (
                <View style={styles.editButtonsContainer}>
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => setShowForm(false)}>
                    <Text style={styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.updateButton} onPress={() => productToEdit && handleAddProduct(productToEdit)}>
                    <Text style={styles.buttonText}>Update</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity style={styles.updateButton} onPress={() => productToEdit && handleAddProduct(productToEdit)}>
                  <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
              )}
            </ProductForm>
          )}
        </View>
      ) : (
        <Contact />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  appForm: {
    flexDirection: 'row',
    padding: 20,
    paddingRight: 0,
    marginTop: 20,
    marginRight: 50,
  },
  tableContainer: {
    flex: 1,
  },
  presentation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  presentationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  presentationButton: {
    backgroundColor: 'rgb(94, 143, 235)',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  editButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cancelButton: {
    backgroundColor: 'rgb(104, 103, 103)',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
  },
  updateButton: {
    backgroundColor: 'rgb(65, 223, 54)',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
  },
  addButton: {
    backgroundColor: 'rgb(94, 143, 235)',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
