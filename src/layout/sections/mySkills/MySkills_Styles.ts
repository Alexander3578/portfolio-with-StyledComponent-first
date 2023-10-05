import styled from "styled-components";
import {theme} from "../../../styles/Theme";

//SKILLS

const Skills = styled.section`
    position: relative;
`

//Skill

const Skill = styled.div`
  width: 330px;
  flex-grow: 1;
  padding: 42px 20px 53px;
  
  @media ${theme.media.mobile} {
    padding: 62px 0 40px;
  }
`

const IconWrapper = styled.div`
  position: relative;
  
  &::before{
    content: '';
    display: inline-block;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.10);
    transform: rotate(-45deg) translate(-50%, -50%);
    
    position: absolute;
    left: 50%;
    top:50%;
    transform-origin: top left;
  }
`

const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  font-family: Josefin Sans, sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`

const SkillText = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`

export const S = {
    Skills,
    Skill,
    SkillText,
    SkillTitle,
    IconWrapper
}