
import MyCalendar from "../components/MyCalendar";
import Header from "../components/Header";
import './../styles/Home.css'
function Home() {
  return (
    <div className="containerHome">
      <Header />
      <MyCalendar />
    </div>
  );
}

export default Home;
