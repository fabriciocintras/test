
  import React from 'react';
  import { View, Text, Button, Image } from 'react-native';

  function Menu( { navigation } ) {
      return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>

              <Text style={{width:'90%',fontSize:20, padding:10, backgroundColor:'silver', borderRadius:4, textAlign:'center',marginBottom:10}}>Novidades</Text>
              <Text style={{width:'90%',fontSize:20, padding:10, backgroundColor:'silver', borderRadius:4, textAlign:'center',marginBottom:10}}>Promoções</Text>
              <Text style={{width:'90%',fontSize:20, padding:10, backgroundColor:'silver', borderRadius:4, textAlign:'center',marginBottom:10}}>Feminino</Text>
              <Text style={{width:'90%',fontSize:20, padding:10, backgroundColor:'silver', borderRadius:4, textAlign:'center',marginBottom:10}}>Masculino</Text>
              <Text style={{width:'90%',fontSize:20, padding:10, backgroundColor:'silver', borderRadius:4, textAlign:'center',marginBottom:10}}>Login</Text>
              <Text style={{width:'90%',fontSize:20, padding:10, backgroundColor:'silver', borderRadius:4, textAlign:'center'}}>Carrinho</Text>
          </View>
      );
  }

  export default Menu;