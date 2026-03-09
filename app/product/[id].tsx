import { products } from '@/data/products';
import { useLocalSearchParams } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';


export default function ProductScreen() {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === id);
  if (!product) {
    return <Text>Produto não encontrado!</Text>;
  }
  return (
    <View style={styles.container}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}> R$ {product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: '#2ecc71',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  
});