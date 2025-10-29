import React, { useState } from "react";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "@/components/ui/input-group"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-neutral-700 text-white fixed w-full z-50 shadow-md">
            <nav className=" mx-auto px-4 py-4 flex items-center justify-between">
                <div className="text-xl font-bold">Movies</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6 gap-4">
                    <a href="#" className="hover:text-gray-300">Home</a>
                    <a href="#" className="hover:text-gray-300">Bollywood</a>
                    <a href="#" className="hover:text-gray-300">South</a>
                    <a href="#" className="hover:text-gray-300">Hollywood</a>
                    <InputGroup>
                        <InputGroupInput placeholder="Type to search..."  />
                        <InputGroupAddon align="inline-end w-24" >
                            <InputGroupButton variant="secondary" >Search</InputGroupButton>
                        </InputGroupAddon>
                    </InputGroup>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button
                        className={`hamburger ${isOpen ? "open" : ""}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>


                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <a href="#" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#" onClick={() => setIsOpen(false)}>Bollywood</a>
                <a href="#" onClick={() => setIsOpen(false)}>South</a>
                <a href="#" onClick={() => setIsOpen(false)}>Hollywood</a>
                <InputGroup>
                    <InputGroupInput placeholder="Type to search..." />
                    <InputGroupAddon align="inline-end w-24">
                        <InputGroupButton variant="secondary">Search</InputGroupButton>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        </header>
    );
};
