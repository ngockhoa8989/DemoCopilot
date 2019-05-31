import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';
import { Header, Icon, Footer, FooterTab, Button, Container, Content } from 'native-base';

import { copilot, walkthroughable, CopilotStep } from 'react-native-copilot';

import logoTCA from 'images/logoTCA_final.png';
// import Header from '../Header';

const WalkthroughableText = walkthroughable(Text);
// const WalkthroughableButton = walkthroughable(Button);
const WalkthroughableImage = walkthroughable(Image);
const WalkthroughableView = walkthroughable(View);
const WalkthroughableTouchableOpacity = walkthroughable(TouchableOpacity);
const WalkthroughableButton = walkthroughable(Button);


class Home extends Component {
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
        // if (step.name === 'navigatesubmit') {
        //     this.props.copilotEvents.off('stop');
        //     this.props.navigation.navigate('Submit')
        // }
        console.log(`Current step is: ${step.name}`);
    }

    handleStartButtonPress() {
        this.props.start();
    }

    onBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        const { secondStepActive } = this.state;
        return (
            <Container>
                <Header
                    style={{
                        justifyContent: 'space-between',
                        height: 90,
                        backgroundColor: '#E10000',
                        elevation: 0,
                        borderWidth: 0,
                        // flex: 1
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
                            <CopilotStep text="Click vào sẽ về trang trước." order={1} name="openApp">
                                <WalkthroughableTouchableOpacity onPress={this.onBack.bind(this)} style={{ paddingLeft: 15 }}>
                                    <Icon name='md-arrow-back' type='Ionicons' style={{ color: '#fff', fontSize: 20 }} />
                                </WalkthroughableTouchableOpacity>
                            </CopilotStep>
                        </View>
                        <View style={{ flexDirection: 'column', alignItems: 'center', flex: 0.8 }}>
                            <View style={{ flex: 0.4 }} >
                                <CopilotStep text="Click vào sẽ về trang trước." order={2} name="logoTCA">
                                    <WalkthroughableImage source={logoTCA} style={{ width: 160, height: 20 }} />
                                </CopilotStep>
                            </View>
                            <View style={{ flex: 0.4, marginTop: 5 }}>
                                <Text style={{ color: "#fff", fontSize: 16 }}>
                                    Demo Copilot
                                </Text>
                            </View>
                            <View style={{ flex: 0.1 }}></View>
                        </View>
                        <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <CopilotStep text="Click vào để xem thông báo" order={3} name="notification">
                                <WalkthroughableTouchableOpacity>
                                    <Icon type='FontAwesome' style={{ fontSize: 18, color: '#FFFFFF' }} name="bell-o" />
                                </WalkthroughableTouchableOpacity>
                            </CopilotStep>
                        </View>
                    </View>
                </Header>

                <Content>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 0.8, paddingVertical: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <CopilotStep text="Đây là avatar." order={4} name="secondText">
                                <WalkthroughableImage
                                    source={{ uri: 'https://pbs.twimg.com/profile_images/527584017189982208/l3wwN-l-_400x400.jpeg' }}
                                    style={styles.profilePhoto}
                                />
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

                <Footer style={{ paddingHorizontal: 3}}>
                    <FooterTab>
                        <CopilotStep text="Home button" order={6} name="a">
                            <WalkthroughableView>
                                <Button>
                                    <Icon type="FontAwesome" style={{ fontSize: 24, color: '#EA0000' }} name="home" />
                                    <Text style={{ fontSize: 12, paddingTop: 5 }}>Home</Text>
                                </Button>
                            </WalkthroughableView>
                        </CopilotStep>
                        <CopilotStep text="Home button" order={7} name="b">
                            <WalkthroughableView>
                                <Button>
                                    <Icon type="FontAwesome" style={{ fontSize: 22, color: '#373E43' }} name="users" />
                                    <Text style={{ fontSize: 12, paddingTop: 5 }}>Danh sách</Text>
                                </Button>
                            </WalkthroughableView>
                        </CopilotStep>
                        <CopilotStep text="Home button" order={8} name="navigatesubmit">
                            <WalkthroughableView style={{ alignItems: 'center' }}>
                                <Button onPress={() => this.props.navigation.navigate('Submit')}>
                                    <Icon type="AntDesign" style={{ fontSize: 40, color: '#EA0000' }} name="pluscircle" />
                                </Button>
                            </WalkthroughableView>
                        </CopilotStep>
                        <WalkthroughableView>
                            <Button>
                                <Icon type="FontAwesome" style={{ fontSize: 22, color: '#373E43' }} name="globe" />
                                <Text style={{ fontSize: 12, paddingTop: 5 }}>Kiến thức</Text>
                            </Button>
                        </WalkthroughableView>
                        {/* <CopilotStep text="Home button" order={9} name="d">

                        </CopilotStep> */}
                        {/* <CopilotStep text="Home button" order={10} name="e"> */}
                            <WalkthroughableView>
                                <Button>
                                    <Icon type="FontAwesome" style={{ fontSize: 20, color: '#373E43' }} name="bars" />
                                    <Text style={{ fontSize: 12, paddingTop: 5 }}>Tuỳ chỉnh</Text>
                                </Button>
                            </WalkthroughableView>
                        {/* </CopilotStep> */}
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
});


export default copilot({
    // tooltipComponent: Tooltip,
    //stepNumberComponent: null,
    // verticalOffset: 36,
    // backdropColor:"rgba(50, 50, 100, 0.9)",
    animated: true, // Can be true or false
    overlay: 'svg', // Can be either view or svg
})(Home);