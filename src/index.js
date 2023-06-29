import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import './index.css';
import data from './data.json';

const Head = (props) => {
  return <p className={props.className} id={props.id}>I am a Head</p>
}

const Card = () => {
 return  data.map(photo => {
    return (<div key={photo.id} className="card mx-auto my-2" style={{ width: "18rem" }}>
      <img src={photo.url} className="card-img-top" alt={photo.title} />
      <div className="card-body">
        <h5 className="card-title">Card title: {photo.title}</h5>
        <Head id='id-123' className='card-title'/>
        <a href="http" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>)
  })
};



ReactDOM.createRoot(document.getElementById('root')).render(
  <Card /> // <React.StrictMode>
  //   <App />

  // </React.StrictMode>
);
