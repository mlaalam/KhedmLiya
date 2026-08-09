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
            className={
              `border-orange-300 border-2 focus:ring-2 focus-outline-none focus:border-orange-600 focus:ring-orange-500 rounded-md shadow-sm  ${className}`
                
            }
            ref={localRef}
        />
    );
});

export default TextInput;