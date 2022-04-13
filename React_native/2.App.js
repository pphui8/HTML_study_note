import React, { Component }  from 'react';
import { StyleSheet, Image, ToastAndroid, Button, Text, View, TextInput, ScrollView } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper'
import SelectMultiple from 'react-native-select-multiple'

const showToastWithGravity = (message) => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};

const LoginStyles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    transform: [{ translateY: -50 }]
  },
  TextInput: {
    borderColor: '#39c5bb',
    borderWidth: 1,
    width: 200,
    height: 40,
    marginBottom: 20,
  },
  checkbox: {
    height: 40,
    alignSelf: "center",
    flexDirection: 'row',
  },
});

const setSelection = (value) => {
  alert(value);
}

function LoginScreen({ navigation }) {
  const submit = (navigation) => {
    alert("submitted!!");
    navigation.goBack();
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={{ uri: 'https://tva3.sinaimg.cn/large/006z6YU4ly1h16qy0uxn1g3050050a9w.gif'}} style={ LoginStyles.img } />
      <TextInput placeholder="Username" style={ LoginStyles.TextInput } />
      <TextInput placeholder="Password" style={ LoginStyles.TextInput } />
      <RadioGroup style={ LoginStyles.checkbox } >
        <RadioButton value={'item1'} >
          <Text>normal mode</Text>
        </RadioButton>
        <RadioButton value={'item2'} >
          <Text>stealth mode</Text>
        </RadioButton>
      </RadioGroup>
      <Button title="submit!!!" onPress={() => submit(navigation) } style={{ marginTop: 55 }}  />
    </View>
  );
}

const ScrollImgStyles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
  },
});

const options = ['Dack mode', 'Is on line', 'Receice message']

class SelectContainer extends Component {
  state = { selected: [] }

  onSelectionsChange = (selected) => {
    this.setState({ selected })
  }

  render () {
    return (
      <View>
        <SelectMultiple
          items={options}
          selectedItems={this.state.selected}
          onSelectionsChange={this.onSelectionsChange} />
      </View>
    )
  }
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Swiper  height={300} horizontal={true} autoplay={true} autoplayTimeout={3} loop>
            <View >
              <Image style={ ScrollImgStyles.img } source={{ uri: 'https://www.ecy.cc/d/file/20220308/4fbe7087277dd261b9b7fce680ae7c6d.jpg' }}></Image>
            </View>
            <View >
              <Image style={ ScrollImgStyles.img } source={{ uri: 'https://www.ecy.cc/d/file/20220306/cfdd31f437b0abb5cf1836b380de718c.jpg' }}></Image>
            </View>
            <View >
              <Image style={ ScrollImgStyles.img } source={{ uri: 'https://www.ecy.cc/d/file/20220110/e9ffc4e583976f61b27da00143d5d2bb.jpg' }}></Image>
            </View>
        </Swiper>
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text>Blogs</Text>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
}

function BlogsScreen() {
  return (
    <Stack.Navigator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

const SettingStyles = StyleSheet.create({
  Title: {
    fontSize: 30,
    marginBottom: 20,
  },
  scroll: {
    marginTop:  30
  },
  Item: {
    height: 40,
    alignSelf: "center",
    flexDirection: 'row',
    borderColor: '#39c5bb',
    borderWidth: 1,
    width: 300,
    marginBottom: 10,
    borderRadius: 40,
  },
  Text: {
    marginLeft: 30,
    marginTop: 5
  }
});

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={ SettingStyles.Title }>settings</Text>
      <ScrollView style={ SettingStyles.scroll }>
        <View style={ SettingStyles.Item }><Text style={ SettingStyles.Text }>账号资料</Text></View>
        <View style={ SettingStyles.Item }><Text style={ SettingStyles.Text }>安全隐私</Text></View>
        <View style={ SettingStyles.Item }><Text style={ SettingStyles.Text }>消息设置</Text></View>
        <View style={ SettingStyles.Item }><Text style={ SettingStyles.Text }>其他设置</Text></View>
        <SelectContainer/>
      </ScrollView>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Blogs" component={BlogsScreen} options={{ headerShown: false }} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gear" color={color} size={size} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}