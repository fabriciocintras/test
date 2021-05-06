import React from 'react';
import { View,Text} from 'react-native';
/* Importamos os recursos necessarios para nossa navegação */
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

/* Importamos nossas páginas criadas para inserir dentro da navegação */
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Produtos from './src/pages/Produtos';
import Pagamentos from './src/pages/Pagamentos';
import Menu from './src/pages/Menu';

/* Criamos nosso navegador com a variavel Tab */
const Tab = createBottomTabNavigator();
  /* Criamos nosso navegador com a variavel Stack */
  const Stack = createStackNavigator();
/* Aqui nós informamos qual tela recebera o icone */
/* Em 'name' informamos o nome do ícone Ionicons */
const icons = {
  Home: {
    name: 'ios-home'
  },
  Sobre: {
    name: 'ios-people'
  },
  Produtos: {
    name: 'basket-outline'
  },
  Pagamentos: {
    name: 'ios-card-outline'
  },
  Menu:{
    name:'menu'
  }
};

function App() {
  return(
    
    
    /* Abre container da navegação */
    <NavigationContainer>
      <View><Text style={{fontSize:19, padding:15
      }}>BAZZAAR</Text></View>
       {/* Insere a navegação Stack dentro container */}

      {/* Insere a navegação Tab dentro container */}
      <Tab.Navigator 
        screenOptions={ ({route}) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />
          }
        })  }
      >
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="Menu" component={Menu} />
        <Tab.Screen name="Produtos" component={Produtos} />
        <Tab.Screen name="Sobre" component={Sobre} />
        <Tab.Screen name="Pagamentos" component={Pagamentos} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;