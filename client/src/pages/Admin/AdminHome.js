import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank </h3>
          <hr />
          <p>
          "A financial services initiative that will save lives
As a sector, we are used to deposits, savings and lending; The Blood Bank is taking those concepts and turning them into a nationwide effort to get more people informed about blood donation and, ultimately, increase the giving thereof. By lending our time and making a different kind of deposit, the financial services market will save lives."
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
