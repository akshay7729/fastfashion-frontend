import Header from "../../src/components/Header";

const PLP = () => (
  <div>
    <Header />
    PLP
  </div>
);

export async function getServerSideProps(context) {
  console.log("plp");
  return {
    props: {},
  };
}

export default PLP;
