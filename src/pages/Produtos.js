import React from 'react';
import { View, Text, Button,ScrollView,Image} from 'react-native';

function Produtos() {
    return (
        <View style={{justifyContent:'center', alignItems:'flex-start', margin:5, width:'100%'}}>
               <Text style={{fontSize:18, alignItems:'flex-start', justifyContent:'flex-start',margin:10}}>
                 TODOS OS PRODUTOS
               </Text>
                <ScrollView style={{ width:'100%', margin:10}}>

                  <View style={{flexDirection:'row', margin:10}}>
                    <Image   source = { require('../image/img3.jpg') }
                      style = {{width:100, height:130, margin:10}}/>
                     <View  style = {{ margin:10}}>
                     <Text style={{fontSize:18}}>
                         Roupa Feminina
                      </Text>
                      <Text  style={{fontSize:18}}>R$ 60,00</Text>
                      <Text  style={{fontSize:12}}>PARCELAS EM ATE 12 X NO CARTAO</Text>
                     </View>
                  </View>
                  <View style={{flexDirection:'row', margin:10}}>
                    <Image   source = { require('../image/img3.jpg') }
                      style = {{width:100, height:130, margin:10}}/>
                     <View  style = {{ margin:10}}>
                     <Text style={{fontSize:18}}>
                         Roupa Feminina
                      </Text>
                      <Text  style={{fontSize:18}}>R$ 60,00</Text>
                      <Text  style={{fontSize:12}}>PARCELAS EM ATE 12 X NO CARTAO</Text>
                     </View>
                  </View>
                  <View style={{flexDirection:'row', margin:10}}>
                    <Image   source = { require('../image/img3.jpg') }
                      style = {{width:100, height:130, margin:10}}/>
                     <View  style = {{ margin:10}}>
                     <Text style={{fontSize:18}}>
                         Roupa Feminina
                      </Text>
                      <Text  style={{fontSize:18}}>R$ 60,00</Text>
                      <Text  style={{fontSize:12}}>PARCELAS EM ATE 12 X NO CARTAO</Text>
                     </View>
                  </View>
                  <View style={{flexDirection:'row', margin:10}}>
                    <Image   source = { require('../image/img3.jpg') }
                      style = {{width:100, height:130, margin:10}}/>
                     <View  style = {{ margin:10}}>
                     <Text style={{fontSize:18}}>
                         Roupa Feminina
                      </Text>
                      <Text  style={{fontSize:18}}>R$ 60,00</Text>
                      <Text  style={{fontSize:12}}>PARCELAS EM ATE 12 X NO CARTAO</Text>
                     </View>
                  </View>

                 
                </ScrollView>

             </View>
    );
}

export default Produtos;