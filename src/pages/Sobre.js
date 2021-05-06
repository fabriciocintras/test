
  import React from 'react';
  import { View, Text, Button, Image } from 'react-native';

  function Sobre( { navigation } ) {
      return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin:20}}>
             <Text style={{marginBottom:10}}>Bem Vindo ao BAZZAAR</Text> 
             <Text style={{marginBottom:10}}>Nossos produtos sao inspirados pelas pessoas que estao a nossa 
                 volta, com suas belezas e qualidades. Produtos de bom gosto especialmente 
                 para voce. Descubra our story e aproveite as promoções
             </Text>
             <Image  source = { require('../image/img4.jpg') }
                      style = {{width:'100%', height:'50%'}}/>
          </View>
      );
  }

  export default Sobre;