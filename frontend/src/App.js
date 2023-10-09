import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from 'C:/MiniRealEstate/MiniRealEstate/frontend/src/containers/Home.js';
import Login from 'C:/MiniRealEstate/MiniRealEstate/frontend/src/containers/Login.js';
import SignUp from 'C:/MiniRealEstate/MiniRealEstate/frontend/src/containers/SignUp.js';
import Activate from 'C:/MiniRealEstate/MiniRealEstate/frontend/src/containers/Activate.js';
import ResetPassword from 'C:/MiniRealEstate/MiniRealEstate/frontend/src/containers/ResetPassword';
import ResetPasswordConfirm from 'C:/MiniRealEstate/MiniRealEstate/frontend/src/containers/ResetPasswordConfirm';
//import Facebook from './containers/Facebook';
//import Google from './containers/Google';

//import { Provider } from 'react-redux';
//import store from './store';

import Layout from 'C:/MiniRealEstate/MiniRealEstate/frontend/src/hocs/Layout';

const App = () => (  
        <Router>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/login' element={<Login/>} />
                    <Route exact path='/signup' element={<SignUp/>} />
                    <Route exact path='/reset-password' element={<ResetPassword/>} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={<ResetPasswordConfirm/>} />
                    <Route exact path='/activate/:uid/:token' element={<Activate></Activate>} />
                </Routes>
            </Layout>
        </Router>
);

export default App;