import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/sinflar");
  }, [navigate]);

  return <div></div>;
};

export default AuthPage;
