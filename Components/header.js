import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-contents-wrapper">
        <div className="logo-wrapper">Logo</div>
        <Link href="/">Home</Link>
        <div>My Meta's</div>
        <div className="account-wrapper">
          <div className="sign-out-button">Sign Out</div>
          <div className="profile-picture">Profile Picture</div>
        </div>
      </div>
    </div>
  );
}
