import Link from 'next/link'
import React from 'react'

export default function ItemsPage() {
  return (
    <div className='flex flex-col'>
      <p>this is items page</p>
      <Link href="items/1">Item 1</Link>
      <Link href="items/2">Item 2</Link>
      <Link href="items/3">Item 3</Link>
      <Link href="items/4">Item 4</Link>
    </div>
  )
}
