import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const expand = "sm";
function OffcanvasExample() {

  return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://raw.githubusercontent.com/cq-pandora/assets/master/common/ui_btn_house_ui_hide.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            크퀘 도감
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto">
            <NavDropdown href="#features" title='도감' id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"><img
              alt=""
              src="https://raw.githubusercontent.com/cq-pandora/assets/master/common/ui_btn_house_hero.png"
              width="22"
              height="24"
              className="d-inline-block align-top"
            />{' '}용사 정보</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1"><img
              alt=""
              src="https://raw.githubusercontent.com/cq-pandora/assets/master/sigils/ui_item_stone_1_atk.png"
              width="24"
              height="24"
              className="d-inline-block align-top"
            />{' '}각인석 정보            </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><img
              alt=""
              src="https://raw.githubusercontent.com/cq-pandora/assets/master/common/ui_icon_ring_a_01.png"
              width="18"
              height="24"
              className="d-inline-block align-top"
            />{' '}
                반지 정보
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><img
              alt=""
              src="https://raw.githubusercontent.com/cq-pandora/assets/master/common/ui_btn_fishing_reward.png"
              width="24"
              height="24"
              className="d-inline-block align-top"
            />{' '}성장 추천</NavDropdown.Item>
            
            </NavDropdown>
            <NavDropdown title="컨텐츠" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><img
              alt=""
              src="https://raw.githubusercontent.com/cq-pandora/assets/master/common/ui_icon_boost_01_01.png"
              width="18"
              height="24"
              className="d-inline-block align-top"
            />{' '}도전</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1"><img
              alt=""
              src="https://raw.githubusercontent.com/cq-pandora/assets/master/common/ui_icon_boss_phase_01(x1).png"
              width="18"
              height="24"
              className="d-inline-block align-top"
            />{' '}토벌            </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><img
              alt=""
              src="https://raw.githubusercontent.com/cq-pandora/assets/master/common/ui_pvp_icon_mini_04.png"
              width="18"
              height="24"
              className="d-inline-block align-top"
            />{' '}
                결투장
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><img
              alt=""
              src="https://raw.githubusercontent.com/cq-pandora/assets/master/common/ui_btn_fishing_rank.png"
              width="24"
              height="24"
              className="d-inline-block align-top"
            />{' '}투기장</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"><img
              alt=""
              src="https://raw.githubusercontent.com/cq-pandora/assets/master/common/ui_btn_bossrush_exchange.png"
              width="24"
              height="24"
              className="d-inline-block align-top"
            />{' '}
                총력전
              </NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
          <Nav className="justify-content-end" style={{ width: "100%" }}>
          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="용사 명"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success"> _\ </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;