"use client"
import { ReactNode } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Button,
    Divider
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
    return (
        <Navbar className="dark:bg-darkSecondry bg-lightSecondry h-20 w-full">
            <NavbarBrand>
                <Image src={"/favicon.svg"} width={120} height={100} alt="Logo" />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    TEST
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    TEST 2
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
export default Header;