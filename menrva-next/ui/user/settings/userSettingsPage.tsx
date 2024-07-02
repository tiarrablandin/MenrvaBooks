import Notifications from "./notifications";
import Password from "./password";
import Profile from "./profile";
import Security from "./security";

const UserSettingsPage = () => {
    return (
        <div className="flex items-center flex-col w-full">
            <div id="profile" className="w-full">
                <Profile />
            </div>
            <div id="password" className="w-full">
                <Password />
            </div>
            {/* <div id="notifications">
                <Notifications />
            </div> */}
            <div id="security" className="w-full">
                <Security />
            </div>
        </div>
    )
}

export default UserSettingsPage;