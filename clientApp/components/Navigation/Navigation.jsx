import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Registration } from '../Registration/Registration';
import { Homescreen } from '../Homescreen/Homescreen';

const Stack = createNativeStackNavigator();

// <Routes>....</Routes> => Stack.Navigator

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Registration" component={Registration} options={{ title: 'Регистрация' }} />
        <Stack.Screen name="Homescreen" component={Homescreen} options={{ title: 'Главная' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};