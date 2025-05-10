import chefClaudeLogo from "/src/chef/assets/chef-hat-logo.svg";

export default function Header() {
    return (
        <header>
            <img src={chefClaudeLogo} alt="chef icon"/>
            <h1>Chef Claude</h1>
        </header>
    )
}