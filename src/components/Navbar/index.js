import { useSelector } from "react-redux";
import "./style.css"


const Navbar = () => {
  const {user} = useSelector(state => state.auth);

  

  return (
    <>
      <ul class="nav nav-tabs" id="navId">
        <li class="nav-item">
          <a href="#tab1Id" class="nav-link active styCustomColor">
            {user ? user?.username : 'Non Login'}
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar