import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from 'styled-components';
import Slider from './Slider'; 

interface Doctor {
  id: number;
  imgSrc: string;
  name: string;
  specialization: string;
  experience: string;
}

const MeetNow: React.FC = () => {
  const items: Doctor[] = [
    {
      id: 1,
      imgSrc:
        "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?size=626&ext=jpg&ga=GA1.1.784249210.1705073781&semt=sph",
      name: "Dr. Jayesh Verma",
      specialization: "MBBS ,MD",
      experience: "14 years of experience",
    },
    // Add other doctor objects here
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % items.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [items.length]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const darkTheme = {
    background: '#000000',
    color: '#ffffff',
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Content>
          <Heading color={"#87adeb"} fontSize={{ base: "25px", sm: "20px", md: "40px", lg: "40px" }}>
            Meet our Experts
          </Heading>
          <SubHeading color="white" fontWeight={{ base: "600", sm: "600", md: "700", lg: "700", "2xl": "700" }} fontSize={"18px"} lineHeight={{ base: "30px", sm: "none", md: "60px", lg: "60px", "2xl": "60px" }}>
            Experience the Benefits of Advanced Technology and Expert Care
          </SubHeading>
          <SliderContainer>
            <Slider items={items} currentSlide={currentSlide} />
            {isMobile && (
              <ButtonWrapper>
                <Button colorScheme="blue" color="white" padding="10px 20px" marginTop={"30px"} onClick={() => setCurrentSlide((currentSlide + 1) % items.length)}>
                  See All
                </Button>
              </ButtonWrapper>
            )}
          </SliderContainer>
          <TextWrapper>
            <SectionHeading color={"#87adeb"} fontSize={"25px"} fontWeight={"bold"}>Patient Recovery Stories</SectionHeading>
            <Text color="white" fontWeight={"bold"} lineHeight={{ base: "50px", sm: "inherit", md: "inherit", lg: "inherit", "2xl": "inherit" }}>Don't just take our word for it</Text>
            <StatsWrapper>
              <StatBox>
                <StatIcon>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
                  </svg>
                </StatIcon>
                <StatText>
                  <Text fontWeight={"bold"} marginTop={"10px"}>20000+</Text>
                  <Text>Patients</Text>
                </StatText>
              </StatBox>
            </StatsWrapper>
          </TextWrapper>
        </Content>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  box-sizing: border-box;
`;

const Content = styled.div`
  text-align: center;
`;

const Heading = styled.h1<{ color?: string; fontSize?: Record<string, string> }>`
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
`;

const SubHeading = styled.p<{ color?: string; fontWeight?: Record<string, string>; fontSize?: string; lineHeight?: Record<string, string> }>`
  color: ${({ color }) => color || 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeight || 'inherit'};
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  line-height: ${({ lineHeight }) => lineHeight || 'inherit'};
`;

const SliderContainer = styled.div`
  position: relative; /* Needed for absolute positioning of button */
  margin-top: 20px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Button = styled.button<{ theme: { background: string; color: string }; padding?: string; marginTop?: string }>`
  background-color: ${({ theme }) => theme.background || '#00acc1'};
  color: ${({ theme }) => theme.color || 'white'};
  padding: ${({ padding }) => padding || '10px 20px'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #007f8d;
  }
`;

const TextWrapper = styled.div`
  text-align: center;
`;

const SectionHeading = styled.h2<{ color?: string; fontSize?: string; fontWeight?: string }>`
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeight || 'inherit'};
`;

const Text = styled.p<{ color?: string; fontWeight?: string; lineHeight?: Record<string, string> }>`
  color: ${({ color }) => color || 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeight || 'inherit'};
  line-height: ${({ lineHeight }) => lineHeight || 'inherit'};
`;

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f3fbfc;
  padding: 10px 0;
  margin-top: 50px;
  width: 80%;
  margin: auto;
`;

const StatBox = styled.div`
  text-align: center;
`;

const StatIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 12px;
  font-size: 32px;
  color: white;
  background-color: #009db0;
`;

const StatText = styled.div`
  margin-top: 10px;
`;

export default MeetNow;
