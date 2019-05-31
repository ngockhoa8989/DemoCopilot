import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';
import { Header, Icon, Footer, FooterTab, Button, Container, Content, Item, Input, Label } from 'native-base';

import { copilot, walkthroughable, CopilotStep } from 'react-native-copilot';

import logoTCA from 'images/logoTCA_final.png';

const WalkthroughableText = walkthroughable(Text);
// const WalkthroughableButton = walkthroughable(Button);
const WalkthroughableImage = walkthroughable(Image);
const WalkthroughableView = walkthroughable(View);
const WalkthroughableTouchableOpacity = walkthroughable(TouchableOpacity);
const WalkthroughableButton = walkthroughable(Button);

class Submit extends Component {
    static propTypes = {
        start: PropTypes.func.isRequired,
        copilotEvents: PropTypes.shape({
            on: PropTypes.func.isRequired,
        }).isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            secondStepActive: true,
            name: '',
            phone: '',
            notes: '',
        };
    }

    componentDidMount = async () => {
        this.props.copilotEvents.on('stepChange', this.handleStepChange);
        this.props.start();
    };

    componentWillUnmount() {
        // Don't forget to disable event handlers to prevent errors
        this.props.copilotEvents.off('stop');
    }

    handleStepChange = (step) => {
        console.log(`Current step is: ${step.name}`);
    }

    handleStartButtonPress() {
        this.props.start();
    }

    onBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <Container>
                <Header
                    style={{
                        justifyContent: 'space-between',
                        height: 90,
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

                            <TouchableOpacity onPress={this.onBack.bind(this)} style={{ paddingLeft: 15 }}>
                                <Icon name='md-arrow-back' type='Ionicons' style={{ color: '#fff', fontSize: 20 }} />
                            </TouchableOpacity>

                        </View>
                        <View style={{ flexDirection: 'column', alignItems: 'center', flex: 0.8 }}>
                            <View style={{ flex: 0.4 }} >

                                <Image source={logoTCA} style={{ width: 160, height: 20 }} />

                            </View>
                            <View style={{ flex: 0.4, marginTop: 5 }}>
                                <CopilotStep text="Trang giói thiệu khách hàng" order={1} name="title">
                                    <WalkthroughableText style={{ color: "#fff", fontSize: 16 }}>
                                        Submit Screen
                                    </WalkthroughableText>
                                </CopilotStep>
                            </View>
                            <View style={{ flex: 0.1 }}></View>
                        </View>
                        <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <TouchableOpacity>
                                <Icon type='FontAwesome' style={{ fontSize: 18, color: '#FFFFFF' }} name="bell-o" />
                            </TouchableOpacity>

                        </View>
                    </View>
                </Header>
                <Content>
                    <View style={{ flex: 1 }}>
                        <View>
                            <CopilotStep text="Nhâp họ tên nguoi gioi thiệu" order={2} name="firstText">
                                <WalkthroughableView style={styles.itemInput}>
                                    <Item floatingLabel>
                                        <Label>Name</Label>
                                        <Input
                                            style={{ fontSize: 16, marginLeft: -5 }}
                                            autoCorrect={false}
                                            keyboardType={Platform.OS === 'ios' ? 'phone-pad' : 'numeric'}
                                        // value={identityNumber}
                                        />
                                    </Item>
                                </WalkthroughableView>
                            </CopilotStep>
                            <CopilotStep text="Nhâp số điện thoại" order={3} name="secondText">
                                <WalkthroughableView style={styles.itemInput}>
                                    <Item floatingLabel>
                                        <Label >Phone</Label>
                                        <Input
                                            style={{ fontSize: 16, marginLeft: -5 }}
                                            autoCorrect={false}
                                            keyboardType={Platform.OS === 'ios' ? 'phone-pad' : 'numeric'}
                                        // value={identityNumber}
                                        />
                                    </Item>
                                </WalkthroughableView>
                            </CopilotStep>
                            <CopilotStep text="Chi tiết khách hàng cần đựơc tư vấn mua bảo hiểm" order={4} name="thirdText">
                                <WalkthroughableView style={styles.itemInput}>
                                    <Item floatingLabel>
                                        <Label >Note</Label>
                                        <Input
                                            style={{ fontSize: 16, marginLeft: -5 }}
                                            autoCorrect={false}
                                            keyboardType={Platform.OS === 'ios' ? 'phone-pad' : 'numeric'}
                                        // value={identityNumber}
                                        />
                                    </Item>
                                </WalkthroughableView>
                            </CopilotStep>
                        </View>
                        <View style={{ flex: 0.1, paddingVertical: 5 }}>
                            <CopilotStep text="Click vào để giới thiệu" order={5} name="fiveText">
                                <WalkthroughableTouchableOpacity style={styles.button} onPress={this.handleStartButtonPress.bind(this)}>
                                    <Text style={styles.buttonText}>Giới thiệu</Text>
                                </WalkthroughableTouchableOpacity>
                            </CopilotStep>
                        </View>
                    </View>
                </Content>
                <Footer style={{ paddingHorizontal: 3 }}>
                    <FooterTab>
                        <View>
                            <Button>
                                <Icon type="FontAwesome" style={{ fontSize: 24, color: '#EA0000' }} name="home" />
                                <Text style={{ fontSize: 12, paddingTop: 5 }}>Home</Text>
                            </Button>
                        </View>
                        <View>
                            <Button>
                                <Icon type="FontAwesome" style={{ fontSize: 22, color: '#373E43' }} name="users" />
                                <Text style={{ fontSize: 12, paddingTop: 5 }}>Danh sách</Text>
                            </Button>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Button onPress={() => this.props.navigation.navigate('Submit')}>
                                <Icon type="AntDesign" style={{ fontSize: 40, color: '#EA0000' }} name="pluscircle" />
                            </Button>
                        </View>
                        <View>
                            <Button>
                                <Icon type="FontAwesome" style={{ fontSize: 22, color: '#373E43' }} name="globe" />
                                <Text style={{ fontSize: 12, paddingTop: 5 }}>Kiến thức</Text>
                            </Button>
                        </View>
                        <View>
                            <Button>
                                <Icon type="FontAwesome" style={{ fontSize: 20, color: '#373E43' }} name="bars" />
                                <Text style={{ fontSize: 12, paddingTop: 5 }}>Tuỳ chỉnh</Text>
                            </Button>
                        </View>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 40,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
    },
    profilePhoto: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginVertical: 20,
    },
    middleView: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#E10000',
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tabItem: {
        flex: 1,
        textAlign: 'center',
    },
    activeSwitchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    itemInput: {
        flex: 0.15,
        marginVertical: 10,
    },
});


export default copilot({
    // tooltipComponent: Tooltip,
    //stepNumberComponent: null,
    // verticalOffset: 36,
    // backdropColor:"rgba(50, 50, 100, 0.9)",
    animated: true, // Can be true or false
    overlay: 'svg', // Can be either view or svg
})(Submit);