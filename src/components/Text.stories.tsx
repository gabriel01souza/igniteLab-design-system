import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';


export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum.'
    },
    argTypes: {
        children: {
          table: {
            disable: true
          }
        },
      }
} as Meta<TextProps>

export const Defeaut: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}