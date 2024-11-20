import { StyleSheet, Text, View, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../global/colors'

const ButtonCart = () => {
  return (
    <Pressable style={styles.button}>
      <Icon
        style={styles.icons}
        name="person"
        size={40}
        color="#000"
      />
    </Pressable>
  )
}

export default ButtonCart

const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    backgroundColor: colors.grisClaro,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',

  },
  icons: {
    width: 40,
    height: 40,
  }
})