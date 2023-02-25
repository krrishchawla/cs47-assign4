import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import React from "react";
import { WebView } from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;

const DetailsScreen = ({route}) => {
    // const { item } = route.params;
    // console.log("BIRD", route.params.previewUrl);
    const url = route.params.externalUrl.toString();
    // console.log("URL", url);
    return (
        <WebView source={{ uri: url }} style={{width : windowWidth}}/>
        
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({});