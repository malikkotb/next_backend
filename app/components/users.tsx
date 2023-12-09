interface User {
  id: number;
  name: string;
}

export default async function Users() {
  // all of this happens on the server (in next.js)
  const res = await fetch("https://jsonplaceholder.typicode.com/users", 
  { next: {revalidate: 10} });
  const users: User[] = await res.json();

  return (
    <>
      <h1 className=" text-2xl">Users</h1>
      {/* like this we can see when this page was rendered */}
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      
    </>
  );
}
