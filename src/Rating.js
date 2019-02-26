import React from 'react';
// import { Glyphicon } from 'react-bootstrap';

class Rating extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: this.props.rating
        }
        
    }

    // clickHandle (){
    //     this.setState({rating: ratingValue})
    // }

    render() {
        return (
            <div>
                {/* <Glyphicon glyph = {this.state.rating >= 1 ? "star" : "star-empty"} onClick={this.clickHandle.bind(this, 1)}></Glyphicon>
                <Glyphicon glyph = {this.state.rating >= 2 ? "star" : "star-empty"} onClick={this.clickHandle.bind(this, 2)}></Glyphicon>
                <Glyphicon glyph = {this.state.rating >= 3 ? "star" : "star-empty"} onClick={this.clickHandle.bind(this, 3)}></Glyphicon>
                <Glyphicon glyph = {this.state.rating >= 4 ? "star" : "star-empty"} onClick={this.clickHandle.bind(this, 4)}></Glyphicon>
                <Glyphicon glyph = {this.state.rating >= 5 ? "star" : "star-empty"} onClick={this.clickHandle.bind(this, 5)}></Glyphicon> */}
            </div>
        );
    }
}


Rating.propTypes = {
    
};

export default Rating
