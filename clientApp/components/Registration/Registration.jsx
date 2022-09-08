import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Registration({navigation}) {
    return (
        <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Homescreen')}>
        <Text>
            NAV
        </Text>
        </TouchableOpacity>
    </View>
    );
}

export default Registration;