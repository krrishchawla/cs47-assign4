import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { WebView } from 'react-native-webview';

const PreviewScreen = ({route}) => {
    // const { item } = route.params;
    // console.log("BIRD", route.params.previewUrl);
    const url = route.params.previewUrl.toString();
    // console.log("URL", url);
    return (
        <WebView source={{ uri: url }}/>
    );
};

export default PreviewScreen;

const styles = StyleSheet.create({});