import Header from "../../src/components/Header";

const Account = () => (
  <div>
    <Header />
    Header
  </div>
);

export async function getServerSideProps(context) {
  console.log("header");
  return {
    props: {},
  };
}

export default Account;
