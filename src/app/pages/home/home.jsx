import './home.css';
import car from '../../../assets/images/car.png';

function Home() {

  return (
    <div className='home'>
      <div className="left">
        <h1>GEPCAR</h1>
        <h4>The only tool that you'll need!</h4>
      </div>
      <div className="right">
        <img src={car} alt="car" />
      </div>
    </div>
  );
}

export default Home;
