import { cookies } from "next/headers";
import { Footer } from "./ui/footer";
import AnimatedHeader from "./ui/motion/animatedHeader";
import { NavbarNoSearch } from "./ui/navbar/nav";
import AdvancedSearchBar from "./ui/search/advancedSearchBar";
import SuggestionCards from "./ui/search/suggestionCards";

export default function Home() {
    const tag = cookies().get('tag')?.value as string;
    const role = cookies().get('role')?.value as string;

    const logout = async () => {
        'use server';
        cookies().delete('tag');
        cookies().delete('role');
        cookies().delete('jwt');
    }
    
    return (
        <div className="flex flex-col h-screen w-full">
            <NavbarNoSearch tag={tag} role={role} logout={logout} />

            <main className="flex flex-col h-full w-full items-center justify-center text-nowrap">
                <AnimatedHeader />

                <div className="flex flex-col w-3/5">
                    <AdvancedSearchBar />
                    <div className="relative w-full h-16">
                        <SuggestionCards />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
