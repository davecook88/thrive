import React from "react";
import Layout from "../Components/Layout/Layout";
import dbConnect from "../lib/mongodb";

export default function Home({}) {
  return (
    <Layout showNav={true} title="Thrive in Spanish">
      <div>Hello</div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const client = await dbConnect();

  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands

  return {
    props: {},
  };
}
