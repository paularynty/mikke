import headerStyles from "@/styles/header.module.css";
import Link from "next/link";

export const Header = () => {
  const { header, link, headerContentRight } = headerStyles;
  return (
    <header className={header}>
      <Link className="link" href="/">
        Mikke!
      </Link>
      <div className={headerContentRight}>
        <a className={link} href="/search">
          Search
        </a>
        <a className={link} href="/all">
          All kanji
        </a>
        <a className={link} href="/contact">
          Contact
        </a>
      </div>
    </header>
  );
};
