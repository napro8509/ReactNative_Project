import { AsyncStorage } from 'react-native';


const saveCart=async (cartArray)=>{ try {
    await AsyncStorage.setItem('@cart',JSON.stringify(cartArray));
  } catch (error) {
    console.log('Loi save Cart');
  }
}
export default saveCart;