import React from 'react';
import { withAuthenticator} from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

Amplify.configure(awsconfig);


function App() {
    return (<div>
        <Router>
            <Route path='/' exact component={HomePage} />
        </Router>
        </div>
    );
}
// export default App;
export default withAuthenticator(App);
