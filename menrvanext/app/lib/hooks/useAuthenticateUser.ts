import { authenticate } from "@/app/services/apiService";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export function useAuthenticateUser() {
    const dispatch = useDispatch();
    const router = useRouter();

    const authenticateUser = async (username: string, password: string) => {
        try {
            const { jwt, user } = await authenticate(username, password);
        } catch (error) {

        }
    }
}