import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import ButtonCart from './ButtonCart'
import { PixelRatio } from 'react-native'

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
        height: 64,
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    search: {
        backgroundColor: 'white',
        width: '80%',
        paddingHorizontal: 16,
        fontSize: 16,
        borderRadius: 25,
        height: 56
    },
    headerButton: {
        width: '20%',
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 16,
        display: 'flex'
    },
    
})