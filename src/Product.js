import React, {Component} from 'react';
import { Media } from 'react-bootstrap';
import Rating from './Rating';

class Product extends Component {


    render() {
        return (
            <div>
                <Media>
                    <Media.Left>
                        <img width={64} height={64} src={this.props.data.imageURL} alt=""/>
                    </Media.Left>

                    <Media.Body>
                        <Media.Heading>
                            {this.props.data.productName}
                        </Media.Heading>
                        {this.props.data.releaseDate}
                        <Rating rating={this.props.data.rating}/>
                        <p>{this.props.data.description}</p>
                    </Media.Body>
                </Media>;
            </div>
        );
    }
}


Product.propTypes = {
    
};

export default Product
