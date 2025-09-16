import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import emailjs from "emailjs-com"; // <-- import EmailJS

// Animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0);  }
`;

const ContactSection = styled.section`
  padding: 3rem 2rem;
  background: linear-gradient(to bottom, #59625c 0%, #555e56 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const SectionHeading = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 4rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: 1px;
  position: relative;
    @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  /* &::after {
    content: "";
    display: block;
    margin: 12px auto 0;
    width: 80px;
    height: 4px;
    background: #ff4d4d;
    border-radius: 2px;
  } */
`;

const ContactCard = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  max-width: 1100px;
  width: 100%;
  animation: ${fadeIn} 1s ease;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }

`;

// Left Info
const InfoSection = styled.div`
  flex: 1;
  background: #F6EFE2;
  color: #610D0D;
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
 h2 {
    font-size: 2rem;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 1.6rem;
      margin-bottom: 20px;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  .info-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    transition: transform 0.3s ease;

    svg {
      font-size: 1.6rem;
      margin-right: 15px;
      color: #610D0D;
            @media (max-width: 480px) {
        font-size: 1.4rem;
      }
    }

    p {
      font-size: 1.1rem;

      @media (max-width: 768px) {
        font-size: 1rem;
      }

      @media (max-width: 480px) {
        font-size: 0.95rem;
      }
    }
  }

  @media (max-width: 900px) {
    padding: 30px 20px;
  }
  
`;

// Right Form
const FormSection = styled.div`
  flex: 2;
  padding: 50px 40px;
  background: #fff;

   h2 {
    font-size: 2rem;
    color: #610d0d;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 1.6rem;
      margin-bottom: 20px;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input,
  textarea {
    width: auto;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s ease, transform 0.2s ease;

    &:focus {
      border-color: #610d0d;
      /* transform: scale(1.02); */
    }
     @media (max-width: 480px) {
      padding: 12px;
      font-size: 0.95rem;
    }
  }

  button {
    background: #610d0d;
    color: white;
    padding: 14px 25px;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;

    &:hover {
      background: #610d0d;
      transform: translateY(-3px);
    }
     @media (max-width: 480px) {
      padding: 12px 20px;
      font-size: 1rem;
    }
  }
    @media (max-width: 900px) {
    padding: 30px 20px;
  }
`;

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_90opjoe",    // replace with your EmailJS service ID
        "template_gigz1sm",   // replace with your EmailJS template ID
        formRef.current,
        "RaWQSv26iLBRkK279"     // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <ContactSection id="contact">
      <SectionHeading>Contact Me</SectionHeading>

      <ContactCard>
        {/* Info Section */}
        <InfoSection>
          <h2>Contact Information</h2>
          <div className="info-item">
            <FiMail />
            <p>hafsahtabassum01@gmail.com</p>
          </div>
          <div className="info-item">
            <FiPhone />
            <p>+92 3248559340</p>
          </div>
          <div className="info-item">
            <FiMapPin />
            <p>Lahore, Pakistan</p>
          </div>
        </InfoSection>

        {/* Form Section */}
        <FormSection>
          <h2>Send Me a Message</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" name="from_name" placeholder="Your Name" required />
            <input type="email" name="from_email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </form>
          {status && <p style={{ marginTop: "1rem", color: "#610D0D" }}>{status}</p>}
        </FormSection>
      </ContactCard>
    </ContactSection>
  );
};

export default Contact;