import React,{useEffect, useState} from "react";
import { View,Text, Button, Image} from 'react-native'
import { styles } from './styles'
import Logo from '../../assets/logo.png'
import Divedir from "./Divedir";
import { CAR_ASSETS_BASE_URL } from "../constantes/car";
import Buycar from "../Buycar";
import { CarModel } from "./props";
import { handleNextItem, handlePreviousItem, loadCardDate } from "./actions";

export default function CardView(){


  const[carDate, setCarDate] = useState <CarModel | null>(null)

  useEffect(()=>{
      (async () =>{
        await loadCardDate(1, setCarDate)
        console.log(carDate)
      })();
  },[])

  const renderLogoBox = () =>(
    <View style={styles.LogoContainer}>
        <Image 
          source={Logo}
          style={styles.LogoImg}
        />
      </View>
  )
  const renderCardDetalhe = () =>(
    <View style={{ alignItems: 'center'}}>
      <Text style={styles.CardBrand}>Lamborghini</Text>
      <Text style={styles.CardNome}>{carDate?.carName}</Text>
    </View>
  )

  const CarImg = () =>(
    <Image
    style={styles.Image}
    source={{uri: `${CAR_ASSETS_BASE_URL}${carDate?.id}.png`}}
    />
  )

  const RenderPriceControls = () =>(
    <View style={styles.Pricelebal}>
      <Button 
        title="<" 
        color={"#01a6b3"}
        onPress={() => handlePreviousItem(carDate, setCarDate)}
        />
        <Text style={styles.PricelebalValor}>{carDate?.price}</Text>
      <Button 
        title=">"
        color={"#01a6b3"}
        onPress={() => handleNextItem(carDate, setCarDate)}
        />
    </View>
  )

  return(
    <View style={styles.ContainerImg}>
      {renderLogoBox()}
      <Divedir/>
      {renderCardDetalhe()}
      {CarImg()}
      <Divedir/>
      {Buycar()}
      {RenderPriceControls()}
    </View>
  )
}