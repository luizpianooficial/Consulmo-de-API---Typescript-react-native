import { TouchableOpacity, View, Text } from "react-native";
import {styles} from './styles'
import {AntDesign} from '@expo/vector-icons'

export default function Buycar(){
  return(
    <View style={styles.Container}>
      <TouchableOpacity style={styles.Buttom}>
        <AntDesign
          name="shoppingcart"
          size={24}
          color="white"
          style = {styles.icons}
        />
        <Text style = {styles.Text}>Buy This</Text>
      </TouchableOpacity>
    </View>
  )
}