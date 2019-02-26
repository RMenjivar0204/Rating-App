import React from 'react';
// import PropTypes from 'prop-types';
import Product from './Product';

class Products extends React.Component {
    constructor(props){
        super(props);

        this.products = this.getProduct()

    }


    getProducts(){
        return [
            {
                imageURL: "http://loremflicker.com/150/150?",
                productName: 'Product 1',
                releaseDate: 'May 31, 2019',
                description: 'lorem ipsum',
                rating: 4,
                numOfReviews: 2
            },
            {
                imageUrl: "http://loremflicker.com/150/150?",
                productName: "Product 2",
                releaseDate: "August 31, 2018",
                description: "lorem ipsum",
                rating: 2,
                numOfReviews: 12,
            },
            {
                imageUrl: "http://loremflicker.com/150/150?",
                productName: "Product 3",
                releaseDate: "July 30, 2018",
                description: "lorem ipsum",
                rating: 5,
                numOfReviews: 2,
            }
        ];
    }

    render() {

        const listProducts = this.products.map((product) => {
            return <Product key={product.productName} data={product} />
        })

        return (
            <div>
                {listProducts}
            </div>
        );
    }  
}

Products.propTypes = {
    
};

export default Products;
