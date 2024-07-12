'use client'
import PlusIcon from "@/components/PlusIcon";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

import check from '../components/check.png'
import checked from '../components/checked.png'
import trash from '../components/trash.png'

import EmptyList from "@/components/EmptyList";

const PageContainer = styled.div`
  margin-top: -27px;
  align-items: center;
  justify-content: center;
  
`

const InputContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const InputStyled = styled.input`
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  margin-left: 352px;

  max-width: 638px;
  max-height: 54px;

  background-color: var(--gray-500);
  border: none;
  border-radius: 8px;

  color: var(--Gray-300, #808080);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`

const Button = styled.button`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  margin: 0px 8px;
  margin-right: 352px;
  width: 90px;
  height: 52px;
  background-color: var(--bg-button);
  border: none;
  border-radius: 8px;

  font-size: 14px;
  font-family: inherit;
  font-weight: 600;
  color: white;

  cursor: pointer;

  svg {
    margin-left: 5px;
  }

  &:hover {
    background-color: #035e92;
  }

`

const ListContainer = styled.div`
    margin-left: 31%;
    margin-top: 64px;

    width: 736px;
    height: 287px;
`

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

const TextTarefas = styled.text`
    color: var(--text-color);
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const TextConcluidas = styled.text`
    color: var(--purple-color);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const CirclePointerCriadas = styled.div`
    width: 25px;
    height: 19px;
    padding: 0px 10px;
    border-radius: 999px;
    background-color: var(--gray-400);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 8px;
    flex-direction: row;
`

const CirclePointerConcluidas = styled.div`
    width: 60px;
    height: 19px;
    padding: 0px 10px;
    border-radius: 999px;
    background-color: var(--gray-400);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 8px;
    flex-direction: row;
`

const TextCircle = styled.text`
    color: var(--gray-200);
    font-family: inherit;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const ToDoList = styled.div`
    display: flex;
    padding: 16px;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    flex-direction: row;
    justify-content: space-between;

    border-radius: 8px;
    border: 1px solid var(--gray-400);
    background: var(--gray-500);
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
    margin-top: 24px;
`

const ToDoListText = styled.text`   
    color: var(--gray-100);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; 
    display: flex;
    flex: 1;
`

const ToDoListTextDashed = styled.text`   
    color: var(--gray-300);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; 
    display: flex;
    flex: 1;

    text-decoration: line-through;
`

const ToDoListTrash = styled(Image)`   
    display: flex;
    width: 38px;
    height: 38px;
    padding: 5px 5.522px 5px 6px;
    justify-content: center;
    align-items: center;
`

export default function Home() {
  
  const [list, setList] = useState<any[]>([])
  const [listUnCheked, setListUnChecked] = useState<string[]>([])
  const [listChecked, setListChecked] = useState<string[]>([])
  const [input, setInput] = useState<any>('')

  function createItem(item : string) {
    if (list.includes(item) && item.trim().length == 0) {
      return null;
    }

    setList(props => [...props, item])
    setListUnChecked(props => [...props, item])
    setInput('')
  }

  const handleInputChange = (e: any) => {

    setInput(e.target.value);
  };

  function checkItem(item : any) {
    setListChecked(props => [...props, item])

    const newList = listUnCheked.filter(x => x != item)
    setListUnChecked(newList)
  }

  function unCheckedItem(item : any) {
    setListUnChecked(props => [...props, item])

    const newList = listChecked.filter(x => x != item)
    setListChecked(newList)
  }

  function deleteItem(item : any) {
    if (listChecked.includes(item)) {
      const newList = listChecked.filter(x => x != item)
      setListChecked(newList)
    }

    if (list.includes(item)) {
      const newList = list.filter(x => x != item)
      setList(newList)
    }

    
  }

  return (
    <PageContainer>

      <InputContainer>
        <InputStyled value={input} onChange={handleInputChange} placeholder="Adicione uma nova tarefa"/>
        <Button onClick={() => createItem(input)}>Criar<PlusIcon/></Button>
      </InputContainer>

      <ListContainer>
            <Row>
                <Row>
                    <TextTarefas>Tarefas criadas</TextTarefas>
                    <CirclePointerCriadas>
                        <TextCircle>{list.length}</TextCircle>
                    </CirclePointerCriadas>
                </Row>
                <Row>
                    <TextConcluidas>Concluídas</TextConcluidas>
                    {list.length > 0 ? 
                    <CirclePointerConcluidas>
                        <TextCircle>{listChecked.length} de {list.length}</TextCircle>
                    </CirclePointerConcluidas>
                    :
                    <CirclePointerCriadas>
                        <TextCircle>0</TextCircle>
                    </CirclePointerCriadas>
                    }
                </Row>
            </Row>

            {list.length > 0 ? 
                list.map((item) => {

                    return(
                        <ToDoList key={item}>
                            <Image onClick={() => !listChecked.includes(item) ? checkItem(item) : unCheckedItem(item)} src={listChecked.includes(item) ? checked : check} alt="" width={24} height={24}/>
                            {listChecked.includes(item) ? <ToDoListTextDashed>{item}</ToDoListTextDashed> : <ToDoListText>{item}</ToDoListText>}
                            <ToDoListTrash onClick={() => deleteItem(item)} src={trash} alt=""/>
                        </ToDoList>
                    )
                })
            :
            <EmptyList/>
        }

        </ListContainer>
    </PageContainer>
  );
}
