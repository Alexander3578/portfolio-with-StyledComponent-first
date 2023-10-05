import React from 'react';
import {S} from '../HeaderMenu_Styles'


const menuItems = [
    {
        title: 'Home',
        href: 'main'
    },
    {
        title: 'Skills',
        href: 'skills'
    },
    {
        title: 'Works',
        href: 'works'
    },
    {
        title: 'Testimony',
        href: 'testimony'
    },
    {
        title: 'Contact',
        href: 'contact'
    }];

export const Menu: React.FC = () => {
    return (
        <ul>
            {menuItems.map((el, index) => {
                return (<S.MenuItem key={index}>
                    <S.NavLink to={el.href}
                               smooth={true}
                               activeClass='active'
                               spy = {true}
                               offset={5}>
                        {/*spy - делает так, чтоб библиотека добавляла класс activeClass  в момент когда наша компоненты находится в области видимости на экране */}
                        {el.title}
                        <S.Mask>
                            <span>{el.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{el.title}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.MenuItem>)
            })}
        </ul>
    );
};



