import React, { Component } from 'react';
import Image from './Image'
import Pagination from './Pagination';

class Result extends Component {
    
    showSearch = () => {
        const images = this.props.images;

        if(images.length === 0) return null;

        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {images.map(image => (
                        <Image key={image.id} image={image}/>
                    ))}
                </div>
                {<Pagination previousPage={this.props.previousPage} nextPage={this.props.nextPage} images={this.images} page={this.props.page} />}
            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.showSearch()}
            </React.Fragment>
        );
    }
}

export default Result;