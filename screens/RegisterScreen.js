import React, {useState} from 'react';
import {StyleSheet,Text,View, Image, TextInput, TouchableNativeFeedback} from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function RegisterScreen({navigation}) {

    const [isChecked] = useState(false);
    const pressHandler1 = () => {
        navigation.navigate('Content')
      }

    return (
        <View style={styles.container}>

            <View style={styles.topContainer}>
            </View>
            <View style={styles.bottomContainer}>
            </View>

            <View style={styles.frontContainer}>
                <View style={styles.img}>
                    <Image source={require("../assets/pup.jpg")}  style={{width: 50, height: 50, margin:5}}/>
                    <Text style={{color:'white', fontSize:15, top:20}}>SNAP IT</Text>
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
                            onIconPress={()=>alert('checkbox clicked')}
                            checked={isChecked}
                            style={{alignSelf: "center"}}
                        />
                        <Text style={{alignSelf:'center',color:'grey'}}>I agree to terms and conditions</Text>
                    </View>
                    {/* <Text>Is CheckBox selected: {isChecked ? "👍" : "👎"}</Text> */}

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
                    <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end', marginBottom:10}}>
                        <Text style={{fontSize: 15,color:'grey'}} onPress={()=>alert("help pressed")}> help </Text>
                        <Text style={{fontSize: 15,color:'grey'}} onPress={()=>alert("pivacy pressed")}> privacy policy </Text>
                    </View>
                </View>
            </View>

            

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column'
      },
      topContainer:{
        flex:1,
        backgroundColor: 'dodgerblue',
        zIndex: 1
      },
      bottomContainer:{
        flex:1,
        backgroundColor: '#ffff',
        zIndex: 1
      },
      frontContainer: {
        flex:1,
        flexDirection:'column',
        zIndex:2,
        position:'absolute',
        width:'100%',
        height:'100%'
      },
      img: {
        flex:1,
        flexDirection:'row',
        //borderWidth:2, 
        alignItems:'flex-start'
      },
      roundedSquare: {
        flex:5,
        flexDirection: 'column',
        backgroundColor: '#ffff',
        width:'90%',
        borderRadius: 10,
        borderWidth: 2,
        alignSelf: 'center'
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
        flex:1.5,
        flexDirection: 'column',
        backgroundColor: '#ffff',
        width:'90%',
        //borderWidth:2,
        alignSelf: 'center'
      }
})