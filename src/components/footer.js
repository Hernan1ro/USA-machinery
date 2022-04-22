import React, { useState } from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import arowRightIcon from "../images/arowRightIcon.svg"
const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  max-width: 1200px;

  label{
    width: 25px;
    border-bottom: 2px solid var(--white);
    height: 100%;
  }
  label img {
    width: inherit;
    height: 100%;
  }
  input {
    height: inherit;
    width: -webkit-fill-available;
    background-color: var(--gray-primary);
    border: none;
    border-bottom: 2px solid var(--white);
    outline: none;
    color:white;
  }
  h6 {
    font-size: 2rem;
    color: var(--white);
    margin: 2rem 0 0 0;
    font-weight: 500;
  }
  p {
    line-height: 1;
    color: var(---third-gray);
    font-size: 1.6rem;
    margin: 1rem 0;
  }
  .arrow{
    display:none;
  }
  @media (min-width: 768px) {
    margin-left: 34%;
  }
`

const MessageErrorEmail = styled.p`
  color:red !important;
`;

const Footer = ({mail, handleMail, handlSendEmailModal}) => {
  const year = new Date().getFullYear()

  const [emailEmpty, setEmailEmpty] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const openModalVerification = (e) =>{
      if(mail === ""){
        setEmailEmpty(true);
      }else{
        setEmailEmpty(false);
      }
      if (/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i.test(mail)){
        handlSendEmailModal(true);
        setEmailError(false);
      }else{
        setEmailError(true);
      }
  }
  
  return (
    <footer
      id="contacto"
      css={css`
        background-color: var(--gray-primary);
        padding: 2rem 2rem 4rem 2rem;
        margin: 0 auto;
        position: relative;
        @media (min-width: 768px) {
          padding: 2rem 2rem 12rem 2rem;
        }
      `}
    >
      <FooterContainer>
        <span
          css={css`
            color: var(--white);
            font-weight: 500;
            font-size: 2rem;
          `}
        >
          Quédate en contacto
        </span>
        <span
          css={css`
            color: var(--ligt-gray);
            font-weight: 500;
            font-size: 2rem;
          `}
        >
          Compártenos tu correo
        </span>
        <form 
          css={css`
            height: 5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 600px;
            @media (min-width: 768px) {
            }
          `}
        >
          <input required type="email" name="mail" value={mail} onChange={(e)=>handleMail(e.target.value)}/>
          <label for="arrow" 
          css={css`
              cursor:pointer;
          `}>
            <img src={arowRightIcon} alt/>
          </label >
          <input className="arrow" id="arrow" onClick={() => openModalVerification()}></input>
        </form>
         <div className="error_mail"
         css={css`
         @media (min-width: 768px) {
           margin-bottom: 8rem;
         }
       `}>
          {emailEmpty && <MessageErrorEmail>Este campo es requerido</MessageErrorEmail>}
          {emailError && <MessageErrorEmail>Ingrese un correo valido</MessageErrorEmail>}
         </div>
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 1rem;
          `}
        >
          <div>
            <h6>Ubicación</h6>
            <p>Río Pánuco 291 Nuevo Repueblo 64720 Monterrey, N.L.</p>
          </div>
          <div>
            <h6>Contacto</h6>
            <p>
              Horarios de Oficina <br /> 8:30 - 6:00 <br /> 81 8358 9390{" "}
            </p>
          </div>
        </div>
        <p
          css={css`
            @media (min-width: 768px) {
              position: absolute;
              left: 7rem;
              bottom: 4rem;
            }
          `}
        >
          &copy; {year} USA Montacargas
        </p>
        
      </FooterContainer>
    </footer>
  )
}

export default Footer
