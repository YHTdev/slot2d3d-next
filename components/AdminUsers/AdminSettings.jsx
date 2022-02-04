import Card, { CardHeader } from "../Card";

const AdminSettings = () => {
  return (
    <Card className={` col-span-full xl:col-span-4`}>
      <CardHeader>
        <h2 className="font-semibold text-slate-800">Admin Settings</h2>
      </CardHeader>
    </Card>
  );
};

export default AdminSettings;
