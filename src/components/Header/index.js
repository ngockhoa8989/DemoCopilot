import React, { PureComponent } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'native-base';

export default class extends PureComponent {

    render() {
        const { onPress } = this.props;
        return (
            <Header
                style={{
                    justifyContent: 'space-between',
                    height: 70,
                    backgroundColor: '#E10000',
                    elevation: 0,
                    borderWidth: 0,
                }}
            >
                <StatusBar
                    hidden={false}
                    translucent={true}
                    backgroundColor="transparent"
                    barStyle="light-content"
                />
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                    <View style={{ flex: 0.1 }}>
                        <TouchableOpacity onPress={onPress} style={{ paddingLeft: 15 }}>
                            <Icon name='md-arrow-back' type='Ionicons' style={{ color: '#fff', fontSize: 20 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Header>

        )
    }
}