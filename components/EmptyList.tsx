import Image from "next/image"
import styled from "styled-components"

import clipboard from './Clipboard.png'

const EmptyListContainer = styled.div`
    display: flex;
    padding: 64px 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;

    border-radius: 8px;
    border-top: 1px solid var(--Grey-400, #333);
    margin-top: 24px;
`

const TextTitleStyle = styled.text`
    color: var(--gray-300);
    text-align: center;
    font-family: inherit;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
`
const SubTextTitleStyle = styled.text`
    color: var(--gray-300);
    font-family: inherit;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-top: -15px;
`

export default function EmptyList() {

    return(
        <EmptyListContainer>
            <Image src={clipboard} alt="" width={56} height={56}/>
            <TextTitleStyle>Você ainda não tem tarefas cadastradas</TextTitleStyle>
            <SubTextTitleStyle>Crie tarefas e organize seus itens a fazer</SubTextTitleStyle>
        </EmptyListContainer>
    )
}