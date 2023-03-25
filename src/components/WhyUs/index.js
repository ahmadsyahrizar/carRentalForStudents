import "./style.css"

const WhyUs = ({ children }) => {
  return (
    <div>
      <h3>Why Us?</h3>
      <p>Mengapa harus pilih Binar Car Rental?</p>
      <div className="flex-container">{children}</div>
    </div>
  );
};

export default WhyUs;