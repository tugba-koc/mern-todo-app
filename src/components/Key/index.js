import React from 'react'
import {Container, Text} from './styles'

const Key = ({todos}) => {
    let completedArr = todos ? todos?.filter((el)=>el.completed === true) : [];

  return (
    <Container>
        <Text>Total : {todos?.length} task</Text>
        <Text>Completed : {completedArr?.length} task</Text>
        <Text>Not Completed : {todos?.length - completedArr?.length} task</Text>
    </Container>
  )
}

export default Key