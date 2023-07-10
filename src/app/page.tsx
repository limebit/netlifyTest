import { Metadata } from "next";
import Image from "next/image";

export const revalidate = 60;

async function getData() {
  return {
    link: "https://place-puppy.com/300x300",
  };
}

export const generateMetadata = async (): Promise<Metadata | undefined> => {
  return {
    title: "Netlify Test Site",
    metadataBase: new URL("https://dev-buddies.de"),
    description: "This is a description",
    robots: { index: false, follow: false },
    openGraph: {
      title: "Netlify Test Site",
      description: "This is also a description",
      locale: "de_DE",
      images: {
        url: "https://place-puppy.com/300x300",
        width: 300,
        height: 300,
      },
      type: "article",
      url: new URL("https://dev-buddies.de"),
      siteName: "NetlifyTestSite",
    },
    twitter: {
      title: "Netlify Test Site",
      description: "description",
      images: {
        url: "https://place-puppy.com/300x300",
        width: 300,
        height: 300,
      },
    },
  };
};

export default async function Page() {
  const { link } = await getData();

  return (
    <div className="flex justify-center items-center h-screen">
      <Image src={link} alt={""} width={300} height={300} />
    </div>
  );
}
