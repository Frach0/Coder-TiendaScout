import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import ButtonCart from './ButtonCart'
import { PixelRatio } from 'react-native'
import { colors } from '../global/colors'

const Header = () => {
    return (
        <View style={styles.headerContainer}>
                <TextInput 
                    style={styles.search}
                    placeholder='Buscar en Tienda Scout'
                />
                <ButtonCart/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: '13%',
        height: 100,
        backgroundColor: colors.azulCobalto,
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: 'space-around',
    },
    search: {
        backgroundColor: colors.blanco,
        width: '80%',
        paddingHorizontal: 16,
        fontSize: 16,
        borderRadius: 25,
        height: 56
    },
})