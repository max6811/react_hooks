import { FC, memo, useState } from "react";

import { OrederDetail } from "../../types/Product";

import "./ShippingForm.css";

interface ShippingFormProps {
    onSubmit: (orderDetails: OrederDetail) => void;
}

const ShippingForm: FC<ShippingFormProps> = memo(({ onSubmit }) => {
    const [count, setCount] = useState<number>(1);

    console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />");
    const startTime: number = performance.now();
    while (performance.now() - startTime < 500) {
        // Do nothing for 500 ms to emulate extremely slow code
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log("formdata", formData);
        const orderDetails: any = {
            ...Object.fromEntries(formData),
            count,
        };
        console.log("asdsa", orderDetails);
        onSubmit(orderDetails);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='form'>
                <label htmlFor='count'>
                    Amount
                    <button type='button' onClick={() => setCount(count - 1)}>
                        -
                    </button>
                    {count}{" "}
                    <button type='button' onClick={() => setCount(count + 1)}>
                        +
                    </button>
                </label>

                <label htmlFor='input Product name'>
                    Product Name
                    <input type='text' name='name' />
                </label>
                <label htmlFor='input Product Color'>
                    Product Color
                    <input type='text' name='color' />
                </label>
                <button type='submit'>save</button>
            </form>
        </div>
    );
});
export default ShippingForm;
