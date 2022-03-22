import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
    };
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 1,
    });
  }

  render() {
    const text = 'Something';
    return (
      <div>
        <p>In a new Component</p>
        <p>{text}</p>
        <p>Your name is {this.props.name} </p>
        <p>You are {this.state.age} years old.</p>
        <p>Status : {this.state.status}</p>
        <button
          onClick={this.onMakeOlder.bind(this)}
          className="btn btn-primary"
        >
          Make you older!
        </button>
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
  initialAge: PropTypes.number,
  hobbies: PropTypes.object,
  children: PropTypes.element.isRequired,
};
