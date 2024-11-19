import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons'

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerIcon}>
                <Pressable style={styles.headerBotton}><Icon style={styles.icons} name="menu" size={16} color="#000"/></Pressable>
            </View>
            <View style={styles.center}>
                <Text style={styles.headerText}>Tienda Scout</Text>
                <TextInput 
                    style={styles.hearderSearch}
                    placeholder='Busqueda'
                />
            </View>
            <View style={styles.headerIcon}>
                <Pressable style={styles.headerBotton}><Icon style={styles.icons} name="shopping-cart" size={16} color="#000"/></Pressable>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 110,
        flexDirection: 'row'
    },
    center: {
        paddingTop: 30,
        backgroundColor: 'red',
        width: '80%',
        padding: 10,
        gap: 10
    },
    headerText: {
        backgroundColor: 'green',
        textAlign: 'center'
    },
    hearderSearch: {
        backgroundColor: 'white',
        borderRadius: 25
    },
    headerIcon: {
        paddingTop: 30,
        width: '10%',
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
    headerBotton: {
        width: 24,
        height: 24,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icons: {
        width: 16,
        height: 16,
        backgroundColor: 'red'
    }
})