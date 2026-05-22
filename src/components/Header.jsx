import "./styles.css";
function Header() {
  return (
    <>
      <div className="brand">
        <span className="brand-icon">⊕</span>
        <div>
          <h1 className="brand-title">Split the Bill</h1>
          <p className="brand-sub">Calculate tips and split the check.</p>
        </div>
      </div>
    </>
  );
}

export default Header;
