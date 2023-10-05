import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";

//WORKS

const Works = styled.section`
  position: relative;

  ${FlexWrapper} {
    gap: 30px;
  }
`

//WORK

const WorkCard = styled.div`
  background-color: ${theme.colors.secondaryBg};
  //width: 400px;
  //flex-grow: 1;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }

  // @media ${theme.media.desktop} {
  //   max-width: 540px;
  // }
`

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    opacity: 0;
    transition: ${theme.animations.transition};
    
    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  &::before {
    content: '';

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(2px);
    opacity: 0;
    transition: ${theme.animations.transition};
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const CardDescrip = styled.div`
  padding: 25px 20px;
`

const Title = styled.h3`

`

const Text = styled.p`
  margin: 14px 0 10px;
`

//WORK MENU

const Menu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }

  //margin-bottom: 40px;
`

const ListItem = styled.li`

`

export const S = {
    Works,
    WorkCard,
    ImageWrapper,
    Image,
    CardDescrip,
    Title,
    Text,
    Menu,
    ListItem
}