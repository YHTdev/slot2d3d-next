import { HorizontalBarChat } from "../../components/Charts/HorizontalBarChat";
import Layout from "../../components/layout";
import { faker } from "@faker-js/faker";
import { LineChart } from "../../components/Charts/LineChart";
import Card, { CardBody, CardHeader } from "../../components/Card";
const Dashboard = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const chartSampleData = {
    labels,
    datasets: [
      {
        label: "Agent",
        data: [3, 4, 6, 6, 87],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Comission",
        data: [45, 56, 78, 21, 2, 900],
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
      <div className="grid grid-cols-12 gap-6 mb-12">
        <Card className="bg-green-100 rounded-lg col-span-full lg:col-span-3">
          <CardHeader>
            <h2 className="font-semibold text-slate-800">စုစုပေါင်းရငွေ</h2>
          </CardHeader>
          <CardBody>
            <p className="">
              <span className="text-5xl text-gray-800">12,000,000</span>
              <span className="ml-4 text-sm">ကျပ်</span>
            </p>
          </CardBody>
        </Card>
        <Card className="bg-pink-100 rounded-lg col-span-full lg:col-span-3">
          <CardHeader>
            <h2 className="font-semibold text-slate-800">
              စုစုပေါင်း လျှော်ငွေ
            </h2>
          </CardHeader>
          <CardBody>
            <p className="">
              <span className="text-5xl text-gray-800">800,000</span>
              <span className="ml-4 text-sm">ကျပ်</span>
            </p>
          </CardBody>
        </Card>

        <Card className="rounded-lg col-span-full lg:col-span-3">
          <CardHeader>
            <h2 className="font-semibold text-slate-800">
              စုစုပေါင်း အေးဂျင့် အရေအတွက်
            </h2>
          </CardHeader>
          <CardBody>
            <p className="">
              <span className="text-5xl text-gray-800">80</span>
              <span className="ml-4 text-sm">ဦး</span>
            </p>
          </CardBody>
        </Card>
        <Card className="rounded-lg col-span-full lg:col-span-3">
          <CardHeader>
            <h2 className="font-semibold text-slate-800">
              စုစုပေါင်း Admin အရေအတွက်
            </h2>
          </CardHeader>
          <CardBody>
            <p className="">
              <span className="text-5xl text-gray-800">800,000</span>
              <span className="ml-4 text-sm">ဦး</span>
            </p>
          </CardBody>
        </Card>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <Card className={` col-span-full lg:col-span-6`}>
          <CardHeader>
            <h2 className="font-semibold text-slate-800">စုစုပေါင်းရငွေ</h2>
          </CardHeader>
          <CardBody>
            <HorizontalBarChat
              title="Horizonal Chart Test"
              data={chartSampleData}
            />
          </CardBody>
        </Card>
        <Card className={` col-span-full lg:col-span-6`}>
          <CardHeader>
            <h2 className="font-semibold text-slate-800">စုစုပေါင်းရငွေ</h2>
          </CardHeader>
          <CardBody>
            <LineChart title="Line Chart Test" data={chartSampleData} />
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
