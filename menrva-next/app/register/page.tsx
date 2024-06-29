import { Footer } from "@/ui/footer/footer";
import Nav from "@/ui/navbar/nav";
import Register from "@/ui/register/register";
import { cookies } from "next/headers";

export default async function Page() {
  const tag = cookies().get("tag")?.value as string;
  const role = cookies().get("role")?.value as string;
  const theme = cookies().get("theme")?.value as string;
  return (
    <>
      <Nav tag={tag} role={role} theme={theme} />
      <main className="w-screen min-h-[calc(100vh-295px)]">
        <Register />
      </main>
      <Footer />
    </>
  );
}
