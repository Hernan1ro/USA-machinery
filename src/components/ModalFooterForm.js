import React, { useState } from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import closeIcon from "../images/close.png"
import arowRightIcon from "../images/arowRightIcon.svg"
import "../css/styles.css";

const ModalFooterFormContainer = styled.div`
    position: relative;
    max-width: 800px;
    color:white;
    text-align:center;
`;

const Option = styled.p`
   font-size: 1.1em;
   width:100%;
   padding: 8px 25px;
   color:white;
   border: 1px solid white;
   margin: 18px 0;
   display:flex;
   justify-content: center;

   :hover{
       cursor: pointer;
       background: #5d5d5d;
   }

   @media (min-width: 768px) {
    justify-content: space-between;
    }
  
`;

const ImgCloseIcon = styled.img`
   cursor: pointer;
   position:absolute;
   top:10px;
   right:30px;
   width: 50px;
`;

const InputSendMail = styled.input`
    text-decoration: none;
    font-weight: 400;
    color: var(--gray-primary);
    background-color: var(--orange-primary);
    max-width: 14rem;
    padding: 1rem 10rem;
    padding-top: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15rem;
    font-size: 1.2em;
    border: none;
    cursor: pointer;
    margin: 0 auto;
    @media (min-width: 768px) {
        font-size: 1em;
    }
`;

const ModalFooterForm = ({mail, handlSendEmailModal}) => {
    const year = new Date().getFullYear()
    
    const [how_can_we_help_you_txt, setHow_can_we_help_you_txt] = useState("");

    return (
    <form 
    action={`https://formsubmit.co/94722662edb999e7d6116babf4e2652e`} 
    method="POST" 
    css={css`
        z-index: 1000;
        position: fixed;
        top: 0;
        height: 100vh;
        width: 100%;
        padding: 30px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: var(--gray-primary);
        @media (min-width: 768px) {
        }
    `}
    >
        <ImgCloseIcon src={closeIcon} alt onClick={()=>handlSendEmailModal(false)}/>
        <ModalFooterFormContainer>
            <h1
                css={css`
                font-weight: 400;
                @media (min-width: 768px) {
                    font-size: 3em;
                }
            `}
            >¿En qué le podemos ayudar?</h1>
            <Option className={how_can_we_help_you_txt === "Venta/Renta de Montacargas" && "selected"}
            onClick={()=>setHow_can_we_help_you_txt("Venta/Renta de Montacargas")} >
                Venta/Renta de Montacargas
                <img src={arowRightIcon} alt
                css={css`
                    cursor:pointer;
                    width: 20px;
                    display: none;
                    @media (min-width: 768px) {
                        display: block;
                    }
                `}
                />
            </Option>
            <Option className={how_can_we_help_you_txt === "Venta de Refacciones" && "selected"}
            onClick={()=>setHow_can_we_help_you_txt("Venta de Refacciones")} >
                Venta de Refacciones
                <img src={arowRightIcon} alt
                css={css`
                    cursor:pointer;
                    width: 20px;
                    display: none;
                    @media (min-width: 768px) {
                        display: block;
                    }
                `}
                />
            </Option>
            <Option className={how_can_we_help_you_txt === "Regeneración de Baterias" && "selected"}
            onClick={()=>setHow_can_we_help_you_txt("Regeneración de Baterias")} >
                Regeneración de Baterias
                <img src={arowRightIcon} alt
                css={css`
                    cursor:pointer;
                    width: 20px;
                    display: none;
                    @media (min-width: 768px) {
                        display: block;
                    }
                `}
                />
            </Option>
            <Option className={how_can_we_help_you_txt === "Pólizas de Mantenimiento" && "selected"}
            onClick={()=>setHow_can_we_help_you_txt("Pólizas de Mantenimiento")} >
                Pólizas de Mantenimiento
                <img src={arowRightIcon} alt
                css={css`
                    cursor:pointer;
                    width: 20px;
                    display: none;
                    @media (min-width: 768px) {
                        display: block;
                    }
                `}
                />
            </Option>
            <input type="email" name="email" value={mail} hidden={true}/>
            
            <textarea name="mensaje" 
            value={`${how_can_we_help_you_txt}`} hidden={true}/>
            <InputSendMail className="arrow" id="arrow" type="submit" value="ENVIAR" ></InputSendMail>
        </ModalFooterFormContainer>
        <small
        css={css`
            color:white;
            position: absolute;
            left: 30px;
            bottom: 10px;
            @media (min-width: 768px) {
            }
        `}>
            &copy; {year} USA <br/> Montacargas
        </small>
    </form>

    )
}

export default ModalFooterForm