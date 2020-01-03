import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from './Button'

export default {
  title: 'Button'
}

export const asAnchor = () => <Button onClick={action('clicked')}>Hello Button</Button>
export const asButton = () => <Button as='button' onClick={action('clicked')}>Hello Button</Button>
