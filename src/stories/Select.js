import { h } from 'preact'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import Select from '../components/Select'

const Container = styled.div`margin: 30px;`

storiesOf('Select', module)
  .addWithInfo('Standard', () => {
    return (
      <Container>
        <Select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Select>
      </Container>
    )
  })
  .addWithInfo('Emphasized', () => {
    return (
      <Container>
        <Select emphasized>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Select>
      </Container>
    )
  })
