import { FiBriefcase } from 'react-icons/fi';
import { LuCirclePlus } from 'react-icons/lu';
import { useState } from 'react';
import {v4 as uuidv4} from "uuid";

import TotalCost from '../TotalCost';
import ProjectItems from '../ProjectItems';
import Noitems from '../Noitems';

import {useDispatch} from "react-redux";
import {addItem} from "../redux/itemsSlice.js"

const Home = () => {
  const [itemName, setItemName] = useState('');
  const [cost, setCost] = useState('');
  const [other, setOther] = useState('');
  const [otherCost, setOtherCost] = useState('');

  const dispatch = useDispatch();

  const onChangeItem = e => {
    setItemName(e.target.value);
  };

  const onChangeCost = e => {
    setItemName(e.target.value);
  };

  const onChangeOther = e => {
    setOther(e.target.value);
  };

  const onChangeOtherCost = e => {
    setOtherCost(e.target.value);
  };

  const onSubmitItem = e => {
    e.preventDefault();
    const itemObj = {
	    id: uuidv4(),
	    name: itemName,
	    cost: cost
    }
    dispatch(addItem(itemObj));	  
  };

  const onSubmitOthers = e => {
    e.preventDefault();
    const otherObj = {
	    id: uuidv4(),
	    name: other,
	    cost: otherCost
    }
    dispatch(addItem(otherObj));	  
  };

  return (
    <div>
      <div>
        <FiBriefcase color="#4844ab" />
        <h1>ProjectCostTracker</h1>
      </div>
      <button type="button">logout</button>
      <div>
        <div>
          <LuCirclePlus />
          <h1>Add New Item</h1>
        </div>
        <form onSubmit={onSubmitItem}>
          <div>
            <label htmlFor="item">Item Name</label>
            <input
              id="item"
              type="text"
              placeholder="e.g.laptop, hard disk etc."
              value={itemName}
              onChange={onChangeItem}
            />
          </div>
          <div>
            <label htmlFor="cost">Cost(Rupees)</label>
            <input
              type="number"
              id="cost"
              value={cost}
              onChange={onChangeCost}
            />
          </div>
          <button type="submit">
            <LuCirclePlus />
            <p>Add Item</p>
          </button>
        </form>
      </div>
      <div>
        <div>
          <LuCirclePlus />
          <h1>Add Other Expenses</h1>
        </div>
        <form onSubmit={onSubmitOthers}>
          <div>
            <label htmlFor="others">Other Expenses Description</label>
            <input
              id="others"
              type="text"
              placeholder="e.g.shipping, taxes etc."
              value={other}
              onChange={onChangeOther}
            />
          </div>
          <div>
            <label htmlFor="otherCost">Other Cost(Rupees)</label>
            <input
              type="number"
              id="otherCost"
              value={otherCost}
              onChange={onChangeOtherCost}
            />
          </div>
          <button type="submit">
            <LuCirclePlus />
            <p>Add Others</p>
          </button>
        </form>
      </div>
      <div>
        <TotalCost />
        <ProjectItems />
      </div>
    </div>
  );
};

export default Home;

//inp box color #dce1fa text color #4844ab, bglogin #c8d0f7 border #c0c9fa
