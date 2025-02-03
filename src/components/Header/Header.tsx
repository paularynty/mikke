import headerStyles from "@/styles/header.module.css";
import Link from "next/link";

export const Header = () => {
  const { header, headerContentRight } = headerStyles;
  return (
    <header className={header}>
      <Link href="/">
        Mikke!
      </Link>
      <div className={headerContentRight}>
        <a href="/search">
          Search
        </a>
        <a href="/all">
          All kanji
        </a>
        <a href="/contact">
          Contact
        </a>
      </div>
    </header>
  );
};
