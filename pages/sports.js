import Head from "next/head";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { Client } from "../prismic-configuration";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Politics({ articles, trending }) {
  return (
    <Layout>
      <div>
        <Head>
          <title>Channel 21: Sports</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-2xl uppercase font-bold opacity-50 my-10 ml-24">
          See what's going around in the World of Sports.
        </h1>
        <div className="flex">
          <div className="flex flex-col w-2/3 ml-24 mr-20">
            {articles.results.map((article, index) => (
              <div className="mb-10" key={article.uid}>
                <Link href={`article/${article.uid}`}>
                  <h1 className="bold text-3xl text-blue-600 cursor-pointer">
                    {RichText.render(article.data.title)}
                  </h1>
                </Link>
                <img
                  className="w-2/3 "
                  src={article.data.feature_image.url}
                  alt="img"
                />

                <h1> {RichText.render(article.data["preview-info"])}</h1>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-1/3">
            <h1 className="text-xl uppercase font-bold opacity-50 my-10 ml-24">
              See what's trending
            </h1>
            {trending.results.map((article, index) => (
              <div className="mb-5 w-11/12" key={article.uid}>
                <Link href={`trending/${trending.uid}`}>
                  <h1 className="bold text-xl text-blue-600 cursor-pointer">
                    {RichText.render(article.data.headline)}
                  </h1>
                </Link>
                <hr className="mt-5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const articles = await Client().query(
    Prismic.Predicates.at("document.tags", ["sports"])
  );
  const trending = await Client().query(
    Prismic.Predicates.at("document.type", "trending")
  );

  return {
    props: {
      articles: articles,
      trending: trending,
    },
  };
}
