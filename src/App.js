import React, { Component } from 'react';
import Container from './components/Container';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
      example: ''
    }
  }

  componentDidMount() {
    this.getTerm();
  }

  getTerm() {
    let url = '/phrases.php?uid=7527&tokenid=n2H4Q4WyUP8BUKwL&phrase=buckle+up&format=json';

    axios.get(url)
      .then(res => {
        let data = res.data.result;

        this.setState({
          term: data.term,
          example: data.example
        })
      })  
  }

  render() {
    const { term, example } = this.state;

    return (
      <Container>
        <p id="quote">{term}</p>
        <p id="author">{example}</p>
      </Container>
    )
  }
}

export default App;
