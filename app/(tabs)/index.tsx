import { products } from '@/data/products';
import { useRouter } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.productContainer} onPress={() => router.push(`/product/${item.id}`)}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>R$ {item.price}</Text>
        </TouchableOpacity>
      )}    
      />
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    padding: 12,
    margin: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  productPrice: {
    fontSize: 15,
    color: '#2ecc71',
    fontWeight: 'bold',
    marginTop: 4,
  },
  container: {
    flex: 1,
  backgroundColor: '#f5f5f5',
},
});