import './index.css';

function Header() {
  return (
    <div className="Header">
        <img src="../Monstarlab_Logo.png" className="logo-header" alt="logo" />
        <ul className="list-header" >
            <li><a href="#">Home</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Other</a></li>
        </ul>
        <div className="btn-header">
            <button>-</button>
            <button>/</button>
            <button>x</button>
        </div>
    </div>
  );
}
export default Header;
