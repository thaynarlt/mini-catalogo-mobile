import { Image, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
        <Image source={require('@/assets/images/thayna.jpg')} style={styles.profileImage} />
        <Text style={styles.value}>Thayna Rodrigues</Text>
        <Text style={styles.profileEmail}>Email: thaynarlt7@gmail.com</Text>
        <Text style={styles.profileBiografia}>Biografia: Thayná é uma desenvolvedora de software full stack com 2 anos de experiência em desenvolvimento de software.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center'
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },  
  profileEmail: {
    fontSize: 14,
    color: '#666',
  },
  profileBiografia: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 16,
    lineHeight: 20,
  },
});