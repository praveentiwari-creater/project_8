
import React from 'react';
import { 
    View, Text, Button, TextInput, StyleSheet,
    TouchableOpacity,ScrollView,Alert } from 'react-native';
import Test2 from './Radio_Button';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
export default class All_Api_Axios extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            user_name: '',
            password: '',
            email: '',
            mobile_number: '',

            mailValidate: false,

            // NAME:'',
            // USER_NAME:'',
            // EMAIL:'',
            // MOBILE_NUMBER:''


        };
    }
    fun = () => {
        this.props.navigation.openDrawer("drawer");
    }

sinup=()=>{
    let data = {
        name: this.state.name,
        email: this.state.email,
        username: this.state.user_name,
        mobile: this.state.mobile_number,
        password: this.state.password
    }
axios({
    method:'POST',
    url:"https://tecorbfirst.herokuapp.com/api/signup",
    headers: {
        "Content-Type": "application/json"
    },
     data
}).then( (response) => {
    console.log("signup response",response)
    console.log("signup response",response.data.obj.token)
   
   
}).catch((error) => {
    console.log("!!!!!!!!!!!!!ERROR!!!!!!!!!!!\n")
    console.log(error);
});
}

login=()=>{
    let data = {
        username: this.state.user_name,
        password: this.state.password
    }
    console.log('api data', data);
    axios({
        method: 'POST',
        url: "https://tecorbfirst.herokuapp.com/api/login",
        headers: {
            "Content-Type": "application/json"
        },
        data
    }).then(async(response1) => {

            //console.log("user token checking", response.data.Userdetail._id);
            console.log("login",response1);
            console.log("login",response1.data.code);
            if(response1.data.code==200){
            Alert.alert("successfull");
            }
            if (response1.data.code == 200) {
                await AsyncStorage.setItem('token', response1.data.Userdetail.Token);
               
            }

            // let token1 = await AsyncStorage.getItem('token');
            // console.log("get token",token1);
            // if (response.data.code == 200) {
            //     await AsyncStorage.setItem('token', response.data.Userdetail.Token);
            //     this.props.navigation.navigate("Home_Drawer");
            // }

        }).catch((error) => {
            alert("Login Failed")
            console.log(error);
        });
}

 Aupdate_Profile= async()=>{
   
        let token2 = await AsyncStorage.getItem('token');
        console.log("token new", token2);
    
        // const formData = new FormData();
        // formData.append("name", "pchghg");
        // formData.append("image", {
        //   uri: this.state.avatarSource.uri,
        //   // minType :'image/jpeg',
        //   type: this.state.avatarSource.type,
        //   // type:'image/jpg',
        //   name: this.state.avatarSource.fileName,
        // });
    
        let data = {
          name: this.state.Name,
          email: this.state.Email,
          username: this.state.User_Name,
        //   image: formData,
        }
        axios({
          method: 'POST',
          url: "https://tecorbfirst.herokuapp.com/api/updateuser",
          headers: {
            "Content-Type": "application/json",
            "tokenId": token2,
          },
          data
        })
          .then((response) => {
            console.log("post update api tecorb", response);
            this.setState({name: response.data.config.data.name })
            this.setState({ email: response.data.config.data.email })
            this.setState({  user_name: response.data.config.data.username })

            // this.setState({ MOBILE_NUMBER: response.data.config.data.mobile })
            //
            // this.setState({ avatarSource: response.data.config.data.image })
            //
            // console.log("post api tecorb", response);
          });
      

}

//  show_details  =async()=> {
//     let token1 = await AsyncStorage.getItem('token')
//     axios({
//       method: 'GET',
//       url: "https://tecorbfirst.herokuapp.com/api/getuserdetail",
//       headers: {
//         "Content-Type": "application/json",
//         "tokenId": token1,
//       },
//     })
//       .then((response) => {
//         this.setState({ NAME: response.data.Userdetail.name })
//         this.setState({ EMAIL: response.data.Userdetail.email })
//         this.setState({ USER_NAME: response.data.Userdetail.username })
//         this.setState({ MOBILE_NUMBER: response.data.Userdetail.mobile })

