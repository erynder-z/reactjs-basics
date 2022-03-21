import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
  render() {
    const text = 'Something';
    return (
      <div>
        <p>In a new Component</p>
        <p>{text}</p>
        <p>Your name is {this.props.name} </p>
        <p>You are {this.props.age} years old.</p>
        <p>Your hobbies are:</p>
        <div>
          <ul>
            {this.props.someData.hobbies.map((hobby, i) => (
              <li key={i}>{hobby}</li>
            ))}
          </ul>
        </div>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  hobbies: PropTypes.object,
  children: PropTypes.element.isRequired,
};
