import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from 'react-bootstrap/Button';
import '../css/hero.css'
import Modal from 'react-bootstrap/Modal';
import json_data from '../res/heroTier.json'
import RaderChart from './RadarChart'
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/esm/Container';
import { Typography } from '@mui/material';
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
      >
        <Modal.Header closeButton>
        <h4>백발백중 히카리 <Badge bg="danger">★OP</Badge>{' '}</h4>
        </Modal.Header>
        <Modal.Body >
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} sx={{justifyContent:"center"}}>
            <div style={{display:"flex"}}>
                <Item>
                <img src="https://raw.githubusercontent.com/cq-pandora/assets/master/portraits/portrait_hikari_default.png" width="250px"></img>
                
                </Item>
                <Item>
                  <RaderChart data={json_data.data}></RaderChart>
                </Item>
                
            </div>
          
          </Grid>
        </Box>
        <hr></hr>
        <Container>
        <Typography></Typography>
        </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>닫기</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    margin: 5,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Port = styled(Paper)(({ theme }) => ({
    backgroundColor: "#9c9074",
    margin: 6,
    
    textAlign: 'center',
    height: 140,
    width: 100,
    color: theme.palette.text.secondary,
  }));


export default function ResponsiveGrid() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container sx={{justifyContent: "left"}}>
          {Array.from(Array(1)).map((_, index) => (
            <Grid key={index} spacing={2}>
                <Port onClick={() => setModalShow(true)}>
                    <div id="HeroCase">
                    <div id="HeroCard"> 
                        <img src="https://raw.githubusercontent.com/cq-pandora/assets/master/common/ui_icon_scroll_mini_03(x1).png" // 계승 , 승급 , 한정 구분
                            width={"32px"}
                        ></img>
                        </div>      
                     <img src="https://raw.githubusercontent.com/Seo-Faper/cq_assets/master/heroes/cos_ar_7_1.png" //용사 아이콘
                        
                     ></img>
                     <br></br>  
                    <strong>히카리
                        <img src="https://raw.githubusercontent.com/cq-pandora/assets/master/common/ui_classlabel_mini_3_archer.png" // 클래스 아이콘
                            width={"32px"}
                        ></img></strong>
                    </div>
                </Port>
            </Grid>
          ))}
        </Grid>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        dialogClassName="modal-90w"
      />
      </Box>
    );
  }