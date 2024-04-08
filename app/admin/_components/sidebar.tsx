"use client"

import { cn } from '@/lib/utils';
import { BookA, FolderKanban, LayoutDashboard, Menu, MessageSquare, Settings, UsersRound } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const routes = [
    {
        label: 'Dashboard',
        icon: LayoutDashboard,
        href: '/admin/dashboard',
        color: "text-sky-500"
    },
    {
        label: 'Conversation',
        icon: MessageSquare,
        href: '/conversation',
        color: "text-violet-500",
    },
    {
        label: 'Serives',
        icon: FolderKanban,
        color: "text-pink-700",
        href: '/image',
    },
    {
        label: 'Orders',
        icon: BookA,
        color: "text-orange-700",
        href: '/video',
    },
    {
        label: 'Customers',
        icon: UsersRound,
        color: "text-emerald-500",
        href: '/music',
    },

    {
        label: 'Settings',
        icon: Settings,
        href: '/settings',
    },
];

const Sidebar = () => {
    const pathname = usePathname()
    return (
        <div className=' space-y-4 py-4 flex flex-col h-full'>
            <div className=' px-3 py-2 flex-1'>
                <Link href='/admin/dashboard' className=' flex items-center  pl-3 mb-14'>
                    <div className=' relative  mr-4'>
                        <Menu />
                    </div>
                    <h1 className=' text-xl font-bold'>
                        Dry Cleaning
                    </h1>
                </Link>
                <div className=' space-y-3'>
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn("text-lg group flex p-3 w-full justify-start  text-black font-medium cursor-pointer hover:text-green-500 hover:bg-white/10 rounded-lg transition",
                                pathname === route.href ? "text-green-500" : "text-black"
                            )}>
                            <div className=' flex items-center flex-1'>
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar