import Notifications from "./notifications";
import Password from "./password";
import Profile from "./profile";
import Security from "./security";

const UserSettingsPage = () => {
    return (
        <div className="">
            <div id="profile">
                <Profile />
            </div>
            <div id="password">
                <Password />
            </div>
            <div id="notifications">
                <Notifications />
            </div>
            <div id="security">
                <Security />
            </div>
        </div>
    )
}

export default UserSettingsPage;