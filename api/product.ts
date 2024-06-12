import Constants from "expo-constants";
import { Product } from '@/types/product.type';

const BASE_URL = Constants.expoConfig?.extra?.baseURL;

if (!BASE_URL) {
  throw new Error('Base URL is not defined');
}

// Función para obtener productos
export async function getProduct() {
  try {
    const response = await fetch(`${BASE_URL}/product`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in getProduct:', error);
    throw new Error('An error has occurred in getProduct');
  }
}

// Función para añadir un producto
export async function postProduct(body: Product) {
  try {
    const response = await fetch(`${BASE_URL}/product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in postProduct:', error);
    throw new Error('An error has occurred in postProduct');
  }
}

// Función para editar un producto
export async function editProduct(id: string, body: Product) {
  try {
    const response = await fetch(`${BASE_URL}/product/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in editProduct:', error);
    throw new Error('An error has occurred in editProduct');
  }
}

// Función para eliminar un producto
export async function deleteProduct(id: string) {
  try {
    const response = await fetch(`${BASE_URL}/product/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error in deleteProduct:', error);
    throw new Error('An error has occurred in deleteProduct');
  }
}
