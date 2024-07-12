'use client'
import Image from "next/image"
import styled, { createGlobalStyle } from "styled-components"

import photo from './Logo.png'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;


const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    background-color: var(--gray-700);
    align-items: center;
    justify-content: center;
`

const ImageStyled = styled(Image)`
    width: 126px;
    height: 48px;
    flex-shrink: 0;
`

export default function Header() {

    return(
        <>
            <GlobalStyle/>
            <HeaderContainer>
                <ImageStyled src={photo} alt=""/>
            </HeaderContainer>
        </>
    )
}