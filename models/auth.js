import { action, actionOn, thunk } from 'easy-peasy'
import auth from '@react-native-firebase/auth';

const authModel =  {
    loggedIn: false,
    user: {
        uid: 'rf287hf',
        team_id: 'd3d3g5',
        team_name: 'The kid, the elder and others',
        firstName: 'Constantine',
        lastName: 'Bingvoglio',
        date_of_birth: '812480185',
        weight: 0,
        height: 0,
        nationality: 'English',
        stage: 5,
        running_time: 0,
        team_captain_uid: 'rf287hf',
        team_captain: 'Constantine Bingvolio',
        email: 'constantine@gmail.com',
    },
    startLogin: thunk((actions, payload) => { 
        return auth()
            .signInWithEmailAndPassword(payload.email, payload.password)
    
    }),
    login: action((state, payload) => {
        state.loggedIn = payload.login
    }),
    startLogout: thunk((actions, payload) => {
        auth()
            .signOut()
            .then(() => {
                console.log('User signed out!')
            });
    }),
    updateUser: action((state, payload) => {
        switch(payload.type) {
            case 'WEIGHT': 
                state.user.weight = payload.weight
                break;
            case 'HEIGHT':
                state.user.height = payload.height
                break;
            default: 
                return;
        }
    }),

    bmi: 0,
    setBmi: actionOn(
        (actions) => [
            actions.updateUser
        ],
        (state, target) => {
            if (target.payload.type === 'WEIGHT') {
                if (target.payload.weight !== 0 && state.user.height !== 0) {
                    state.bmi = target.payload.weight / Math.pow(state.user.height/100, 2)
                } else {
                    state.bmi = 0
                }
            } else if (target.payload.type === 'HEIGHT') {
                if (target.payload.height !== 0 && state.user.weight !== 0) {
                    state.bmi = state.user.weight / Math.pow(target.payload.height/100, 2)
                } else {
                    state.bmi = 0
                }
            }
        }
    )
     
}

export default authModel