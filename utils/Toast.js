import { ToastAndroid, Platform, Alert } from 'react-native';

const showToast = (message, type) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    Alert.alert(type === 'success' ? 'Success' : 'Error', message);
  }
};

export default showToast;
