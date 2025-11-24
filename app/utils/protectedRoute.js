import { useUserContext } from "./context/user_context";
import { useRouter } from "next/router";

export async function isProtected() {
    const protectedRoutes = ["/admin", "/dashboard", "/profile", "/settings"]; // change into actual routes

    const {user} = useUserContext();
    const router = useRouter();
    const url = router.pathname;

    return protectedRoutes.includes(url) && user.access !== null? true : router.push('/');
}