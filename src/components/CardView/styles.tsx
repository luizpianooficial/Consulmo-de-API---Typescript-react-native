import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  ContainerImg:{
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 8
  },
  LogoContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    resizeMode: 'contain'
  },
  LogoImg:{
    flex: 1,
    width: '65%',
    resizeMode: "contain",
    marginTop:45
  },
  CardBrand:{
    color: '#fff',
    fontWeight: '400',
    fontSize: 18,
    fontStyle: 'italic',
    
  },
  CardNome:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  CardImage:{
    flex : 1
  },
  Image:{
    width :350,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150
  },
  Pricelebal:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
    alignItems: 'center',
    marginTop: 10
  },
  PricelebalValor:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }

})