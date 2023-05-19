import Layout from "../components/Layout";
import ProductProgress from "../components/ProductProgress";
import CommitmentManagement from "../components/CommitmentManagement";

const Home = () => {
	return (
		<Layout>
			<ProductProgress />
			<CommitmentManagement />
		</Layout>
	);
};

export default Home;
