import Dialog from "@/components/Dialog";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>ToDo list</title>
      </Head>
      <div className="wrapper">
        <Dialog />
      </div>
    </>
  );
}
