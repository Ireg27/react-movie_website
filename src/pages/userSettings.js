import React from "react";
import "../css/userSettings.css";
import $ from "jquery";

const userSettings = () => {
  $(document)
    .off()
    .ready(function () {
      let accountBtn = document.getElementById("account_btn");
      let privacyBtn = document.getElementById("privacy_btn");
      let accountTab = document.getElementById("accountTab");
      let privacyTab = document.getElementById("privacyTab");

      accountBtn.addEventListener("click", () => {
        accountBtn.classList.add("watchlist_active");
        privacyBtn.classList.remove("watchlist_active");
        accountTab.classList.remove("hidden_display");
        privacyTab.classList.add("hidden_display");
      });

      privacyBtn.addEventListener("click", () => {
        privacyBtn.classList.add("watchlist_active");
        accountBtn.classList.remove("watchlist_active");
        accountTab.classList.add("hidden_display");
        privacyTab.classList.remove("hidden_display");
      });
    });

  return (
    <div className="uSettings">
      <div className="watchlist_titles">
        <button className="watchlist_select watchlist_active" id="account_btn">
          Account
        </button>
        <button className="watchlist_select" id="privacy_btn">
          Privacy
        </button>
      </div>
      <div className="user_details" id="accountTab">
        <div className="user_details_account">
          <form className="login-form login-form-settings">
            <div className="form-group field login-username border">
              <input
                type="text"
                name="First Name"
                id="username"
                className="form-field"
                placeholder="Username"
                autocomplete="off"
              />
              <label htmlFor="First Name" className="form-label">
                First Name
              </label>
            </div>
            <div className="form-group field login-username border">
              <input
                type="text"
                name="Last name"
                id="username"
                className="form-field"
                placeholder="Last Name"
                autocomplete="off"
              />
              <label htmlFor="Last name" className="form-label">
                Last Name
              </label>
            </div>

            <div className="form-group field login-username border">
              <input
                type="text"
                name="username"
                id="username"
                className="form-field"
                placeholder="Username"
                autocomplete="off"
              />
              <label htmlFor="username" className="form-label">
                Username
              </label>
            </div>

            <div className="form-group field login-username">
              <button className="watchlist_select" id="changeDetailsBtn">
                Change
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="user_details_privacy hidden_display" id="privacyTab">
        <form action="" className="login-form login-form-settings">
          
        <div className="form-group field login-username border">
            <input
              type="password"
              name="old_password"
              id="username"
              className="form-field"
              placeholder="New Password"
              autocomplete="off"
            />
            <label htmlFor="old_password" className="form-label">
              Old Password
            </label>
          </div>
          
          <div className="form-group field login-username border">
            <input
              type="password"
              name="new_password"
              id="username"
              className="form-field"
              placeholder="New Password"
              autocomplete="off"
            />
            <label htmlFor="new_password" className="form-label">
              New Password
            </label>
          </div>

          <div className="form-group field login-username border">
            <input
              type="password"
              name="confirm_password"
              id="username"
              className="form-field"
              placeholder="Confirm Password"
              autocomplete="off"
            />
            <label htmlFor="confirm_password" className="form-label">
              Confirm Password
            </label>
          </div>

          <div className="form-group field login-username">
            <button type="submit" className="watchlist_select" id="changePasswordBtn">
              Change Password
            </button>
          </div>

          <div className="deactivate_account">
            <button className="d_btn">
              Deactivate Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default userSettings;
