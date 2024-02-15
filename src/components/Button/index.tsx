import { Button } from "@nextui-org/button";
import React from "react";
import { ButtonProps } from "@nextui-org/react";

const MyButton: React.FC<ButtonProps> = ({ ...props }) => {
    return (
        <Button {...props} className={`dark:bg-darkThird bg-lightThird text-black dark:text-black  ${props.className}`} color="default" size="md" radius="full" variant="flat">
            {props.children}
        </Button>
    )
}
export default MyButton;