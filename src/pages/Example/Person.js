import { connect } from "react-redux";

const Person = ({ person }) => {
  const { name, addr, photo } = person || {};

  return (
    <>
      <div class="card" style={{ margin: "3em" }}>
        <img class="card-img-top" width={"100px"} src={photo} alt="" />
        <div class="card-body">
          <h4 class="card-title">{name}</h4>
          <p class="card-text">{addr}</p>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  person: state.person,
});

export default connect(mapStateToProps)(Person);


// store, 
// reducers, 
// action => action akan dibahas lebih lanjut next meeting;