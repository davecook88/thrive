import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import dbConnect from "../../lib/mongodb";
import { useSession, signIn } from "next-auth/client";
import { Button, Container, Grid, Typography } from "@material-ui/core";

export default function Login({}) {
  const [session, loading] = useSession();
  const [userFound, setUserFound] =
    useState<AuthTypes.DBUserStatus>("NOT_FOUND");

  useEffect(() => {
    console.log(session);
    fetch("/api/auth/checkUser").then(console.log);
  }, [session]);

  if (session) {
    return (
      <Layout showNav={true} title="Thrive in Spanish">
        <p>Logged in as {session?.user.name}</p>
      </Layout>
    );
  }
  return (
    <Layout showNav={true} title="Thrive in Spanish">
      <Container>
        <Grid container item justifyContent="center" xs={12}>
          <Grid item>
            <Typography component={"h3"}>Sign In with Google </Typography>
          </Grid>
        </Grid>
        <Grid container item justifyContent="center" xs={12}>
          <Grid item>
            <Button onClick={() => signIn()}>Sign In</Button>
          </Grid>
        </Grid>
      </Container>
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
