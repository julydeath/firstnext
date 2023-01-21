import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "components/banner";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("hi banner button");
  };
  return (
    <>
      <Head>
        <title>Coffee Connoisseur</title>
      </Head>
      <main className={styles.main}>
        <Banner
          buttontext="View stores nearby"
          handleOnclick={() => handleOnBannerBtnClick()}
        />
        <Image
          className={styles.heroImage}
          src="/static/hero-image.png"
          alt="image"
          width={700}
          height={300}
        />
      </main>
    </>
  );
}
