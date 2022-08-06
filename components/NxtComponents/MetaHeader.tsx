import Head from 'next/head';

interface MetaTags {
  title: string;
  keywords: string;
  description: string;
}

const Meta = ({ title, keywords, description }: MetaTags) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    )
};

Meta.defaultProps = {
    title: "CoachMe",
    keywords: "personal training, fitness, personalized training",
    description: "Personal training on the palm of your hand"
};

export default Meta;