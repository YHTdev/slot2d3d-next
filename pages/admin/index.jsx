import { HorizontalBarChat } from "../../components/Charts/HorizontalBarChat";
import Layout from "../../components/layout";
import {faker} from '@faker-js/faker'
import { LineChart } from "../../components/Charts/LineChart";
const Dashboard = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const chartSampleData = {
    labels,
    datasets: [
      {
        label: "Agent",
        data: [
          3,4,6,6,87
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Comission",
        data: [
          45,56,78,21,2,900
        ],
        borderColor: "rgb(113, 162, 124)",
        backgroundColor: "rgba(113, 162, 239, 0.5)",
      },
      {
        label: "Country Code",
        data: labels.map(() => faker.address.countryCode()),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(255, 162, 233, 0.5)",
      },
      {
        label: "Phone ",
        data: labels.map(() => faker.commerce.price()),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },

    ],
  };
 
 
  return (
    <Layout>
      <HorizontalBarChat title="Horizonal Chart Test" data={chartSampleData} />
      <LineChart title="Line Chart Test" data={chartSampleData} />
    </Layout>
  );
};

export default Dashboard;
