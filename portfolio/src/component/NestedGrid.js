import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "react-bootstrap/Button";
import "../css/hero.css";
import Modal from "react-bootstrap/Modal";

import json_data from "../res/heroTier.json";
import general from "../res/general.json";
import sigils_Effect from "../res/sigils_Effect.json";
import urlMapping from "../res/urlMapping.json";

import RaderChart from "./RadarChart";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/esm/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

function MyVerticallyCenteredModal(props) {
  const ringMapping = {"치확":"치명타확률 + 34.5%", "저관":"저항 관통력"}
  const hero = props.heroInfo;
  console.log(hero)
  return (
    <ThemeProvider theme={theme}>
      <Modal {...props} size="lg">
        <Modal.Header closeButton>
          <h4>
            <Badge bg="danger">★OP</Badge>{" "}{hero['fullName']}
          </h4>
        </Modal.Header>
        <Modal.Body>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} sx={{ justifyContent: "center" }}>
              <div style={{ display: "flex" }}>
                <Item>
                  <div>
                    <img
                      src={"https://raw.githubusercontent.com/cq-pandora/assets/master/portraits/"+urlMapping[hero['name']].port}
                      width="250px"
                    ></img>
                  </div>
                </Item>
                <Item>
                  <RaderChart data={hero.data}></RaderChart>
                </Item>
              </div>
            </Grid>
          </Box>
          <hr></hr>
          <Container>
            <Grid container spacing={1}>
              <Item>
                <div style={{ display: "flex" }}>
                  <div className="sigils"style={{ display: "flex" }}>
                  <img 
                    src={"https://raw.githubusercontent.com/cq-pandora/assets/master/weapons/"+urlMapping[hero['weapon'][0]['name']]}
                    width={"100"}
                  ></img>
                      <div className="sigilsInfo">
                      <p>{hero['sigils']}</p>
                      <span>{sigils_Effect[hero['sigils']]['세트 효과']}</span><br></br>

                      <span>{sigils_Effect[hero['weapon'][0]['option1']]}</span><br></br>
                      <span>{sigils_Effect[hero['weapon'][0]['option2']]}</span>
                    </div>
                  <div style={{ display: "grid" }}> 
                    <img src={"https://raw.githubusercontent.com/cq-pandora/assets/master/sigils/"+urlMapping[sigils_Effect[hero['sigils']]['sig1']]}></img>
                    <img  src={"https://raw.githubusercontent.com/cq-pandora/assets/master/sigils/"+urlMapping[sigils_Effect[hero['sigils']]['sig2']]}></img>


                  </div>
                  </div>
                  <div style={{ display: "grid" }}> 
                    <div className="ring"><img src={"https://raw.githubusercontent.com/cq-pandora/assets/master/rings/"+urlMapping[hero['ring'][0]]}></img>
                    <div className="ringInfo">

                      <p>{hero['ring'][0]}</p>
                      <span>{ringMapping[hero['ring'][1]]}</span> <br></br>
                      <span>{ringMapping[hero['ring'][2]]}</span>
                      </div>
                    </div>
                    <img
                      className="skill"
                      src={"https://raw.githubusercontent.com/cq-pandora/assets/master/skills/"+urlMapping[hero['skill']]}
                      width={"45"}
                    ></img>
                  </div>
                </div>
              </Item>
              <Item>
                <Typography variant="h6">데미지 타입 / 메커니즘</Typography>
                <h4>
                {Array.from(hero['DamageType']).map((i, index) => (
                  <Badge bg="primary">{i}</Badge> 
                  
                  ))}
                </h4>
                <h5>
                {Array.from(hero['Function']).map((i, index) => (
                  <Badge bg="success">{i}</Badge> 
                  ))}
                </h5>
              </Item>
              <Item>
                <Typography variant="h6">같이 쓰는 용사 Top 3</Typography>
                <div style={{display:"flex"}}>
                <Port></Port>
                <Port></Port>
                <Port></Port>
                </div>
              
              </Item>
            </Grid>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>닫기</Button>
        </Modal.Footer>
      </Modal>
    </ThemeProvider>
  );
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  margin: 5,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Port = styled(Paper)(({ theme }) => ({
  backgroundColor: "#9c9074",
  margin: 6,
  cursor: "pointer",
  textAlign: "center",
  height: 140,
  width: 100,
  color: theme.palette.text.secondary,
}));
const theme = createTheme();

theme.typography.h6 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
    color: "#000000",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
    color: "#000000",
  },
};
export default function ResponsiveGrid() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({});
  
  const data = general.heros;
  const clickHandler = (params, e)=>{
    setModalShow(true)
    setModalInfo(params)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container sx={{ justifyContent: "left" }}>
        {Array.from(data).map((hero, index) => (
          <Grid key={index} spacing={2}>
            <Port onClick={(e) => {clickHandler(hero, e)}}>
              <div id="HeroCase">
                <div id="HeroCard">
                  <img
                    src={"https://raw.githubusercontent.com/cq-pandora/assets/master/common/"+urlMapping[hero['scrollType']]}
                    width={"32px"}
                  ></img>
                </div>
                <img
                  src={"https://raw.githubusercontent.com/Seo-Faper/cq_assets/master/heroes/"+urlMapping[hero['name']].dot} //용사 아이콘
                ></img>
                <br></br>
                <strong>
                  히카리
                  <img
                    src={"https://raw.githubusercontent.com/cq-pandora/assets/master/common/"+urlMapping[hero['class']]} // 클래스 아이콘
                    width={"32px"}
                  ></img>
                </strong>
              </div>
            </Port>
          </Grid>
        ))}
      </Grid>
      <MyVerticallyCenteredModal
        heroInfo = {modalInfo}
        show={modalShow}
        onHide={() => setModalShow(false)}
        dialogClassName="modal-90w"
      />
    </Box>
  );
}
