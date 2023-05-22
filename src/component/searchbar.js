import React, { useState, useEffect } from 'react';
import {FaSearch} from 'react-icons/fa'
import './searchbar.css'

export default function Searchbar () {
  const [states, setStates] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredStates, setFilteredStates] = useState([]);

  useEffect(() => {
    fetchStates();
  }, []);

  const fetchStates = async () => {
    try {
      const response = await fetch('http://cdn-api.co-vin.in/api/v2/admin/location/states');
      const data = await response.json();
      setStates(data.states);
    } catch (error) {
      console.log('Error fetching states:', error);
    }
  };

  useEffect(() => {
    const filterStates = () => {
      const filtered = states.filter((state) =>
        state.state_name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredStates(filtered);
    };

    filterStates();
  }, [search]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    
  };

  return (
    <div className='main'>
        
        <div className='input-field'>
        <FaSearch className='search'/>
      <input
        type="text"
        placeholder="Search states..."
        onChange={handleInputChange}
      />
      </div>
      
        {filteredStates.map((state) => (
          <div key={state.state_id}>{state.state_name}</div>
        ))}
    </div>
  );
};
