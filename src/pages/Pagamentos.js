
  import React from 'react';
  import { View, Text, Button, Image } from 'react-native';

  function Pagamentos( { navigation } ) {
      return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Pagamentos</Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                    style = {{width: 50, height:50, resizeMode:'contain'}}
                    source={{
                        uri: 'https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/BR-PT/mcbc_alimentacao-rev_84px.png'
                    }}
                />
                <Image
                    style = {{width: 50, height:50, resizeMode:'contain'}}
                    source={{
                        uri: 'https://logodownload.org/wp-content/uploads/2016/10/visa-logo-1.png'
                    }}
                />              
              </View>
          </View>
      );
  }

  export default Pagamentos;