import { Link, useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";

function Leftsidebar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const openSidebar = () => {
    document.querySelector(".page").classList.toggle("toggle");
    document.querySelector(".sidebar").classList.toggle("active");
  };
  const closeSideBar = () => {
    document.querySelector(".page").classList.remove("toggle");
    document.querySelector(".sidebar").classList.remove("active");
    document.querySelector("body").classList.remove("no-scroll");
    document.querySelector("html").classList.remove("no-scroll");
  };
  const openUser = () => {
    document
      .querySelector(".sidebar")
      .querySelector(".sidebar__user")
      .classList.toggle("active");
    const previous = document
      .querySelector(".sidebar")
      .querySelector(".sidebar__user").previousElementSibling.className;
    console.log(previous);
    const userClass = document
      .querySelector(".sidebar")
      .querySelector(".sidebar__user")
      .className.split(" ");
    console.log(userClass);
    if (userClass[1] == "active") {
      document.querySelector("." + previous).style = "display: block";
    } else {
      document.querySelector("." + previous).style = "display: none";
    }
  };
  const switchDarkMode = () => {
    if (localStorage.getItem("darkMode") == "off") {
      document.querySelector("body").classList.add("dark");
      localStorage.setItem("darkMode", "on");
    } else {
      document.querySelector("body").classList.remove("dark");
      localStorage.setItem("darkMode", "off");
    }
  };

  return (
    <div>
      <Modal size="lg" show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Account Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="popup__form">
            {/* <div className="popup__title h6">Account Settings</div> */}
            <div className="popup__tags">
              <Link className="popup__tag active" to="#">
                Profile
              </Link>
              <Link className="popup__tag" to="#">
                Password
              </Link>
              <Link className="popup__tag" to="#">
                Email
              </Link>
              <Link className="popup__tag" to="#">
                Notification
              </Link>
              <Link className="popup__tag" to="#">
                Settings
              </Link>
            </div>
            <select className="popup__select mobile-show">
              <option>Profile</option>
              <option>Password</option>
              <option>Email</option>
              <option>Notification</option>
              <option>Settings</option>
            </select>
            <div className="popup__user">
              <div className="popup__title h6 mobile-show">Your Profile</div>
              <div className="popup__category caption-sm">Your Avatar</div>
              <div className="popup__line">
                <div className="popup__ava">
                  <img
                    className="popup__pic"
                    src="./assets/img/ava.png"
                    alt=""
                  />
                </div>
                <div className="popup__details">
                  <div className="popup__btns">
                    <div className="popup__loading">
                      <input className="popup__file" type="file" />
                      <button className="popup__btn  btn_purple">
                        Upload New
                      </button>
                    </div>
                    <button className="popup__btn  btn_gray">
                      Delete Avatar
                    </button>
                  </div>
                  <div className="popup__text">
                    Avatar help your teammates recognize you in Unity.
                  </div>
                </div>
              </div>
            </div>
            <div className="popup__fieldset">
              <div className="popup__row">
                <div className="popup__field field">
                  <div className="field__label">Your Full Name</div>
                  <div className="field__wrap">
                    <input className="field__input" type="text" />
                  </div>
                </div>
                <div className="popup__field field">
                  <div className="field__label">Display Name</div>
                  <div className="field__wrap">
                    <input className="field__input" type="text" />
                  </div>
                </div>
              </div>
              <div className="popup__row">
                <div className="popup__field field">
                  <div className="field__label">Role</div>
                  <div className="field__wrap">
                    <input className="field__input" type="text" />
                  </div>
                </div>
                <div className="popup__field field">
                  <div className="field__label">Location</div>
                  <div className="field__wrap">
                    <input className="field__input" type="text" />
                  </div>
                </div>
              </div>
              <div className="popup__row">
                <div className="popup__field field">
                  <div className="field__label">Role</div>
                  <div className="field__wrap">
                    <input className="field__input" type="text" />
                  </div>
                </div>
                <div className="popup__field field">
                  <div className="field__label">Team</div>
                  <div className="field__wrap">
                    <input className="field__input" type="text" />
                  </div>
                </div>
              </div>
              <div className="popup__field field">
                <div className="field__label">Bio</div>
                <div className="field__wrap">
                  <textarea className="field__textarea" defaultValue={""} />
                </div>
              </div>
            </div>
            <button className="btn btn-dark" type="submit">
              Update Profile
            </button>
          </form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
      <div className="sidebar">
        <div className="sidebar__top">
          <button className="sidebar__close" onClick={() => closeSideBar()}>
            <svg
              className="icon icon-close"
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
            >
              <path
                fill="#1B1D21"
                fill-rule="evenodd"
                d="M12.4801,2.08058 C12.773,1.78769 12.773,1.31281 12.4801,1.01992 C12.1872,0.72703 11.7123,0.72703 11.4194,1.01992 L6.8232,5.6161 L2.22705,1.01992 C1.93415,0.72703 1.45928,0.72703 1.16639,1.01992 C0.8735,1.31281 0.87349,1.78769 1.16639,2.08058 L5.7626,6.6768 L1.16639,11.273 C0.8735,11.5659 0.87349,12.0407 1.16639,12.3336 C1.45928,12.6265 1.93416,12.6265 2.22705,12.3336 L6.8232,7.7374 L11.4194,12.3336 C11.7123,12.6265 12.1872,12.6265 12.4801,12.3336 C12.773,12.0407 12.773,11.5659 12.4801,11.273 L7.8839,6.6768 L12.4801,2.08058 Z"
              />
            </svg>
          </button>
          <Link className="sidebar__logo" to="/">
            <img
              className="sidebar__pic sidebar__pic_black"
              src="./assets/img/logo.png"
              alt=""
            />
            <img
              className="sidebar__pic sidebar__pic_white"
              src="./assets/img/logo-white.png"
              alt=""
            />
          </Link>
          <button className="sidebar__burger" onClick={() => openSidebar()} />
        </div>
        <div className="sidebar__wrapper">
          <div className="sidebar__inner">
            <Link className="sidebar__logo" to="/">
              <img
                className="sidebar__pic"
                src="./assets/img/logo-sm.png"
                alt=""
              />
            </Link>
            <div className="sidebar__list">
              <div className="sidebar__group">
                <div className="sidebar__caption caption-sm">
                  Admin<span> tools</span>
                </div>
                <div className="sidebar__menu">
                <Link
                    className={
                      splitLocation[1] === ""
                        ? "sidebar__item active"
                        : "sidebar__item"
                    }
                    to="/"
                  >
                    <div className="sidebar__icon">
                      <svg
                        className="icon icon-overview"
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="22"
                        viewBox="0 0 21 22"
                      >
                        <path
                          fill="#1b1d21"
                          d="M12.925 1.37a.75.75 0 0 1 .102 1.493l-.102.007H5.657c-2.455 0-4.034 1.626-4.125 4.16l-.004.233v8.082c0 2.602 1.483 4.284 3.906 4.38l.223.004h8.604c2.457 0 4.034-1.62 4.125-4.152l.004-.233v-7.04a.75.75 0 0 1 1.493-.102l.007.102v7.04c0 3.4-2.14 5.772-5.394 5.88l-.234.004H5.657c-3.33 0-5.525-2.3-5.625-5.644l-.004-.24V7.264c0-3.392 2.142-5.78 5.394-5.9l.234-.004h7.268zM15.04 8.2a.75.75 0 0 1 .195.96l-.06.093-2.93 3.78a.75.75 0 0 1-.964.193l-.093-.062-2.82-2.214-2.53 3.3a.75.75 0 0 1-.959.198l-.093-.06a.75.75 0 0 1-.198-.959l.06-.093 2.993-3.9a.75.75 0 0 1 .965-.195l.093.062 2.82 2.215 2.467-3.183a.75.75 0 0 1 1.052-.134zM17.995.528c1.476 0 2.672 1.196 2.672 2.672s-1.196 2.672-2.672 2.672-2.672-1.196-2.672-2.672S16.52.528 17.995.528zm0 1.5c-.647 0-1.172.525-1.172 1.172s.525 1.172 1.172 1.172 1.172-.525 1.172-1.172-.525-1.172-1.172-1.172z"
                        />
                      </svg>
                    </div>
                    <div className="sidebar__text">Login</div>
                  </Link>
                  <Link
                    className={
                      splitLocation[1] === "home"
                        ? "sidebar__item active"
                        : "sidebar__item"
                    }
                    to="/home"
                  >
                    <div className="sidebar__icon">
                      <svg
                        className="icon icon-overview"
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="22"
                        viewBox="0 0 21 22"
                      >
                        <path
                          fill="#1b1d21"
                          d="M12.925 1.37a.75.75 0 0 1 .102 1.493l-.102.007H5.657c-2.455 0-4.034 1.626-4.125 4.16l-.004.233v8.082c0 2.602 1.483 4.284 3.906 4.38l.223.004h8.604c2.457 0 4.034-1.62 4.125-4.152l.004-.233v-7.04a.75.75 0 0 1 1.493-.102l.007.102v7.04c0 3.4-2.14 5.772-5.394 5.88l-.234.004H5.657c-3.33 0-5.525-2.3-5.625-5.644l-.004-.24V7.264c0-3.392 2.142-5.78 5.394-5.9l.234-.004h7.268zM15.04 8.2a.75.75 0 0 1 .195.96l-.06.093-2.93 3.78a.75.75 0 0 1-.964.193l-.093-.062-2.82-2.214-2.53 3.3a.75.75 0 0 1-.959.198l-.093-.06a.75.75 0 0 1-.198-.959l.06-.093 2.993-3.9a.75.75 0 0 1 .965-.195l.093.062 2.82 2.215 2.467-3.183a.75.75 0 0 1 1.052-.134zM17.995.528c1.476 0 2.672 1.196 2.672 2.672s-1.196 2.672-2.672 2.672-2.672-1.196-2.672-2.672S16.52.528 17.995.528zm0 1.5c-.647 0-1.172.525-1.172 1.172s.525 1.172 1.172 1.172 1.172-.525 1.172-1.172-.525-1.172-1.172-1.172z"
                        />
                      </svg>
                    </div>
                    <div className="sidebar__text">Overview</div>
                  </Link>
                  <Link
                    className={
                      splitLocation[1] === "patient"
                        ? "sidebar__item active"
                        : "sidebar__item"
                    }
                    to={"/patient"}
                  >
                    <div className="sidebar__icon">
                      <svg
                        className="icon icon-bag"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                      >
                        <path
                          fill="#1b1d21"
                          d="M9.83.028c2.62 0 4.778 1.99 5.043 4.54h.074c1.797 0 3.3 1.36 3.82 3.73h0l.8 6.286c.463 3.96-1.79 6.167-5.563 6.167h0-8.348c-4.078 0-6.162-1.958-5.494-6.41h0l.784-6.082c.433-2.34 1.976-3.69 3.813-3.69h0c.122-1.153.636-2.236 1.466-3.063A5.07 5.07 0 0 1 9.831.028zm5.117 6.04H4.77c-1.098 0-2.034.818-2.332 2.42h0l-.78 6.057c-.522 3.48.78 4.704 4.01 4.704h8.348c2.98 0 4.5-1.54 4.043-4.72h0L17.3 8.555c-.363-1.65-1.29-2.487-2.343-2.487h0zm-2.15 2.784a.75.75 0 0 1 .102 1.493l-.102.007h-.046a.75.75 0 0 1-.102-1.493l.102-.007h.046zm-5.83 0a.75.75 0 0 1 .102 1.493l-.102.007H6.92a.75.75 0 0 1-.102-1.493l.102-.007h.046zm2.862-7.324a3.57 3.57 0 0 0-3.546 3.04h7.08c-.256-1.72-1.74-3.04-3.534-3.04z"
                        />
                        {/* <use xlinkto="img/sprite.svg#icon-bag" /> */}
                      </svg>
                    </div>
                    <div className="sidebar__text">Patient</div>
                  </Link>
                  <Link
                    className={
                      splitLocation[1] === "statistics"
                        ? "sidebar__item active"
                        : "sidebar__item"
                    }
                    to="/statistics"
                  >
                    <div className="sidebar__icon">
                      <svg
                        className="icon icon-chart"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                      >
                        <path
                          fill="#1b1d21"
                          d="M15.686.25c3.646 0 6.064 2.598 6.064 6.335h0v8.83c0 3.737-2.42 6.335-6.064 6.335h0-9.37C2.67 21.75.25 19.152.25 15.415h0v-8.83C.25 2.85 2.675.25 6.314.25h0zm0 1.5h-9.37c-2.786 0-4.564 1.907-4.564 4.835h0v8.83c0 2.932 1.772 4.835 4.564 4.835h9.37c2.792 0 4.564-1.903 4.564-4.835h0v-8.83c0-2.932-1.772-4.835-4.564-4.835h0zM6.37 8.452a.75.75 0 0 1 .743.648l.007.102v6.86a.75.75 0 0 1-1.493.102l-.007-.102v-6.86a.75.75 0 0 1 .75-.75zm4.667-3.283a.75.75 0 0 1 .743.648l.007.102v10.143a.75.75 0 0 1-1.493.102l-.007-.102V5.92a.75.75 0 0 1 .75-.75zm4.59 6.908a.75.75 0 0 1 .743.648l.007.102v3.235a.75.75 0 0 1-1.493.102l-.007-.102v-3.235a.75.75 0 0 1 .75-.75z"
                        />
                        {/* <use xlinkto="img/sprite.svg#icon-chart"  /> */}
                      </svg>
                    </div>
                    <div className="sidebar__text">Statistics</div>
                  </Link>
                  <Link
                    className={
                      splitLocation[1] === "contracts"
                        ? "sidebar__item active"
                        : "sidebar__item"
                    }
                    to="/contracts"
                  >
                    <div className="sidebar__icon">
                      <svg
                        className="icon icon-discovery"
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                      >
                        <path
                          fill="#1b1d21"
                          d="M10.61.25c5.722 0 10.36 4.64 10.36 10.36s-4.64 10.36-10.36 10.36S.25 16.333.25 10.61 4.89.25 10.61.25zm0 1.5c-4.894 0-8.86 3.967-8.86 8.86s3.967 8.86 8.86 8.86 8.86-3.967 8.86-8.86-3.967-8.86-8.86-8.86zm3.117 4.804a.75.75 0 0 1 .94.94h0l-1.593 5.09a.75.75 0 0 1-.492.492h0l-5.09 1.593a.75.75 0 0 1-.94-.94h0l1.593-5.09a.75.75 0 0 1 .492-.492h0zm-.92 1.86L9.46 9.46l-1.048 3.347 3.347-1.048 1.048-3.347z"
                        />
                        {/* <use xlinkto="img/sprite.svg#icon-discovery" /> */}
                      </svg>
                    </div>
                    <div className="sidebar__text">Contracts</div>
                  </Link>
                  <Link
                    className={
                      splitLocation[1] === "bids"
                        ? "sidebar__item active"
                        : "sidebar__item"
                    }
                    to="/bids"
                  >
                    <div className="sidebar__icon">
                      <svg
                        className="icon icon-wallet"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                      >
                        <path
                          fill="#1b1d21"
                          d="M15.39.25a6 6 0 0 1 5.998 5.998h0v7.177a6 6 0 0 1-5.998 5.998h0-8.643A6 6 0 0 1 .75 13.425h0V6.248A6 6 0 0 1 6.748.25h0zm0 1.5H6.748A4.5 4.5 0 0 0 2.25 6.248h0v7.177a4.5 4.5 0 0 0 4.498 4.498h8.643a4.5 4.5 0 0 0 4.498-4.498h0l-.001-.28-3.298.001c-1.9-.001-3.44-1.54-3.442-3.44 0-1.837 1.44-3.337 3.253-3.436l.19-.005h3.297l.001-.015a4.5 4.5 0 0 0-4.286-4.493l-.212-.005zm4.497 6.013H16.59c-1.073.001-1.943.87-1.943 1.94.001 1.02.79 1.858 1.8 1.936l.152.006 3.297-.001V7.763zm-2.84 1.13a.75.75 0 0 1 .102 1.493l-.102.007h-.312a.75.75 0 0 1-.102-1.493l.102-.007h.312zm-5.614-4.105a.75.75 0 0 1 .102 1.493l-.102.007h-5.4a.75.75 0 0 1-.102-1.493l.102-.007h5.4z"
                        />
                        {/* <use xlinkto="img/sprite.svg#icon-wallet" /> */}
                      </svg>
                    </div>
                    <div className="sidebar__text">Bids</div>
                  </Link>
                  <Link
                    className={
                      splitLocation[1] === "financials"
                        ? "sidebar__item active"
                        : "sidebar__item"
                    }
                    to="/financials"
                  >
                    <div className="sidebar__icon">
                      <svg
                        className="icon icon-document"
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                      >
                        <path
                          fill="#1b1d21"
                          d="M12.91 0c3.182 0 5.257 2.142 5.257 5.357h0v9.196c0 3.197-2.057 5.335-5.22 5.354h0l-7.69.003c-3.182 0-5.256-2.14-5.256-5.357h0V5.357C.001 2.16 2.057.023 5.22.004h0zm0 1.5l-7.685.004C2.902 1.518 1.5 2.974 1.5 5.357h0v9.196c0 2.398 1.414 3.857 3.756 3.857l7.685-.003c2.323-.014 3.725-1.47 3.725-3.854h0V5.357c0-2.397-1.414-3.857-3.757-3.857h0zm-.193 11.974a.75.75 0 0 1 .102 1.493l-.102.007h-7.22a.75.75 0 0 1-.102-1.493l.102-.007h7.22zm0-4.187a.75.75 0 0 1 .102 1.493l-.102.007h-7.22a.75.75 0 0 1-.102-1.493l.102-.007h7.22zM8.25 5.1a.75.75 0 0 1 .102 1.493L8.25 6.6H5.496a.75.75 0 0 1-.102-1.493l.102-.007H8.25z"
                        />
                        {/* <use xlinkto="img/sprite.svg#icon-document" /> */}
                      </svg>
                    </div>
                    <div className="sidebar__text">Financials</div>
                  </Link>
                  <Link
                    className="sidebar__item js-popup-open"
                    onClick={() => handleShow()}
                    data-effect="mfp-zoom-in"
                  >
                    <div className="sidebar__icon">
                      <svg className="icon icon-settings">
                        {/* <use xlinkto="img/sprite.svg#icon-settings" /> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="22"
                          viewBox="0 0 20 22"
                        >
                          <path
                            fill="#1b1d21"
                            d="M10.797.528c.72 0 1.41.29 1.91.807s.773 1.213.75 1.864h0l.01.153c.018.15.067.296.146.43.155.264.41.456.705.533s.612.033.9-.142h0l.166-.086c1.25-.587 2.746-.12 3.44 1.08h0l.622 1.08a.75.75 0 0 1 .043.088h0l.058.116a2.66 2.66 0 0 1-.897 3.32h0l-.26.164c-.137.095-.25.22-.336.37-.155.265-.197.58-.118.878s.273.55.568.72h0l.17.11c.512.358.882.886 1.043 1.49a2.66 2.66 0 0 1-.276 2.028h0l-.67 1.115-.1.157c-.787 1.13-2.314 1.477-3.48.804h0l-.138-.07c-.144-.064-.3-.1-.44-.104-.308-.002-.604.12-.82.338a1.18 1.18 0 0 0-.339.857h0l-.008.178c-.113 1.377-1.265 2.444-2.654 2.444h0-1.254c-1.47 0-2.663-1.192-2.662-2.616h0l-.01-.153c-.018-.15-.067-.296-.15-.437-.152-.265-.403-.458-.698-.537s-.61-.037-.913.14h0l-.18.1c-.57.257-1.216.304-1.82.133-.682-.194-1.258-.65-1.594-1.258h0L.87 15.494l-.086-.166c-.59-1.244-.127-2.74 1.045-3.416h0l.107-.067c.313-.217.5-.574.5-.956 0-.416-.222-.8-.61-1.024h0l-.157-.1C.538 8.977.193 7.45.894 6.234h0l.66-1.083C2.286 3.88 3.9 3.44 5.16 4.156h0l.135.072c.138.063.288.097.432.098.636 0 1.154-.51 1.164-1.165h0v-.2c.052-.622.322-1.207.764-1.65.498-.5 1.175-.782 1.88-.782h0zm0 1.5H9.543c-.307 0-.6.122-.818.34a1.14 1.14 0 0 0-.33.685h0l-.014.316C8.277 4.746 7.126 5.827 5.72 5.827c-.363-.004-.72-.084-1.085-.253h0l-.195-.103c-.556-.32-1.266-.127-1.595.444h0l-.66 1.083c-.302.524-.15 1.192.317 1.518h0l.265.168c.73.493 1.17 1.318 1.17 2.206 0 .875-.43 1.693-1.173 2.206h0l-.158.1c-.52.3-.722.952-.48 1.464h0l.057.1.64 1.102c.15.27.402.47.7.555a1.15 1.15 0 0 0 .765-.044h0l.1-.054c.61-.356 1.335-.453 2.017-.27s1.262.63 1.606 1.23c.185.312.302.66.348 1.06h0l.02.366c.063.583.557 1.036 1.156 1.036h1.254c.606 0 1.1-.466 1.157-1.037h0l.006-.113c-.003-.708.276-1.388.777-1.89s1.18-.78 1.906-.777c.356.01.705.09 1.063.25h0l.32.164c.503.22 1.1.06 1.403-.374h0l.074-.115.654-1.1c.155-.265.197-.582.118-.878a1.14 1.14 0 0 0-.426-.63h0l-.114-.073c-.612-.352-1.06-.934-1.24-1.617a2.65 2.65 0 0 1 .268-2.015c.193-.337.46-.627.805-.867h0l.163-.103c.52-.304.72-.954.48-1.468h0l-.072-.138-.013-.03-.594-1.03c-.28-.487-.865-.698-1.36-.532h0l-.113.045-.105.053c-.607.358-1.332.46-2.014.282a2.65 2.65 0 0 1-1.62-1.223c-.185-.312-.302-.66-.348-1.058h0l-.013-.26c.01-.314-.11-.62-.33-.844s-.52-.352-.835-.352h0zm-.622 5.475c1.87 0 3.386 1.516 3.386 3.386s-1.516 3.386-3.386 3.386S6.79 12.76 6.79 10.89s1.516-3.386 3.386-3.386zm0 1.5c-1.042 0-1.886.844-1.886 1.886s.844 1.886 1.886 1.886 1.886-.844 1.886-1.886-.844-1.886-1.886-1.886z"
                          />
                        </svg>
                      </svg>
                    </div>
                    <div className="sidebar__text">Accounts </div>
                  </Link>
                </div>
              </div>
              <div className="sidebar__group">
                <div className="sidebar__caption caption-sm">Insights</div>
                <div className="sidebar__menu">
                  <Link
                    className={
                      splitLocation[1] === "inbox"
                        ? "sidebar__item active"
                        : "sidebar__item"
                    }
                    to="/inbox"
                  >
                    <div className="sidebar__icon">
                      <svg
                        className="icon icon-message"
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="19"
                        viewBox="0 0 21 19"
                      >
                        <path
                          fill="#1b1d21"
                          d="M15.316.25a5.71 5.71 0 0 1 4.13 1.83c1.066 1.15 1.617 2.69 1.526 4.214h0l-.001 6.484c.092 1.57-.46 3.107-1.525 4.258a5.71 5.71 0 0 1-4.13 1.83h0-9.428c-3.276 0-5.638-2.642-5.638-6.044h0V6.294C.25 2.892 2.612.25 5.888.25h0zm0 1.5H5.888C3.48 1.75 1.75 3.685 1.75 6.294h0v6.528c0 2.61 1.73 4.544 4.138 4.544h9.42c1.153-.013 2.25-.5 3.038-1.35s1.196-1.99 1.126-3.194h0l.001-6.572c.068-1.16-.34-2.3-1.127-3.15s-1.885-1.337-3.03-1.35h0zm1.536 4.34a.75.75 0 0 1-.033.979l-.08.076-4.273 3.44c-1.025.804-2.442.844-3.51.117l-.166-.12-4.302-3.434a.75.75 0 0 1 .844-1.235l.092.063 4.297 3.43c.494.388 1.17.417 1.687.094l.126-.088 4.265-3.434a.75.75 0 0 1 1.055.114z"
                        />
                        {/* <use xlinkto="img/sprite.svg#icon-message" /> */}
                      </svg>
                    </div>
                    <div className="sidebar__text">Inbox</div>
                    <div className="sidebar__counter">18</div>
                  </Link>
                  comments
                  <Link
                    className={
                      splitLocation[1] === "notifications"
                        ? "sidebar__item active"
                        : "sidebar__item"
                    }
                    to="/notifications"
                  >
                    <div className="sidebar__icon">
                      <svg
                        className="icon icon-notification"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                      >
                        <path
                          fill="#1b1d21"
                          d="M12.837 19.268a.75.75 0 0 1 .114 1.055c-.192.24-.414.452-.65.627a3.84 3.84 0 0 1-2.798.774 3.81 3.81 0 0 1-2.536-1.405.75.75 0 0 1 1.173-.935 2.31 2.31 0 0 0 1.538.849c.6.072 1.224-.098 1.715-.48a2.14 2.14 0 0 0 .388-.374.75.75 0 0 1 1.055-.114zM10.04.25c3.664 0 7.027 2.626 7.364 6.112l.01.13.014.264.006.3v.723l.005.332.01.21.048.2c.153.56.422 1.084.79 1.54h0l.164.19.067.085a4.28 4.28 0 0 1 .73 2.23h0l-.001.434c-.03.968-.39 1.904-1.05 2.683-.873.916-2.057 1.485-3.315 1.6a45.8 45.8 0 0 1-9.766.001c-1.267-.12-2.447-.688-3.36-1.64-.672-.8-1.03-1.83-1.007-2.86h0l.001-.256a4.35 4.35 0 0 1 .726-2.197h0l.073-.093a4.12 4.12 0 0 0 1.01-1.957l-.016.065.003-.563.013-.652.046-.778C2.933 2.878 6.295.25 9.96.25h0zm0 1.5H9.96c-2.936 0-5.61 2.09-5.86 4.742l-.03.454-.017.502-.007.988-.016.152a5.62 5.62 0 0 1-1.377 2.67l.044-.05.01-.01-.096.157c-.18.32-.295.667-.34 1h0l-.02.205v.235c-.015.685.22 1.353.625 1.844a3.81 3.81 0 0 0 2.392 1.145 44.36 44.36 0 0 0 9.467-.001c.91-.083 1.755-.49 2.347-1.108a2.83 2.83 0 0 0 .667-1.906h0v-.176a2.76 2.76 0 0 0-.473-1.422l.017.027-.15-.174c-.517-.63-.893-1.362-1.102-2.147h0l-.07-.296-.014-.1-.007-.107-.013-.324-.003-.972-.002-.172-.012-.286-.01-.13c-.257-2.658-2.935-4.75-5.87-4.75h0z"
                        />
                        {/* <use xlinkto="img/sprite.svg#icon-notification" /> */}
                      </svg>
                    </div>
                    <div className="sidebar__text">Notifications</div>
                    <div className="sidebar__counter">2 </div>
                  </Link>
                  <Link
                    className={
                      splitLocation[1] === "comments"
                        ? "sidebar__item active"
                        : "sidebar__item"
                    }
                    to="/comments"
                  >
                    <div className="sidebar__icon">
                      <svg
                        className="icon icon-chat"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                      >
                        <path
                          fill="#1b1d21"
                          d="M11.062.25c4.465.033 8.447 2.814 10.008 6.992a10.74 10.74 0 0 1-2.975 11.829 10.78 10.78 0 0 1-12.128 1.441h0l-.05-.017-.01-.013-.734-.415a.73.73 0 0 0-.416-.045 19.02 19.02 0 0 1-2.334.674h0l-.145.017c-.87.02-1.3-.546-1.3-1.37h0l.02-.176c.198-.818.446-1.624.728-2.37a.56.56 0 0 0-.046-.436h0l-.198-.385C-.274 12.637-.142 8.628 1.82 5.4A10.77 10.77 0 0 1 11.062.25zm-.01 1.5l-.302.004a9.27 9.27 0 0 0-7.649 4.437 9.24 9.24 0 0 0-.296 9.096h0l.194.38c.26.484.313 1.05.136 1.618a19.05 19.05 0 0 0-.688 2.236l.1-.395.425-.11.438-.127.443-.14.45-.155c.475-.13.98-.1 1.48.105l.083.04.198.106.57.326.02.005-.013-.002.31.155a9.28 9.28 0 0 0 9.918-1.183h0l.237-.2a9.24 9.24 0 0 0 2.56-10.177c-1.343-3.595-4.77-5.988-8.613-6.017h0zM6.287 9.774c.677 0 1.227.55 1.227 1.226s-.55 1.226-1.227 1.226S5.06 11.678 5.06 11s.55-1.226 1.227-1.226zm4.77 0c.677 0 1.227.55 1.227 1.226s-.55 1.226-1.227 1.226S9.83 11.678 9.83 11s.55-1.226 1.227-1.226zm4.77 0c.677 0 1.227.55 1.227 1.226s-.55 1.226-1.227 1.226S14.6 11.678 14.6 11s.55-1.226 1.227-1.226zm-9.54.952c-.15 0-.273.122-.273.274s.123.274.273.274.273-.122.273-.274-.123-.274-.273-.274zm4.77 0c-.15 0-.273.122-.273.274s.123.274.273.274.273-.122.273-.274-.123-.274-.273-.274zm4.77 0c-.15 0-.273.122-.273.274s.123.274.273.274.273-.122.273-.274-.123-.274-.273-.274z"
                        />
                        {/* <use xlinkto="img/sprite.svg#icon-chat" /> */}
                      </svg>
                    </div>
                    <div className="sidebar__text">Comments</div>
                    <div className="sidebar__counter">20</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="sidebar__profile">
              <div className="sidebar__details">
                <Link className="sidebar__link" to="#">
                  <div className="sidebar__icon">
                    <svg
                      className="icon icon-profile"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="21"
                      viewBox="0 0 17 21"
                    >
                      <path
                        fill="#1b1d21"
                        d="M8.242 12.907l.33.001.323.004.626.017c4.296.162 6.714 1.202 6.714 3.704 0 2.737-2.89 3.706-7.992 3.706h0-.33l-.64-.01C2.784 20.204.25 19.176.25 16.613c0-2.738 2.887-3.706 7.992-3.706h0zm0 1.5l-.343.002-.658.013-.622.026-.585.04-.548.052c-2.472.272-3.737.966-3.737 2.075 0 1.155 1.36 1.868 4.01 2.122h0l.566.046 1.917.06.676-.006.64-.02c3.418-.143 5.176-.874 5.176-2.18 0-1.155-1.36-1.868-4.01-2.122h0l-.566-.046-.603-.033-.64-.02-.675-.007zm0-14.157c2.99 0 5.392 2.4 5.392 5.392s-2.4 5.392-5.392 5.392S2.85 8.632 2.85 5.642 5.252.25 8.242.25zm0 1.5C6.08 1.75 4.35 3.48 4.35 5.642s1.73 3.892 3.892 3.892 3.892-1.73 3.892-3.892-1.73-3.892-3.892-3.892z"
                      />
                      {/* <use xlinkto="img/sprite.svg#icon-profile" /> */}
                    </svg>
                  </div>
                  <div className="sidebar__text">Profile</div>
                </Link>
                <Link className="sidebar__link" to="#">
                  <div className="sidebar__icon">
                    <svg
                      className="icon icon-logout"
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                    >
                      <path
                        fill="#1b1d21"
                        d="M14.334.25c3.486 0 5.916 2.262 5.916 5.666h0v8.67c0 3.404-2.43 5.665-5.916 5.665h0-8.168C2.683 20.25.25 17.982.25 14.585h0v-8.67C.25 2.512 2.68.25 6.166.25h0zm0 1.5H6.166c-2.68 0-4.416 1.615-4.416 4.166h0v8.67c0 2.544 1.74 4.165 4.416 4.165h8.168c2.68 0 4.416-1.615 4.416-4.165h0v-8.67c0-2.55-1.735-4.166-4.416-4.166h0zM10.46 5.973a.75.75 0 0 1 .071.977l-.073.084L7.977 9.5h6.36a.75.75 0 0 1 .102 1.493l-.102.007H7.98l2.477 2.467a.75.75 0 0 1 .075.976l-.072.084a.75.75 0 0 1-.976.075L9.4 14.53 5.635 10.78a.77.77 0 0 1-.066-.076l.066.076c-.037-.037-.07-.076-.097-.118l-.028-.047-.017-.03-.028-.064-.012-.034-.018-.064-.008-.036-.008-.06-.004-.06v-.034l.004-.06-.004.078c0-.047.004-.093.013-.137l.007-.035.018-.063.013-.037.026-.058.02-.037.03-.046.023-.034.007-.008c.02-.026.042-.05.066-.075h.001L9.4 5.97a.75.75 0 0 1 1.061.002z"
                      />
                      {/* <use xlinkto="img/sprite.svg#icon-logout" /> */}
                    </svg>
                  </div>
                  <div className="sidebar__text">Log out</div>
                </Link>
              </div>
              <Link className="sidebar__user" to="#" onClick={() => openUser()}>
                <div className="sidebar__ava">
                  <img
                    className="sidebar__pic"
                    src="./assets/img/ava.png"
                    alt=""
                  />
                </div>
                <div className="sidebar__desc">
                  <div className="sidebar__man">Tam Tran</div>
                  <div className="sidebar__status caption">Free account</div>
                </div>
                <div className="sidebar__arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="16"
                    viewBox="0 0 10 16"
                  >
                    <path
                      fill="#11142d"
                      d="M1.613 10.2l.094.083L5 13.585l3.293-3.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094-4 4a1 1 0 0 1-1.32.083l-.094-.083-4-4a1 1 0 0 1 1.32-1.497zm4-10l.094.083 4 4a1 1 0 0 1-1.32 1.497l-.094-.083L5 2.415 1.707 5.707a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.094 4-4A1 1 0 0 1 5.613.21z"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="sidebar__bottom">
          <label
            className="switch switch_theme js-switch-theme"
            onChange={() => switchDarkMode()}
          >
            <input className="switch__input" type="checkbox" />
            <span className="switch__in">
              <span className="switch__box" />
              <span className="switch__icon">
                <svg
                  className="icon icon-moon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#3f8cff"
                    d="M10.404.012c.858-.172 1.507.763 1.046 1.507-2.376 3.838-1.8 8.93 1.444 12.254 2.484 2.395 5.925 3.403 9.34 2.833a1 1 0 0 1 1.033 1.483c-.416.727-1.023 1.473-1.76 2.21a12.05 12.05 0 0 1-17.014 0c-4.69-4.69-4.69-12.324-.022-16.99h0l.272-.28C6.305 1.473 8.268.44 10.404.012zM8.69 2.67l-.22.106a9.19 9.19 0 0 0-2.562 1.924h0l-.21.216a10.05 10.05 0 0 0 .209 13.97 10.05 10.05 0 0 0 14.186 0h0l.123-.127-.212-.002c-3.03-.084-5.947-1.216-8.248-3.3h0l-.273-.256C8.2 11.816 7.187 6.95 8.665 2.737h0l.024-.068zm13.69.237c.94-.778 2.242.58 1.327 1.494h0l-.116.128c-.892 1.084-.853 3.488.116 4.457h0l.08.087c.778.94-.58 2.242-1.493 1.327h0l-.128-.116c-1.084-.892-3.488-.853-4.457.116h0l-.087.08c-.94.778-2.242-.58-1.327-1.494h0l.116-.128c.892-1.084.853-3.488-.116-4.457h0l-.08-.087c-.778-.94.58-2.242 1.494-1.327h0l.128.116c1.084.892 3.488.853 4.457-.116h0zM21.032 5.66l-.142.023a6.58 6.58 0 0 1-1.78 0h0l-.143-.023.023.144a6.58 6.58 0 0 1 0 1.78h0l-.023.143.143-.022a6.58 6.58 0 0 1 1.78 0h0l.142.022L21 7.582a6.58 6.58 0 0 1 0-1.78h0l.022-.144z"
                  />
                  {/* <use xlinkto="img/sprite.svg#icon-moon" /> */}
                </svg>
                <svg
                  className="icon icon-sun"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#3f8cff"
                    d="M12 21a1 1 0 0 1 .993.883L13 22v1a1 1 0 0 1-1.993.117L11 23v-1a1 1 0 0 1 1-1zm7.713-2.7l.094.083.7.7a1 1 0 0 1-1.32 1.497l-.094-.083-.7-.7a1 1 0 0 1 1.32-1.497zm-14.106.083a1 1 0 0 1 .083 1.32l-.083.094-.7.7a1 1 0 0 1-1.497-1.32l.083-.094.7-.7a1 1 0 0 1 1.414 0zM12 6a6 6 0 1 1 0 12 6 6 0 1 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 1 0 0-8zM2 11a1 1 0 0 1 .117 1.993L2 13H1a1 1 0 0 1-.117-1.993L1 11h1zm21 0a1 1 0 0 1 .117 1.993L23 13h-1a1 1 0 0 1-.117-1.993L22 11h1zM4.813 3.4l.094.083.7.7a1 1 0 0 1-1.32 1.497l-.094-.083-.7-.7a1 1 0 0 1 1.32-1.497zm15.694.083a1 1 0 0 1 .083 1.32l-.083.094-.7.7a1 1 0 0 1-1.497-1.32l.083-.094.7-.7a1 1 0 0 1 1.414 0zM12 0a1 1 0 0 1 .993.883L13 1v1a1 1 0 0 1-1.993.117L11 2V1a1 1 0 0 1 1-1z"
                  />
                  {/* <use xlinkto="img/sprite.svg#icon-sun" /> */}
                </svg>
              </span>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Leftsidebar;
