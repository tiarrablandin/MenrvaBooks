import SingleBook, { preload } from "@/app/ui/book/singleBook";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "MenrvaBooks | Book",
};



export default async function Page({ params: { id } }: { params: { id: number } }) {
  // const preloadLogged = () => { console.log("preloading..."); preload(id); }
  // preloadLogged();
  const token = cookies().get('token'); // Assuming this is safe to access here, if not, adjust accordingly
  console.log(token)
  // preload(id, token?.value);

  return (
    <main className="w-screen min-h-[calc(100vh-295px)]">
      <SingleBook id={id}/>
    </main>
  );
}