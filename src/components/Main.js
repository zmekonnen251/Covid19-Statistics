import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadData } from '../redux/actionCreators';

const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.covid19Reducer);

  useEffect(() => {
    dispatch(loadData());
  }, []);

  console.log(data);

  return (
    <>
      <h1>Hello from Main</h1>
    </>
  );
};

export default Main;
