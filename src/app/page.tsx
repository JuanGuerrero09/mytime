import Image from 'next/image'
import { useState } from 'react'
import TimeTracker from '@/components/TimeTracker'

export default function Home() {
  return (
    <main>
      <TimeTracker/>
    </main>
  )
}
