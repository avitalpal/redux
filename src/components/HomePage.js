import '../App.css';
import logo from '../logo.svg';

const HomePage = () => {

  return (
    <div class="HomePage">
        <div class="content">
            <h2 class="flexTxt heading">Welcome to your user session!</h2>
            <p class="flexTxt desc1">This app is built primarily using <strong>Redux</strong></p>
            <img src={logo} alt="logo" />
            <p class="flexTxt desc2">To check the documentation for it, hit <a href="https://www.notion.so/wizteam/Redux-d13f1b62c90b4c93a221be5c21bdf18f">this link</a></p>
        </div>
    </div>
  );
}

export default HomePage;