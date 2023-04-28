const ItemDetail = ({ img, description, stock, price }) => {
  return (
    <>
      <div>
        <div>
          <img src={img} />
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div>{price}</div>
      </div>
    </>
  );
};

export default ItemDetail;
