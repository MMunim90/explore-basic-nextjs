import Image from "next/image";
import LoginButton from "./components/LoginButton";
import UserInfo from "./components/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import LogoutButton from "./components/LogoutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex flex-col gap-4 justify-center mt-40 items-center">
      <p>munim s new nextjs website</p>
      <div className="bg-gray-400 rounded-md px-5 py-2 cursor-pointer">
        {session?.user ? (<LogoutButton></LogoutButton>) : (<LoginButton></LoginButton>)}
      </div>
      <p className="font-bold text-xl">From Client Component</p>
      <UserInfo></UserInfo>
      <p className="font-bold text-xl">From Server Component</p>
      {JSON.stringify(session)}
    </div>
  );
}
