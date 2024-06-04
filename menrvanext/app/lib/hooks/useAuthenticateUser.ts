import { authenticate } from "@/app/lib/services/apiService";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../store/store";
import { login } from "../store/userSlice";

export function useAuthenticateUser() {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const authenticateUser = async (identifier: string, password: string) => {
        try {
            const { jwt, user } = await authenticate(identifier, password);
            dispatch(login({ identifier, password }))
        } catch (error) {

        }
    }
}