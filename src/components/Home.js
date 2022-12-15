import React, { useState } from "react";
import Leftsidebar from "./Leftsidebar";
// import Circle from "../assets/img/figure-1.png"
import Chart from "react-apexcharts";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function Home() {
  // colors
  var blue = "#A0D7E7";
  var purple = "#6C5DD3";

  var borderColor = "#E4E4E4";

  const optionsMixedChart = {
    colors: [blue, purple],
    chart: {
      height: "100%",
      type: "line",
      toolbar: {
        show: false,
      },
    },
    grid: {
      borderColor: borderColor,
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        left: 15,
        right: 0,
        bottom: 0,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    stroke: {
      width: 2,
      curve: "smooth",
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      x: {
        show: false,
      },
    },
  };
  var options = {
    colors: [purple, blue],
    chart: {
      height: "100%",
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.9,
        },
      },
    },
    grid: {
      borderColor: borderColor,
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        left: 15,
        right: 0,
        bottom: 0,
      },
    },
    stroke: {
      curve: "smooth",
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      shared: true,
    },
    xaxis: {
      axisBorder: {
        show: false,
        color: borderColor,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
  const seriesMixedChart = [
    {
      name: "series-1",
      type: "line",
      data: [30, 40, 25, 50, 49, 21, 70, 51],
    },
    {
      name: "series-1",
      type: "line",
      data: [30, 40, 25, 50, 49, 21, 70, 51],
    },
  ];
  const affiliate = [
    {
      name: "series-2",
      type: "column",
      data: [23, 12, 54, 61, 32, 56, 81, 19],
    },
    {
      name: "series-3",
      type: "column",
      data: [62, 12, 45, 55, 76, 41, 23, 43],
    },
  ];

  const openNotifications = () => {
    document.querySelector(".notifications").classList.toggle("active");
    document.querySelector(".search").classList.remove("active");
  };
  const openSearch = () => {
    document.querySelector(".header__search").classList.toggle("active");
    document.querySelector(".search").classList.toggle("show");
    document.querySelector(".notifications").classList.remove("active");
  };
  const openBurgerHeader = () => {
    document.querySelector(".page").classList.toggle("toggle");
    document.querySelector(".sidebar").classList.toggle("active");
  };
  const searchToggle = () => {
    document.querySelector(".notifications").classList.remove("active");
    document.querySelector(".search").classList.toggle("active");
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
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
      </Modal>
      <Leftsidebar />
      <div className="page">
        <div className="page__wrapper">
          <div className="page__center">
            <div className="page__row page__row_head page__row_border">
              <div className="page__col">
                <div className="page__hello h5">Hi Tam Tran,</div>
                <div className="page__welcome h2">
                  Welcome back<span className="desktop-hide">👋</span>
                </div>
              </div>
              <div className="page__col">
                <div className="header">
                  <button
                    className="header__burger"
                    onClick={() => openBurgerHeader()}
                  />
                  <div className="search">
                    <div className="search__field">
                      <input
                        className="search__input"
                        type="text"
                        placeholder="Search"
                      />
                      <button
                        className="search__toggle"
                        onClick={() => searchToggle()}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill="#11142D"
                            fill-rule="evenodd"
                            d="M9.61154,0 C4.30323,0 0,4.20819 0,9.39926 C0,14.5903 4.30323,18.7985 9.61154,18.7985 C11.8819,18.7985 13.9684,18.0287 15.613,16.7415 L18.7371,19.7886 L18.8202,19.8586 C19.1102,20.0685 19.5214,20.0446 19.7839,19.7873 C20.0726,19.5043 20.072,19.0459 19.7825,18.7636 L16.6952,15.7523 C18.2649,14.0794 19.2231,11.8487 19.2231,9.39926 C19.2231,4.20819 14.9198,0 9.61154,0 Z M9.61154,1.44774 C14.1022,1.44774 17.7426,5.00776 17.7426,9.39926 C17.7426,13.7908 14.1022,17.3508 9.61154,17.3508 C5.12086,17.3508 1.48044,13.7908 1.48044,9.39926 C1.48044,5.00776 5.12086,1.44774 9.61154,1.44774 Z"
                          />
                        </svg>
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
                    </div>
                    <div className="search__result">
                      <div className="search__info caption-sm">
                        Recent Searches
                      </div>
                      <div className="search__list">
                        <a className="search__item" href="#">
                          <div className="search__preview bg-pink">
                            <img
                              className="search__pic"
                              src="./assets/img/figure-1.png"
                              alt=""
                            />
                          </div>
                          <div className="search__text">
                            Earning byitems
                            <svg
                              className="icon icon-arrow-right"
                              xmlns="http://www.w3.org/2000/svg"
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                            >
                              <path
                                fill="#11142D"
                                d="M-0.707106781,-0.707106781 C-0.34662282,-1.06759074 0.220608236,-1.09532028 0.612899443,-0.790295388 L0.707106781,-0.707106781 L4.70710678,3.29289322 C5.06759074,3.65337718 5.09532028,4.22060824 4.79029539,4.61289944 L4.70710678,4.70710678 L0.707106781,8.70710678 C0.316582489,9.09763107 -0.316582489,9.09763107 -0.707106781,8.70710678 C-1.06759074,8.34662282 -1.09532028,7.77939176 -0.790295388,7.38710056 L-0.707106781,7.29289322 L2.585,4 L-0.707106781,0.707106781 C-1.06759074,0.34662282 -1.09532028,-0.220608236 -0.790295388,-0.612899443 L-0.707106781,-0.707106781 Z"
                                transform="translate(1 1)"
                              />
                            </svg>
                          </div>
                        </a>
                        <a className="search__item" href="#">
                          <div className="search__preview bg-yellow">
                            <img
                              className="search__pic"
                              src="./assets/img/figure-4.png"
                              alt=""
                            />
                          </div>
                          <div className="search__text">
                            This monthStatements
                            <svg
                              className="icon icon-arrow-right"
                              xmlns="http://www.w3.org/2000/svg"
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                            >
                              <path
                                fill="#11142D"
                                d="M-0.707106781,-0.707106781 C-0.34662282,-1.06759074 0.220608236,-1.09532028 0.612899443,-0.790295388 L0.707106781,-0.707106781 L4.70710678,3.29289322 C5.06759074,3.65337718 5.09532028,4.22060824 4.79029539,4.61289944 L4.70710678,4.70710678 L0.707106781,8.70710678 C0.316582489,9.09763107 -0.316582489,9.09763107 -0.707106781,8.70710678 C-1.06759074,8.34662282 -1.09532028,7.77939176 -0.790295388,7.38710056 L-0.707106781,7.29289322 L2.585,4 L-0.707106781,0.707106781 C-1.06759074,0.34662282 -1.09532028,-0.220608236 -0.790295388,-0.612899443 L-0.707106781,-0.707106781 Z"
                                transform="translate(1 1)"
                              />
                            </svg>
                          </div>
                        </a>
                        <a className="search__item" href="#">
                          <div className="search__preview bg-blue-light">
                            <img
                              className="search__pic"
                              src="./assets/img/figure-3.png"
                              alt=""
                            />
                          </div>
                          <div className="search__text">
                            How manysales I got…
                            <svg
                              className="icon icon-arrow-right"
                              xmlns="http://www.w3.org/2000/svg"
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                            >
                              <path
                                fill="#11142D"
                                d="M-0.707106781,-0.707106781 C-0.34662282,-1.06759074 0.220608236,-1.09532028 0.612899443,-0.790295388 L0.707106781,-0.707106781 L4.70710678,3.29289322 C5.06759074,3.65337718 5.09532028,4.22060824 4.79029539,4.61289944 L4.70710678,4.70710678 L0.707106781,8.70710678 C0.316582489,9.09763107 -0.316582489,9.09763107 -0.707106781,8.70710678 C-1.06759074,8.34662282 -1.09532028,7.77939176 -0.790295388,7.38710056 L-0.707106781,7.29289322 L2.585,4 L-0.707106781,0.707106781 C-1.06759074,0.34662282 -1.09532028,-0.220608236 -0.790295388,-0.612899443 L-0.707106781,-0.707106781 Z"
                                transform="translate(1 1)"
                              />
                            </svg>
                          </div>
                        </a>
                      </div>
                      <button className="search__btn btn btn-dark btn_wide">
                        Advance Search
                      </button>
                    </div>
                  </div>
                  <button
                    className="header__search"
                    onClick={() => openSearch()}
                  >
                    <svg
                      className="icon icon-search"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#11142D"
                        fill-rule="evenodd"
                        d="M9.61154,0 C4.30323,0 0,4.20819 0,9.39926 C0,14.5903 4.30323,18.7985 9.61154,18.7985 C11.8819,18.7985 13.9684,18.0287 15.613,16.7415 L18.7371,19.7886 L18.8202,19.8586 C19.1102,20.0685 19.5214,20.0446 19.7839,19.7873 C20.0726,19.5043 20.072,19.0459 19.7825,18.7636 L16.6952,15.7523 C18.2649,14.0794 19.2231,11.8487 19.2231,9.39926 C19.2231,4.20819 14.9198,0 9.61154,0 Z M9.61154,1.44774 C14.1022,1.44774 17.7426,5.00776 17.7426,9.39926 C17.7426,13.7908 14.1022,17.3508 9.61154,17.3508 C5.12086,17.3508 1.48044,13.7908 1.48044,9.39926 C1.48044,5.00776 5.12086,1.44774 9.61154,1.44774 Z"
                      />
                    </svg>
                  </button>
                  <div className="notifications">
                    <button
                      className="notifications__open"
                      onClick={() => openNotifications()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="24"
                        viewBox="0 0 22 24"
                      >
                        <path
                          fill="#11142D"
                          d="M12.855,20.9 C12.4639,22.1478 11.3077,22.997 10,22.997 C8.6924,22.997 7.53619,22.1478 7.14502,20.9 C8.039,20.966 8.989,21 10,21 C11.011,21 11.961,20.966 12.855,20.9 Z M10,-1 C14.4182815,-1 18,2.58172202 18,7 L18,7 L18,10 C18,11.1184646 18.3694847,11.8656448 19.2498379,12.8633784 L19.2498379,12.8633784 L19.9126361,13.6024335 L20.1063996,13.8323989 C20.6922295,14.552011 21,15.2050716 21,16 C21,17.8400866 18.7827241,19.0712173 15.1958818,19.6392323 L15.1958818,19.6392323 L14.6182804,19.7234003 C14.4220352,19.7496142 14.2221198,19.7739832 14.0186577,19.7964996 L14.0186577,19.7964996 L13.3977552,19.8584829 C13.0821076,19.8866876 12.7587582,19.910706 12.428124,19.9305115 L12.428124,19.9305115 L11.7572663,19.9644973 C11.4171046,19.9786737 11.0699362,19.9886194 10.7161783,19.9943077 L10.7161783,19.9943077 L10,20 L9.28382174,19.9943077 C8.93006383,19.9886194 8.58289545,19.9786737 8.2427337,19.9644973 L8.2427337,19.9644973 L7.571876,19.9305115 C7.24124183,19.910706 6.91789239,19.8866876 6.60224478,19.8584829 L6.60224478,19.8584829 L5.98134229,19.7964996 C5.77788023,19.7739832 5.57796479,19.7496142 5.38171958,19.7234003 L5.38171958,19.7234003 L4.80411821,19.6392323 C1.21727587,19.0712173 -1,17.8400866 -1,16 C-1,15.2050716 -0.692229474,14.552011 -0.10639964,13.8323989 C-0.0758249191,13.7948421 -0.0448938239,13.7575085 -0.0128515129,13.7194853 L-0.0128515129,13.7194853 L0.198775677,13.4757657 L0.618445007,13.0110469 L0.91946309,12.6669881 C1.67813778,11.7643706 2,11.0439003 2,10 L2,10 L2,7 C2,2.58172525 5.58172525,-1 10,-1 Z M10,1 C6.68629475,1 4,3.68629475 4,7 L4,7 L4,10 C4,11.6898687 3.42260969,12.8574802 2.24983786,14.1866216 L2.24983786,14.1866216 L1.4892624,15.0417013 L1.34441877,15.2222364 C1.0964442,15.54873 1,15.7780382 1,16 C1,16.3056227 1.43853666,16.6406043 2.23673585,16.947546 L2.23673585,16.947546 L2.55276568,17.0612227 L2.90158957,17.171598 C2.96240837,17.1896814 3.02455508,17.2075992 3.08801044,17.2253375 L3.08801044,17.2253375 L3.48429234,17.3294995 C3.55290527,17.3464633 3.62278834,17.3632194 3.69392229,17.3797539 L3.69392229,17.3797539 L4.13558251,17.4761893 C4.21164296,17.4917812 4.28891577,17.5071234 4.3673817,17.522202 L4.3673817,17.522202 L4.85234055,17.6093972 C5.01866325,17.6373328 5.18960434,17.6641016 5.36500978,17.6895914 L5.36500978,17.6895914 L5.90446508,17.7621122 C5.99655512,17.7735221 6.08972273,17.7845843 6.18394865,17.7952847 L6.18394865,17.7952847 L6.76184998,17.855034 L7.3642266,17.905428 C7.46661096,17.9130101 7.56997662,17.9201743 7.67430431,17.9269067 L7.67430431,17.9269067 L8.31166081,17.9620068 L8.97118185,17.9860702 L9.65194312,17.9984242 L10,18 L10,18 L10.3480569,17.9984242 L11.0288181,17.9860702 L11.6883392,17.9620068 C11.796438,17.9570578 11.9036133,17.951649 12.0098458,17.9457943 L12.0098458,17.9457943 L12.6357734,17.905428 L13.23815,17.855034 C13.3365322,17.8458367 13.4338946,17.8362496 13.5302179,17.8262867 L13.5302179,17.8262867 L14.0955349,17.7621122 L14.6349902,17.6895914 C14.8103957,17.6641016 14.9813367,17.6373328 15.1476594,17.6093972 L15.1476594,17.6093972 L15.6326183,17.522202 C15.7110842,17.5071234 15.788357,17.4917812 15.8644175,17.4761893 L15.8644175,17.4761893 L16.3060777,17.3797539 C16.3772117,17.3632194 16.4470947,17.3464633 16.5157077,17.3294995 L16.5157077,17.3294995 L16.9119896,17.2253375 C16.9754449,17.2075992 17.0375916,17.1896814 17.0984104,17.171598 L17.0984104,17.171598 L17.4472343,17.0612227 L17.7632641,16.947546 C18.5614633,16.6406043 19,16.3056227 19,16 C19,15.7502929 18.8779378,15.4912882 18.5553802,15.0950702 L18.5553802,15.0950702 L18.3174653,14.8199854 L17.7501621,14.1866216 C16.5773903,12.8574802 16,11.6898687 16,10 L16,10 L16,7 C16,3.68629108 13.3137116,1 10,1 Z"
                          transform="translate(1 1)"
                        />
                      </svg>
                      <span className="notifications__counter">2</span>
                    </button>
                    <div className="notifications__wrap">
                      <div className="notifications__info h6">
                        Recent Notification
                      </div>
                      <div className="notifications__list">
                        <a
                          className="notifications__item"
                          href="/notifications"
                        >
                          <div className="notifications__ava">
                            <img
                              className="notifications__pic"
                              src="./assets/img/ava-1.png"
                              alt=""
                            />
                            <div className="notifications__status bg-blue">
                              <img
                                className="notifications__pic"
                                src="./assets/img/chat.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">
                                Sarah Saunders
                              </div>
                              <div className="notifications__time caption">
                                8h
                              </div>
                            </div>
                            <div className="notifications__text caption-sm">
                              Commented on{" "}
                              <span className="notifications__project">
                                Collab Design
                              </span>
                            </div>
                          </div>
                        </a>
                        <a
                          className="notifications__item"
                          href="/notifications"
                        >
                          <div className="notifications__ava">
                            <img
                              className="notifications__pic"
                              src="./assets/img/ava-1.png"
                              alt=""
                            />
                            <div className="notifications__status bg-green">
                              <img
                                className="notifications__pic"
                                src="./assets/img/bag.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">
                                Glenn Greer
                              </div>
                              <div className="notifications__time caption">
                                12h
                              </div>
                            </div>
                            <div className="notifications__text caption-sm">
                              Just pushaded{" "}
                              <span className="notifications__project">
                                Sapiens Illustration
                              </span>
                            </div>
                          </div>
                        </a>
                        <a
                          className="notifications__item"
                          href="/notifications"
                        >
                          <div className="notifications__ava">
                            <img
                              className="notifications__pic"
                              src="./assets/img/ava-1.png"
                              alt=""
                            />
                            <div className="notifications__status bg-purple">
                              <img
                                className="notifications__pic"
                                src="./assets/img/message.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">
                                Sarah Saunders
                              </div>
                              <div className="notifications__time caption">
                                14h
                              </div>
                            </div>
                            <div className="notifications__text caption-sm">
                              Sent you a message 📪{" "}
                            </div>
                          </div>
                        </a>
                        <a
                          className="notifications__item"
                          href="/notifications"
                        >
                          <div className="notifications__ava">
                            <img
                              className="notifications__pic"
                              src="./assets/img/ava-1.png"
                              alt=""
                            />
                            <div className="notifications__status bg-red">
                              <img
                                className="notifications__pic"
                                src="./assets/img/heart.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">
                                Sarah Saunders
                              </div>
                              <div className="notifications__time caption">
                                21h
                              </div>
                            </div>
                            <div className="notifications__text caption-sm">
                              Liked{" "}
                              <span className="notifications__project">
                                Folio Agency
                              </span>
                            </div>
                          </div>
                        </a>
                        <a
                          className="notifications__item"
                          href="/notifications"
                        >
                          <div className="notifications__ava">
                            <img
                              className="notifications__pic"
                              src="./assets/img/ava-1.png"
                              alt=""
                            />
                            <div className="notifications__status bg-blue">
                              <img
                                className="notifications__pic"
                                src="./assets/img/chat.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">
                                Sarah Saunders
                              </div>
                              <div className="notifications__time caption">
                                8h
                              </div>
                            </div>
                            <div className="notifications__text caption-sm">
                              Commented on{" "}
                              <span className="notifications__project">
                                Collab Design
                              </span>
                            </div>
                          </div>
                        </a>
                        <a
                          className="notifications__item"
                          href="/notifications"
                        >
                          <div className="notifications__ava">
                            <img
                              className="notifications__pic"
                              src="./assets/img/ava-1.png"
                              alt=""
                            />
                            <div className="notifications__status bg-green">
                              <img
                                className="notifications__pic"
                                src="./assets/img/bag.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="notifications__details">
                            <div className="notifications__line">
                              <div className="notifications__user caption">
                                Glenn Greer
                              </div>
                              <div className="notifications__time caption">
                                12h
                              </div>
                            </div>
                            <div className="notifications__text caption-sm">
                              Just pushaded{" "}
                              <span className="notifications__project">
                                Sapiens Illustration
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="notifications__btns">
                        <a
                          className="notifications__btn btn btn-dark"
                          href="/notifications"
                        >
                          See all incoming activity
                        </a>
                      </div>
                    </div>
                  </div>
                  <a className="header__user" href="#">
                    <img
                      className="header__pic"
                      src="./assets/img/ava.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="page__row page__row_border">
              <div className="page__col">
                <div className="slider__container">
                  <div className="slider__inner">
                    <Carousel
                      variant="light"
                      controls={false}
                      touch={true}
                      slide={true}
                    >
                      <Carousel.Item>
                        <div className="slider__item">
                          <div className="slider__details">
                            <div className="slider__title h5">
                              Set a Google Analytics Code
                            </div>
                            <div className="slider__text">
                              Did you know you can set a Google Analytics code
                              for your products?
                            </div>
                            <a
                              className="btn btn-light"
                              href="#popup-settings"
                              data-effect="mfp-zoom-in"
                              onClick={() => handleShow()}
                            >
                              Settings
                            </a>
                          </div>
                          <div className="slider__preview">
                            <img
                              className="slider__pic"
                              src="./assets/img/slider-pic.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="slider__item">
                          <div className="slider__details">
                            <div className="slider__title h5">
                              Set a Google Analytics Code
                            </div>
                            <div className="slider__text">
                              Did you know you can set a Google Analytics code
                              for your products?
                            </div>
                            <a
                              className="btn btn-light"
                              href="#popup-settings"
                              data-effect="mfp-zoom-in"
                            >
                              Settings
                            </a>
                          </div>
                          <div className="slider__preview">
                            <img
                              className="slider__pic"
                              src="./assets/img/slider-pic.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                    <button className="slider__close">
                      <svg
                        className="icon icon-remove"
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                      >
                        <path
                          fill="#11142D"
                          d="M1.61289944,0.209704612 L1.70710678,0.292893219 L5,3.585 L8.29289322,0.292893219 C8.68341751,-0.0976310729 9.31658249,-0.0976310729 9.70710678,0.292893219 C10.0675907,0.65337718 10.0953203,1.22060824 9.79029539,1.61289944 L9.70710678,1.70710678 L6.415,5 L9.70710678,8.29289322 C10.0976311,8.68341751 10.0976311,9.31658249 9.70710678,9.70710678 C9.34662282,10.0675907 8.77939176,10.0953203 8.38710056,9.79029539 L8.29289322,9.70710678 L5,6.415 L1.70710678,9.70710678 C1.31658249,10.0976311 0.683417511,10.0976311 0.292893219,9.70710678 C-0.0675907428,9.34662282 -0.0953202783,8.77939176 0.209704612,8.38710056 L0.292893219,8.29289322 L3.585,5 L0.292893219,1.70710678 C-0.0976310729,1.31658249 -0.0976310729,0.683417511 0.292893219,0.292893219 C0.65337718,-0.0675907428 1.22060824,-0.0953202783 1.61289944,0.209704612 Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* <div className="slider">
                  <div className="slider__container">
                    <div className="slider__inner owl-carousel js-slider">
                      <div className="slider__item">
                        <div className="slider__details">
                          <div className="slider__title h5">
                            Set a Google Analytics Code
                          </div>
                          <div className="slider__text">
                            Did you know you can set a Google Analytics code for your
                            products?
                          </div>
                          <a
                            className="slider__btn btn btn_white js-popup-open"
                            href="#popup-settings"
                            data-effect="mfp-zoom-in"
                          >
                            Settings
                          </a>
                        </div>
                        <div className="slider__preview">
                          <img
                            className="slider__pic"
                            src="./assets/img/slider-pic.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="slider__item">
                        <div className="slider__details">
                          <div className="slider__title h5">
                            Set a Google Analytics Code
                          </div>
                          <div className="slider__text">
                            Did you know you can set a Google Analytics code for your
                            products?
                          </div>
                          <a
                            className="slider__btn btn btn_white js-popup-open"
                            href="#popup-settings"
                            data-effect="mfp-zoom-in"
                          >
                            Settings
                          </a>
                        </div>
                        <div className="slider__preview">
                          <img
                            className="slider__pic"
                            src="./assets/img/slider-pic.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="slider__item">
                        <div className="slider__details">
                          <div className="slider__title h5">
                            Set a Google Analytics Code
                          </div>
                          <div className="slider__text">
                            Did you know you can set a Google Analytics code for your
                            products?
                          </div>
                          <a
                            className="slider__btn btn btn_white js-popup-open"
                            href="#popup-settings"
                            data-effect="mfp-zoom-in"
                          >
                            Settings
                          </a>
                        </div>
                        <div className="slider__preview">
                          <img
                            className="slider__pic"
                            src="./assets/img/slider-pic.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <button className="slider__close">
                      <svg className="icon icon-remove" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                        <path fill="#11142D" d="M1.61289944,0.209704612 L1.70710678,0.292893219 L5,3.585 L8.29289322,0.292893219 C8.68341751,-0.0976310729 9.31658249,-0.0976310729 9.70710678,0.292893219 C10.0675907,0.65337718 10.0953203,1.22060824 9.79029539,1.61289944 L9.70710678,1.70710678 L6.415,5 L9.70710678,8.29289322 C10.0976311,8.68341751 10.0976311,9.31658249 9.70710678,9.70710678 C9.34662282,10.0675907 8.77939176,10.0953203 8.38710056,9.79029539 L8.29289322,9.70710678 L5,6.415 L1.70710678,9.70710678 C1.31658249,10.0976311 0.683417511,10.0976311 0.292893219,9.70710678 C-0.0675907428,9.34662282 -0.0953202783,8.77939176 0.209704612,8.38710056 L0.292893219,8.29289322 L3.585,5 L0.292893219,1.70710678 C-0.0976310729,1.31658249 -0.0976310729,0.683417511 0.292893219,0.292893219 C0.65337718,-0.0675907428 1.22060824,-0.0953202783 1.61289944,0.209704612 Z" />

                      </svg>
                    </button>
                  </div>
                </div> */}
                <div className="page__widgets">
                  <div className="widget widget_shadow">
                    <div className="widget__title">Latest Referrals</div>
                    <div className="widget__list">
                      <a className="widget__item" href="/products">
                        <div className="widget__preview bg-pink">
                          <img
                            className="widget__pic"
                            src="./assets/img/figure-1.png"
                            alt=""
                          />
                        </div>
                        <div className="widget__details">
                          <div className="widget__category title">
                            Bento 3D Kit
                            <svg
                              className="icon icon-arrow-right"
                              xmlns="http://www.w3.org/2000/svg"
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                            >
                              <path
                                fill="#11142D"
                                d="M-0.707106781,-0.707106781 C-0.34662282,-1.06759074 0.220608236,-1.09532028 0.612899443,-0.790295388 L0.707106781,-0.707106781 L4.70710678,3.29289322 C5.06759074,3.65337718 5.09532028,4.22060824 4.79029539,4.61289944 L4.70710678,4.70710678 L0.707106781,8.70710678 C0.316582489,9.09763107 -0.316582489,9.09763107 -0.707106781,8.70710678 C-1.06759074,8.34662282 -1.09532028,7.77939176 -0.790295388,7.38710056 L-0.707106781,7.29289322 L2.585,4 L-0.707106781,0.707106781 C-1.06759074,0.34662282 -1.09532028,-0.220608236 -0.790295388,-0.612899443 L-0.707106781,-0.707106781 Z"
                                transform="translate(1 1)"
                              />
                            </svg>
                          </div>
                          <div className="widget__info caption">
                            Illustration
                          </div>
                        </div>
                      </a>
                      <a className="widget__item" href="/products">
                        <div className="widget__preview bg-yellow">
                          <img
                            className="widget__pic"
                            src="./assets/img/figure-2.png"
                            alt=""
                          />
                        </div>
                        <div className="widget__details">
                          <div className="widget__category title">
                            Bento 3D Kit
                            <svg
                              className="icon icon-arrow-right"
                              xmlns="http://www.w3.org/2000/svg"
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                            >
                              <path
                                fill="#11142D"
                                d="M-0.707106781,-0.707106781 C-0.34662282,-1.06759074 0.220608236,-1.09532028 0.612899443,-0.790295388 L0.707106781,-0.707106781 L4.70710678,3.29289322 C5.06759074,3.65337718 5.09532028,4.22060824 4.79029539,4.61289944 L4.70710678,4.70710678 L0.707106781,8.70710678 C0.316582489,9.09763107 -0.316582489,9.09763107 -0.707106781,8.70710678 C-1.06759074,8.34662282 -1.09532028,7.77939176 -0.790295388,7.38710056 L-0.707106781,7.29289322 L2.585,4 L-0.707106781,0.707106781 C-1.06759074,0.34662282 -1.09532028,-0.220608236 -0.790295388,-0.612899443 L-0.707106781,-0.707106781 Z"
                                transform="translate(1 1)"
                              />
                            </svg>
                          </div>
                          <div className="widget__info caption">
                            Illustration
                          </div>
                        </div>
                      </a>
                      <a className="widget__item" href="/products">
                        <div className="widget__preview bg-blue-light">
                          <img
                            className="widget__pic"
                            src="./assets/img/figure-3.png"
                            alt=""
                          />
                        </div>
                        <div className="widget__details">
                          <div className="widget__category title">
                            Collab UI Kit
                            <svg
                              className="icon icon-arrow-right"
                              xmlns="http://www.w3.org/2000/svg"
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                            >
                              <path
                                fill="#11142D"
                                d="M-0.707106781,-0.707106781 C-0.34662282,-1.06759074 0.220608236,-1.09532028 0.612899443,-0.790295388 L0.707106781,-0.707106781 L4.70710678,3.29289322 C5.06759074,3.65337718 5.09532028,4.22060824 4.79029539,4.61289944 L4.70710678,4.70710678 L0.707106781,8.70710678 C0.316582489,9.09763107 -0.316582489,9.09763107 -0.707106781,8.70710678 C-1.06759074,8.34662282 -1.09532028,7.77939176 -0.790295388,7.38710056 L-0.707106781,7.29289322 L2.585,4 L-0.707106781,0.707106781 C-1.06759074,0.34662282 -1.09532028,-0.220608236 -0.790295388,-0.612899443 L-0.707106781,-0.707106781 Z"
                                transform="translate(1 1)"
                              />
                            </svg>
                          </div>
                          <div className="widget__info caption">
                            Coded Template
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="widget widget_chart widget_pink">
                    <div className="widget__title">Costs</div>
                    <div className="widget__wrap">
                      <div className="widget__chart widget__chart_earning">
                        <Chart
                          options={optionsMixedChart}
                          series={seriesMixedChart}
                          type="line"
                          width="100%"
                          height={"100%"}
                        />
                      </div>
                      <div className="widget__btns">
                        <button className="widget__btn btn btn-dark btn_wide">
                          Analytics
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page__col">
                <div className="page__group">
                  <div className="widget widget_stat widget_pb60">
                    <div className="widget__title">Total Spend</div>
                    <div className="widget__counter title title_md color-purple">
                      479.4
                    </div>
                    <div className="widget__text">
                      Update your payout method in Settings
                    </div>
                    <a
                      className="widget__btn btn btn_white btn_wide"
                      href="/payouts"
                    >
                      Withdraw All Earnings
                    </a>
                  </div>
                  <div className="widget widget_empty widget_p0">
                    <div className="widget__title">Patient Intake Trend</div>
                    <div className="widget__chart widget__chart_impressions">
                      <Chart
                        options={options}
                        series={affiliate}
                        height={"100%"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
