import "./style.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <ul class="nav nav-tabs" id="navId">
        <li class="nav-item">
          <a href="#tab1Id" class="nav-link active styCustomColor">
            Active
          </a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            href="#s"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            style={{color: "blue"}}
          >
            Dropdown
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#tab2Id">
              Action
            </a>
            <a class="dropdown-item" href="#tab3Id">
               Cari Mobil
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#tab4Id">
              Action
            </a>
          </div>
        </li>
        <li class="nav-item">
          <Link to="/cari-mobil">Cari Mobil</Link>
          {/* <a href="/cari-mobil" class="nav-link">
            Cari Mobil
          </a> */}
        </li>
        <li class="nav-item">
          <a href="##" class="nav-link disabled">
            Disabled
          </a>
        </li>
      </ul>

      <div class="tab-content">
        <div
          class="tab-pane fade show active"
          id="tab1Id"
          role="tabpanel"
        ></div>
        <div class="tab-pane fade" id="tab2Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab3Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab4Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab5Id" role="tabpanel"></div>
      </div>
    </>
  );
};

export default Navbar