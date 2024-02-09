import React, { useState } from "react";
import styled from "styled-components";

interface Doctor {
  id: number;
  imgSrc: string;
  name: string;
  specialization: string;
  experience: string;
}

interface SliderProps {
  items: Doctor[];
}

const Slider: React.FC<SliderProps> = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 4, 0));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => Math.min(prevSlide + 4, items.length - 4));
  };

  return (
    <Container>
      <SliderContainer style={{ transform: `translateX(-${currentSlide * 310}px)` }}>
        {items.map((item, index) => (
          <SlideCard key={index}>
            <Image src={item.imgSrc} alt={item.name} />
            <CardBody>
              <h3>{item.name}</h3>
              <p>{item.specialization}</p>
              <p style={{ color: "blue", fontSize: "16px" }}>{item.experience}</p>
            </CardBody>
          </SlideCard>
        ))}
      </SliderContainer>
      <ButtonLeft onClick={handlePrev} disabled={currentSlide === 0}>
        {"<"}
      </ButtonLeft>
      <ButtonRight onClick={handleNext} disabled={currentSlide === items.length - 4}>
        {">"}
      </ButtonRight>
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  margin-top: 50px;
  width: 90%;
  overflow: hidden;
  margin: 0 auto 50px;
`;

const SliderContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const SlideCard = styled.div`
  flex: 0 0 300px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  max-height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const CardBody = styled.div`
  padding: 15px;
`;

const ButtonLeft = styled.button`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: grey;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const ButtonRight = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(50%, -50%);
  border-radius: 50%;
  background-color: grey;
  border: none;
  padding: 10px;
  cursor: pointer;
`;
