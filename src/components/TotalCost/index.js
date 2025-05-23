import { useSelector } from 'react-redux';

const TotalCost = () => {
  const updatedItems = useSelector(state => state.projectItems.items);

  const totalCost = updatedItems.reduce(
    (acc, item) => acc + Number(item.cost),
    0
  );

  return (
    <div>
      <h1>Total Project Cost</h1>
      <p>Rupees {totalCost}</p>
    </div>
  );
};

export default TotalCost;
