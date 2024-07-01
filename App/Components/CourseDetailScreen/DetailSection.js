import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import OptionItem from './OptionItem'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function DetailSection({course}) {
  return (
    <View style={{padding:10,borderRadius:15,
    backgroundColor:Colors.WHITE}}>
      <Image source={{uri:course?.banner?.url}}
      style={{width:Dimensions.get('screen').width*0.85, height:190,
        borderRadius:15
      }}/>
      <View style={{padding:0}}>
      <Text style={{fontSize:22, fontFamily:'outfit-medium',
        marginTop:10
      }}>{course.name}</Text>
      <View>
        <View style={styles.rowStyle}>
        <OptionItem icon={'book-outline'} value={course.chapters?.length+" Chapitres"} />
        <OptionItem icon={'time-outline'} value={course.time} />
        </View>
        <View style={styles.rowStyle}>
        <OptionItem icon={'person-circle-outline'} value={course?.author} />
        <OptionItem icon={'cellular-outline'} value={course.level} />
        </View>
      </View>
      <View>
        <Text style={{fontFamily:'outfit-medium',
            fontSize:20
        }}>Description</Text>
        <Text style={{fontFamily:'outfit',color:Colors.BLACK,
            lineHeight:23
        }}>{course?.description?.markdown}</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',gap:10,justifyContent:'space-evenly'}}>
        <TouchableOpacity style={{padding:15,backgroundColor:Colors.PRIMARY,
            borderRadius:15
        }}>
            <Text style={{fontFamily:'outfit',
                color:Colors.WHITE,textAlign:'center',fontSize:17
            }}>Enroll for free</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding:15,backgroundColor:Colors.SECONDARY,
            borderRadius:15
        }}>
            <Text style={{fontFamily:'outfit',
                color:Colors.WHITE,textAlign:'center',fontSize:17
            }}>Membership $2.99/Month</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  ) 
}

const styles = StyleSheet.create({
    rowStyle:{
        display:"flex",
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,
        
    }
})