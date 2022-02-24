import Layout from "../../../components/layout";
import { PlusIcon } from "@heroicons/react/outline";
import Modal, { ModalBody, ModalTitle } from "../../../components/Modal";
import { useCallback, useEffect, useState } from "react";
import CreateAdminUsers from "../../../components/AdminUsers/CreateAdminUsers";
import { Instance } from "../../../Services";
import AdminUserLists from "../../../components/AdminUsers/AgentUserLists";

const AdminUsers = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const fetchUsers = useCallback(() => {
    Instance({
      url: "/admin/user/getalladmins",
      method: "GET",
    })
      .then((res) => {
        if (res.data && res.data.statusCode === 200) {
          setUsers(res.data.Data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Layout>
      <div className="mb-8 sm:flex sm:justify-between sm:items-center">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold md:text-3xl text-slate-800">
            Admin အသုံးပြုသူများ
          </h1>
        </div>

        {/* Right: Actions */}
        <div className="grid justify-start grid-flow-col gap-2 sm:auto-cols-max sm:justify-end">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-3 py-2 space-x-2 bg-blue-900 rounded-md shadow-lg text-slate-200">
            <PlusIcon className="w-4 h-4" />
            <span>Admin ဖန်တီးပါ</span>
          </button>
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ModalTitle> Admin ဖန်တီးပါ</ModalTitle>
            <ModalBody>
              <CreateAdminUsers
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                fetchUsers={fetchUsers}
              />
            </ModalBody>
          </Modal>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-12 gap-6 space-y-12">
        <AdminUserLists customers={users} fetchUsers={fetchUsers} />
      </div>
    </Layout>
  );
};

export default AdminUsers;
