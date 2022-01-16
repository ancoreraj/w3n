import React, { useState, useRef, useEffect } from 'react'
import { Alert, StatusBar, View, BackHandler } from 'react-native'
import { WebView } from 'react-native-webview';
import { ProgressBar, Colors } from 'react-native-paper';

const Browser = ({ navigation, route }) => {
    const [progress, setProgress] = useState(0)
    const [isLoaded, setLoaded] = useState(false)
    const webview = useRef(null);

    const onAndroidBackPress = () => {  
        let lengthOfCurrentURL = webview.current.startUrl.length
        let lengthOfOriginalURL = route.params.uri.length

        if(Math.abs(lengthOfCurrentURL - lengthOfOriginalURL) <= 2){
            navigation.pop()
            return true;
        }else{
            webview.current.goBack();
            return true;
        }
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
        };
    }, []);

    return (
        <>
            {
                !isLoaded ?
                    <View style={{ marginTop: StatusBar.currentHeight }}>
                        <ProgressBar progress={progress} color={Colors.blue800} />
                    </View>
                    : null
            }
            <WebView
                ref={webview}
                style={{
                    backgroundColor: '#171e1f', marginTop: isLoaded ? StatusBar.currentHeight : 0
                }}
                source={{ uri: route.params.uri }}
                onError={(event) => Alert.alert(`WebView Error`)}
                onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
                onLoadEnd={() => setLoaded(true)}
            />
        </>
    )
}

export default Browser
