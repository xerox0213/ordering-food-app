import { useState } from 'react';
import useFetch from '@/hooks/useFetch';
import Loader from '../../LoaderPage/LoaderPage';
import CardMenu from '../CardMenuItem/CardMenuItem';
import styles from './CardMenuContainer.module.css';
import BtnFilterFood from '../../BtnFilterFood/BtnFilterFood';

const CardMenuContainer = () => {
  const [search, setSearch] = useState('allFoods');
  const [data, isFetching, isError] = useFetch(
    [search],
    `food_api?type=${search}`
  );

  if (isFetching) {
    return (
      <div className='grid'>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className='section'>
        <h1>Une erreur s'est produite</h1>
      </div>
    );
  }

  const foodData = data;
  return (
    <div className={styles.grid}>
      <div className={styles.filterContainer}>
        <BtnFilterFood
          text='Tout'
          type='allFoods'
          setSearch={setSearch}
          search={search}
        />
        <BtnFilterFood
          text='Burger'
          type='burgers'
          setSearch={setSearch}
          search={search}
        />
        <BtnFilterFood
          text='Pizza'
          type='pizza'
          setSearch={setSearch}
          search={search}
        />
        <BtnFilterFood
          text='Sandwiches'
          type='sandwiches'
          setSearch={setSearch}
          search={search}
        />
        <BtnFilterFood
          text='Dessert'
          type='desserts'
          setSearch={setSearch}
          search={search}
        />
      </div>
      {foodData.map((data) => (
        <CardMenu key={data.id} data={data} />
      ))}
    </div>
  );
};

export default CardMenuContainer;
