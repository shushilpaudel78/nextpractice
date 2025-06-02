'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

export  default function page({}){
    const pathname = usePathname();
  return (
    <div> This is our Page {pathname} </div>
  )
}
