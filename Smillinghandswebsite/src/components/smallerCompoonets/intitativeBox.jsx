const InitiativeBox = ({ img, header }) => {
  return (
    <>
      <div className="intiatives_box">
        <img src={img} alt="Placeholder" />
        <div className="initiatives_text">
          <h3>{header}</h3>
       
        </div>
      </div>
    </>
  );
};

export default InitiativeBox;
