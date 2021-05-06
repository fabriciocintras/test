
  import React from 'react';
  import { View, Text, Button, ScrollView,ImageBackground,Image } from 'react-native';


  function Home( { navigation } ) {
    let logoLocal = require ('../image/img2.jpg');

      return (

          <ScrollView>
            <ImageBackground  source={logoLocal} style={{width:'100%', height:200}}>
            </ImageBackground>
             <View style={{ justifyContent:'center', alignItems:'center',flex:1, padding:20}}> 
              <Text style={{fontSize:18, color:'black'}}>Até</Text>
              <Text style={{fontSize:42,color:'black'}} >50%</Text>
              <Text style={{fontSize:30, marginBottom:20,color:'black'}}>de Desconto</Text>
              <Button title="Comprar"></Button>
             </View>

             <View style={{justifyContent:'center', alignItems:'center', margin:5}}>
               <Text style={{fontSize:18, alignItems:'flex-start', justifyContent:'flex-start'}}>
                 ROUPAS MASCULINAS:
               </Text>
                <ScrollView horizontal={true} style={{ padding:5}}>
                  <View style={{width:150, height:200, borderColor:'black', backgroundColor:'silver',margin:5}}>
                    <Image   source = { require('../image/img1.png') }
                      style = {{width:'100%', height:'100%'}}/>
                  </View>
                  <View style={{width:150, height:200, borderColor:'black', backgroundColor:'silver',margin:5}}>
                  <Image   source = { require('../image/img1.png') }
                      style = {{width:'100%', height:'100%'}}/>
                  </View>
                  <View style={{width:150, height:200,  borderColor:'black', backgroundColor:'silver',margin:5}}>
                  <Image   source = { require('../image/img1.png') }
                      style = {{width:'100%', height:'100%'}}/>
                  </View>
                  <View style={{width:150, height:200, borderColor:'black', backgroundColor:'silver',margin:5}}>
                  <Image   source = { require('../image/img1.png') }
                      style = {{width:'100%', height:'100%'}}/>
                  </View>
                  <View style={{width:150, height:200, borderColor:'black', backgroundColor:'silver',margin:5}}>
                  <Image   source = { require('../image/img1.png') }
                      style = {{width:'100%', height:'100%'}}/>
                  </View>
                </ScrollView>
             </View>
            
             <View style={{justifyContent:'center', alignItems:'center', margin:5}}>
               <Text style={{fontSize:18, alignItems:'flex-start', justifyContent:'flex-start'}}>
                 ROUPAS FEMININAS:
               </Text>
                <ScrollView horizontal={true} style={{ padding:5}}>

                  <View style={{width:150, height:200, borderColor:'black', backgroundColor:'silver',margin:5}}>
                    <Image   source = { require('../image/img3.jpg') }
                      style = {{width:'100%', height:'100%'}}/>
                  </View>

                  <View style={{width:150, height:200, borderColor:'black', backgroundColor:'silver',margin:5}}>
                  <Image   source = { require('../image/img3.jpg') }
                      style = {{width:'100%', height:'100%'}}/>
                  </View>

                  <View style={{width:150, height:200,  borderColor:'black', backgroundColor:'silver',margin:5}}>
                  <Image   source = { require('../image/img3.jpg') }
                      style = {{width:'100%', height:'100%'}}/>
                  </View>

                  <View style={{width:150, height:200, borderColor:'black', backgroundColor:'silver',margin:5}}>
                  <Image   source = { require('../image/img3.jpg') }
                      style = {{width:'100%', height:'100%'}}/>
                  </View>

                  <View style={{width:150, height:200, borderColor:'black', backgroundColor:'silver',margin:5}}>
                  <Image   source = { require('../image/img3.jpg') }
                      style = {{width:'100%', height:'100%'}}/>
                  </View>
                </ScrollView>

             </View>
            

            
               
          </ScrollView>
      );
  }

  export default Home;