import { trpc } from "@/utils/trpc";
import { User } from "@nestjs-trpc-next/shared";

const Home = async () => {
  const users = await trpc.users.findAll.query();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;