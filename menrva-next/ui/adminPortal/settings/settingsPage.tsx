import { User } from "@/lib/models/user";
import Notifications from "./notifications";
import Password from "./password";
import Profile from "./profile";
import Security from "./security";

const settingsPage: React.FC<{user:User}> = ({user}) => {
    return (
        <div className="">
            <div id="profile">
                <Profile user={user} />
            </div>
            <div id="password">
                <Password user={user} />
            </div>
            {/* <div id="notifications">
                <Notifications />
            </div> */}
            {/* <div id="security">
                <Security />
            </div> */}
        </div>
    )
}

export default settingsPage;