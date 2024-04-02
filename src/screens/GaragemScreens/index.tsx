import { View, Text } from "react-native";
import {styles} from './style'
import CardView from "../../components/CardView";


export default function GaragemScreens(){
  return(
    <View style= {styles.Container}>
      <View style= {styles.CameraBox}>
        <View style= {styles.Tringulo}></View>
        <View style= {[styles.Tringulo, styles.TopRight]}></View>
        <View style= {[styles.Tringulo, styles.BottomLeft]}></View>
        <View style= {[styles.Tringulo, styles.BottomRight]}></View>
        <CardView/>
      </View>
    </View>
  )
}