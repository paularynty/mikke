import headerStyles from "@/styles/header.module.css";

export const Header = () => {
  const { header, link, headerContentRight } = headerStyles;
  return (
    <header className={header}>
      <a className="link" href="/">
        Mikke!
      </a>
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
