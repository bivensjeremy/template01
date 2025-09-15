'use client'
import { fontFira } from "@/config/fonts";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import clsx from "clsx";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@heroui/dropdown";
import { FaBars } from "react-icons/fa6";
import { Avatar } from "@heroui/avatar";
import { siteConfig } from "@/config/site";
import ThemeSwitch from "./ThemeSwitch";


export default function NavigationBar() {
  
  return (
    <Navbar maxWidth='full' shouldHideOnScroll={false} position="sticky">
      <NavbarBrand>     
        <Avatar src='/BP_Logo.png' />
        <p className={clsx(fontFira.className,
          "ml-2 font-bold text-inherit leading-4 uppercase hidden md:block")}>Template <br/> Website 02</p>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end"  className="hidden md:flex">
        {siteConfig.navItems.map(({ label, href }, index) => (
          <NavbarItem key={index}>
            <Link isBlock color="foreground" href={href}>
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem isActive>
          <Button
            as={Link}
            isExternal
            href={siteConfig.company.lead}
            variant='faded'
          >
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>

    </Navbar>
  );
}
