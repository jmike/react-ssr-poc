import React from 'react';
import PropTypes from 'prop-types';

class Hello extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  static greetingTemplates = [
    (e) => `Hello, ${e}!`,
    (e) => `Καλησπέρα ${e}`,
    (e) => `Hola, ${e}!`,
    (e) => `Comment ça va ${e}?`,
    (e) => `你好 ${e}`,
  ];

  constructor(props) {
    super(props);
    this.state = {
      activeGreetingIndex: 0,
    };
  }

  rotateGreeting = () => {
    this.setState(({ activeGreetingIndex }) => {
      return {
        activeGreetingIndex: (activeGreetingIndex + 1) % this.constructor.greetingTemplates.length,
      };
    });
  };

  render() {
    console.time('<Hello /> render');
    const { activeGreetingIndex } = this.state;
    const { name } = this.props;
    const template = this.constructor.greetingTemplates[activeGreetingIndex];
    const product = (
      <React.Fragment>
        <h1>{template(name)}</h1>
        <div style={{ marginTop: '100px' }}>
          <button onClick={this.rotateGreeting}>Update Greeting</button>
        </div>
      </React.Fragment>
    );
    console.timeEnd('<Hello /> render');

    return product;
  }
}

export default Hello;
