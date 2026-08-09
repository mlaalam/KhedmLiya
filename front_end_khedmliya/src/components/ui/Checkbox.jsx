import { InputHTMLAttributes } from 'react';

export default function Checkbox({ className = '', ...props }){
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-orange-300 text-orange-600 shadow-sm focus:ring-orange-500 ' +
                className
            }
        />
    );
}
