/* 
  Objetivo:
  Criar uma lista de produtos
  Implementar filtros de categria e faixa de preço
  Permitir que o usuário aplique os filtros e veja os resultados atualizados
  Requisitos:
  1. Exibir uma lista de produtos (imagem, nome, categoria, preço, quantidade em estoque).
  2. Implementar os filtros de: nome, categoria, preço mínimo, preço máximo e produto em estoque.
  3. Atualizar a lista de produtos conforme os filtros são selecionados.
  4. Utilizar FlatList para renderizar a lista.
  5. Utilizar useState para gerenciar o estado dos filtros e produtos.
  PascalCase
  App -> states
  FilterBar -> Vai os filtros
  ProductList -> Vai a FlatList
  ProductItem -> O card do produto "productCard"
*/



import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProductItem } from './components/ProductItem';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const products = [
    { id: '1', image: 'https://l1nk.dev/sARdV', name: 'Leite Integral Amanhecer', category: 'Leite e Derivados', price: 4.34, stock: 1000 },
    { id: '2', image: 'https://l1nk.dev/T6GQx', name: 'Leite Desnatado Amanhecer', category: 'Leite e Derivados', price: 4.44, stock: 320 },
    { id: '3', image: 'https://acesse.one/wlLIO', name: 'Leite Zero Lactose Amanhecer', category: 'Leite e Derivados', price: 4.89, stock: 120 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
      {products.map(product => <ProductItem key={product.id} {...product}/>)}
        <Picker
          style={styles.picker}
          selectedValue={selectedCategory}
          onValueChange={(itemValue) =>
            setSelectedCategory(itemValue)
          }>
          <Picker.Item label="Nome" value="name" />
          <Picker.Item label="Categoria" value="category" />
          <Picker.Item label="Preço Mínimo" value="priceMin" />
          <Picker.Item label="Preço Máximo" value="priceMax" />
        </Picker>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  pickerContainer: {
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    color: '#FFF',
  },
});