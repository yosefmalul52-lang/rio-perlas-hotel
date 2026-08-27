import { useNavigate } from "react-router-dom";
import HomeView from "../components/home/HomeView";

export default function HomePage() {
  const navigate = useNavigate();

  return <HomeView onStartPlanning={() => navigate("/contact")} />;
}
