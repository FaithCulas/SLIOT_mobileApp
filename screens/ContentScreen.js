import React from 'react';
import {Text,View, Image, StyleSheet, Animated, TouchableNativeFeedback} from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper';

export default function ContentScreen() {
    const user = 'Rozan';
    const progressValue = 75;

    return (
        <View style={{flex:1,flexDirection:'column',backgroundColor:'white'}}>
            <View style={{flex:1, alignSelf:'flex-end'}}>
                <Image source={require("../assets/pup.jpg")} 
                    style={{width: 50, height: 50, margin:5}}/>
            </View>
            <View style={{flex:2,flexDirection:'column', alignItems:'center'}}>
                <Text style={{fontSize:30, color:'grey'}}>Hi!</Text>
                <Text style={{fontSize:30, color:'grey'}}>{user}</Text>
            </View>
            <View style={{flex:3, justifyContent:'center'}}>
                <TouchableNativeFeedback onPress={()=>alert("register clicked")}>
                    <View style={styles.registerCircle} >
                        <Text style={{fontSize:30, alignSelf:'center', color:'white'}}>Register</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={styles.riskLevel}>
                <Text style={{color:'grey',fontSize:30, marginTop:30}}>Risk Level</Text>
                <View style={styles.progressBar}>
                    <Animated.View style={[styles.absoluteFill], {backgroundColor: "lightgrey", width: progressValue}}/>
                </View>
                <View style={{flexDirection:'row'}}> 
                    <View style={[styles.oval,{backgroundColor:'lightgreen'}]}></View>
                    <View style={[styles.oval,{backgroundColor:'yellow'}]}></View>
                    <View style={[styles.oval,{backgroundColor:'orange'}]}></View>
                    <View style={[styles.oval,{backgroundColor:'red'}]}></View>
                </View>
            </View>
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:1, flexDirection:'row'}}>
                    <Image source={require("../pup.jpg")} 
                        style={{flex:1, height: 50, alignSelf:'center',margin:5}}/>
                    <Text style={{flex:2, color:'blue', fontSize:20, alignSelf:'center'}}>SNAP IT</Text>
                </View>
                <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', alignItems:'center', margin:5}}>
                    <Text style={{fontSize: 15,color:'grey'}} onPress={()=>alert("help pressed")}> help </Text>
                    <Text style={{fontSize: 15,color:'grey'}} onPress={()=>alert("pivacy pressed")}> privacy policy </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    registerCircle: {
        width: 180,
        height: 180,
        borderRadius: 180/2,
        backgroundColor: 'blue',
        alignSelf:'center', 
        justifyContent:'center'

    },
    riskLevel: {
        flex:3,
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    oval: {
        width: 20,
        height: 20,
        borderRadius: 7,
        transform: [
        {scaleX: 2}
        ]
    },
    progressBar: {
        flexDirection:'row',
        height: 10,
        width: 200,
        backgroundColor: 'white',
        borderColor: '#000',
        borderRadius: 5
    },
    absoluteFill: {
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0

    }
})