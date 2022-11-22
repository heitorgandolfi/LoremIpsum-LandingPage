import { Menu } from "./Menu"

export function Header() {
    return (
        <div>
            <Menu
                title="Lorem"
                titleExtend="Ipsum"
                menuList={[
                    "Features",
                    "Community",
                    "Help",
                    "Support"
                ]}
                loginText="Login"
            />
        </div>
    )
}