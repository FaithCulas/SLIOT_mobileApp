import React, {useState} from 'react';
import {StyleSheet,Text,View, Image, TextInput, TouchableNativeFeedback, Button, SafeAreaView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';

export default function RegisterScreen({navigation}) {

    const pressHandler1 = () => {
        navigation.navigate('Content')
      }

    const [isSelected, setSelection] = useState(false);

    // const getDataUsingGet = () => {
    //   //GET request
    //   fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //     method: 'GET',
    //     //Request Type
    //   })
    //     .then((response) => response.json())
    //     //If response is in json then in success
    //     .then((responseJson) => {
    //       //Success
    //       alert(JSON.stringify(responseJson));
    //       console.log(responseJson);
    //     })
    //     //If response is not in json then in error
    //     .catch((error) => {
    //       //Error
    //       alert(JSON.stringify(error));
    //       console.error(error);
    //     });
    // };
  
    const getDataUsingPost = (inf) => {
      console.log(inf);
      //POST json
      //var dataToSend = inf;
      var dataToSend = {date: '2020-10-22', time: '12-15-00', temp: 20, userid: 1, isid: '5f8bdbea7119bc007641a5c4'};
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
  

    return (
        // <View style={styles.container}>

        //     <View style={styles.topContainer}>
        //     </View>
        //     <View style={styles.bottomContainer}>
        //     </View>

        //     <View style={styles.frontContainer}>
        //         <View style={styles.img}>
        //             <Image source={require("../pup.jpg")}  style={{width: 50, height: 50, margin:5}}/>
        //             <Text style={{color:'white', fontSize:15, top:20}}>SNAP IT</Text>
        //         </View> 

        //         <View style={styles.roundedSquare}>
                    
        //             <View style={{flex:0.8, flexDirection:'column', marginTop:15}}>
        //                 <Text style={styles.loginText}> email </Text>
        //                 <TextInput style={styles.loginTextInput} placeholder='name@example.com' placeholderTextColor='grey'></TextInput>
        //             </View>

        //             <View style={{flex:0.8, flexDirection:'column'}}>
        //                 <Text style={styles.loginText}> First name </Text>
        //                 <TextInput style={styles.loginTextInput} placeholder='my name' placeholderTextColor='grey'></TextInput>
        //             </View>

        //             <View style={{flex:0.8, flexDirection:'column'}}>
        //                 <Text style={styles.loginText}> Last name </Text>
        //                 <TextInput style={styles.loginTextInput} placeholder='last name' placeholderTextColor='grey'></TextInput>
        //             </View>

        //             <View style={{flex:1.8, flexDirection:'column'}}>
        //                 <Text style={styles.loginText}> Address </Text>
        //                 <TextInput style={styles.loginTextInput} placeholder='line1' placeholderTextColor='grey'></TextInput>
        //                 <TextInput style={styles.loginTextInput} placeholder='line2' placeholderTextColor='grey'></TextInput>
        //                 <TextInput style={styles.loginTextInput} placeholder='line3' placeholderTextColor='grey'></TextInput>
        //             </View>

        //             <View style={{flex:0.8, flexDirection:'column'}}>
        //                 <Text style={styles.loginText}> Mobile </Text>
        //                 <TextInput style={styles.loginTextInput} placeholder='07x-xxxxxxx' placeholderTextColor='grey'></TextInput>
        //             </View>

        //             <View style={{flex:0.5, flexDirection: "row", justifyContent:'center'}}>
        //                <CheckBox
        //                   value={isSelected}
        //                   onValueChange={setSelection}
        //                 />
        //                 {/* <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text> */}
        //                 <Text style={{alignSelf:'center',color:'grey'}}>I agree to terms and conditions</Text>
        //             </View>

        //             <TouchableNativeFeedback onPress={()=>alert("u have registered")}>
        //                 <View style={[styles.buttonContainer, {marginBottom:10}]}>
        //                 <Text style={{color:'white',fontSize:18}}> sign up </Text>
        //                 </View>
        //             </TouchableNativeFeedback>

        //         </View> 

        //         <View style={styles.layer2bottom}>
        //             <View style={{flex:2,flexDirection:'column',justifyContent:'space-evenly'}}>
        //                 <Text style={{alignSelf:'center', fontSize: 15,color:'grey'}} > already have an account? </Text>
        //                 <TouchableNativeFeedback onPress={pressHandler1} >
        //                     <View style={[styles.buttonContainer]}>
        //                         <Text style={{color:'white',fontSize:18}}> sign in </Text>
        //                     </View>
        //                 </TouchableNativeFeedback>
        //             </View>
        //             <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end', marginBottom:10}}>
        //                 <Text style={{fontSize: 15,color:'grey'}} onPress={()=>alert("help pressed")}> help </Text>
        //                 <Text style={{fontSize: 15,color:'grey'}} onPress={()=>alert("pivacy pressed")}> privacy policy </Text>
        //             </View>
        //         </View>
        //     </View>

            

        // </View>
        <SafeAreaView>
          <Formik
            initialValues={{date: '', time: '', userid:'', isid:'',temp: ''}}
            onSubmit={(values) => {
              getDataUsingPost(values);
              //console.log(values);              
            }}>
            {({handleChange, handleSubmit, values}) => (
              <View>
                <TextInput
                  style={styles.loginTextInput}
                  placeholder="date"
                  onChangeText={handleChange('date')}
                  value={values.date}
                />
                <TextInput
                  style={styles.loginTextInput}
                  placeholder="time"
                  onChangeText={handleChange('time')}
                  value={values.time}
                />
                <TextInput
                  style={styles.loginTextInput}
                  placeholder="user id"
                  onChangeText={handleChange('userid')}
                  value={values.userid}
                />
                <TextInput
                  style={styles.loginTextInput}
                  placeholder="institutional id"
                  onChangeText={handleChange('isid')}
                  value={values.isid}
                />
                <TextInput
                  style={styles.loginTextInput}
                  placeholder="temperature "
                  onChangeText={handleChange('temp')}
                  value={values.temp}
                  keyboardType='numeric'
                />
                <Button title="submit " color="maroon" onPress={handleSubmit} />
              </View>
            )}
          </Formik>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     flexDirection:'column'
    //   },
    //   topContainer:{
    //     flex:1,
    //     backgroundColor: 'dodgerblue',
    //     zIndex: 1
    //   },
    //   bottomContainer:{
    //     flex:1,
    //     backgroundColor: '#ffff',
    //     zIndex: 1
    //   },
    //   frontContainer: {
    //     flex:1,
    //     flexDirection:'column',
    //     zIndex:2,
    //     position:'absolute',
    //     width:'100%',
    //     height:'100%'
    //   },
    //   img: {
    //     flex:1,
    //     flexDirection:'row',
    //     //borderWidth:2, 
    //     alignItems:'flex-start'
    //   },
    //   roundedSquare: {
    //     flex:5,
    //     flexDirection: 'column',
    //     backgroundColor: '#ffff',
    //     width:'90%',
    //     borderRadius: 10,
    //     alignSelf: 'center',
    //     elevation:5
    //   },
    //   loginText: {
    //     color: 'blue',
    //     fontSize: 15,
    //     marginLeft:10,
    //     flex:1
    //   },
    //   loginTextInput: {
    //     fontSize: 15,
    //     color:'grey',
    //     marginLeft:10,
    //     flex:1,
    //     borderWidth:2
    //   },
    //   buttonContainer: {
    //     width:120, 
    //     height:30, 
    //     backgroundColor:'dodgerblue', 
    //     alignSelf:'center',
    //     justifyContent:'center', 
    //     alignItems:'center',
    //     borderRadius:100
    //   },
    //   layer2bottom: {
    //     flex:1.5,
    //     flexDirection: 'column',
    //     backgroundColor: '#ffff',
    //     width:'90%',
    //     //borderWidth:2,
    //     alignSelf: 'center'
    //   }
    input: {
      borderWidth: 1,
      borderColor: 'blue',
      padding: 10,
      fontSize: 18,
      borderRadius:6,
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      zIndex: 2,
      position: 'absolute',
      width: '100%',
      height: '100%'
    },
    button: {
      width: 120,
      height: 30,
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
      fontSize: 15,
      color: 'grey',
      marginLeft: 10,
    },
  });