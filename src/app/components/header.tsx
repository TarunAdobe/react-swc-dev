import '@spectrum-web-components/top-nav/sp-top-nav.js';
import '@spectrum-web-components/top-nav/sp-top-nav-item.js';
import '@spectrum-web-components/action-menu/sp-action-menu.js';
import '@spectrum-web-components/menu/sp-menu-item.js';

export default function Header() {
    return (
        <sp-top-nav>
            <sp-top-nav-item href="#">Site Name</sp-top-nav-item>
            <sp-top-nav-item href="#page-1">
                Page 1
            </sp-top-nav-item>
            <sp-top-nav-item href="#page-2">Page 2</sp-top-nav-item>
            <sp-top-nav-item href="#page-3">Page 3</sp-top-nav-item>
            <sp-top-nav-item href="#page-4">Page with Really Long Name</sp-top-nav-item>
            <sp-action-menu
                label="Account"
                placement="bottom-end"
                quiet
            >
                <sp-menu-item>Account Settings</sp-menu-item>
                <sp-menu-item>My Profile</sp-menu-item>
                <sp-menu-item>Share</sp-menu-item>
                <sp-menu-item>Help</sp-menu-item>
                <sp-menu-item>Sign Out</sp-menu-item>
            </sp-action-menu>
        </sp-top-nav>

    );
}