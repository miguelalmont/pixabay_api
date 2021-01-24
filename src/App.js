import React, { Component } from 'react';
import './App.css';
import Form from './components/Form.js';
import Search from './components/Search.js';
import Result from './components/Result';
import Jumbotron from 'react-bootstrap/Jumbotron'

class App extends Component {

  state = {
    text : '',
    images: [],
    page : ''
  }
  
  scrollUp = () => {
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth', 'start');
  }

  previousPage = () => {
    let page = this.state.page;
    if (page === 1) return null;
    page--;
    this.setState({
      page
    },() => {
      this.pixabayApi();
      this.scrollUp();
    });
  }

  nextPage = () => {
    let page = this.state.page;
    page++;
    this.setState({
      page
    },() => {
      this.pixabayApi();
      this.scrollUp();
    });
  }

  pixabayApi = () => {
    const text = this.state.text;
    const page = this.state.page;
    const endpoint = `https://pixabay.com/api/?key=19988863-7b9cd3b0a4031776d45773222&q=${text}&per_page=21&page=${page}`;
    fetch(endpoint).then(resp => resp.json()).then(result => this.setState({ images: result.hits }));
  }

  searchedText = (text) => {
    if (text === '') return null;
    this.setState({
      text : text,
      page : 1
    }, async () => {
      this.pixabayApi();
    })
  }

  render() {
    return (
          <div className="App">
            <Jumbotron className="bg-dark">
              <header><Search searchedText={this.searchedText} /></header>
              <div>
                <Result images={ this.state.images } previousPage={this.previousPage} nextPage={this.nextPage} page={this.state.page}/>
              </div>
              <footer>
                <Form/>
              </footer>
            </Jumbotron>
          </div>
    );
  } 
}

export default App;
