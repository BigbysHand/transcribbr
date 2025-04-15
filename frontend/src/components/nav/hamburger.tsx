import React, { useState, useEffect } from 'react';
import axios from 'axios';
import assert from 'assert';

function clickMe() {
    alert("Kappow!");
}

export interface HamburgerProps
{
    onClick: () => void;

    isInitiallyOpen? :  boolean;
}

export function Hamburger(props : HamburgerProps)
{
    const {onClick , isInitiallyOpen} = props;
    const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen ?? false);

    const handleClick = () => {
        setIsOpen((prev: boolean) => !prev);
        onClick();
        //alert(isOpen)
    }

    return (

            <button 
                className="group h-10 w-10 rounded-lg border-2 bg-purple-800 justify-start"
                onClick={handleClick}
            >
                <div className="grid justify-items-center gap-1">
                    <span
                        className={`h-1 w-6 rounded-full bg-black ${!isOpen ? "group-hover:rotate-45 group-hover:translate-y-2 transition"
                        : "rotate-45 translate-y-2" }`}
                    ></span>
                    <span
                        className={`h-1 w-6 rounded-full bg-black ${!isOpen ? "group-hover:scale-x-0 transition" : "scale-x-0"}`}
                    ></span>
                    <span
                        className={`h-1 w-6 rounded-full bg-black ${!isOpen ? "group-hover:-rotate-45 group-hover:-translate-y-2 transition"
                            : "-rotate-45 -translate-y-2" }`}
                    ></span>
                </div>
            </button>
    );
}

