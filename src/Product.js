import React from 'react';
import PropTypes from 'prop-types';
import { Media } from 'react-bootstrap';

class Product extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <Media>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src="holder.js/64x64"
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5></h5>
                        <p>
                        </p>
                    </Media.Body>
                </Media>;
            </div>
        );
    }
}


Product.propTypes = {
    
};

export default Product
