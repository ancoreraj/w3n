import React, { useState } from 'react'
import { Alert } from 'react-native'
import { WebView } from 'react-native-webview';
import { ProgressBar, Colors } from 'react-native-paper';

const Browser = (props) => {
    const [progress, setProgress] = useState(0);
    const [isLoaded, setLoaded] = useState(false);

    return (
        <>
            {
                !isLoaded ? <ProgressBar progress={progress} color={Colors.blue800} /> : null
            }
            <WebView
                style={{ backgroundColor: '#171e1f' }}
                source={{ uri: props.route.params.uri }}
                onError={(event) => Alert.alert(`WebView Error`)}
                onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
                onLoadEnd={() => setLoaded(true)}
            />
        </>
    )
}

export default Browser
