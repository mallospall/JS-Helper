import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const ProfStack = createNativeStackNavigator();

function ProfleNav() {
    return (
        <ProfStack.Navigator>
            <ProfStack.Screen />
        </ProfStack.Navigator>

    );
}

export default ProfleNav;