import './cars.css';
import { useContext } from 'react';
import { APIContext } from '../../contexts/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Cars() {
  const context = useContext(APIContext);

  const handleGetCarsInfo = () => {
    const carModel = document.querySelector('.make').value;

    //fetch car info and send api key in headers
    fetch('https://api.api-ninjas.com/v1/cars?limit=100&make=' + carModel, {
      method: 'GET',
      headers: {
        'X-Api-Key': context.carApiKey,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          alert(data.error);
          return;
        }
        console.log(data);
        //download data as json file
        const a = document.createElement('a');
        a.href = 'data:application/json,' + JSON.stringify(data);
        a.download = 'cars.json';
        a.click();
        
        fetch(context.personApi, {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            //download data as json file
            const a = document.createElement('a');
            a.href = 'data:application/json,' + JSON.stringify(data);
            a.download = 'person.json';
            a.click();
          })
          .catch((err) => alert(err));
      })
      .catch((err) => alert(err));
  };

  return (
    <div className='cars'>
      <div className='titles'>
        <h1>Cars</h1>
        <p>Enter a car maker to get a JSON file with all models and information about the person that searches for them</p>
      </div>
      <div className='search'>
        <input className='make' type='text' placeholder='Enter a car make' />
        <button onClick={handleGetCarsInfo}><FontAwesomeIcon icon={faDownload} size='lg' /></button>
      </div>
    </div>
  );
}

export default Cars;