//         console.log("get api tecorb", response.data.Userdetail.name);
//         console.log("get api tecorb", response.data.Userdetail.email);
//         console.log("get api tecorb", response.data.Userdetail.username);
//         console.log("get api tecorb", response.data.Userdetail.mobile);
//         console.log("get api tecorb", response);


        

//       });
//   }

render() {
        return (
<ScrollView>
            <View style={{ flex: 1, margin: 1, padding:1 }}>

                <View style={{ flex: 8 }}>

                <TouchableOpacity onPress={this.fun} style={{ backgroundColor: 'blue', width: 70, height: 35 }}>
                        <Text style={{ fontSize: 25, color: 'red' }}>
                            Open
                  </Text>
                    </TouchableOpacity>
                    
                        <Text style={{ fontSize: 15, color: "red" ,paddingTop:20}}> Name</Text>
                        <TextInput  editable={true} onChangeText={(e) => this.cheackName}
                            maxLength={20} placeholder="Name"
                            onChangeText={name => this.setState({ name })}
                            // onChangeText={(name) => this.name = name}
                            style={{ borderWidth: 2, margin: 10, width: 200 }} value={this.state.NAME}  />
                   

                   
                        <Text style={{ fontSize: 15, color: "red" }}> Email</Text>
                        <TextInput editable={true} placeholder="Email" onChangeText={email => this.setState({ email })}
                            // value={this.state.email} 
                            style={[styles.mailStyle, !this.state.mailValidate ? styles.mailView : null]} 
                            value={this.state.EMAIL} />
                   
                    
                        <Text style={{ fontSize: 15, color: "red" }}> User_Name</Text>
                        <TextInput editable={true} onChangeText={(e) => this.cheackName}
                            maxLength={10} placeholder="User_Name"
                            onChangeText={user_name => this.setState({ user_name })}
                            style={{ borderWidth: 2, margin: 10, width: 200 }} value={this.state.USER_NAME} />
                   
                    
                        <Text style={{ fontSize: 15, color: "red" }}> Mobile_Number</Text>
                        <TextInput editable={true} onBlur={() => this.onBlur()} maxLength={10}
                            keyboardType={'numeric'} placeholder="Mobile_Number"
                            onChangeText={mobile_number => this.setState({ mobile_number })}
                            style={{ borderWidth: 2, margin: 10, width: 200 }} value={this.state.MOBILE_NUMBER} />
                    
                    
                        <Text style={{ fontSize: 15, color: "red" }}> Password</Text>
                        <TextInput placeholder="Password" secureTextEntry
                            onChangeText={password => this.setState({ password })}
                            style={{ borderWidth: 2, margin: 10, width: 200 }} />
                    
                </View>
                <View style={{ flex: 1 ,flexDirection:'row'}}>
                    
                        {/* <TouchableOpacity onPress={this.USER}><Text style={{ fontSize: 20, color: "green" }}>
                            I have already account..(Login Page) </Text></TouchableOpacity> */}
                    
                    <View style={{alignContent:'center',justifyContent:'center',height:10,width:70,margin:18}}>
                        <Button title="Sing" onPress={this.sinup} />
                    </View>
                    <View style={{alignContent:'center',justifyContent:'center',height:10,width:70,margin:18}}>
                        <Button title="Login" onPress={this.login} />
                    </View>
                    {/* <View style={{alignContent:'center',justifyContent:'center',height:10,width:150,margin:18}}>
                        <Button title="Show Details" onPress={this.show_details} />
                    </View> */}

                </View>
                <View style={{ flex: 1 ,flexDirection:'row'}}>
                <View style={{alignContent:'center',justifyContent:'center',height:10,width:150,margin:18}}>
                        <Button title="Update Profile" onPress={this.Aupdate_Profile} />
                    </View>
                    <View style={{alignContent:'center',justifyContent:'center',height:10,width:150,margin:18}}>
                        <Button title="Change Password" onPress={this.sinup} />
                    </View>
                </View>

            </View>
            </ScrollView>
        );
    }
    onBlur() {
        this.setState({
            backgroundColor: 'green'
        })
    }
}
const styles = StyleSheet.create({
    butt: {
        alignItems: "center",
        margin: 10,
        height: 10,
        width: 70,
    },
    mailView: {
        borderColor: 'red',
        borderWidth: 2
    },
    mailStyle: {
        borderWidth: 2,
        margin: 10,
        width: 200
    }
});

  