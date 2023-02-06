import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/esm/Container';
import '../css/article.css'
import NestedGrid from './NestedGrid';

const classData = {"워리어":"ui_icon_classlabel_warrior_01.png",
                   "팔라딘": "ui_icon_classlabel_paladin_01.png",
                   "아처": "ui_icon_classlabel_archer_01.png",
                   "헌터": "ui_icon_classlabel_hunter_01.png",
                   "위자드":"ui_icon_classlabel_wizard_01.png"
                  };
const setTitle = (title) =>{
  let url = "https://raw.githubusercontent.com/cq-pandora/assets/master/common/"+classData[title];
  return (
    <div>
    <img src={url}
    height="22"
    width="18"></img>
    </div>
  );
}

function ControlledTabsExample() {
  const [key, setKey] = useState('all');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="all" title="전체">
        <Container  maxWidth="md" id='main'>
          <div >
            <NestedGrid ></NestedGrid>
          </div>
        </Container>
      </Tab>
      <Tab eventKey="c1" title={setTitle("워리어")}>
        <h1>워리어</h1>
      </Tab>
      <Tab eventKey="c2" title={setTitle("팔라딘")}>
        <h1>팔라딘</h1>
      </Tab>
      <Tab eventKey="c3" title={setTitle("아처")}>
        <h1>아처</h1>
      </Tab>
      <Tab eventKey="c4" title={setTitle("헌터")}>
        <h1>헌터</h1>
      </Tab>
      <Tab eventKey="c5" title={setTitle("위자드")}>
        <h1>위자드</h1>
      </Tab>
    </Tabs>
  );
}

export default ControlledTabsExample;