import React from 'react';

import Nav from '../components/Nav';

class Layout extends React.Component {
    add() {
        console.log("clicked me");
    }
    render() {
        return <div>
            <Nav />
            <div class="container">
                {this.props.children}
            </div>
        </div>
    }
}

export default Layout;