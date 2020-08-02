import { RichText } from "prismic-reactjs";
import { Client } from "../../prismic-configuration";
import Layout from "../../components/Layout";
import Link from "next/link";

export default function Article({ article }) {
  return (
    <Layout>
      <div className="w-2/3 mx-auto">
        <h1 className="text-3xl uppercase font-bold opacity-50 my-10">
          {RichText.render(article.data.title)}
        </h1>
        <img
          className="shadow-xl mb-20"
          src={article.data.feature_image.url}
          alt="image"
        />
        <h1 className="text-lg opacity-75">
          {RichText.render(article.data["full-article"])}
        </h1>
        <Link href="/">
          <button
            className="bg-black text-white py-3 px-10 my-4 text-lg uppercase
                    "
          >
            {" "}
            Back to home &nbsp; 👈
          </button>
        </Link>
      </div>
    </Layout>
  );
}

// this gets called on each request

export async function getServerSideProps(context) {
  const article = await Client().getByUID("article", context.query.article);

  return {
    props: {
      article: article,
    },
  };
}
