import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
} from "react";

const TextInput = forwardRef(function TextInput(
    {
        type = "text",
        className = "",
        isFocused = false,
        ...props
    },
    ref
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={`
              w-full
                rounded-md
                border-2
                border-orange-500
                shadow-sm
                focus:border-orange-500
                focus:ring-0
                focus:outline-none
                ${className}
                
            `}
            ref={localRef}
        />
    );
});

export default TextInput;