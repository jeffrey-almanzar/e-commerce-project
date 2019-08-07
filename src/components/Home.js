import React from "react";
import "../App.css";
import Navigation from "./Navigation";
// import logo from '../images/icon.JPG';

class Home extends React.Component {
  render() {
    return (
      <div className="">
        <Navigation
          cartSize={this.props.cartSize}
          user={this.props.user}
          login={this.props.login}
          loginFunction={this.props.loginFunction}
        />

        <div>
          <div className="homePic">
            <img
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/12/31/16/istock-639223110-2.jpg"
              alt="img"
            />
            <div className="image-top">
              <p className="the-name">Valiant</p>

              {/* <div className ="search-bar">
                <input id ="query-bar" type="text" placeholder="Search for items"/>
                <button className="search-button" type="submit" value="Search" aria-label="Search">
                    Search
                </button>
            </div> */}
            </div>

            <div className="image-bottom">
              <div className="para1">
                <h3>What is Valiant</h3>

                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="para2">
                <h3>Why choose Valiant</h3>

                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="para3">
                <h3>More of Valiant</h3>

                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>

          <div>
            <footer>
              <ul className="styleF">
                <li>
                  {" "}
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  {" "}
                  <a href="/">Terms of Use</a>
                </li>
                <li>
                  {" "}
                  <a href="/">Sponsers</a>
                </li>
                <li>
                  <a href="/">Location</a>
                </li>
              </ul>

              <p>&copy; 2019 Valiant</p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
