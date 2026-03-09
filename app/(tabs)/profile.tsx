import { Image, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
      <Image source={require('@/assets/images/thayna.jpg')} style={styles.profileImage} />
      <Text>Nome: Thayna</Text>
      <Text>Email: thaynarlt7@gmail.com</Text>
      <Text>Biografia: Thayná é uma desenvolvedora de software full stack com 2 anos de experiência em desenvolvimento de software.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
  },
});