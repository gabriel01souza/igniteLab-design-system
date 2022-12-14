import  clsx from  'clsx' ; 

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: string;
    className?: string;
}

export function Heading({ size = 'md', children, className }: HeadingProps) {
    return (
        <span className={clsx( 
                'text-gray-100 font-bold font-sans',
                {
                    'text-lg': size === 'sm',
                    'text-xl': size === 'md',
                    'text-2xl': size === 'lg',
                },
                className
            )}
        >
            {children}
        </span>
        )
}