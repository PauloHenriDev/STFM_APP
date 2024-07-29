import { View } from 'react-native';
import LoadingPage from './src/pages/LoadingPage/index.js';
import InitialPage from './src/pages/InitialPage/index.js';
import LoginPage from './src/pages/LoginPage/index.js';

export default function App() {
  return (
    <View>
      <LoginPage />
    </View>
  );
}