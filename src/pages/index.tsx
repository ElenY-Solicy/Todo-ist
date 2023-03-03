import Head from "next/head";
import Dialog from "@/components/Dialog";
import User from "@/components/User";

export default function Home() {
  return (
    <>
      <Head>
        <title>ToDo list</title>
      </Head>
      <div className="wrapper">
        <Dialog />
        <User />
      </div>
    </>
  );
}
