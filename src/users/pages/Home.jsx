import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { AuthContext } from "../../shared/context/auth-context";
import UsersGrid from "../components/UsersGrid";
import DepartmentGrid from "../components/DepartmentGrid";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const Home = () => {
  const auth = useContext(AuthContext);
  const [loadedUsers, setLoadedUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (auth.isLoggedIn) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
        .then(async (response) => {
          const responseData = await response.json();
          setLoadedUsers(responseData);
          setIsLoading(false);
        })
        .catch((error) => console.log("error", error));
    }
  }, [auth.isLoggedIn]);

  return <div className="home-wrapper">
    <div className="Users-grid-wrapper">
        {isLoading && <LoadingSpinner/>}
        {auth.isLoggedIn && loadedUsers && <UsersGrid usersData={loadedUsers}/> }
        {auth.isLoggedIn && loadedUsers && <DepartmentGrid/>}
    </div>
  </div>;
};

export default Home;
