import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSalute } from '../redux/slices/greetingSlice';

console.log(3);

const Greetings = () => {
  const dispatch = useDispatch();
  const { greeting, loading } = useSelector((store) => store.greetingStore);

  useEffect(() => {
    dispatch(fetchSalute());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{greeting || 'No greeting available'}</p>
      )}
    </div>
  );
};

export default Greetings;
