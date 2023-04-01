const Select = ({ labelValue, items, onChange, value }) => {
  const handleOnChange = (e) => {
    const val = e.target.value;
    onChange(val);
  };

  return (
    <div class="form-group" style={{ marginBottom: "14px" }}>
      <label for="">{labelValue}</label>
      <select
        value={value}
        class="form-control"
        name=""
        id=""
        onChange={handleOnChange}
      >
        {items.map(({ id, text, value }) => {
          return (
            <option key={id} value={value}>
              {text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
