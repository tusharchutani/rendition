import * as React from 'react'
import { storiesOf, action } from '@storybook/react'
import { Button, Box } from '../'

storiesOf('Tooltip', module)
  .addDecorator(story => <Box m={4}>{story()}</Box>)
  .addWithInfo('Standard', () => {
    return (
      <Box>
        <Button
          tooltip='Tooltip on top'
          m={2}
          primary
          onPress={action('case-1')}
        >
          Tooltip on top
        </Button>
        <Button
          tooltip={{ text: 'Tooltip on right', placement: 'right' }}
          m={2}
          secondary
          onPress={action('case-2')}
        >
          Tooltip on right
        </Button>
        <Button
          tooltip={{ text: 'Tooltip on bottom', placement: 'bottom' }}
          m={2}
          success
          onPress={action('case-3')}
        >
          Tooltip on bottom
        </Button>
        <Button
          tooltip={{ text: 'Tooltip on left', placement: 'left' }}
          m={2}
          tertiary
          onPress={action('case-4')}
        >
          Tooltip on left
        </Button>
      </Box>
    )
  })
  .addWithInfo('Click', () => {
    return (
      <Box>
        <Button
          tooltip={{ text: 'Tooltip on top', trigger: 'click' }}
          m={2}
          primary
          onPress={action('case-1')}
        >
          Tooltip on top
        </Button>
        <Button
          tooltip={{
            text: 'Tooltip on right',
            trigger: 'click',
            placement: 'right'
          }}
          m={2}
          secondary
          onPress={action('case-2')}
        >
          Tooltip on right
        </Button>
        <Button
          tooltip={{
            text: 'Tooltip on bottom',
            trigger: 'click',
            placement: 'bottom'
          }}
          m={2}
          success
          onPress={action('case-3')}
        >
          Tooltip on bottom
        </Button>
        <Button
          tooltip={{
            text: 'Tooltip on left',
            trigger: 'click',
            placement: 'left'
          }}
          m={2}
          tertiary
          onPress={action('case-4')}
        >
          Tooltip on left
        </Button>
      </Box>
    )
  })
