import React, { Component } from "react";
import {
  Navbar as BootstrapNavBar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <BootstrapNavBar expand="lg">
        <BootstrapNavBar.Brand href="/ObjectsOnMap/">
          TMSAPA
        </BootstrapNavBar.Brand>
        <BootstrapNavBar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavBar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              title="Объекты"
              id="basic-nav-dropdown"
              href="/ObjectsOnMap"
            >
              <NavDropdown.Item href="/ObjectsOnMap/byt">
                Бытовые
              </NavDropdown.Item>
              <NavDropdown.Item href="/ObjectsOnMap/prom">
                Промышленные
              </NavDropdown.Item>
              <NavDropdown.Item href="/ObjectsOnMap/gen">
                Генерация
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Письма/задачи"
              id="basic-nav-dropdown"
              href="/LettersAndTasks"
            >
              <NavDropdown.Item href="/LettersAndTasks/assignment">
                Назначение
              </NavDropdown.Item>
              <NavDropdown.Item href="/LettersAndTasks/execution">
                Исполнение
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">РИЗы/Привязки</Nav.Link>
            <Nav.Link href="#home">Сотрудники</Nav.Link>
            <Nav.Link href="#home">Настройки</Nav.Link>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </BootstrapNavBar.Collapse>
      </BootstrapNavBar>
    );
  }
}

export default NavBar;
