import React, { useImperativeHandle } from "react";


const CustomInput = ({ style, ...props }, ref) => {
    useImperativeHandle(ref, () => {
        return { alertHi: () => alert("hi") }
    }, []);

    return (
        <React.Fragment>
            <input
                ref={ref}
                {...props}
                type="text"
                style={{
                    backgroundColor: "lightblue",
                    padding: ".25em",
                    borderBottom: ".1rem solid black",
                    ...style,
                }} />
        </React.Fragment>
    );
};


export default React.forwardRef(CustomInput);