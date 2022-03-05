import { View, Text, TextInput, StyleSheet, Dimensions, CheckBox, TouchableOpacity, Image } from 'react-native'
import deleteImg from '../assets/delete.png'
import React,{ useState } from 'react'

export default function TodoApp() {
    const dummiData=["meet katharina scitsch vangerskaya", "eat in rocky hotel", " meet manager", "test add in another",
    "meet katharina scitsch vangerskaya", "eat in rocky hotel", " meet manager", "test add in another",
    "meet katharina scitsch vangerskaya", "eat in rocky hotel", " meet manager", "test add in another",
    "meet katharina scitsch vangerskaya", "eat in rocky hotel", " meet manager", "test add in another",
    "meet katharina scitsch vangerskaya", "eat in rocky hotel", " meet manager", "test add in another",
                    "lorem ipsum dolor set amter shiki is the best anime ive ever seen lorem ipsum dolor set amter shiki is the best anime ive ever seen"]

    const handleEvent = indeks => {
        console.log(indeks);
    }

  return (
    <View style={styles.container}>
        <TextInput
            placeholder="Write a note .."
            style={styles.textInputLabel}
            multiline={true}
        />
        <View style={styles.dataCnt}>
            {
                dummiData.map( ( data, indeks ) =>{ 
                    const [isSelected, setSelection] = useState(false);
                    const [bg, setBg] = useState('white');
                    const [toggle, setToggle]=useState(true)
                    data.length>29 ? data=data.slice(0,29)+'...' : data;

                    const handleClick = () => {
                        toggle ? setBg('blue') : setBg('white');
                        handleEvent(indeks)
                        setToggle(prev=> !prev);
                    }

                    return(
                        <View key={indeks} style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8, backgroundColor: bg}}>
                            <View style={{flexDirection: 'row', alignItems: 'center',marginVertical: 10}}>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={styles.checkbox}
                                    tintColors={{ true: 'black', false: 'white' }}
                                />
                                <Text onPress={handleClick} style={styles.textRadio}>{data}</Text>
                            </View>
                            <Image style={styles.delImg} source={deleteImg}/>
                        </View>
                ) } )
            }
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
            <TouchableOpacity style={styles.addBtn}>
                <Text style={styles.textAddBtn}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.delBtn}>
                <Text style={styles.textDelBtn}>Update</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    textInputLabel:{
      color: '#5c4605',
      out: 'none',
      height: 190,
      backgroundColor: '#F9F5E9',
      marginTop: 10,
      marginBottom: 20,
      fontSize: '1rem',
      fontWeight: 850,
      outlineWidth: 0,
      paddingHorizontal: 20,
      paddingVertical: 20,
      borderRadius: 8
    },
    dataCnt: {
        height: 356,
        overflow: 'scroll'
    },
    textRadio: {
        color: "gray",
        fontSize: "1rem",
        marginLeft: 10,
        fontWeight: 800
    }, 
    addLabel: {
        fontSize: 29,
        fontWeight:850
    },
    checkbox: {
        alignSelf: "center",
        height: 20,
        width: 20
    },  
    addBtn: {
        backgroundColor:"#d5dfe8",
        paddingVertical: 10,
        width: "49%",
        textAlign: 'center',
        color: '#5c4605',
        fontWeight: 850,
        borderRadius: 8,
    },
    delBtn: {
        backgroundColor:"#cee2f5",
        paddingVertical: 10,
        width: "49%",
        textAlign: 'center',
        fontWeight: 850,
        borderRadius: 8,
    },
    textAddBtn: {
        color: "gray",
        fontSize: "1rem",
        fontWeight: 850,
    },  
    textDelBtn: {
        color: "#389afc",
        fontSize: "1rem",
        fontWeight: 850,
    },  
    delImg: {
        height: 40,
        width: 40,
    },  
    container:{
        paddingHorizontal: 22,
        // height: 500,
        overflow: 'scroll'
        // width: Dimensions.get('window').width - 2,
    }
});