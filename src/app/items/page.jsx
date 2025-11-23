import Link from 'next/link';
import React from 'react';

export default async function ItemsPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return (
    <div className="flex flex-col">
      <p>this is items page</p>

      {
        data.map(user => <Link key={user.id} href={`/items/${user.id}`}>{ user.name}</Link>)
      }
    </div>
  );
}
