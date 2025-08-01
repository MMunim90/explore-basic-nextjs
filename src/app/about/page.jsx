"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutPage = () => {

    const router = useRouter();
    const isloggedIn = false;
    const handleNavigation = () => {
        if(isloggedIn){
            router.push("/about/address")
        }
        else{
            router.push("/")
        }
    };
    return (
        <div>
            <p className='font-bold text-3xl'>about page</p>
            <p>
            <Link href="/about/address">Address Page</Link>
            </p>

            <button type="button" onClick={handleNavigation}>Address page</button>
        </div>
    );
};

export default AboutPage;