export interface Product {
  id: string;
  productName: string;
  color: string;
  category: string;
  price: string;
}

export interface ProductFormProps {
  title: string;
  onAddProduct: Function;
  isEdit: boolean;
  productToEdit: any;
  products: Product[];
  onEditProduct: Function;
  children: React.ReactNode;
}

export interface TableFormProps {
  products: Product[];
  onDeleteProduct: (id: string) => void;
  onEditProduct: (productToEdit: Product) => void;
}
