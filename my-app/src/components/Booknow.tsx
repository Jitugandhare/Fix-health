import React, { useRef, useState, ChangeEvent } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%; /* Adjust width based on your preference */
  max-width: 500px; /* Adjust max-width based on your preference */
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
`;

const ModalBody = styled.div`
  padding: 20px;
`;
const ModalFooter = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 10px; 
`;



const FormControl = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Heading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #666;
`;


const Box = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;

  h3 {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 10px;
  }

  svg {
    color: #007bff;
    font-size: 1.5rem;
    margin-right: 5px;
  }
`;


interface BookNowProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookNow: React.FC<BookNowProps> = ({ isOpen, onClose }) => {
  const initialRef = useRef<HTMLInputElement | null>(null);
  const finalRef = useRef<HTMLButtonElement | null>(null);

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [chiefComplaints, setChiefComplaints] = useState<string>("");

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPhoneNumber(e.target.value);
  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAge(e.target.value);
  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCity(e.target.value);
  const handleCompanyChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCompany(e.target.value);
  const handleChiefComplaintsChange = (e: ChangeEvent<HTMLInputElement>) =>
    setChiefComplaints(e.target.value);

  const handleSave = () => {
    nextStep();
  };

  return (
    <>
      {isOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalCloseButton onClick={onClose}>Close</ModalCloseButton>
            <ModalBody>
              <Heading>{currentStep === 4 ? "" : "Book an Appointment for FREE"}</Heading>
              <Text>{currentStep === 4 ? "" : "60+ Expert Physiotherapists for 200+ Conditions"}</Text>
              {currentStep === 1 && (
                <>
                  <FormControl>
                    <FormLabel>Your name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={handleNameChange}
                      ref={initialRef}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                    />
                  </FormControl>
                </>
              )}
              {currentStep === 2 && (
                <>
                  <FormControl>
                    <FormLabel>Age</FormLabel>
                    <Input
                      type="text"
                      placeholder="Age"
                      value={age}
                      onChange={handleAgeChange}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>City</FormLabel>
                    <Input
                      type="text"
                      placeholder="City"
                      value={city}
                      onChange={handleCityChange}
                    />
                  </FormControl>
                </>
              )}
              {currentStep === 3 && (
                <>
                  <FormControl>
                    <FormLabel>Company</FormLabel>
                    <Input
                      type="text"
                      placeholder="Company"
                      value={company}
                      onChange={handleCompanyChange}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Chief complaints</FormLabel>
                    <Input
                      type="text"
                      placeholder="Chief complaints"
                      value={chiefComplaints}
                      onChange={handleChiefComplaintsChange}
                    />
                  </FormControl>
                </>
              )}

              {currentStep === 4 && (
                <>
                  <Box>
                    <Heading>Thank you, {name}</Heading>
                    <Text>Your Appointment is Booked</Text>
                    <Text>
                      We will{" "}
                      <IoLogoWhatsapp /> you the appointment details on the number provided.
                    </Text>
                  </Box>
                </>
              )}
            </ModalBody>

            <ModalFooter>
              {currentStep > 1 && currentStep < 4 && (
                <Button onClick={prevStep}>Back</Button>
              )}

              {currentStep < 3 && (
                <Button onClick={nextStep}>Next</Button>
              )}
              {currentStep === 3 && (
                <Button onClick={handleSave}>Save</Button>
              )}
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default BookNow;
