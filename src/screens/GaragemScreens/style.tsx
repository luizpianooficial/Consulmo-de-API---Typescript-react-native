import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  Container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#1E1E20',
    alignItems: 'center',
    justifyContent: 'center'
  },
  CameraBox:{
    borderWidth: 2,
    borderColor: '#fff',
    position: 'relative',
    width: 350,
    height: '90%',
    overflow: 'hidden',
    borderRadius: 10

  },
  Tringulo:{
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderTopWidth: 20,
    borderTopColor: '#fff',
    borderRightWidth: 20,
    borderRightColor: 'transparent'
  },
  TopRight:{
    top:0,
    right:0,
    transform:[{rotate: "90deg"}]
  },
  BottomLeft:{
    bottom:0,
    left:0,
    transform:[{rotate: "270deg"}]
  },
  BottomRight:{
    bottom:0,
    right:0,
    transform:[{rotate: "180deg"}]
  },
})