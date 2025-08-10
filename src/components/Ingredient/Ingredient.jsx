const Ingredient = ({ ingredient, onClick, buttonLabel }) => {
  return (
    <li
      style={{
        backgroundColor: ingredient.color,
        color: 'black',
        padding: '10px',
        margin: '5px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '4px',
      }}
    >
      {ingredient.name}
      <button onClick={onClick} style={{ marginLeft: '10px' }}>
        {buttonLabel}
      </button>
    </li>
  );
};

export default Ingredient;
