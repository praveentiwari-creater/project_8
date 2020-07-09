
import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
export default class Radio_Button extends React.Component{
fun=()=>{
    this.props.navigation.goBack("Test");
}

constructor(props){
    super(props);
    this.state = {
      radioSelected:0
    }
  }


  radioClick(id) {
    this.setState({
      radioSelected: id
      
    })
    console.log("radio selection",id);
  }

  render()
  {
    const products = [
        {
        id: 1,
        name:'Are you male'
      },
      {
        id: 2,
        name:'Are you female'
      },
      {
        id: 3,
        name:'Have you job'
      }
    ];
    //const val;
    return(
        
      products.map((val) => {
         
     return (
         <View style={{flex:1}}>
         <View style={{flex:3,flexDirection:'row'}}>
             
        
             
          <TouchableOpacity key={val.id} onPress={this.radioClick.bind(this, val.id)}>
            <View style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              borderWidth: 2,
              borderColor: '#000',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {
                val.id == this.state.radioSelected ?
                  <View style={{
                    height: 18,
                    width: 18,
                    borderRadius: 9,
                    backgroundColor: '#000',
                  }} />
                  : null
              }
            </View>
           
          </TouchableOpacity>
           
          <View>
             <Text style={{fontSize:20,paddingLeft:20}}>{val.name}</Text>
             </View>
          </View>
          <View style={{flex:7}}>

          </View>
          
          </View>
     )
     
    })
     
    );
  }
}


// import React from 'react';
// import { View, Text, Image, Button, TouchableOpacity, FlatList, SafeAreaView, StyleSheet,Alert } from 'react-native';
// import Test2 from './Radio_Button';
// export default class All_Api_Axios extends React.Component {
// constructor(){
//     super();
//     this.state={
//         show1:false,
       
//     }
// }
//     fun = () => {
//         this.props.navigation.openDrawer("drawer");
//     }

//     // renderSeparator = () => {  
//     //     return (  
//     //         <View  
//     //             style={{  
//     //                 height: 1,  
//     //                 width: "100%",  
//     //                 backgroundColor: "#000",  
//     //             }}  
//     //         />   
//     //     );  
//     // };  
//     //handling onPress action  
//     // getListViewItem = (item) => {  
//     //     Alert.alert(item.key);  
//     // }  

//     user1=()=>{
//         this.setState({
//             show1:true
//         })
//     }
//     user2=()=>{
//         this.setState({
//             show1:false
//         })
//     }
   
//     test1=()=>{
//         return(
//             <TouchableOpacity onPress={this.user1} style={{
//                 width: 30, height: 30, borderWidth: 2, borderColor: 'black',
//                 borderRadius: 15, margin: 10, backgroundColor: 'white'
//             }}>
//             </TouchableOpacity>
//         )
//     }
//     test2=()=>{
//         return(
//             <TouchableOpacity onPress={this.user2} style={{
//                 width: 30, height: 30, borderWidth: 2, borderColor: 'black',
//                 borderRadius: 15, margin: 10, backgroundColor: 'black'
//             }}>
//             </TouchableOpacity>
//         )
//     }


//     render() {
//         //const radio = [{ id: "Name" }, { id: "FName" }, { id: "MName" }, { id: "Age" }, { id: "Address" }];
//         return (
//             <View style={{flex:1}}>
//                 <View style={{flex:1}} >
//                     <TouchableOpacity onPress={this.fun} style={{ backgroundColor: 'blue', width: 70, height: 35 }}>
//                         <Text style={{ fontSize: 25, color: 'red' }}>
//                             Open
//                   </Text>
//                     </TouchableOpacity>
//                 </View >
//                 <View style={{flex:9,flexDirection:'row'}}>  

//                 <FlatList  
//                     data={[  
//                         {text:1,key: 'Are you male'},{text:2,key: 'Are you female'}, {text:3,key: 'Are you 20 years old'} ]}  
//                     renderItem={({item, index}) =>
//                     <Text style={{fontSize:30,paddingTop:30}}>
//                         {this.state.show1==false ? this.test1():this.test2()}
//                         {item.key}{index.key} </Text>}  
//                     // ItemSeparatorComponent={this.renderSeparator}  
//                 />  
//             </View>  
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({  
//     // container: {  
//     //     flex: 1,  
//     // },  
//     item: {  
//         marginTop: 150,  
//         fontSize: 18,  
//         height: 44,  
//     },  
// })  