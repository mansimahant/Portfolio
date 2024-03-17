"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

export function ModeToggle() {
    const { setTheme, theme } = useTheme();
    const isDarkMode = theme === 'dark';

    return (
        <div className="flex items-center space-x-2">
            <button
                className="p-2 rounded-md focus:outline-none"
                onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
                {isDarkMode ? (
                    <MoonIcon className="h-6 w-6 text-white" />
                ) : (
                    <SunIcon className="h-6 w-6 text-yellow-500" />
                )}
            </button>
        </div>
    );
}