// External imports
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity, 
    TextInput, 
    Pressable, 
    Keyboard, 
    Image,
    ActivityIndicator 
} from 'react-native';
import { useStoreActions } from 'easy-peasy'

// Internal imports
const batavierLogo = require('../../assets/batavier-logo.png')
import styles from "./Styles"
import LoginProblemModal from './LoginProblemModal'

const Login = () => {
    // Local state
    const [uid, setuid] = useState('')
    const [password, setPassword] = useState('')
    const [focusedInput, setFocusedInput] = useState('')
    const [error, setError] = useState(false)
    const [initializing, setInitializing] = useState(false);
    const [problemModalOpen, setProblemModalOpen] = useState(false)

    // Redux 
    const startLogin = useStoreActions(actions => actions.auth.startLogin)

    const handleClickOutsideInput = () => {
        Keyboard.dismiss()
        setFocusedInput('')
    }

     // Handle login input submit
    const handleSubmit = () => {
        setInitializing(true)
        if (uid.trim() !== "" && password.trim() !== "") {
            startLogin({ email: uid, password })
            .then(() => setInitializing(false))
            .catch(e => {
                setInitializing(false)
                setError(true)
            })
        }
        setInitializing(false)
    }

    if (initializing) {
        return (
          <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
            <ActivityIndicator size="large" color='hsl(199, 65%, 50%)'/>
          </View>
        )
    }

    // Solves the bug that password input fontFamily wasnt configurable (or at least didn't follow the provided config)
    const passInputRef = useRef(null)
    useLayoutEffect(() => {
        passInputRef.current.setNativeProps({fontFamily: ""})
    }, [])

    return (
        <Pressable onPress={handleClickOutsideInput} style={styles.view}>
            <LoginProblemModal problemModalOpen={problemModalOpen} setProblemModalOpen={setProblemModalOpen}/> 
            <View>
                <View style={styles.logoView}>
                    <Image 
                        style={styles.logo}
                        source={batavierLogo}
                    />
                    <Text style={styles.logoText}>
                        Batavierenrace
                    </Text>
                </View>
                <View style={styles.loginView}>
                    <View style={styles.welcomeTextView}>
                        {error
                            ? <Text style={styles.errorMessage}>You have entered an incorrect email and/or password</Text>
                            : null
                        }
                        <Text style={styles.welcomeText}>
                            Welcome, participant!
                        </Text>
                    </View>
                    
                    <TextInput 
                        placeholderTextColor="#696969"
                        onFocus={() => setFocusedInput('id')}
                        editable
                        value={uid}
                        onChangeText={text => setuid(text.toLowerCase())}
                        style={[styles.uidInput, focusedInput === 'id' && styles.selectedInput]}
                        placeholder="Enter your email..."
                        // importantForAutofill="yesExcludeDescendants"
                    />
                    <TextInput 
                        ref={passInputRef}
                        // importantForAutofill="yesExcludeDescendants"
                        placeholderTextColor="#696969"
                        onSubmitEditing={handleSubmit}
                        secureTextEntry={true}
                        onFocus={() => setFocusedInput('pass')}
                        enablesReturnKeyAutomatically
                        editable
                        maxLength={27}
                        value={password}
                        placeholder="Enter your password..."
                        onChangeText={text => setPassword(text)}
                        style={[styles.passwordInput, focusedInput === 'pass' && styles.selectedInput, {fontFamily: ""}]}
                    />
                    <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                        <Text style={styles.loginText}>
                            Login
                        </Text>
                    </TouchableOpacity>
                        
                    <TouchableOpacity style={styles.loginProblem} onPress={() => setProblemModalOpen(true)}>
                        <Text style={styles.loginProblemText}>
                            Problems logging in?
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Pressable>
    );
};

export default Login;