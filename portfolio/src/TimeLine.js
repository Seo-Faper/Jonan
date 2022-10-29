import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: '2016 프로그래밍 입문',
    description: `당시 중학생이였던 저는 마인크래프트라는 게임을 하기 위해 처음 프로그래밍에 입문했습니다.
                자바를 이용해 친구들과 함께 멀티 플레이를 할 수 있는 서버를 열었습니다.`,
  },
  {
    label: '2018 밀양고등학교 앱 개발',
    description: `고등학교 시절 친구들과 JSP를 이용해 학교의 급식 메뉴 정보와 각종 공지사항을 크롤링 하여 간편하게 보여주는 '밀고 IN' 이라는 어플리케이션을 만들어 플레이스토어에 출시 했습니다.`,
  },
  {
    label: '2020 청주대학교 소프트웨어융합학부 입학',
    description: `대학교에 입학과 동시에 코로나19가 시작되었고 더 많은 시간을 컴퓨터와 보낼 수 있었습니다.
                  그렇게 저는 청주대학교 해킹동아리였던 CUHA에 가입하여 중소기업밴처부가 주관하는 'Caldera for ICS' 프로젝트의 연구원으로 활동할 수 있었습니다.`,
  },
  {
    label: '2021 대한민국 해군 CERT 입대',
    description: `대학교를 휴학한 후 해군 정보보호병으로 입대하여 군수사령부에서 침해사고대응팀(CERT)로 근무했습니다. 실전과 같은 사이버 훈련과 실제 침해사고들을 겪으면서 
                네트워크 및 서버에 대한 전반적인 지식의 폭을 넓힐 수 있었고 군 장병 공개 SW 해커톤에 참가하여 JavaScript, React JS를 입문하게 됩니다.`,
  },
];

export default function TimeLine() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 4 ? (
                  <Typography variant="caption">현재</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="계속"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? '끝' : '계속'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
