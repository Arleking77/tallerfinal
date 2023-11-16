// MiApi.jsx
import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';

const Miapi = ({ setFeriados, feriados, searchTerm }) => {
  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      const url = "https://api.victorsanmartin.com/feriados/en.json";
      const response = await fetch(url);
      const data = await response.json();
      setFeriados(
        data.data.sort((a, b) => {
          if (a.type < b.type) return -1;
          if (a.type > b.type) return 1;

          if (a.date < b.date) return -1;
          if (a.date > b.date) return 1;

          return 0;
        })
      );
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  };

  return (
    <div>
      <Table className='app-table' responsive striped bordered hover>
        <thead>
          <tr className='table-header'>
            <th>FECHA</th>
            <th>TITULO</th>
            <th>TIPO</th>
            <th>EXTRA</th>
          </tr>
        </thead>
        <tbody>
          {feriados
            .filter((feriado) => {
              return (
                searchTerm === '' ||
                feriado.date.includes(searchTerm) ||
                feriado.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                feriado.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                feriado.extra.toLowerCase().includes(searchTerm.toLowerCase())
              );
            })
            .map((feriado, index) => (
              <tr key={index} className='table-row'>
                <td>{feriado.date}</td>
                <td>{feriado.title}</td>
                <td>{feriado.type}</td>
                <td>{feriado.extra}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Miapi;