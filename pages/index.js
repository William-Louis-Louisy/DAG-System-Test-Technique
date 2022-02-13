import Layout from "../components/Layout";
import Ranking from "../components/Ranking";

export default function Home() {
  return (
    <Layout pageTitle="HomePage">
      <div className="flex flex-col items-center justify-center mt-20">
        <Ranking />
      </div>
    </Layout>
  );
}
