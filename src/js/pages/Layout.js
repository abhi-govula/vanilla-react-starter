import React from 'react';

class Layout extends React.Component {
    render() {
        return <div>
            <div class="container">
                {this.props.children}
            </div>
        </div>
    }
}

export default Layout;