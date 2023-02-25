import { View, FlatList, Text, Image, StyleSheet, Dimensions, Pressable } from "react-native";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds.js/"
import { AntDesign } from '@expo/vector-icons'; 
import { Themes } from "../assets/Themes";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

const windowWidth = Dimensions.get('window').width;

// const Stack = createStackNavigator();

const DawnFM = ({title, image, album, time, idx, artist, navigation, urls}) => {
    return (
        <View style={styles.songrow}>
            <Pressable
                onPress={() => navigation.navigate('PreviewScreen', urls)}>
                <AntDesign name="play" size={20} style={styles.playButton}/>
            </Pressable>
            <Pressable
                style={styles.songrow}
                onPress={() => navigation.navigate('DetailsScreen', urls)}>
                <Image style={styles.imagestyle} source={{ uri: image }}/>
                <View>
                    <Text numberOfLines={1} style={styles.title}>{title}</Text>
                    <Text numberOfLines={1} style={styles.greytext}>{artist}</Text>
                </View>
                <Text numberOfLines={1} style={styles.text}>{album}</Text>
                <Text style={styles.greytext}>{millisToMinutesAndSeconds(time)}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "flex-start",
        // alignItems: "flex-start",
    },
    playButton: {
        color: Themes.colors.spotify,
        marginRight: 5,
    },
    text: {
        color: "white",
        marginRight: 10,
        width: windowWidth * 0.27
        
    },
    title: {
        color: "white",
        marginRight: 10,
        width: windowWidth * 0.27
    },
    greytext: {
        color: "grey",
        marginRight: 20,
        width: windowWidth * 0.25
        
    },
    headerimage: {
        width: 20,
        height: 20,
    },
    songrow: {
        padding:5,
        marginLeft: 10,
        flex: 1,
        width: windowWidth,
        flexDirection: "row",
        alignItems : "center",
        justifyContent: "space-between",
        marginRight: 20,
        // width: 'windowWidth',
    },
    imagestyle:{
        width: 50,
        height:50,
        marginRight: 10,
    },
});

export default DawnFM;