import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Profile() {
  const { user, isVerified } = useSelector((state) => state.authState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isVerified) {
      navigate("/verify");
      toast.error("Verify the account first and then proceed further.", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return;
    }
  }, []);

  return (
    <div className="row justify-content-around mt-5 user-info">
      <div className="col-12 col-md-3">
        <figure className="avatar avatar-profile">
          <img
            className="rounded-circle img-fluid"
            src={user.avatar ?? "./images/default_avatar.png"}
            alt=""
          />
        </figure>
        <Link
          to="/myprofile/update"
          id="edit_profile"
          className="btn btn-primary btn-block mt-5"
        >
          Edit Profile
        </Link>

        <Link
          to="/verify"
          id="verify_profile"
          className="btn btn-primary btn-block"
        >
          Verify Profile
        </Link>
      </div>

      <div className="col-12 col-md-5">
        <h4>Name</h4>
        <p>{user.name}</p>

        <h4>Email</h4>
        <p>{user.email}</p>

        <h4>Joined</h4>
        <p>{String(user.createdAt).substring(0, 10)}</p>

        {/* <Link to="/orders" className="btn btn-danger btn-block mt-5">
          My Orders
        </Link> */}

        <Link
          to="/myprofile/update/password"
          className="btn btn-primary btn-block mt-3"
        >
          Change Password
        </Link>
      </div>
    </div>
  );
}
