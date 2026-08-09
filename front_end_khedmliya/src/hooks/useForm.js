import { useState } from "react";

export default function useForm(initialValues) {
    const [data, setDataState] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    const setData = (field, value) => {
        setDataState((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const reset = (...fields) => {
        if (fields.length === 0) {
            setDataState(initialValues);
            return;
        }

        setDataState((prev) => {
            const newData = { ...prev };

            fields.forEach((field) => {
                newData[field] = initialValues[field];
            });

            return newData;
        });
    };

    return {
        data,
        setData,
        errors,
        setErrors,
        processing,
        setProcessing,
        reset,
    };
}