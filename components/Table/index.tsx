import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import showToast from '@/utils/Toast';
import { Product, TableFormProps } from '@/types/product.type';

const TableForm = ({ products, onDeleteProduct, onEditProduct}: TableFormProps) => {
  const handleDeleteButton = (id: string) => {
    onDeleteProduct(id);
    showToast("Product deleted!");
  };

  const handleEditButton = (productToEdit: Product) => {
    onEditProduct(productToEdit);
  };

  return (
    <View style={styles.table}>
      <View style={styles.tableContainer}>
        <View style={styles.tableHead}>
          <Text>PRODUCT NAME</Text>
          <Text>COLOR</Text>
          <Text>CATEGORY</Text>
          <Text>PRICE</Text>
          <Text></Text>
        </View>
        <View style={styles.tableBody}>
          {!products.length ? (
            <View style={styles.tableEmpty}>
              <Text>There are not products to show</Text>
            </View>
          ) : (
            products.map((product) => (
              <View key={product.id} style={styles.tableRow}>
                <Text>{product.productName}</Text>
                <Text>{product.color}</Text>
                <Text>{product.category}</Text>
                <Text>{`$${product.price}`}</Text>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => handleEditButton(product)}>
                    <Text>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => handleDeleteButton(product.id)}>
                    <Text>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          )}
        </View>
      </View>
    </View>
  );
};

TableForm.propTypes = {
  products: PropTypes.array.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
  onEditProduct: PropTypes.func.isRequired,
  children: PropTypes.node
};

const styles = StyleSheet.create({
  table: {
    flex: 1,
  },
  tableContainer: {
    flex: 1,
  },
  tableHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f7f7f7',
  },
  tableBody: {
    flex: 1,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dfdede',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  editButton: {
    marginRight: 5,
    color: 'red',
    backgroundColor: 'transparent',
  },
  deleteButton: {
    backgroundColor: 'transparent',
  },
  tableEmpty: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default TableForm;
