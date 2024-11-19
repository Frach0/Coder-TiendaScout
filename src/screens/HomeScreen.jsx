import { StyleSheet, Text, View, Image } from 'react-native'


const HomeScreen = () => {
  return (
    <>
        <Text>hola!</Text>
        <Image 
            source={{ uri:'https://tienda.scouts.org.ar/wp-content/uploads/2023/02/campera-de-friza-4.png'}}
            style={styles.cartImage}
        />
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    cartImage: {
        width: 80,
        height: 80
    }
})