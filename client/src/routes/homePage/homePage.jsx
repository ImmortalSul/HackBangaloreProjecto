
import SearchBar from "../../components/searchbar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Accessible Everywhere: Help Us Build an Inclusive Map</h1>
          <p><b>
          Rate & Review Public Spaces and
          help create an inclusive world with
          one location at a time.</b>
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>2+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>200000+</h1>
              <h2>People Served!</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
