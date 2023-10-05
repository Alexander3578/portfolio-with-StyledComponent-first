import React from 'react';
import {Menu} from "../menu/Menu";
import {S} from '../HeaderMenu_Styles'

export const DesktopMenu:React.FC = () => {
    return (
        <S.DesktopMenu>
            <Menu/>
            {/*<ul>*/}
            {/*    {props.menuItems.map((el, index) => {*/}
            {/*        return (<ListItem key={index}>*/}
            {/*            <Link href="">*/}
            {/*                {el}*/}
            {/*                <Mask>*/}
            {/*                    <span>{el}</span>*/}
            {/*                </Mask>*/}
            {/*                <Mask>*/}
            {/*                    <span>{el}</span>*/}
            {/*                </Mask>*/}
            {/*            </Link>*/}
            {/*        </ListItem>)*/}
            {/*    })}*/}
            {/*</ul>*/}
        </S.DesktopMenu>
    );
};


