import React from 'react';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Icon} from "../../components/icon/Icon";
import {S} from './Footer_Styles'

const iconParametrs = [
    {
        width: '21px',
        height: '21px',
        viewBox: '0 0 21px 21px',
        iconId: 'iconInst'
    },
    {
        width: '21px',
        height: '21px',
        viewBox: '0 0 21px 21px',
        iconId: 'iconTelegram'
    },
    {
        width: '21px',
        height: '21px',
        viewBox: '0 0 21px 21px',
        iconId: 'iconVK'
    },
    {
        width: '21px',
        height: '21px',
        viewBox: '0 0 21px 21px',
        iconId: 'iconLinkedin'
    },
]

export const Footer = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.Name>Alex</S.Name>
                <S.SocialList>
                    {
                        iconParametrs.map((parametr, index) => {
                            return(
                                <S.SocialItem key = {index}>
                                    <S.SocialLink>
                                        <Icon height={parametr.height}
                                              width={parametr.width}
                                              viewBox={parametr.viewBox}
                                              iconId={parametr.iconId}/>
                                    </S.SocialLink>
                                </S.SocialItem>
                            )
                        })
                    }
                </S.SocialList>
                <S.Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

