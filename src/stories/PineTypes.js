import { h } from 'preact'
import { storiesOf, action } from '@storybook/react'
import styled from 'styled-components'
import PineTypes from '../components/PineTypes'

const Container = styled.div`margin: 30px;`

storiesOf('PineTypes', module)
  .addWithInfo('Edit', () => {
    return (
      <Container>
        <h2>Boolean</h2>
        <PineTypes.Boolean.Edit value onChange={action('Boolean change')} />
        <h2>Case Insensitive Text</h2>
        <PineTypes['Case Insensitive Text'].Edit
          value
          onChange={action('Boolean change')}
        />
      </Container>
    )
  })
  .addWithInfo('Display', () => {
    return <Container />
  })
