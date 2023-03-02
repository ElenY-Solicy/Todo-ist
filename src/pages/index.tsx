import Dialog from "@/components/Dialog";
import User from "@/components/User";
import Head from "next/head";

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
