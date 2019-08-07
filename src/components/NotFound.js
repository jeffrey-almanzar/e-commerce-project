import React from "react";
import Navigation from "./Navigation";

class NotFound extends React.Component {
  render() {
    if (this.props.login) {
      return (
        <div>
          <Navigation
            user={this.props.user}
            login={this.props.login}
            loginFunction={this.props.loginFunction}
          />
          <h1 className="not-found-title">
            Sorry, {this.props.user.name} Page Not Found
          </h1>
          <div className="not-found" />
        </div>
      );
    }
    return (
      <div>
        <Navigation
          user={this.props.user}
          login={this.props.login}
          loginFunction={this.props.loginFunction}
        />
        <h1 className="not-found-title">Sorry, Page Not Found</h1>
        <div className="not-found" />
      </div>
    );
  }
}

export default NotFound;
