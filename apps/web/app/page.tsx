import { client } from "@repo/db/client";

export default async function Page() {
  const user = await client.user.findFirst();

  return (
    <div>
      here is  the user :{" "}
      {user?.username}
    </div>
  );
}
