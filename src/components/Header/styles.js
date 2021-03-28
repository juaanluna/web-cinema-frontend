import styled from 'styled-components'
import { DeadColors } from '../../Styles/colors'

export const Container = styled.div`
  background-color:${DeadColors.POZE10};
  opacity:0.9;
  height:80px;
  display:flex;
    /* border-bottom:5px solid ${DeadColors.POZE8}; */
  align-items:center;
  flex-direction:row;
  justify-content:space-around;

`
export const Text = styled.div`
  font-family: 'Indie Flower', cursive;
  color:#fff;
  font-size: 20px;
`
export const MenuText = styled.div`
  font-family: 'Indie Flower', cursive;
  cursor: pointer;
  color:#fff;
  font-size: 20px;
`

export const ButtonContainer = styled.button`
  border-width:0;
  font-family: 'Indie Flower', cursive;
  background-color:transparent;
  outline:0 !important;
  font-size:20px;
  align-self:center;
  :active{color:${DeadColors.POZE4}; opacity:0.70};
  &
  :hover{color:${DeadColors.POZE4}}
`