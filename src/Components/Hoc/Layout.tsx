import React from 'react';
import Header from '../Header';
interface children {
    children : JSX.Element;
}
const Layout : React.FC<children>= (props:children) => {
    
    return (
        <div>
            <Header/>
            {props.children}
            
        </div>
    );
};

export default Layout;