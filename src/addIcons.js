import CloseIcon from './pics/close.svg';
import Avatar from './pics/avatar.jpeg';
import Location from './pics/locationIcon.png';
import Home from './pics/home.svg';
import Messages from './pics/messages.svg';
import Bookings from './pics/bookings.svg';
import Terms from './pics/help.svg';
import Settings from './pics/settings.svg';
import Logout from './pics/logout.svg';


export default function addIcons() {
    // add close icon at top
    const addClose = document.getElementById('closeImg');
    addClose.src = CloseIcon;

    // add avatar icon
    const addAvatar = document.getElementById('headerAvatar');
    addAvatar.src = Avatar;

    // add location icon
    const addLocation = document.getElementById('locationIcon');
    addLocation.src = Location;

    // add Home icon
    const addHome = document.getElementById('mainBtn1');
    addHome.src = Home;

    // add messages icon
    const addMessages = document.getElementById('mainBtn2');
    addMessages.src = Messages;

    // add bookings icon
    const addBookings = document.getElementById('mainBtn3');
    addBookings.src = Bookings

    // add terms icon
    const addTerms = document.getElementById('mainBtn4');
    addTerms.src = Terms;

    // add settings icon
    const addSettings = document.getElementById('mainBtn5');
    addSettings.src = Settings;

    // add terms icon
    const addLogout = document.getElementById('mainBtn6');
    addLogout.src = Logout;
}