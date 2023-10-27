import { useState } from 'react';
import './dashboard.css';

function Dashboard() {
  //when inputs have a file, show the name of the file
  const showFileName = (e) => {
    const fileName = e.target.files[0].name;
    e.target.previousElementSibling.textContent = fileName;
  };

  const verify = async (className) => {
    if (className === '.xml-content-models') setModelsUploaded(true);
    if (className === '.xml-content-person') setPersonUploaded(true);
  }

  //read xml file and display content in xml-content div as if it was code
  const readXML = async (className, e) => {
    await verify(className);
    const xmlContent = await document.querySelector(className);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      xmlContent.textContent = e.target.result;
    };
    reader.readAsText(file);
  };

  //states for checking if files have been uploaded
  const [modelsUploaded, setModelsUploaded] = useState(false);
  const [personUploaded, setPersonUploaded] = useState(false);

  return (
    <div className='dashboard'>
      <div className='titles'>
        <h1>Dashboard</h1>
        <p>Upload your XML files to see them here</p>
      </div>
      <div className='xml-inputs'>
        <label htmlFor='models'>
          <span>Upload here models XML file</span>
          <input
            id='models'
            type='file'
            accept='.xml'
            onChange={showFileName}
            onChangeCapture={(e) => readXML('.xml-content-models', e)}
          />
        </label>
        <label htmlFor='person'>
          <span>Upload here person XML file</span>
          <input
            id='person'
            type='file'
            accept='.xml'
            onChange={showFileName}
            onChangeCapture={(e) => readXML('.xml-content-person', e)}
          />
        </label>
      </div>
      <div className='xml-content'>
        {modelsUploaded && (
          <div className='xml-models'>
            <h4>Models</h4>
            <pre className='xml-content-models'></pre>
          </div>
        )}
        {personUploaded && (
          <div className='xml-person'>
            <h4>Person</h4>
            <pre className='xml-content-person'></pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
