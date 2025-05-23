import { MdDelete } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeItem } from '../redux/itemsSlice.js';

const Item = props => {
  const { details, onDelete } = props;
  const { id, name, cost } = details;
  const dispatch = useDispatch();

  const onDeletingItem = () => {
    dispatch(removeItem(id));
  };

  return (
    <li>
      <p>Item: {name}</p>
      <p>Cost: {cost}</p>
      <button onClick={onDeletingItem}>
        <MdDelete />
      </button>
    </li>
  );
};

const ProjectItems = () => {
  const updatedItems = useSelector(state => state.projectItems.items);

  return (
    <div>
      <h1>Project Items</h1>
      <ul>
        {updatedItems.map(eachItem => (
          <Item key={eachItem.id} details={eachItem} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectItems;
