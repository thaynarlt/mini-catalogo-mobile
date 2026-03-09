import { products } from '@/data/products';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';


export default function ProductScreen() {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === id);
  if (!product) {
    return <Text>Produto não encontrado!</Text>;
  }
  return (
    <View style={styles.container}>
      <Text>{product.name}</Text>
      <Text> R$ {product.price}</Text>
      <Text>{product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});