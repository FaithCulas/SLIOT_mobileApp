import React, {useState} from 'react';
import {StyleSheet,Text,View, Image, TextInput, TouchableNativeFeedback} from 'react-native';
import {CheckBox} from 'react-native-elements';

export default function RegisterScreen({navigation}) {

    const [isSelected, setSelection] = useState(false);
    const pressHandler1 = () => {
        navigation.navigate('Content')
      }

    return (
        <View style={styles.container}>

            <View style={styles.topContainer}>
            </View>
            <View style={styles.bottomContainer}>
            </View>

            <View style={styles.img}>
                <Image source={require("../assets/pup.jpg")} 
                    style={{flex:1,
                    width: 50,
                    height: 50,
                    zIndex:1}}/>
                <Text style={{color:'white', fontSize:15, margin:3}}>SNAP IT</Text>
            </View> 

            <View style={styles.roundedSquare}>
                
                <View style={{flex:1, flexDirection:'column', marginTop:15}}>
                    <Text style={styles.loginText}>email </Text>
                    <TextInput style={styles.loginTextInput}>name@example.com </TextInput>
                </View>

                <View style={{flex:1, flexDirection:'column'}}>
                    <Text style={styles.loginText}>First name </Text>
                    <TextInput style={styles.loginTextInput}>my name </TextInput>
                </View>

                <View style={{flex:1, flexDirection:'column'}}>
                    <Text style={styles.loginText}>Last name </Text>
                    <TextInput style={styles.loginTextInput}>last name </TextInput>
                </View>

                <View style={{flex:2.2, flexDirection:'column'}}>
                    <Text style={styles.loginText}>Address </Text>
                    <TextInput style={styles.loginTextInput}>line1 </TextInput>
                    <TextInput style={styles.loginTextInput}>line2 </TextInput>
                    <TextInput style={styles.loginTextInput}>line3 </TextInput>
                </View>

                <View style={{flex:1, flexDirection:'column'}}>
                    <Text style={styles.loginText}>Mobile </Text>
                    <TextInput style={styles.loginTextInput}>07x-xxxxxxx </TextInput>
                </View>

                <View style={{flex:1, flexDirection: "row", justifyContent:'center'}}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={{alignSelf: "center"}}
                    />
                    <Text style={{alignSelf:'center',color:'grey'}}>I agree to terms and conditions</Text>
                    {/* <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text> */}
                </View>
                
                <TouchableNativeFeedback onPress={()=>alert("u have registered")}>
                    <View style={[styles.buttonContainer, {marginBottom:10}]}>
                    <Text style={{color:'white',fontSize:18}}> sign up </Text>
                    </View>
                </TouchableNativeFeedback>

            </View> 

            <View style={styles.layer2bottom}>
                <View style={{flex:2,flexDirection:'column',justifyContent:'space-evenly'}}>
                    <Text style={{alignSelf:'center', fontSize: 15,color:'grey'}} > already have an account? </Text>
                    <TouchableNativeFeedback onPress={pressHandler1} >
                        <View style={[styles.buttonContainer]}>
                            <Text style={{color:'white',fontSize:18}}> sign in </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end'}}>
                    <Text style={{fontSize: 15,color:'grey'}} onPress={()=>alert("help pressed")}> help </Text>
                    <Text style={{fontSize: 15,color:'grey'}} onPress={()=>alert("pivacy pressed")}> privacy policy </Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        //justifyContent:'center'
      },
      topContainer:{
        flex:1,
        backgroundColor: 'dodgerblue',
        zIndex: 0
      },
      bottomContainer:{
        flex:1,
        backgroundColor: '#ffff',
        zIndex: 0
      },
      img: {
        flex:1,
        zIndex:1,
        position: 'absolute',
        marginLeft: 10,
        marginTop: 10,
        flexDirection:'row',
        //borderWidth:2,
        width: 120,
        height: 50, 
        alignItems:'center'
      },
      roundedSquare: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#ffff',
        width:350,
        height:420,
        top:100,
        borderRadius: 10,
        borderWidth: 2,
        alignSelf: 'center',
        zIndex :1,
        position:'absolute',
      },
      loginText: {
        color: 'blue',
        fontSize: 15,
        marginLeft:10
      },
      loginTextInput: {
        fontSize: 15,
        color:'grey',
        marginLeft:10
      },
      buttonContainer: {
        width:120, 
        height:30, 
        backgroundColor:'dodgerblue', 
        alignSelf:'center',
        justifyContent:'center', 
        alignItems:'center',
        borderRadius:100
      },
      layer2bottom: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#ffff',
        width:350,
        height:130,
        //borderWidth:2,
        top:530,
        alignSelf: 'center',
        zIndex :1,
        position:'absolute',
      }
})