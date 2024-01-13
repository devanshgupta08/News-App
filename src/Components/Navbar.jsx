
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

export default function CustomNavbar(props) {
  const [selectedCategory, setCategory] = useState('Category');

  const handleInputChange = (event) => {
    props.setSearch(event.target.value);
  };

  const handleSearchClick = () => {
    props.setSearch(props.searchValue);
    props.setIsSearch(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      props.setSearch(props.searchValue);
      props.setIsSearch(true);
    }
  };

  const countryTitles = {
    in: "India",
    au: "Australia",
    at: "Argentina",
    us: "USA",
    ae: "UAE"
  };

  return (
    <>
        <Navbar  className="sticky-top" bg="body-tertiary" expand="lg" >
          <div className="container-fluid">
            <Navbar.Brand as={Link} to={`${props.selectedCountry}/top-headlines`} onClick={() =>  setCategory("Category")} >
              News App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="me-auto  mb-2 mb-lg-0">
                <Nav.Link active as={Link} to={`${props.selectedCountry}/top-headlines`} onClick={() => setCategory("Category")}>
                  Top-Headlines
                </Nav.Link>
                <NavDropdown title={`${countryTitles[props.selectedCountry]}`} id="basic-nav-dropdown" active>
                  <NavDropdown.Item onClick={() => { props.handleCountryChange("in"); setCategory("Category") }}>
                    India
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { props.handleCountryChange("us"); setCategory("Category") }}>
                    USA
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { props.handleCountryChange("ae"); setCategory("Category") }}>
                    UAE
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { props.handleCountryChange("at"); setCategory("Category") }}>
                    Argentina
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { props.handleCountryChange("au"); setCategory("Category") }}>
                    Australia
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={selectedCategory} id="basic-nav-dropdown" active>
                  <NavDropdown.Item as={Link} to={`${props.selectedCountry}/business`} onClick={() => setCategory('Business')}>
                    Business
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={`${props.selectedCountry}/entertainment`} onClick={() => setCategory('Entertainment')}>
                    Entertainment
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={`${props.selectedCountry}/health`} onClick={() => setCategory('Health')}>
                    Health
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={`${props.selectedCountry}/science`} onClick={() => setCategory('Science')}>
                    Science
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={`${props.selectedCountry}/sports`} onClick={() => setCategory('Sports')}>
                    Sports
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={`${props.selectedCountry}/technology`} onClick={() => setCategory('Technology')}>
                    Technology
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link active as={Link} to={`${props.selectedCountry}/about`}>
                  About
                </Nav.Link>
                <Nav.Link active as={Link} to={`${props.selectedCountry}/contactus`} >
                  Contact Us
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                />
                <Button variant="outline-success" onClick={handleSearchClick}> Search</Button>
              </Form>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <Outlet />
      </>
  );
}