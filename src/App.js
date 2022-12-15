import { Routes, Route, } from "react-router-dom";
import Home from "./components/Home";
import Leftsidebar from "./components/Leftsidebar";
import Products from "./components/Products";
import Schedules from "./components/Schedules";
import Payouts from "./components/Payouts";
import Statement from "./components/Statement";
import Inbox from "./components/Inbox";
import Notifications from "./components/Notifications";
import Comments from "./components/Comments";
import Settings from "./components/Settings";
import Notificationswithcomment from "./components/Notificationswithcomment";
import Statistics from "./components/Statistics";
import Login from "./components/Login";


function App() {
  return (
    <div>
      
      <Routes>
        {/* <Route path="/" element={<Signin />} /> */}
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="leftsidebar" element={<Leftsidebar />} />
        <Route path="patient" element={<Products />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="contracts" element={<Schedules />} />
        <Route path="bids" element={<Payouts />} />
        <Route path="financials" element={<Statement />} />
        <Route path="settings" element={<Settings />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="notificationswithcomment" element={<Notificationswithcomment />} />
        <Route path="comments" element={<Comments />} />


      </Routes>
    </div>
  );
}

export default App;
