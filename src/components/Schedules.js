import React, { useEffect } from "react";
import Leftsidebar from "./Leftsidebar";
import Chart from "react-apexcharts";
import $ from "jquery";
import Tab from "react-bootstrap/Tab";

function Schedules() {
  var green = "#7FBA7A";
  var red = "#FF754C";
  var purple = "#6C5DD3";
  var yellow = "#FFCE73";
  var grayOpacity = "#f2f2f2";
  var white = "#ffffff";
  var borderColor = "#E4E4E4";
  var blue = "#A0D7E7";

  const circleChart = {
    chart: {
      height: "100%",
      type: "radialBar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "40%",
        },
        track: {
          background: grayOpacity,
          margin: 0,
        },
        dataLabels: {
          show: false,
        },
      },
    },
    fill: {
      colors: yellow,
    },
  };
  const circleChartpurple = {
    chart: {
      height: "100%",
      type: "radialBar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "40%",
        },
        track: {
          background: grayOpacity,
          margin: 0,
        },
        dataLabels: {
          show: false,
        },
      },
    },
    fill: {
      colors: purple,
    },
  };
  const circleChartgreen = {
    chart: {
      height: "100%",
      type: "radialBar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "40%",
        },
        track: {
          background: grayOpacity,
          margin: 0,
        },
        dataLabels: {
          show: false,
        },
      },
    },
    fill: {
      colors: green,
    },
  };
  const circleChartred = {
    chart: {
      height: "100%",
      type: "radialBar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "40%",
        },
        track: {
          background: grayOpacity,
          margin: 0,
        },
        dataLabels: {
          show: false,
        },
      },
    },
    fill: {
      colors: red,
    },
  };
  const circleChartData = [40];
  var newUsers = {
    colors: [blue],
    chart: {
      height: "100%",
      type: "bar",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    grid: {
      borderColor: borderColor,
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
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
        columnWidth: "80%",
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
  const user = [
    {
      name: "series-2",
      type: "column",
      data: [23, 12, 54, 45, 45],
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

  const tabClick = () => {
    $(".tabs__item").on("click", function (e) {
      e.preventDefault();
      $(".tabs__item").removeClass("active");
      $(this).toggleClass("active");
    });

    $(".tabs__link").on("click", function (e) {
      e.preventDefault();
      $(".tabs__link").removeClass("active");
      $(this).toggleClass("active");
    });
  };
  return (
    <div>
      <Leftsidebar />
      <div className="page">
        <div className="page__wrapper">
          <div className="page__center">
            <div className="page__row page__row_head">
              <div className="page__col">
                <div className="page__hello h5">Hi Dash UI8,</div>
                <div className="page__welcome h2">Contracts</div>
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
                          {/* <use xlinkHref="img/sprite.svg#icon-search" /> */}
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
                          {/* <use xlinkHref="img/sprite.svg#icon-close" /> */}
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
                              {/* <use xlinkHref="img/sprite.svg#icon-arrow-right" /> */}
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
                              {/* <use xlinkHref="img/sprite.svg#icon-arrow-right" /> */}
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
                              {/* <use xlinkHref="img/sprite.svg#icon-arrow-right" /> */}
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
                      {/* <use xlinkHref="img/sprite.svg#icon-arrow-right" /> */}
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
            <div className="page__content">
              <div className="banner">
                <div className="banner__container">
                  <div className="banner__preview">
                    <img
                      className="banner__pic"
                      src="./assets/img/banner-pic.png"
                      alt=""
                    />
                  </div>
                  <div className="banner__wrap">
                    <div className="banner__title h3">Unity Dashboard</div>
                    <div className="banner__text">
                      Create Your Product Dashboard in Minutes
                    </div>
                    <button className="btn btn-light">Create Schedule</button>
                  </div>
                </div>
              </div>
              <div className="schedules">
                <div className="schedules__container">
                  <div className="schedules__col">
                    <div className="schedules__title h6">Small Timeline</div>
                    <div className="schedules__list">
                      <a className="schedules__item active" href="#">
                        <div className="schedules__date bg-pink-light">
                          <div className="schedules__name caption-sm">Mon</div>
                          <div className="schedules__number h4">20</div>
                        </div>
                        <div className="schedules__details">
                          <div className="schedules__category title">
                            Unity UI Kit
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
                              {/* <use xlinkHref="img/sprite.svg#icon-arrow-right" /> */}
                            </svg>
                          </div>
                          <div className="schedules__info caption-sm">
                            UI Design
                          </div>
                          <div className="schedules__time caption">10:00</div>
                        </div>
                      </a>
                      <a className="schedules__item" href="#">
                        <div className="schedules__date bg-purple-light">
                          <div className="schedules__name caption-sm">Tue</div>
                          <div className="schedules__number h4">21</div>
                        </div>
                        <div className="schedules__details">
                          <div className="schedules__category title">
                            Bento 3D
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
                              {/* <use xlinkHref="img/sprite.svg#icon-arrow-right" /> */}
                            </svg>
                          </div>
                          <div className="schedules__info caption-sm">
                            UI Design
                          </div>
                          <div className="schedules__time caption">11:30</div>
                        </div>
                      </a>
                      <a className="schedules__item" href="#">
                        <div className="schedules__date bg-blue-light">
                          <div className="schedules__name caption-sm">Wed</div>
                          <div className="schedules__number h4">22</div>
                        </div>
                        <div className="schedules__details">
                          <div className="schedules__category title">
                            Unity UI Kit
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
                              {/* <use xlinkHref="img/sprite.svg#icon-arrow-right" /> */}
                            </svg>
                          </div>
                          <div className="schedules__info caption-sm">
                            UI Design
                          </div>
                          <div className="schedules__time caption">12:00</div>
                        </div>
                      </a>
                      <a className="schedules__item" href="#">
                        <div className="schedules__date bg-yellow-light">
                          <div className="schedules__name caption-sm">Thu</div>
                          <div className="schedules__number h4">23</div>
                        </div>
                        <div className="schedules__details">
                          <div className="schedules__category title">
                            Unity UI Kit
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
                              {/* <use xlinkHref="img/sprite.svg#icon-arrow-right" /> */}
                            </svg>
                          </div>
                          <div className="schedules__info caption-sm">
                            UI Design
                          </div>
                          <div className="schedules__time caption">10:00</div>
                        </div>
                      </a>
                    </div>
                    <button className="schedules__btn btn btn-dark btn_wide">
                      Add more
                    </button>
                  </div>
                  <div className="schedules__col">
                    <div className="schedules__top">
                      <div className="schedules__title h6">Big Timeline</div>
                      <div className="schedules__arrows">
                        <button className="schedules__arrow">
                          <svg
                            className="icon icon-arrow-left"
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="10"
                            viewBox="0 0 6 10"
                          >
                            <path
                              fill="#11142D"
                              d="M0.292893219,0.292893219 C0.65337718,-0.06759074 1.22060824,-0.09532028 1.61289944,0.209704612 L1.70710678,0.292893219 L5.70710678,4.29289322 C6.06759074,4.65337718 6.09532028,5.22060824 5.79029539,5.61289944 L5.70710678,5.70710678 L1.70710678,9.70710678 C1.31658249,10.0976311 0.683417511,10.0976311 0.292893219,9.70710678 C-0.06759074,9.34662282 -0.09532028,8.77939176 0.209704612,8.38710056 L0.292893219,8.29289322 L3.585,5 L0.292893219,1.70710678 C-0.06759074,1.34662282 -0.09532028,0.779391764 0.209704612,0.387100557 L0.292893219,0.292893219 Z"
                              transform="rotate(180 3 5)"
                            />
                            {/* <use xlinkHref="img/sprite.svg#icon-arrow-left" /> */}
                          </svg>
                        </button>
                        <button className="schedules__arrow">
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
                            {/* <use xlinkHref="img/sprite.svg#icon-arrow-right" /> */}
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="schedules__inner">
                      <div className="schedules__graphic">
                        <div className="schedules__head">
                          <div className="schedules__option">Aug</div>
                          <div className="schedules__week">
                            <div className="schedules__cell">
                              <div className="schedules__day green">M</div>
                            </div>
                            <div className="schedules__cell">
                              <div className="schedules__day green">T</div>
                            </div>
                            <div className="schedules__cell">
                              <div className="schedules__day active">W</div>
                            </div>
                            <div className="schedules__cell">
                              <div className="schedules__day">Th</div>
                            </div>
                            <div className="schedules__cell">
                              <div className="schedules__day gray">Fr</div>
                            </div>
                            <div className="schedules__cell">
                              <div className="schedules__day">Sa</div>
                            </div>
                          </div>
                        </div>
                        <div className="schedules__body">
                          <div className="schedules__grid">
                            <div className="schedules__line" />
                            <div className="schedules__line" />
                            <div className="schedules__line" />
                            <div className="schedules__line" />
                            <div className="schedules__line" />
                          </div>
                          <div className="schedules__row">
                            <div className="schedules__option">08:00</div>
                            <div className="schedules__week">
                              <div
                                className="schedules__task bg-purple"
                                style={{ width: "33.33%" }}
                              >
                                <div className="schedules__text">
                                  Bento 3D Objects
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="schedules__row">
                            <div className="schedules__option">09:00</div>
                            <div className="schedules__week">
                              <div
                                className="schedules__task bg-pink"
                                style={{ width: "50%", marginLeft: "16.66%" }}
                              >
                                <div className="schedules__text">
                                  Bento 3D Objects
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="schedules__row">
                            <div className="schedules__option">10:00</div>
                            <div className="schedules__week">
                              <div
                                className="schedules__task bg-blue-light"
                                style={{ width: "83.33%" }}
                              >
                                <div className="schedules__text">
                                  Bento 3D Objects
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="schedules__row">
                            <div className="schedules__option">11:00</div>
                            <div className="schedules__week">
                              <div
                                className="schedules__task bg-purple-light"
                                style={{
                                  width: "66.66%",
                                  marginLeft: "16.66%",
                                }}
                              >
                                <div className="schedules__text">
                                  Bento 3D Objects
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="schedules__row">
                            <div className="schedules__option">12:00</div>
                            <div className="schedules__week">
                              <div
                                className="schedules__task bg-blue"
                                style={{
                                  width: "33.33%",
                                  marginLeft: "33.33%",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="schedules__legend">
                      <div className="schedules__status green">Small note</div>
                      <div className="schedules__status purple">Small note</div>
                      <div className="schedules__status gray">Small note</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page__flex">
                <div className="widget widget_shadow">
                  <div className="widget__title">Icon Progress</div>
                  <div className="quality">
                    <div className="quality__list">
                      <div className="quality__item quality__item_chart">
                        <div className="quality__preview bg-blue-light-opacity">
                          <img
                            className="quality__pic"
                            src="./assets/img/figure-5.png"
                            alt=""
                          />
                        </div>
                        <div className="quality__details">
                          <div className="quality__title title">
                            Folio Agency
                          </div>
                          <div className="quality__info caption-sm">
                            UI Design Kit
                          </div>
                        </div>
                        <div className="quality__chart">
                          <Chart
                            options={circleChart}
                            series={circleChartData}
                            width={"100%"}
                            height={"100%"}
                            type="radialBar"
                          />
                          <div className="quality__percent caption-sm">35%</div>
                        </div>
                      </div>
                      <div className="quality__item quality__item_chart">
                        <div className="quality__preview bg-pink-opacity">
                          <img
                            className="quality__pic"
                            src="./assets/img/figure-1.png"
                            alt=""
                          />
                        </div>
                        <div className="quality__details">
                          <div className="quality__title title">
                            Unity Comps
                          </div>
                          <div className="quality__info caption-sm">
                            New 3D Kit
                          </div>
                        </div>
                        <div className="quality__chart">
                          <Chart
                            options={circleChartpurple}
                            series={circleChartData}
                            width={"100%"}
                            height={"100%"}
                            type="radialBar"
                          />
                          <div className="quality__percent caption-sm">40%</div>
                        </div>
                      </div>
                      <div className="quality__item quality__item_chart">
                        <div className="quality__preview bg-yellow-opacity">
                          <img
                            className="quality__pic"
                            src="./assets/img/figure-2.png"
                            alt=""
                          />
                        </div>
                        <div className="quality__details">
                          <div className="quality__title title">
                            Folio Designer
                          </div>
                          <div className="quality__info caption-sm">
                            UI Design Kit
                          </div>
                        </div>
                        <div className="quality__chart">
                          <Chart
                            options={circleChartgreen}
                            series={circleChartData}
                            width={"100%"}
                            height={"100%"}
                            type="radialBar"
                          />
                          <div className="quality__percent caption-sm">62%</div>
                        </div>
                      </div>
                      <div className="quality__item quality__item_chart">
                        <div className="quality__preview bg-blue-light-opacity">
                          <img
                            className="quality__pic"
                            src="./assets/img/figure-3.png"
                            alt=""
                          />
                        </div>
                        <div className="quality__details">
                          <div className="quality__title title">
                            Folio Agency
                          </div>
                          <div className="quality__info caption-sm">
                            UI Design Kit
                          </div>
                        </div>
                        <div className="quality__chart">
                          <Chart
                            options={circleChartred}
                            series={circleChartData}
                            width={"100%"}
                            height={"100%"}
                            type="radialBar"
                          />
                          <div className="quality__percent caption-sm">75%</div>
                        </div>
                      </div>
                    </div>
                    <button className="quality__btn quality__btn_mt30 btn btn-dark btn_wide">
                      Discover More
                    </button>
                  </div>
                </div>
                <div className="widget widget_shadow">
                  <div className="widget__title">Recent Earnings 🔥</div>
                  <div className="tabs">
                    <div className="tabs__row">
                      <div className="tabs__col">
                        <a
                          className="tabs__item active"
                          href="#"
                          onClick={() => tabClick()}
                        >
                          <div className="tabs__preview bg-blue">
                            <img
                              className="tabs__pic"
                              src="./assets/img/figure-3.png"
                              alt=""
                            />
                          </div>
                          <div className="tabs__details">
                            <div className="tabs__category title">
                              Collab UI
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
                                {/* <use xlinkHref="img/sprite.svg#icon-arrow-right" /> */}
                              </svg>
                            </div>
                            <div className="tabs__info caption-sm">
                              UI Design
                            </div>
                            <div className="tabs__price caption">$64</div>
                          </div>
                        </a>
                        <a
                          className="tabs__item"
                          href="#"
                          onClick={() => tabClick()}
                        >
                          <div className="tabs__preview bg-pink">
                            <img
                              className="tabs__pic"
                              src="./assets/img/figure-1.png"
                              alt=""
                            />
                          </div>
                          <div className="tabs__details">
                            <div className="tabs__category title">
                              Sapiens
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
                                {/* <use xlinkHref="img/sprite.svg#icon-arrow-right" /> */}
                              </svg>
                            </div>
                            <div className="tabs__info caption-sm">
                              UI Design
                            </div>
                            <div className="tabs__price caption">$64</div>
                          </div>
                        </a>
                        <a
                          className="tabs__item"
                          href="#"
                          onClick={() => tabClick()}
                        >
                          <div className="tabs__preview bg-yellow">
                            <img
                              className="tabs__pic"
                              src="./assets/img/figure-2.png"
                              alt=""
                            />
                          </div>
                          <div className="tabs__details">
                            <div className="tabs__category title">
                              Folio Agency
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
                                {/* <use xlinkHref="img/sprite.svg#icon-arrow-right" /> */}
                              </svg>
                            </div>
                            <div className="tabs__info caption-sm">
                              UI Design
                            </div>
                            <div className="tabs__price caption">$64</div>
                          </div>
                        </a>
                      </div>
                      <div className="tabs__col">
                        <div className="tabs__chart">
                          <Chart
                            options={newUsers}
                            series={user}
                            height={"100%"}
                          />
                        </div>
                        <div className="tabs__desc">
                          <div className="tabs__title title">Aug Earning</div>
                          <div className="tabs__date caption-sm">
                            18 July - 18 Agu
                          </div>
                          <button className="tabs__btn btn btn-dark">
                            <svg
                              className="icon icon-plus-square"
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                            >
                              <path
                                fill="#FFF"
                                d="M14.686,-0.75 C18.3314519,-0.75 20.75,1.84783382 20.75,5.585 L20.75,5.585 L20.75,14.415 C20.75,18.1525057 18.3311101,20.75 14.684,20.75 L14.684,20.75 L5.314,20.75 C1.66854809,20.75 -0.75,18.1521662 -0.75,14.415 L-0.75,14.415 L-0.75,5.585 C-0.75,1.85116118 1.67559844,-0.75 5.316,-0.75 L5.316,-0.75 Z M14.686,0.75 L5.316,0.75 C2.52835546,0.75 0.75,2.65707131 0.75,5.585 L0.75,5.585 L0.75,14.415 C0.75,17.3467579 2.52189258,19.25 5.314,19.25 L5.314,19.25 L14.684,19.25 C17.4778637,19.25 19.25,17.3470138 19.25,14.415 L19.25,14.415 L19.25,5.585 C19.25,2.65324208 17.4781074,0.75 14.686,0.75 L14.686,0.75 Z M10,13.663 L10,13.663 L11.5,13.663 C11.5,14.4914271 10.8284271,15.163 10,15.163 L10,15.163 L9.85553999,15.1561334 C9.09488808,15.0834487 8.5,14.4426961 8.5,13.663 L8.5,13.663 L10,13.663 Z M13.667,8.5 L13.81146,8.50686658 C14.5721119,8.57955132 15.167,9.22030388 15.167,10 L15.167,10 C15.167,10.8284271 14.4954271,11.5 13.667,11.5 L13.667,11.5 L13.667,10 L13.667,10 L13.667,11.5 L11.5,11.5 L11.5,13.662 L10,13.662 L10,13.652 L8.5,13.653 L8.5,11.5 L6.333,11.5 L6.18853999,11.4931334 C5.42788808,11.4204487 4.833,10.7796961 4.833,10 L4.833,10 L4.83986658,9.85553999 C4.91255132,9.09488808 5.55330388,8.5 6.333,8.5 L6.333,8.5 L8.5,8.5 L8.5,6.327 L8.50686658,6.18253999 C8.57955132,5.42188808 9.22030388,4.827 10,4.827 L10,4.827 L10.14446,4.83386658 C10.9051119,4.90655132 11.5,5.54730388 11.5,6.327 L11.5,6.327 L11.5,8.5 L10.75,8.5 L10.75,9.239 L11.5,9.24 L11.5,8.5 L13.667,8.5 Z M11.5,10.74 L10.001,10.739 L10,10.75 L10,10.75 L10.75,10.75 L10.75,11.5 L11.5,11.5 L11.5,10.74 Z M9.25,10.739 L8.5,10.74 L8.5,11.5 L9.25,11.5 L9.25,10.739 Z M10,9.24 L9.25,9.239 L9.25,9.25 L10,9.25 C10,9.66421356 9.66421356,10 9.25,10 L9.329,9.995 L9.35177056,9.99684662 C9.68456652,10.0419943 9.94800573,10.3054335 9.99315338,10.6382294 L10,10.74 L10.001,10.739 L10.0068466,10.6482294 C10.0519943,10.3154335 10.3154335,10.0519943 10.6482294,10.0068466 L10.75,10 L10.75,9.99 C10.3357864,9.99 10,9.65421356 10,9.24 L10,9.24 Z M9.25,8.5 L8.5,8.5 L8.5,9.24 L9.25,9.239 L9.25,8.5 Z"
                                transform="translate(1 1)"
                              />
                              {/* <use xlinkHref="img/sprite.svg#icon-plus-square" /> */}
                            </svg>
                            <span className="btn__icon">Create New</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="tabs__nav">
                      <a
                        className="tabs__link"
                        href="#"
                        onClick={() => tabClick()}
                      >
                        <div className="tabs__icon">
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
                            {/* <use xlinkHref="img/sprite.svg#icon-bag" /> */}
                          </svg>
                        </div>
                        <div className="tabs__text">Trending</div>
                      </a>
                      <a
                        className="tabs__link active"
                        href="#"
                        onClick={() => tabClick()}
                      >
                        <div className="tabs__icon">
                          <svg
                            className="icon icon-overview"
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="22"
                            viewBox="0 0 21 22"
                          >
                            <path
                              fill="#000"
                              d="M12.925 1.37a.75.75 0 0 1 .102 1.493l-.102.007H5.657c-2.455 0-4.034 1.626-4.125 4.16l-.004.233v8.082c0 2.602 1.483 4.284 3.906 4.38l.223.004h8.604c2.457 0 4.034-1.62 4.125-4.152l.004-.233v-7.04a.75.75 0 0 1 1.493-.102l.007.102v7.04c0 3.4-2.14 5.772-5.394 5.88l-.234.004H5.657c-3.33 0-5.525-2.3-5.625-5.644l-.004-.24V7.264c0-3.392 2.142-5.78 5.394-5.9l.234-.004h7.268zM15.04 8.2a.75.75 0 0 1 .195.96l-.06.093-2.93 3.78a.75.75 0 0 1-.964.193l-.093-.062-2.82-2.214-2.53 3.3a.75.75 0 0 1-.959.198l-.093-.06a.75.75 0 0 1-.198-.959l.06-.093 2.993-3.9a.75.75 0 0 1 .965-.195l.093.062 2.82 2.215 2.467-3.183a.75.75 0 0 1 1.052-.134zM17.995.528c1.476 0 2.672 1.196 2.672 2.672s-1.196 2.672-2.672 2.672-2.672-1.196-2.672-2.672S16.52.528 17.995.528zm0 1.5c-.647 0-1.172.525-1.172 1.172s.525 1.172 1.172 1.172 1.172-.525 1.172-1.172-.525-1.172-1.172-1.172z"
                            />
                            {/* <use xlinkHref="img/sprite.svg#icon-overview" /> */}
                          </svg>
                        </div>
                        <div className="tabs__text">Popular</div>
                      </a>
                      <a
                        className="tabs__link"
                        href="#"
                        onClick={() => tabClick()}
                      >
                        <div className="tabs__icon">
                          <svg
                            className="icon icon-folder"
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                          >
                            <path
                              fill="#11142D"
                              d="M7.1434,0.146484 C7.97802731,0.146484 8.76394774,0.539444966 9.26418917,1.2064298 L9.26418917,1.2064298 L10.0244937,2.21763747 C10.2430362,2.50782308 10.5849213,2.67876895 10.9467,2.67949 L10.9467,2.67949 L13.3048,2.67949 C16.6390949,2.67949 18.1470886,4.44586638 18.1470886,7.99760234 L18.1470886,7.99760234 L18.1243,12.1315 C18.1243,15.5275136 16.0314136,17.6204 12.6354,17.6204 L12.6354,17.6204 L6.14693,17.6204 C2.74452675,17.6204 0.65039,15.5287329 0.65039,12.1315 L0.65039,12.1315 L0.65039,5.63542 C0.65039,2.08139153 2.19106687,0.146484 5.47755,0.146484 L5.47755,0.146484 Z M7.1434,1.646484 L5.47755,1.646484 C3.1041988,1.646484 2.15039,2.8443548 2.15039,5.63542 L2.15039,5.63542 L2.15039,12.1315 C2.15039,14.6999093 3.5725579,16.1204 6.14693,16.1204 L6.14693,16.1204 L12.6354,16.1204 C15.2029864,16.1204 16.6243,14.6990864 16.6243114,12.1273677 L16.6243114,12.1273677 L16.6471,7.99347 C16.6471,5.22630696 15.753403,4.17949 13.3048,4.17949 L13.3048,4.17949 L10.9452083,4.17948852 C10.1118979,4.17783109 9.32759543,3.78567231 8.82593083,3.1195502 L8.82593083,3.1195502 L8.0647315,2.107152 C7.84723171,1.8171543 7.50589177,1.646484 7.1434,1.646484 L7.1434,1.646484 Z M13.3808,10.3242 C13.7950136,10.3242 14.1308,10.6599864 14.1308,11.0742 C14.1308,11.4538958 13.8486461,11.767691 13.4825706,11.8173534 L13.3808,11.8242 L5.38623,11.8242 C4.97201644,11.8242 4.63623,11.4884136 4.63623,11.0742 C4.63623,10.6945042 4.91838388,10.380709 5.28445944,10.3310466 L5.38623,10.3242 L13.3808,10.3242 Z"
                            />
                            <use xlinkHref="img/sprite.svg#icon-folder" />
                          </svg>
                        </div>
                        <div className="tabs__text">Trending</div>
                      </a>
                      <a
                        className="tabs__link"
                        href="#"
                        onClick={() => tabClick()}
                      >
                        <div className="tabs__icon">
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
                            {/* <use xlinkHref="img/sprite.svg#icon-wallet" /> */}
                          </svg>
                        </div>
                        <div className="tabs__text">Trending</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedules;
