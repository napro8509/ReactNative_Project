import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import register from '../../WebServices/Register';
import signIn from '../../WebServices/signIn';
import global from '../../../Global/global';
import saveToken from '../../../Api/saveToken';
const { width, height } = Dimensions.get('window');


export default class Authentication extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSignIn: false,
      name: '',
      email: '',
      password: '',
      rePassword: ''
    };
  };
  componentDidMount() {
  }
  signUpState() {
    this.setState({ isSignIn: false });
    console.log('----ham sign up');
    console.log(this.state.isSignIn);
  }
  signInState() {
    this.setState({ isSignIn: true });
    console.log('----ham sign in');
    console.log(this.state.isSignIn);
  }
  goToSignIn() {
    this.setState({ isSignIn: true });
  }
  onSuccess() {
    Alert.alert(
      'Notification',
      'Sign Up Success!',
      [
        { text: 'OK', onPress: () => this.setState({ isSignIn: true, }) },
      ],
      { cancelable: false }
    )
  }
  onFail() {
    Alert.alert(
      'Notification',
      'Your Email has been existed!',
      [
        { text: 'OK', onPress: () => this.setState({ email: '' }) },
      ],
      { cancelable: false }
    )
  }
  signInError() {
    Alert.alert(
      'Notification',
      'Wrong email or password',
      [
        { text: 'OK', onPress: () => this.setState({ email: '', password: '' }) },
      ],
      { cancelable: false }
    )
  }
  onFillForm(){
    Alert.alert(
      'Notification',
      'Please fill in the blank!',
      [
        { text: 'OK'},
      ],
      { cancelable: false }
    )
  }
  onDifferencePass(){
    Alert.alert(
      'Notification',
      'Password must be same!',
      [
        { text: 'OK'},
      ],
      { cancelable: false }
    )
  }
  signInMethod() {
    const { email, password } = this.state;
    console.log(email, password);
    signIn(email, password)
      .then(res => {
        console.log(res.token);
        global.onLogIn(res.user);
        saveToken(res.token);
        const { navigation } = this.props;
        navigation.goBack();
      }
      )
      .catch(error => {
        this.signInError();
      });
  }

  signUpMethod() {
    const { email, name, password, rePassword } = this.state;
    if (password === '' || email === '' || name === '') {
      this.onFillForm();
    } else if (password !== rePassword) {
      this.onDifferencePass();
    }
    else {
      register(email, name, password)
        .then(res => {
          if (res == 'THANH_CONG')
            this.onSuccess();
          else {
            this.onFail();
          }
        })
    }
  }
  render() {
    const SignInJSX = (
      <View style={styles.body}>
        <TextInput style={styles.textInput}
          underlineColorAndroid='transparent'
          placeholder='Enter your email'
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
        >
        </TextInput>
        <TextInput style={styles.textInput}
          underlineColorAndroid='transparent'
          placeholder='Enter your password'
          value={this.state.password}
          secureTextEntry
          onChangeText={text => this.setState({ password: text })}
        >
        </TextInput>

        <TouchableOpacity onPress={this.signInMethod.bind(this)}>
          <View style={styles.button}>
            <Text style={{ color: '#3399FF' }}>
              Sign In Now
        </Text>
          </View>
        </TouchableOpacity>
      </View>
    );

    const SignUpJSX = (
      <View style={styles.body}>
        <TextInput style={styles.textInput}
          underlineColorAndroid='transparent'
          placeholder='Enter your email'
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
        >
        </TextInput>
        <TextInput style={styles.textInput}
          underlineColorAndroid='transparent'
          placeholder='Enter your name'
          value={this.state.name}
          onChangeText={text => this.setState({ name: text })}
        >
        </TextInput>
        <TextInput style={styles.textInput}
          underlineColorAndroid='transparent'
          placeholder='Enter your password'
          value={this.state.password}
          secureTextEntry
          onChangeText={text => this.setState({ password: text })}
        >
        </TextInput>
        <TextInput style={styles.textInput}
          underlineColorAndroid='transparent'
          placeholder='Re-enter your password'
          value={this.state.rePassword}
          secureTextEntry
          onChangeText={text => this.setState({ rePassword: text })}
        >
        </TextInput>
        <TouchableOpacity onPress={this.signUpMethod.bind(this)}>
          <View style={styles.button}>
            <Text style={{ color: '#3399FF' }}>
              Sign Up Now
        </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
    const { navigation } = this.props;
    var MainJSX = this.state.isSignIn ? SignInJSX : SignUpJSX;
    return (
      <View style={styles.container}>


        <View style={styles.header}>
          <TouchableOpacity onPress={() => {
            navigation.goBack();
          }}>
            <Image style={styles.image}
              source={require('../../../images/back.png')}
            />
          </TouchableOpacity>
          <Image style={{ height: height / 16, width: height / 7 }}
            source={require('../../../images/shopLogo.png')}
          />
          <Image style={styles.image}
            source={require('../../../images/profile_white.png')}
          />
        </View>


        {MainJSX}


        <View style={styles.signState}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={this.signInState.bind(this)}>
              <View style={styles.signInButton}>
                <Text style={this.state.isSignIn ? styles.activeText : styles.inactiveText}>
                  Sign In
          </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={this.signUpState.bind(this)}>
              <View style={styles.signUpButton}>
                <Text style={this.state.isSignIn ? styles.inactiveText : styles.activeText}>
                  Sign Up
          </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#183544',
    borderRightWidth: 3,
    borderColor: 'white'
  },
  header: {
    height: height / 8,
    backgroundColor: '#183544',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  body: {
    flex: 1,
    paddingTop: 30
  },
  image: {
    height: height / 17,
    width: height / 17,
    marginLeft: 5,
    marginRight: 5
  },
  textInput: {
    backgroundColor: 'white',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 10,
    paddingVertical: 0,
    borderRadius: 10,
    paddingLeft: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 30,
    marginHorizontal: 5,
    borderRadius: 20,
    shadowColor: 'gray',
    shadowOpacity: 0.2,
    marginVertical: 10,
    elevation: 3
  },
  signInButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 30,
    marginLeft: 5,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: 'gray',
    shadowOpacity: 0.2,
    marginVertical: 10,
    elevation: 3,
    marginRight: 1
  },
  signUpButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 30,
    marginRight: 5,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: 'gray',
    shadowOpacity: 0.2,
    marginVertical: 10,
    elevation: 3
  },
  signState: {
    flexDirection: 'row',
    marginBottom: 100
  },
  inactiveText: {
    color: 'grey'
  },
  activeText: {
    color: '#3399FF'
  }
})
