import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Link, NavLink } from "react-router-dom";

import styled from "styled-components";

import LogoImage from "./assets/logo.png";
import ProfileImage from "./assets/kus.png";

// Styling disini >> BEGIN

const AppWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-top: 150px;
  background-color: #f7f7f7;
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 25px;
  background-color: snow;
`;

const NavbarSecondary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: snow;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const NavbarKiri = styled.div``;

const ImageLogo = styled.img`
  width: 65%;
`;

const ListMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: auto;

  li {
    display: inline-block;
    padding: ${props => props.padding}px;
    margin: 0 ${props => props.margin}px;
  }
`;

const Card = styled.div`
  width: 100%;
  padding: 30px 15px;
  background-color: white;
  border-radius: 5px;
`;

const ImageProfile = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 50%;
`;

const ProfileTitle = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin: 35px 0;
`;

const CustomLink = styled(NavLink)`
  display: block;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  margin-bottom: 10px;
  transition-duration: 0.2s;

  :hover {
    text-decoration: none;
    background-color: #f7f7f7;
    color: black;
  }
`;

// Styling disini >> END

// Navbar Disini >> BEGIN
export const Navbar = () => {
  return ReactDOM.createPortal(
    <React.Fragment>
      <NavbarWrapper>
        <NavbarKiri>
          <ImageLogo src={LogoImage} alt="logo" />
        </NavbarKiri>
        <ListMenu padding={20} margin={0}>
          <li>Contact</li>
          <li>About</li>
          <li>Service team</li>
        </ListMenu>
      </NavbarWrapper>
      <NavbarSecondary>
        <ListMenu padding={10} margin={20}>
          <li>Contact</li>
          <li>About</li>
          <li>Service team</li>
        </ListMenu>
      </NavbarSecondary>
    </React.Fragment>,
    document.querySelector("#navbar")
  );
};
// Navbar Disini >> END

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <AppWrapper>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <Card>
                <ImageProfile src={ProfileImage} />
                <ProfileTitle>Kusvihawan</ProfileTitle>
                <CustomLink
                  to="/darah"
                  activeStyle={{
                    backgroundColor: "#e4e4e4"
                  }}
                >
                  Tekanan Darah
                </CustomLink>
                <CustomLink
                  to="/grafik"
                  activeStyle={{
                    backgroundColor: "#e4e4e4"
                  }}
                >
                  Grafik
                </CustomLink>
              </Card>
            </div>
            <div className="col-md-9">
              <Switch>
                <Route path="/darah" exact component={TekananDarah} />
                <Route path="/grafik" exact component={GrafikDarah} />
              </Switch>
            </div>
          </div>
        </div>
      </AppWrapper>
    </React.Fragment>
  );
}

const TekananDarah = () => {
  return (
    <div className="animated zoomIn faster">
      <Card>Tekanan Darah</Card>
    </div>
  );
};

const GrafikDarah = () => {
  return (
    <div className="animated zoomIn faster">
      <Card>Grafik</Card>
    </div>
  );
};

export default App;
