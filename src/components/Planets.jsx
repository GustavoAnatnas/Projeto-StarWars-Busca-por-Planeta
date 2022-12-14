import React, { useContext } from 'react';
import AppContext from '../context/Context';
import '../App.css';

function Planets() {
  const {
    filter,
    setNamePlanet,
    columnFilter,
    setColumnFilter,
    operatorFilter,
    setOperatorFilter,
    valueFilter,
    setValueFilter,
    saveValueFiltered,
    setSaveValueFiltered } = useContext(AppContext);

  const handleFilterChange = ({ target }) => {
    setNamePlanet(target.value);
  };

  const filterButton = () => {
    const filteredValues = {
      columnFilter,
      operatorFilter,
      valueFilter,
    };
    setSaveValueFiltered([...saveValueFiltered, filteredValues]);
  };

  const deleteAllFilters = () => {
    setSaveValueFiltered([]);
  };

  const deletFilter = (index) => {
    const newSaveValueFiltered = [...saveValueFiltered];
    newSaveValueFiltered.splice(index, 1);
    setSaveValueFiltered(newSaveValueFiltered);
  };

  return (
    <div>
      <form className="form">
        <input
          data-testid="name-filter"
          type="text"
          onChange={ handleFilterChange }
          placeholder="Digite o nome do planeta"
          className="name-filter"
        />
        <label className="column-name" htmlFor="column">
          Coluna
          <select
            value={ columnFilter }
            data-testid="column-filter"
            className="column"
            onChange={ ({ target }) => setColumnFilter(target.value) }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label className="operator-name" htmlFor="operator">
          Operador
          <select
            value={ operatorFilter }
            className="operator"
            onChange={ ({ target }) => setOperatorFilter(target.value) }
            data-testid="comparison-filter"
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <input
          type="number"
          value={ valueFilter }
          className="number-filter"
          onChange={ ({ target }) => setValueFilter(target.value) }
          data-testid="value-filter"
        />
        <button
          className="button-filter"
          type="button"
          onClick={ filterButton }
          data-testid="button-filter"
        >
          Filtrar
        </button>
        <button
          type="button"
          className="delete-filter"
          onClick={ deleteAllFilters }
          data-testid="button-remove-filters"
        >
          Deletar Filtros
        </button>
      </form>
      {
        saveValueFiltered.map((fil, index) => (
          <p
            key={ `${fil.columnFilter}-${index}` }
            data-testid="filter"
          >
            <button
              type="button"
              className="delete-filter-bttn"
              onClick={ () => deletFilter(index) }
            >
              x
            </button>
            { `${fil.columnFilter} 
            ${fil.operatorFilter} 
            ${fil.valueFilter}` }
          </p>
        ))
      }
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            filter.map((infor) => (
              <tr key={ infor.name }>
                <td>{ infor.name }</td>
                <td>{ infor.rotation_period }</td>
                <td>{ infor.orbital_period }</td>
                <td>{ infor.diameter }</td>
                <td>{ infor.climate }</td>
                <td>{ infor.gravity }</td>
                <td>{ infor.terrain }</td>
                <td>{ infor.surface_water }</td>
                <td>{ infor.population }</td>
                <td>{ infor.films }</td>
                <td>{ infor.created }</td>
                <td>{ infor.edited }</td>
                <td>{ infor.url }</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  );
}

export default Planets;
