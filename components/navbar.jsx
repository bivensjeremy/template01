'use client'
import { fontFira } from "@/config/fonts";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import clsx from "clsx";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@heroui/dropdown";
import { FaBars } from "react-icons/fa6";


export default function NavigationBar() {
  const MenuDropdown = () => {
    return (
      <Dropdown >
      <DropdownTrigger>
        <FaBars size={24} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Link Actions">
        <DropdownItem key="About" href="/#AboutMe">
          About
        </DropdownItem>
        <DropdownItem key="Services" href="/#Services">
          Services
        </DropdownItem>
        <DropdownItem key="Contact" href="/#Contact">
          Contact
        </DropdownItem>
        <DropdownItem key="Packages" href="https://www.blueprintwebdev.com/webpackages">
          Website Packages
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    )
  }
  return (
    <Navbar position="static">
      <NavbarBrand>        
        <div className="text-center">
          <p className={clsx('uppercase', fontFira.className)}>Your Awesome Business</p>
          {/* <p className="font-bold text-inherit">ACME</p> */}
          <p className="text-sm">by Bivens Blueprint</p>
        </div>
        
      </NavbarBrand>

      <NavbarContent justify="end"  className="hidden md:flex">
        <NavbarItem>
          <Link isBlock color="foreground" href="/#AboutMe">
            About
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link isBlock color="foreground" href="/#Services">
            Services
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link isBlock color="foreground" href="/#Contact">
            Contact
          </Link>
        </NavbarItem>

        <NavbarItem isActive>
          <Link isExternal isBlock color="foreground" href="https://www.blueprintwebdev.com/webpackages">
            Website Packages
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="flex md:hidden">
        <MenuDropdown />
      </NavbarContent>
    </Navbar>
  );
}
