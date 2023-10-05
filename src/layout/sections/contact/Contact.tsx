import React from 'react';
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {ContactForm} from "./contactForm/ContactForm";
import {Container} from "../../../components/Container";
import {S} from './Contact_Styles'

export const Contact:React.FC = () => {
    return (
        <S.Contact id ={'contact'}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <ContactForm/>
            </Container>
        </S.Contact>
    );
};

