import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import { colors } from '../global/colors'
import FlatCard from '../components/FlatCart'
import { useGetProductsQuery } from '../services/homeService'


const HomeScreen = () => {

    const { data: products, error, isLoading } = useGetProductsQuery()
    console.log(products)
    
    const descuentos = products.filter(product => product.discount > 0)

    const renderDescuento = ({ item, index }) => {
        return (
            <Pressable style={styles.prodDesc}>
                <Text>{item.title}</Text>
            </Pressable>
        )
    }

  return (
    <>
        <View style={styles.seccionWelcom}>
            <Text>Bienvenido!</Text>
        </View>
        <FlatList style={styles.seccionDescuentos}
            data={descuentos}
            keyExtractor={item => item.width}
            renderItem={renderDescuento}
        />
        <View style={styles.welcom}>

        </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    cartImage: {
        width: 80,
        height: 80
    },
    seccionWelcom: {
        backgroundColor: colors.morado,
        height: 200,
    },
    seccionDescuentos: {
        backgroundColor: colors.verdeNeon,
        padding: 16,
        flexDirection: 'row'
    },
    prodDesc: {
        backgroundColor: colors.amarillo,
        borderRadius: 12,
        height: 100,
        width: 100
    }
})