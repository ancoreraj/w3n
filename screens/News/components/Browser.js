import React, { useState } from 'react'
import { Alert } from 'react-native'
import { WebView } from 'react-native-webview';
import * as Progress from 'react-native-progress';

const Browser = (props) => {
    const uri = props.route.params.uri
    const [progress, setProgress] = useState(0);
    const [isLoaded, setLoaded] = useState(false);

    return (
        <View>
            {
                !isLoaded ?
                    <Progress.Bar
                        progress={progress}
                        width={null}
                        // borderWidth={0}
                        // borderRadius={0}
                        color='orange'
                    /> : null
            }
            <WebView
                
                source={{ uri }}
                onError={(event) => Alert.alert(`WebView Error`)}
                onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
                onLoadEnd={() => setLoaded(true)}
            />
        </View>
    )
}

export default Browser
