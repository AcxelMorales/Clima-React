import React, { Fragment, useState, useEffect } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Wheater from './components/Wheater';
import Error from './components/Error';

function App() {
  const [search, setSearch] = useState({
    city: '',
    country: ''
  });
  const [consult, setConsult] = useState(false);
  const [result, setResut] = useState({});
  const [error, setError] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const consultAPI = async () => {
      if (consult) {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=7b53a249f3f179c9a4fd947524ea30bd`;

        const response = await fetch(url);
        const data = await response.json();

        setResut(data);
        setConsult(false);

        if (result.cod === '404') setError(true);
        else setError(false);
      }
    }

    consultAPI();
  }, [consult]);

  let component;
  if (error) component = <Error message="No se encontraron resultados" />;
  else component = <Wheater result={result} />

  return (
    <Fragment>
      <Header title="Clima React" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setConsult={setConsult}
              />
            </div>
            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
