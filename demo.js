import React from 'react';
import { View } from 'react-native';
import AppText from './AppText';

const styles = {
    container: {
        flex: 1,
    },
    text: {
        fontSize: 18,
        color: 'red',
    },
};

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AppText
                    style={[styles.text, {
                        fontFamily: 'SonglcyFont',
                        fontStyle: 'italic',
                    }]}
                >
                    Merriweather Italics
                </AppText>
                <AppText
                    style={[styles.text, {
                        fontFamily: 'SonglcyFont',
                        fontWeight: 'bold',
                    }]}
                >
                    Merriweather Bold
                </AppText>
            </View>
        );
    }
}

export default App;