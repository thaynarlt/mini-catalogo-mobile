import { products } from '@/data/products';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <Text>Produtos</Text>
      <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.productContainer} onPress={() => router.push(`/product/${item.id}`)}>
          <Text>{item.name}</Text>
          <Text>R$ {item.price}</Text>
        </TouchableOpacity>
      )}    
      />
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 1,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10
  },
});