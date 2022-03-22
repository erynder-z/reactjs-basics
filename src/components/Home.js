import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: 'Changed Link',
    };
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 1,
    });
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
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
        <hr />
        <button onClick={this.props.greet} className="btn btn-secondary">
          Say Hello!
        </button>
        <hr />
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
        <hr />
        <button
          onClick={this.onChangeLink.bind(this)}
          className="btn btn-secondary"
        >
          Change header Link
        </button>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  initialAge: PropTypes.number,
  hobbies: PropTypes.object,
  children: PropTypes.element.isRequired,
  greet: PropTypes.func,
};
