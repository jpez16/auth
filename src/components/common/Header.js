import React from 'react'
import { Text, View } from 'react-native'

const Header = (props) => {

    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.children}</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        //centre an item in a container
        justifyContent: 'center',
        alignItems: 'center',
        //container size
        height: 60,
        paddingTop: 15,
        //shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        //guessing what goes on top of what
        elevation: 2,
        position: 'relative'
    },
    textStyle:{
        fontSize: 25
    }
}

export { Header };
