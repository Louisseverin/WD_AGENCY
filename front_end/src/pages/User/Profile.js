/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import UserLayout from "../../component/user_layout";

const Profile = () => {
  return (
    <UserLayout>
      <main className="main-content">
        <section className="dashboard-section">
          <h2>Profile</h2>
          <p>Your Profile content goes here.</p>
        </section>
      </main>
    </UserLayout>
  );
};
export default Profile;
