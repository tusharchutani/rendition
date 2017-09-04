import { h } from 'preact'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import Input from '../components/Input'

const Container = styled.div`margin: 30px;`

storiesOf('Input', module)
  .addWithInfo('Standard', () => {
    return (
      <Container>
        <Input placeholder='Placeholder Text' />
      </Container>
    )
  })
  .addWithInfo('Emphasized', () => {
    return (
      <Container>
        <Input emphasized placeholder='Placeholder Text' />
      </Container>
    )
  })
