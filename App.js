import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold 
  } 
from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fonteCarregada) {
    return <>
      <View>
        <AppLoading />
      </View>
    </>
  } else {
    return (
        <SafeAreaView style={{flex: 1}}>
          <StatusBar />
          <Cesta {...mock} />
        </SafeAreaView>
      );
  }
}
