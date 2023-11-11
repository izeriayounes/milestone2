import Button from "../components/Button";
import { logout } from "../api/apiService";
import Loading from "../components/Loading";
import { useState } from "react";

function Logout() {
  const handleLogout = async () => {
    setIsLoading(true);
    await logout();
    setIsLoading(false);
    window.location.pathname = "/login";
  };

  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      {isLoading && <Loading />}
      <Button
        className="position-fixed top-0 end-0 z-index-1 rounded-3"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
}

export default Logout;
