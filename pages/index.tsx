import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "components/banner";
import Image from "next/image";
import Card from "components/card";
import coffeeStores from "../data/coffee-stores.json";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores,
    },
  };
}
export default function Home(props) {
  console.log("props", props);
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
        <div className={styles.cardLayout}>
          {props.coffeeStores.map((coffeeStore) => {
            return (
              <Card
                key={coffeeStore.id}
                name={coffeeStore.name}
                img={coffeeStore.imgUrl}
                href={`/coffee-store/${coffeeStore.id}`}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
