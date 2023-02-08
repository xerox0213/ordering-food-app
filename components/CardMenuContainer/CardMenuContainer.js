import { useState } from 'react';
import Filter from '../Filter/Filter';
import Loader from '../Loader/Loader';
import CardMenu from '../CardMenu/CardMenu';
import { useQuery } from '@tanstack/react-query';
import styles from './CardMenuContainer.module.css';

const CardMenuContainer = () => {
  const [search, setSearch] = useState('allFoods');
  const { data, isFetching } = useQuery({
    queryKey: [search],
    queryFn: () =>
      fetch(`/api/food_api?type=${search}`).then((res) => res.json()),
  });

  if (isFetching) {
    return (
      <div className='grid'>
        <Loader />
      </div>
    );
  }

  const foodData = data;
  return (
    <div className={styles.grid}>
      <div className={styles.filterContainer}>
        <Filter
          text='Tout'
          type='allFoods'
          setSearch={setSearch}
          search={search}
        />
        <Filter
          text='Burger'
          type='burgers'
          setSearch={setSearch}
          search={search}
        />
        <Filter
          text='Pizza'
          type='pizza'
          setSearch={setSearch}
          search={search}
        />
        <Filter
          text='Sandwiches'
          type='sandwiches'
          setSearch={setSearch}
          search={search}
        />
        <Filter
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
