/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import UserLayout from "../../component/user_layout";

const UserDash = () => {
  return (
    <UserLayout>
      <main className="main-content">
        <section className="dashboard-section">
          <h2>Dashboard</h2>
          <p>Your dashboard content goes here.</p>
        </section>
      </main>
    </UserLayout>
  );
};
export default UserDash;
