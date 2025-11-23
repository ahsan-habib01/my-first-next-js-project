import React from 'react'

export default async function page({ params }) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  )
}
