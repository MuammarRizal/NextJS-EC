export default function Home() {
  return <h1>Hello world</h1>;
}

export async function getServerSideProps({ query }: any) {
  console.log("Hello world");
}
