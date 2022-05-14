import React, { Component } from 'react';
import { Route, Redirect, HashRouter } from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import Portfolio from './Portfolio';

class Header extends Component {
    render() {
        return (
            <HashRouter>
                <header>
                    <Nav />
                </header>

                <div className="content">
                    <Route exact path="/" render={() => <Redirect to="/about" />} />
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/resume" component={Resume} />
                </div>
            </HashRouter>
        );
    }
}

export default Header;