import React, {ElementRef, useRef} from 'react';
import {Button} from "../../../../components/Button";
import {S} from '../Contact_Styles';
import emailjs from '@emailjs/browser';


export const ContactForm:React.FC = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return

        emailjs.sendForm('service_yaoykgc', 'template_7unr2cg', form.current, 'Lh7K-TIPOHrHRF4yF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <S.Form ref ={form} onSubmit={sendEmail}>
            <S.Field required placeholder={'Name'} name = {'user_name'}/>
            <S.Field required placeholder={'email'} name={'email'}/>
            <S.Field required placeholder={'Subject'} name={'subject'}/>
            <S.Field required placeholder={'Message'} as={'textarea'} name={'message'}/>
            <Button type={'submit'}>Send message</Button>
        </S.Form>
    );
};

