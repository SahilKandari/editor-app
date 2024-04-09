'use client'
import React from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  router.push('/AI_Audit/My_Project/Code_Editor')
  return (
    <>
      Home
    </>
  );
}
