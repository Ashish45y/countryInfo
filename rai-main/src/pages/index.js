import Form from "@/components/Form";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>CountryInfo</title>
        <meta name="description" content="A country info web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Form />
      </main>
    </>
  );
}
