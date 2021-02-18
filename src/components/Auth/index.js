import React from 'react';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import Link from '@material-ui/core/Link';
import ContactForm from '../ContactForm';
import ContactHead from '../ContactHead';
import awsconfig from '../../aws-exports';
import './styles.css';

Amplify.configure(awsconfig);

const AuthStateApp = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            console.log(authData)
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

    return authState === AuthState.SignedIn && user ? (
        <div id={'contact'}>
            <ContactHead title='Contact'  />
            <ContactForm userEmail={user.attributes.email} />
            <div className='log-box'>
            <AmplifySignOut />
            <Link href={'#contact'}></Link>
            </div>
        </div>
    ) : (
            <div id={'contact'}>
                <ContactHead title='Contact' title2='Please sign in to send a message.'/>
                <div className='auth-locate'><AmplifyAuthenticator /></div>
            </div>
        );
}

export default AuthStateApp;