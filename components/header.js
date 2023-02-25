import { View, FlatList, Text, Image, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Image style={styles.headerimage} source={require('../assets/spotify-logo.png')}/>
            <Text style={styles.title}>My Top Tracks</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        // padding: 40,
        marginTop: 5,

    },
    title: {
        fontFamily: "Sydney-Bold",
        fontSize: 25,
        // paddingBottom: 20,
        color: "white",
        marginLeft: 20,
        // justifyContent: "center",
        // alignItems: "center",
        // marginTop: 27,
        // alignItems: "center",
    },
    headerimage: {
        width: 30,
        height: 30,
        // justifyContent: "center",
        marginTop: 2,
        // alignItems: "center",
    },
});

export default Header;