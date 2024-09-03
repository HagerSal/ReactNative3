import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './utilities/routes';
import HomeScreen from './pages/HomeScreen';
import NowplayingScreen from './pages/NowplayingScreen';
import PopularScreen from './pages/PopularScreen';
import UpcomingScreen from './pages/UpcomingScreen';
import TopMoviesScreen from './pages/TopMoviesScreen';
import MovieDetails from './pages/MovieDetails';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.home} component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name={routes.movieDetails} component={MovieDetails} />
    </Stack.Navigator>
  );
}


function NowPlayingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.nowPlaying} component={NowplayingScreen} options={{ headerShown: false }} />
      <Stack.Screen name={routes.movieDetails} component={MovieDetails} />
    </Stack.Navigator>
  );
}


function PopularStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.popular} component={PopularScreen} options={{ headerShown: false }}/>
      <Stack.Screen name={routes.movieDetails} component={MovieDetails} />
    </Stack.Navigator>
  );
}


function UpcomingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.upcoming} component={UpcomingScreen} options={{ headerShown: false }} />
      <Stack.Screen name={routes.movieDetails} component={MovieDetails} />
    </Stack.Navigator>
  );
}

function TopMoviesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.topMovies} component={TopMoviesScreen} options={{ headerShown: false }}/>
      <Stack.Screen name={routes.movieDetails} component={MovieDetails} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={routes.home} screenOptions={{
        drawerContentStyle: {
          backgroundColor: 'grey'
        },

      }} >
       <Drawer.Screen name={routes.home} component={HomeStack} />
        <Drawer.Screen name={routes.nowPlaying} component={NowPlayingStack} />
        <Drawer.Screen name={routes.popular} component={PopularStack} />
        <Drawer.Screen name={routes.topMovies} component={TopMoviesStack} />
        <Drawer.Screen name={routes.upcoming} component={UpcomingStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
