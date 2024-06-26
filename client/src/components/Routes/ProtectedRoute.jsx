// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import API from "../../services/API";
// // import { getCurrentUser } from "../../redux/features/auth/authActions";
// import { getCurrentUser } from "../../services/operations/authAPI";

// import { Navigate } from "react-router-dom";
// const ProtectedRoute = ({ children }) => {
//   const dispatch = useDispatch();

//   //get user current
//   const getUser = async () => {
//     try {
//       const { data } = await API.get("/auth/current-user");
//       if (data?.success) {
//         dispatch(getCurrentUser(data));
//       }
//     } catch (error) {
//       localStorage.clear();
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getUser();
//   });

//   if (localStorage.getItem("token")) {
//     return children;
//   } else {
//     return <Navigate to="/login" />;
//   }
// };

// export default ProtectedRoute;

// import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function ProtectedRoute({ children }) {
  // const { token } = useSelector((state) => state.auth)

  if (localStorage.getItem("token")) {
    return children
  } else {
    return <Navigate to="/login" />
  }
}

export default ProtectedRoute
