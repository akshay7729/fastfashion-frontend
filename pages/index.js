import Header from "../src/components/Header";
import Main from "../src/components/Main";
import axios from "axios";

const Home = (props) => {
  console.log("process", `${process.env.REACT_APP_BACKEND_API_URL}`);
  return (
    <div>
      <Header nav={props} />
      <Main />
    </div>
  );
};

export const getStaticProps = async (context) => {
  const response = await axios
    .post(
      "http://localhost:9000/graphql",
      {
        query: `{
      products {
        id
        title
        price
        description
        category
        image
        rating {
          count
          rate
        }
      }
    }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => response)
    .then((err) => {
      return err;
    });

  return {
    props: response.status === 200 ? response.data : response.status, // will be passed to the page component as props
  };
};

export default Home;
