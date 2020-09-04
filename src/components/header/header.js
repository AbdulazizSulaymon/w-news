import React, { Component } from "react";
import "./header.css";
import { menuList, countryList } from "../../consts";
import { connect } from "react-redux";
import { countryChanged } from "../../actions";
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
  getMuneList = (menuList) => {
    const m = menuList.map((item) => {
      return (
        <li key={item}>
          <Link
            to={`/news/${item}`}
            onClick={() => {
              this.toggleMenu(true);
            }}
          >
            {item}
          </Link>
        </li>
      );
    });

    return m;
  };

  getCountryList = (countryList, countryChanged, country) => {
    const b = Object.entries(countryList).map(([key, value]) => {
      const click =
        country !== key
          ? () => {
              countryChanged(key);
              const path = this.props.location.pathname;
              if (path.split("/").length > 3) this.props.history.push(`/`);
            }
          : () => {};

      return (
        <button
          className="dropdown-item"
          type="button"
          key={key}
          shortkey={key}
          onClick={click}
        >
          {value}
        </button>
      );
    });

    return b;
  };

  showed = false;
  toggleMenu = (remove = false) => {
    if (this.showed || remove)
      document.getElementById("menu-list").classList.remove("menu-active");
    else document.getElementById("menu-list").classList.add("menu-active");
    this.showed = !this.showed;
  };

  render() {
    const { country, countryChanged } = this.props;
    return (
      <header>
        <div className="container-fluid header">
          <Link to="/">
            <img className="logo" src="/img/logo.png" alt="w-news"></img>
          </Link>
          <ul className="menu-list d-none d-lg-flex " id="menu-list">
            {this.getMuneList(menuList)}
          </ul>
          <div className="country mr-2 mr-lg-0">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-globe-americas"></i> {countryList[country]}
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                {this.getCountryList(countryList, countryChanged, country)}
              </div>
            </div>
          </div>
          <button
            className="barmenu btn d-block d-lg-none"
            onClick={() => {
              this.toggleMenu(false);
            }}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ country }) => {
  return { country };
};

const mapDispatchToProps = {
  countryChanged,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
