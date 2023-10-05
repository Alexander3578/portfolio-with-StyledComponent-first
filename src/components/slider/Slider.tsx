import React from 'react';
import {S} from './Slider_Styles'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'
import '../../styles/Slider.css'

// export const Slider: React.FC = () => {
//     return (
//         <S.Slider>
//             <FlexWrapper>
//                 <S.Slide>
//                     <S.TextSlider>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
//                         incididunt
//                         ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
//                         elit.</S.TextSlider>
//                     <S.SliderAuthor>@ivan ivanow</S.SliderAuthor>
//                 </S.Slide>
//             </FlexWrapper>
//             <S.Pagination>
//                 <span> </span>
//                 <span className={'active'}> </span>
//                 <span> </span>
//             </S.Pagination>
//         </S.Slider>
//     );
// };

type SlidePropsType = {
    text: string,
    userName: string
}

const Slide: React.FC<SlidePropsType> = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.TextSlider>{props.text}</S.TextSlider>
            <S.SliderAuthor>@{props.userName}</S.SliderAuthor>
        </S.Slide>
    )
}

const items = [
    <Slide
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicingelit.'}
        userName={'ivan ivanov'}/>,
    <Slide
        text={'\'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicingelit.\''}
        userName={'petr petrov'}/>,
    <Slide
        text={'\'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicingelit.\''}
        userName={'igor igorev'}/>
]

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>
)

