import { useState } from 'react';
import Filter from '../Filter/Filter';
import CardMenu from '../CardMenu/CardMenu';
import { useQuery } from '@tanstack/react-query';

const CardMenuContainer = () => {
  const [search, setSearch] = useState('allFoods');
  const { data, isFetching } = useQuery({
    queryKey: [search],
    queryFn: () =>
      fetch(`/api/getData?type=${search}`).then((res) => res.json()),
  });

  if (isFetching) {
    return (
      <div className='grid'>
        <p className='loader'>Loading ...</p>
      </div>
    );
  }

  const foodData = data;
  return (
    <div className='grid'>
      <div className='filterContainer'>
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
