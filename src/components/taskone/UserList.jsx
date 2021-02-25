import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 1px solid #000;
  padding: 20px;
  
  span {
    display: block;
    margin-bottom: 5px;
  }
`;

const UserInfo = styled.div`
  border-right: 1px solid #000;
  text-align: left;
  width: 260px;
`;

const Users = styled.div`
  max-height: 300px;
  overflow: scroll;
  margin-top: 15px;
`;

const useDebounce = (value, delay = 500) => {
  // https://usehooks.com/useDebounce/
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const debouncedFilter = useDebounce(filter, 5000);

  const fetchData = useCallback((query = '') => {
    fetch(`https://jsonplaceholder.typicode.com/users${query ? `?username=${encodeURIComponent(query)}` : ''}`).then(async (response) => {
      const data = await response.json();
      setUsers(data);
    });
  }, []);

  useEffect(fetchData, [fetchData]);

  useEffect(() => {
    fetchData(debouncedFilter);
  }, [fetchData, debouncedFilter]);

  return (
    <div>
      <div>
        Filter:
        <input
          type="text"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          placeholder="Enter username"
        />
      </div>
      <Users>
        {users.map((user) => (
          <Row key={user.id}>
            <UserInfo>
              <span>{`Name: ${user.name}`}</span>
              <span>{`Username: ${user.username}`}</span>
            </UserInfo>
            <div>
              <div>
                <span>{user.address.street}</span>
                <span>{user.address.suite}</span>
                <span>{user.address.city}</span>
                <span>{user.address.zipcode}</span>
              </div>
              <div>
                <span>{user.email}</span>
                <span>{user.phone}</span>
              </div>
            </div>
          </Row>
        ))}
      </Users>
    </div>
  );
};

export default UserList;
