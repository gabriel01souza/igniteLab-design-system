import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';


export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Lorem ipsum.'
    }
} as Meta<HeadingProps>

export const Defeaut: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}