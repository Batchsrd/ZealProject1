import React from 'react';
import {
    Text,
    View,
    TextInput,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passWordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
var regexQuery =
    '^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$';
var urlRegex = new RegExp(regexQuery, 'g');
var regexPhoneNum = /^\d{10}$/;

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            signUpText: 'Registration',
            cbAge: 10,
            firstName: 'sravan',
            email: 'sravan@gmail.com',
            phoneNo: '2387923478',
            password: 'Test@12345',
            confirmPassword: 'Test@12345',
            website: 'www.zealcoders.com',
            isPassWordHidden: true,
        };
    }

    getValidationMethod() {
        if (this.state.firstName.length < 3) {
            alert('Please enter valid name');
        } else if (!emailRegex.test(this.state.email)) {
            alert('Please enter valid email');
        } else if (!regexPhoneNum.test(this.state.phoneNo)) {
            alert('Please enter valid mobile number');
        } else if (!passWordRegex.test(this.state.password)) {
            alert('Please enter valid password');
        } else if (!passWordRegex.test(this.state.confirmPassword)) {
            alert('Please enter valid confirm password');
        } else if (this.state.password !== this.state.confirmPassword) {
            alert('Password and Confirm password are incorrect');
        } else if (!urlRegex.test(this.state.website)) {
            alert('Please enter valid website');
        } else {
            alert('Registration Success');
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'purple' }}>
                <Text
                    style={{
                        fontSize: 30,
                        textAlign: 'center',
                        color: 'white',
                        marginTop: 45,
                    }}>
                    {this.state.signUpText}
                </Text>

                <TextInput
                    style={styles.inputText}
                    placeholder="Enter Your Name"
                    value={this.state.firstName}
                    onChangeText={(text) => {
                        this.setState({ firstName: text });
                    }}></TextInput>

                <TextInput
                    style={styles.inputText}
                    placeholder="Enter Your Email"
                    value={this.state.email}
                    onChangeText={(text) => {
                        this.setState({ email: text });
                    }}></TextInput>

                <TextInput
                    style={styles.inputText}
                    placeholder="Enter Your Phone Number"
                    value={this.state.phoneNo}
                    onChangeText={(text) => {
                        this.setState({ phoneNo: text });
                    }}></TextInput>

                <TextInput
                    style={styles.inputText}
                    placeholder="Enter Your Passowrd"
                    value={this.state.password}
                    secureTextEntry={this.state.isPassWordHidden}
                    onChangeText={(text) => {
                        this.setState({ password: text });
                    }}></TextInput>

                <TextInput
                    style={styles.inputText}
                    placeholder="Confirm PassWord"
                    value={this.state.confirmPassword}
                    secureTextEntry={this.state.isPassWordHidden}
                    onChangeText={(text) => {
                        this.setState({ confirmPassword: text });
                    }}></TextInput>

                <TextInput
                    style={styles.inputText}
                    placeholder="Enter your Website"
                    value={this.state.website}
                    onChangeText={(text) => {
                        this.setState({ website: text });
                    }}></TextInput>

                <TouchableOpacity
                    style={{
                        borderColor: 'white',
                        borderWidth: 1,
                        margin: 20,
                        height: 45,
                        justifyContent: 'center',
                        borderRadius: 30,
                    }}
                    onPress={() => {
                        this.getValidationMethod();
                    }}>
                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 20,
                        }}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputText: {
        backgroundColor: 'white',
        height: 45,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 20,
        borderRadius: 30,
    },
});

export default SignUp;
