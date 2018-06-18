import React from 'react';
import './App.css';
import store from './reducers/Store';
import { Provider } from "react-redux";
import { Fragment } from 'react';
import { Router as Router, Route, Link } from "react-router-dom";

import IndexComponent from './components/IndexComponent';
import RepositoriesComponent from './components/RepositoriesComponent';
import FollowersComponent from './components/FollowersComponent';



class App extends React.PureComponent {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Router>
                        <div>
                            <ul>
                                <li>
                                    <Link to="/followers">Followers</Link>
                                </li>
                                <li>
                                    <Link to="/repos">Repos</Link>
                                </li>
                            </ul>
                            <IndexComponent/>
                            <Route exact path="/#" component={} />
                            <Route path="/followers" component={FollowersComponent} />
                            <Route path="/repos" component={RepositoriesComponent} />
                        </div>
                    </Router>
                </Fragment>

            </Provider>
        );
    }
}

export default App;
