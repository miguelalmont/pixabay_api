import React, { Component } from 'react'

class Search extends Component {

    searchRef = React.createRef();

    handleData = (e) => {
        e.preventDefault();
        this.props.searchedText(this.searchRef.current.value);
    }

    render() {
        return (
            <form onSubmit={this.handleData}>
                <div className="row">
                    <div className="form-group mt-4 col-md-8">
                        <input ref={this.searchRef} type="text" className="form-control form-control-lg" placeholder="Buscar imagen" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="submit" value="Buscar" />
                    </div>
                </div>
            </form>
        );
    }
}

export default Search;
