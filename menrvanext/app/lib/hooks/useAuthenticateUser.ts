import { authenticate } from "@/app/lib/services/apiService";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";
import { useAppDispatch } from "../store/store";

export function useAuthenticateUser() {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const authenticateUser = async (username: string, password: string) => {
        try {
            const { jwt, user } = await authenticate(username, password);
            dispatch(login({ username, password }))
        } catch (error) {

        }
    }
}