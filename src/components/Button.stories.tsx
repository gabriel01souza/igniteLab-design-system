import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';


export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account'
    }
} as Meta<ButtonProps>

export const Defeaut: StoryObj<ButtonProps> = {}

export const Small: StoryObj<ButtonProps> = {}

export const Large: StoryObj<ButtonProps> = {}