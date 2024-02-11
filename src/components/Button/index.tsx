import { Button } from "@nextui-org/button";
import React from "react";
import { forwardRef } from "react";

interface IProps {
    text: string;
    className?: string;
}
const MyButton: React.FC<IProps> = ({ text, className }) => {
    return (
        <Button className={`dark:bg-darkThird bg-lightThird text-black dark:text-black  ${className}`} color="default" size="md" radius="full" variant="flat">
            {text}
        </Button>
    )
}
export default MyButton;