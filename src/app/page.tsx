"use client";
import { useRouter } from "next/navigation";
import styles from "@/styles/page.module.css";

// export default function App({ Component, pageProps }: AppProps) {
//   const router = useRouter();

//   return (
//     <>
//       {router.pathname !== "/404" && <Header />}
//       <Component {...pageProps} />
//       {/* {router.pathname !== "/404" && <ScrollButton />} */}
//       {router.pathname !== "/404" && <Footer />}
//     </>
//   );
// }

// import { KanjiList } from "../../components/KanjiList/KanjiList";

export default function Home() {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      <div className={styles.intro}>
        <h1>Mikke!</h1>
        <p>
          Mikke! (Japanese for <i>Found it!</i>) is a quick, low-threshold tool
          for Japanese language learners.
        </p>
        <ul className={styles.list}>
          <li>🔍 Look up individual kanji by English meaning</li>
          <li>
            📘 Access detailed kanji information, including onyomi/kunyomi
            reading and stroke order
          </li>
          <li>📝 View comprehensive kanji list</li>
          <li>💡 Sort kanji list by stroke order</li>
        </ul>
        <button
          type="button"
          className={styles.button}
          aria-label="Navigate to Kanji search"
          onClick={() => handleClick("/search")}
        >
          Check it out
        </button>
      </div>
      {/* <div className={styles.sectionWrapper}>
        <h1>Kanji List</h1>
        <div className={styles.projectContainer}>
          <KanjiList />
          <Project
            name="Mikke!"
            description="Kanji app made with React and TypeScript"
          />
          <Project name="To-do list" description="To-do list app" />
          <Project name="So_long" description="2D game made with C" />
        </div>
      </div>
      <div className={styles.sectionWrapper}>
        <h1>Skills</h1>
        <div className={skillStyles.skillContainer}>
          <Skill
            category="Programming"
            skills={[
              "React",
              "TypeScript",
              "JavaScript",
              "HTML",
              "CSS",
              "C",
              "Git",
              "Jest",
            ]}
          />
          <Skill
            category="Design"
            skills={[
              "Graphic design",
              "Web design",
              "UI/UX",
              "Copywriting",
              "Content creation",
            ]}
          />
          <Skill
            category="Soft skills"
            skills={[
              "Code review",
              "Teamwork",
              "Project management",
              "Time management",
            ]}
          />
        </div>
      </div> */}
    </div>
  );
}
