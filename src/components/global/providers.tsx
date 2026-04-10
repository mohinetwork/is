"use client";

import { Toaster } from '@/components/ui/sonner';
import "sonner/dist/styles.css";
import React from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Toaster />
            {children}
        </>
    );
};

export default Providers;
