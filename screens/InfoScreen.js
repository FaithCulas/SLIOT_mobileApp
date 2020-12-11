import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableNativeFeedback,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Image,
  Animated
} from 'react-native';
import {Formik} from 'formik';
import Auth0 from 'react-native-auth0';
import Nfc from '../Nfc.js';

export default function InfoScreen() {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const userid = '1';
  const isid = '5f8bdbea7119bc007641a5c4';
  const username = 'Faith';
  const [temp, setTemp] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(year + '/' + month + '/' + date);
    setCurrentTime(hours + ':' + min + ':' + sec);
  }, []);

  const auth0 = new Auth0({ domain: 'dev-898-w5h0.au.auth0.com', clientId: 'pZRM75jknulto3yeftlgSRn3Q0f3Sdjy' });
  
  auth0
    .webAuth
    .authorize({scope: 'openid profile email'})
    .then(credentials =>
      // Successfully authenticated
      // Store the accessToken
      this.setState({ accessToken: credentials.accessToken })
    )
    .catch(error => console.log(error));

  auth0.webAuth
  .clearSession({})
  .then(success => {
      Alert.alert(
          'Logged out!'
      );
      this.setState({ accessToken: null });
  })
  .catch(error => {
      console.log('Log out cancelled');
  }); 

  const getDataUsingPost = (inf) => {
    console.log(inf);
    //POST json
    var dataToSend = inf;
    //var dataToSend = {date: '2020-10-22', time: '12-15-00', temp: 20, userid: 1, isid: '5f8bdbea7119bc007641a5c4'};
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    console.log(formBody);
    //POST request
    fetch('https://snapit-api.herokuapp.com/api/setlog', {
      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        'Content-Type': 
          'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
      alert(JSON.stringify(responseJson));
      console.log(responseJson);
    })
    //If response is not in json then in error
    .catch((error) => {
      alert(JSON.stringify(error));
      console.error(error);
    });
  };

  const test=(x) =>{
    setTemp(x)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content3}>
        <TouchableOpacity  onPress={()=>{alert("you clicked me")}}>
          <Image style= {styles.image} source ={require('../icon.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.content1}>
        <Text style={{fontSize: 30, color: 'grey'}}>Hi</Text>
        <Text style={{fontSize: 30, color: 'grey'}}>{username}</Text> 
      </View>
      <View style={styles.content2}>
        <Formik
          style={styles.container}
          initialValues={{date: '', time: '', userid:'', isid:'', temp: ''}}
          onSubmit={(values) => {
            values.date = currentDate;
            values.time = currentTime;
            values.userid = userid;
            values.isid = isid;
            values.temp = temp;
            console.log(values);
            getDataUsingPost(values);
          }}>
          {({handleChange, handleSubmit, values}) => (
            <View>
              <TextInput
                style={[styles.loginTextInput]}
                placeholder="Enter temperature here"
                onChangeText={handleChange('temp')}
                value={values.temp}
                keyboardType='numeric'
              />
              <Button title="submit " color="#1C86EE" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
      <View style={styles.content1}>
        <Nfc setTemp={test}/>
      </View>
      <View style={styles.riskLevel}>
        <Text style={{color:'grey',fontSize:20, marginTop:30}}>Risk Level</Text>
        <View style={styles.progressBar}>
            <Animated.View style={[styles.absoluteFill], {backgroundColor: "lightgrey", width: 75}}/>
        </View>
        <View style={{flexDirection:'row', width: 150, justifyContent:'space-between'}}> 
          <View style={[styles.oval,{backgroundColor:'lightgreen'}]}></View>
          <View style={[styles.oval,{backgroundColor:'yellow'}]}></View>
          <View style={[styles.oval,{backgroundColor:'orange'}]}></View>
          <View style={[styles.oval,{backgroundColor:'red'}]}></View>
        </View>
      </View>
      <View style={styles.content4}>
        <Text style={{flex:2.5,fontSize: 15,color:'grey'}} onPress={()=>alert("help pressed")}> help </Text>
        <Text style={{flex:1, fontSize: 15,color:'grey'}} onPress={()=>alert("pivacy pressed")}> privacy policy </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    fontSize: 18,
    borderRadius:6,
  },
  /* container: {
    flex: 1,
    flexDirection: 'column',
    zIndex: 2,
    position: 'absolute',
    width: '100%',
    height: '100%'
  }, */
  button: {
    width: 120,
    height: 10,
    backgroundColor: 'dodgerblue',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  loginText: {
    color: 'blue',
    fontSize: 15,
    marginLeft: 10,
  },
  loginTextInput: {
    flexDirection: 'column',
    fontSize: 18,
    color: 'red',
    marginLeft: 10,
    textAlign: 'center'
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 800,
    margin: 8,
    alignContent: 'center',
  },
  content1: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  content2: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  content3: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    alignSelf: 'flex-end'
  },
  content4: {
    flex: 1,
    flexDirection: 'row',
    alignContent:'flex-end'
  },
  image:{
    width: 50,
    height: 50,
  },
  riskLevel: {
    flex:2,
    alignItems:'center',
  },
  oval: {
      width: 20,
      height: 15,
      borderRadius: 5,
      transform: [
      {scaleX: 2}
      ]
  },
  progressBar: {
      flexDirection:'row',
      height: 10,
      width: 170,
      backgroundColor: 'white',
      borderColor: '#000',
      borderRadius: 10,
      marginBottom: 5,
  },
  absoluteFill: {
      position:'absolute',
      top:0,
      left:0,
      right:0,
      bottom:1
  },
  });