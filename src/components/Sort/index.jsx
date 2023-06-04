import React from 'react';
import './Sort.css';

function Sort({ onSortPrice, onSortRate }) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);

  const list = ['цене', 'популярности'];

  const sortByList = (index) => {
    if (index === 0) {
      onSortPrice(index);
    } else {
      onSortRate(index);
    }
  };

  const onClickSorted = (index) => {
    setSelected(index);
    setOpen(false);
    sortByList(index);
  };

  const sortedItem = list[selected];

  return (
    <div className="sort">
      <div className="sort_title">
        Сортировать по:
        <span className="active" onClick={() => setOpen(!open)}>
          {sortedItem}
        </span>
        <ul>
          {open &&
            list.map((item, index) => (
              <li
                key={index}
                onClick={() => onClickSorted(index)}
                className={selected === index ? 'active' : ''}>
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Sort;
