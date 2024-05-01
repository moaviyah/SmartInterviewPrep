import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { PRIMARY } from '../color';
const windowHeight = Dimensions.get('window').height;
const windowWIdth = Dimensions.get('window').width;
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/analysis.png')} style={{height:48, width:48}}/>
                <Text style={styles.logoText}>Jobs</Text>
            </View>
            <View style={styles.middleHeader}>
                <TouchableOpacity>
                    <Text style={{fontWeight:'800'}}>
                        Upload Resume
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btns}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, {backgroundColor:PRIMARY, marginLeft:20}]}>
                    <Text style={[styles.btnTxt, {color:'white'}]}>
                        Create Account
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.hero}>
            <View>
                <Image source={require('../assets/text.png')} style={{height:windowHeight*0.18, width:windowHeight*0.5}}/>
            </View>
        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingHorizontal:windowWIdth*0.05,
        paddingVertical:windowHeight*0.03
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    logoContainer:{
        flexDirection:'row',
        alignSelf:'center'
    },
    logoText:{
        fontWeight:'bold',
        fontSize:22,
        alignSelf:'center',
        marginLeft:15
    },
    btns:{
        flexDirection:'row'
    },
    btn:{
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:'black'
    },
    btnTxt:{
        color:'black',
        fontWeight:'bold'
    },
    middleHeader:{
        flex:1,
        alignItems:'flex-end',
        paddingHorizontal:windowWIdth*0.05
    },
    hero:{
        flexDirection:'row',
        marginTop:windowHeight*0.05
    }
})