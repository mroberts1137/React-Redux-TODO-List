import ListItem from './ListItem';

const List = ({ items, dispatch }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <ListItem key={item.id} item={item} dispatch={dispatch} />
        );
      })}
    </div>
  );
};

export default List;