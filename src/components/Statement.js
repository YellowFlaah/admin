import React from "react";
import Leftsidebar from "./Leftsidebar";
import Chart from "react-apexcharts";
import $ from "jquery";

function Statement() {
  var options = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    series: [
      {
        name: "",
        data: [35, 66, 34, 56, 18],
      },
    ],
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
  var white = "#ffffff";
  var borderColor = "#E4E4E4";
  var blue = "#A0D7E7";
  var purple = "#6C5DD3";
  var pink = "#FFB7F5";
  var options = {
    colors: [white, borderColor],
    chart: {
      height: "100%",
      type: "bar",
      stacked: true,
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
        left: 10,
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
        endingShape: "rounded",
        columnWidth: "10%",
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      x: {
        show: false,
      },
      shared: true,
    },
    xaxis: {
      labels: {
        show: false,
      },
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
    yaxis: {
      axisBorder: {
        color: borderColor,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      labels: {
        style: {
          colors: white,
        },
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
  const optionsMixedChart = {
    colors: [purple],
    chart: {
      height: "100%",
      type: "line",
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
    tooltip: {
      enabled: false,
    },
    stroke: {
      width: 2,
      curve: "smooth",
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
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
  const circleChart = {
    colors: [purple, pink, borderColor],
    chart: {
      height: "100%",
      type: "donut",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "71%",
          polygons: {
            strokeWidth: 0,
          },
        },
        expandOnClick: false,
      },
    },
    dataLabels: {
      enabled: false,
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
      enabled: false,
    },
  };
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
  const circleChartData = [22, 37, 41];
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
  const dropdownOpen = () => {
    var dropdown = document.querySelectorAll(".js-dropdown");
    dropdown.forEach(function (item, index) {
      var head = item.querySelector(".js-dropdown-head");
      var body = item.querySelector(".js-dropdown-body");
      head.addEventListener("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        if (!item.classList.contains("active")) {
          dropdown[index].classList.remove("active");
          item.classList.add("active");
        } else {
          dropdown[index].classList.remove("active");
        }
      });
      body.addEventListener("click", function (e) {
        e.stopPropagation();
      });
      document.body.addEventListener("click", function () {
        dropdown[index].classList.remove("active");
      });
    });
  };
  const checkboxAll = () => {
    var checkboxAll = $(".products__row_head .checkbox__input");
    if (checkboxAll.is(":checked")) {
      checkboxAll
        .parents(".products__table")
        .find(".products__row:not(.products__row_head) .checkbox__input")
        .prop("checked", true)
        .attr("checked", "checked");
    } else {
      checkboxAll
        .parents(".products__table")
        .find(".products__row:not(.products__row_head) .checkbox__input")
        .prop("checked", false)
        .removeAttr("checked");
    }
  };
  return (
    <div>
      <Leftsidebar />
      <div className="page">
        <div className="page__wrapper">
          <div className="page__center">
            <div className="page__row page__row_head page__row_border">
              <div className="page__col">
                <div className="page__hello h5">Hi Dash UI8,</div>
                <div className="page__welcome page__welcome_sm h2">
                  Financials Report
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
                <div className="details details_statements">
                  <div className="details__container">
                    <div className="details__title h6 mobile-hide">
                      Earnings Report
                    </div>
                    <div
                      className="dropdown js-dropdown"
                      onClick={() => dropdownOpen()}
                    >
                      <div className="dropdown__head js-dropdown-head">
                        Last 30 days
                      </div>
                      <div className="dropdown__body js-dropdown-body">
                        <a className="dropdown__item" href="#">
                          <div className="dropdown__title title">
                            Bento 3D Kit{" "}
                          </div>
                          <div className="dropdown__info caption">
                            Illustration
                          </div>
                        </a>
                        <a className="dropdown__item" href="#">
                          <div className="dropdown__title title">
                            Bento 3D Kit{" "}
                          </div>
                          <div className="dropdown__info caption">
                            Illustration
                          </div>
                        </a>
                        <a className="dropdown__item" href="#">
                          <div className="dropdown__title title">
                            Collab UI Kit{" "}
                          </div>
                          <div className="dropdown__info caption">
                            Coded Template
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="details__row">
                      <div className="details__col">
                        <div className="details__top">
                          <div className="details__number h1">$586</div>
                          <a className="details__line" href="#">
                            <div className="details__preview">
                              <img
                                className="details__pic"
                                src="./assets/img/details-pic-1.png"
                                alt=""
                              />
                            </div>
                            <div className="details__info caption-sm">
                              Your total earnings
                            </div>
                          </a>
                        </div>
                        <div className="details__bottom">
                          <div className="details__statistics">
                            <div className="details__chart details__chart_activity">
                              <Chart
                                options={optionsMixedChart}
                                series={seriesMixedChart}
                                type="line"
                                width="100%"
                                height={"100%"}
                              />
                            </div>
                            <div className="details__status">
                              <div className="details__icon bg-green">
                                <svg
                                  className="icon icon-arrow-up-fat"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="8"
                                  height="6"
                                  viewBox="0 0 8 6"
                                >
                                  <path
                                    fill="#FFF"
                                    d="M0.626241893,0.959554545 C0.986725179,0.599069907 1.55395618,0.571339308 1.94624796,0.876363463 L2.04045546,0.959551893 L4,2.919 L5.95958454,0.959551893 C6.32006918,0.599068607 6.88730029,0.571340135 7.27959093,0.876365761 L7.37379811,0.959554545 C7.73428139,1.32003918 7.76200986,1.88727029 7.45698424,2.27956093 L7.37379546,2.37376811 L4.70712546,5.04042811 C4.34664177,5.40091044 3.77941248,5.42863985 3.38712178,5.12361634 L3.29291454,5.04042811 L0.626244545,2.37376811 C0.235719521,1.98324455 0.235718333,1.35007957 0.626241893,0.959554545 Z"
                                    transform="rotate(180 4 3)"
                                  />
                                  {/* <use xlinkHref="img/sprite.svg#icon-arrow-up-fat" /> */}
                                </svg>
                              </div>
                              <div className="details__percent caption-sm color-green">
                                6%
                              </div>
                            </div>
                          </div>
                          <div className="details__info caption-sm">
                            Update your payout method in Settings
                          </div>
                        </div>
                      </div>
                      <div className="details__col">
                        <div className="details__chart details__chart_report">
                          <Chart
                            options={options}
                            series={affiliate}
                            height={"100%"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="details__list details__list_three">
                      <div className="details__item">
                        <div className="details__head">
                          <div className="details__preview bg-purple">
                            <img
                              className="details__pic"
                              src="./assets/img/folder.svg"
                              alt=""
                            />
                          </div>
                          <div className="details__text caption-sm">
                            Total Earnings
                          </div>
                        </div>
                        <div className="details__counter h4">$586.75</div>
                        <div className="details__indicator">
                          <div
                            className="details__progress bg-purple"
                            style={{ width: "55%" }}
                          />
                        </div>
                      </div>
                      <div className="details__item">
                        <div className="details__head">
                          <div className="details__preview bg-pink">
                            <img
                              className="details__pic"
                              src="./assets/img/activity.svg"
                              alt=""
                            />
                          </div>
                          <div className="details__text caption-sm">
                            Item Earnings
                          </div>
                        </div>
                        <div className="details__counter h4">$425.94</div>
                        <div className="details__indicator">
                          <div
                            className="details__progress bg-pink"
                            style={{ width: "52%" }}
                          />
                        </div>
                      </div>
                      <div className="details__item">
                        <div className="details__head">
                          <div className="details__preview bg-blue">
                            <img
                              className="details__pic"
                              src="./assets/img/bag.svg"
                              alt=""
                            />
                          </div>
                          <div className="details__text caption-sm">
                            Tax withheld
                          </div>
                        </div>
                        <div className="details__counter h4">$25.94</div>
                        <div className="details__indicator">
                          <div
                            className="details__progress bg-blue"
                            style={{ width: "55%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="page__nav mobile-hide">
                  <a className="page__link active" href="#">
                    Last 30 Days
                  </a>
                  <a className="page__link" href="#">
                    Aug 2020
                  </a>
                  <a className="page__link" href="#">
                    Jul 2020
                  </a>
                </div>
                <div className="page__stat page__stat_sm">
                  <div className="sorting mobile-show">
                    <div className="sorting__row">
                      <div className="sorting__col">
                        <div className="sorting__dropdowns">
                          <div className="dropdown js-dropdown">
                            <div className="dropdown__head js-dropdown-head">
                              Last 30 days
                            </div>
                            <div className="dropdown__body js-dropdown-body">
                              <a className="dropdown__item" href="#">
                                <div className="dropdown__title title">
                                  Bento 3D Kit{" "}
                                </div>
                                <div className="dropdown__info caption">
                                  Illustration
                                </div>
                              </a>
                              <a className="dropdown__item" href="#">
                                <div className="dropdown__title title">
                                  Bento 3D Kit{" "}
                                </div>
                                <div className="dropdown__info caption">
                                  Illustration
                                </div>
                              </a>
                              <a className="dropdown__item" href="#">
                                <div className="dropdown__title title">
                                  Collab UI Kit{" "}
                                </div>
                                <div className="dropdown__info caption">
                                  Coded Template
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="dropdown js-dropdown">
                            <div className="dropdown__head js-dropdown-head">
                              Aug 2020
                            </div>
                            <div className="dropdown__body js-dropdown-body">
                              <a className="dropdown__item" href="#">
                                <div className="dropdown__title title">
                                  Bento 3D Kit{" "}
                                </div>
                                <div className="dropdown__info caption">
                                  Illustration
                                </div>
                              </a>
                              <a className="dropdown__item" href="#">
                                <div className="dropdown__title title">
                                  Bento 3D Kit{" "}
                                </div>
                                <div className="dropdown__info caption">
                                  Illustration
                                </div>
                              </a>
                              <a className="dropdown__item" href="#">
                                <div className="dropdown__title title">
                                  Collab UI Kit{" "}
                                </div>
                                <div className="dropdown__info caption">
                                  Coded Template
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sorting__col">
                        <div className="sorting__line">
                          <div className="sorting__search">
                            <button className="sorting__open">
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
                            <input
                              className="sorting__input"
                              type="text"
                              placeholder="Search"
                            />
                          </div>
                          <div className="sorting__actions">
                            <button className="sorting__action">
                              <svg
                                className="icon icon-print"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                              >
                                <path
                                  fill="#11142d"
                                  d="M13.5 5.5a4 4 0 0 1 3.995 3.8l.005.2v4a1 1 0 0 1-.883.993l-.117.007h-2v2a1 1 0 0 1-.883.993l-.117.007h-9a1 1 0 0 1-1-1h0v-2h-2a1 1 0 0 1-.993-.883L.5 13.5v-4a4 4 0 0 1 3.8-3.995l.2-.005h9zm-1 6h-7v4h7v-4zm1-4h-9a2 2 0 0 0-1.995 1.851L2.5 9.5v3h1v-2a1 1 0 0 1 .883-.993L4.5 9.5h9a1 1 0 0 1 1 1h0v2h1v-3a2 2 0 0 0-1.851-1.995L13.5 7.5zm0-7a1 1 0 0 1 .993.883l.007.117v3a1 1 0 0 1-1.993.117L12.5 4.5v-2h-7v2a1 1 0 0 1-.883.993L4.5 5.5a1 1 0 0 1-.993-.883L3.5 4.5v-3a1 1 0 0 1 .883-.993L4.5.5h9z"
                                />
                                {/* <use xlinkHref="img/sprite.svg#icon-print" /> */}
                              </svg>
                            </button>
                            <button className="sorting__action">
                              <svg
                                className="icon icon-download-fat"
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="18"
                                viewBox="0 0 17 18"
                              >
                                <path
                                  fill="#11142d"
                                  d="M15.5 15.5a1 1 0 0 1 .117 1.993l-.117.007h-14a1 1 0 0 1-.117-1.993L1.5 15.5h14zm-7-15a1 1 0 0 1 .993.883L9.5 1.5v8.585l3.293-3.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094-5 5c-.028.028-.06.055-.1.08l.1-.08a1.01 1.01 0 0 1-.112.097l-.075.05-.037.02-.06.03-.052.022-.06.022-.046.014-.065.016-.052.01-.063.007-.053.003H8.5h-.032l-.054-.003.086.004a1.01 1.01 0 0 1-.149-.011l-.052-.01-.065-.015-.046-.014-.06-.02-.052-.023-.06-.03-.036-.02-.074-.05-.018-.013c-.036-.028-.066-.055-.094-.083l-5-5a1 1 0 0 1 1.32-1.497l.094.083L7.5 10.085V1.5a1 1 0 0 1 1-1z"
                                />
                                {/* <use xlinkHref="img/sprite.svg#icon-download-fat" /> */}
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sorting mobile-hide">
                    <div className="sorting__actions">
                      <button className="sorting__action">
                        <svg
                          className="icon icon-print"
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                        >
                          <path
                            fill="#11142d"
                            d="M13.5 5.5a4 4 0 0 1 3.995 3.8l.005.2v4a1 1 0 0 1-.883.993l-.117.007h-2v2a1 1 0 0 1-.883.993l-.117.007h-9a1 1 0 0 1-1-1h0v-2h-2a1 1 0 0 1-.993-.883L.5 13.5v-4a4 4 0 0 1 3.8-3.995l.2-.005h9zm-1 6h-7v4h7v-4zm1-4h-9a2 2 0 0 0-1.995 1.851L2.5 9.5v3h1v-2a1 1 0 0 1 .883-.993L4.5 9.5h9a1 1 0 0 1 1 1h0v2h1v-3a2 2 0 0 0-1.851-1.995L13.5 7.5zm0-7a1 1 0 0 1 .993.883l.007.117v3a1 1 0 0 1-1.993.117L12.5 4.5v-2h-7v2a1 1 0 0 1-.883.993L4.5 5.5a1 1 0 0 1-.993-.883L3.5 4.5v-3a1 1 0 0 1 .883-.993L4.5.5h9z"
                          />
                          {/* <use xlinkHref="img/sprite.svg#icon-print" /> */}
                        </svg>
                      </button>
                      <button className="sorting__action">
                        <svg
                          className="icon icon-download-fat"
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="18"
                          viewBox="0 0 17 18"
                        >
                          <path
                            fill="#11142d"
                            d="M15.5 15.5a1 1 0 0 1 .117 1.993l-.117.007h-14a1 1 0 0 1-.117-1.993L1.5 15.5h14zm-7-15a1 1 0 0 1 .993.883L9.5 1.5v8.585l3.293-3.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094-5 5c-.028.028-.06.055-.1.08l.1-.08a1.01 1.01 0 0 1-.112.097l-.075.05-.037.02-.06.03-.052.022-.06.022-.046.014-.065.016-.052.01-.063.007-.053.003H8.5h-.032l-.054-.003.086.004a1.01 1.01 0 0 1-.149-.011l-.052-.01-.065-.015-.046-.014-.06-.02-.052-.023-.06-.03-.036-.02-.074-.05-.018-.013c-.036-.028-.066-.055-.094-.083l-5-5a1 1 0 0 1 1.32-1.497l.094.083L7.5 10.085V1.5a1 1 0 0 1 1-1z"
                          />
                          {/* <use xlinkHref="img/sprite.svg#icon-download-fat" /> */}
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="products products_statement">
                    <div className="products__title h6 mobile-hide">
                      Statement
                    </div>
                    <div className="products__info caption mobile-hide">
                      Please note: Transactions are based Time in California,
                      USA.
                    </div>
                    <div className="products__table">
                      <div className="products__row products__row_head">
                        <div className="products__cell">
                          <label className="checkbox">
                            <input
                              className="checkbox__input"
                              type="checkbox"
                              onClick={() => checkboxAll()}
                            />
                            <span className="checkbox__in">
                              <span className="checkbox__tick" />
                            </span>
                          </label>
                        </div>
                        <div className="products__cell">Date</div>
                        <div className="products__cell">Order ID</div>
                        <div className="products__cell">Amount</div>
                        <div className="products__cell">Price</div>
                        <div className="products__cell text-right">Type</div>
                      </div>
                      <div className="products__row">
                        <div className="products__cell">
                          <label className="checkbox">
                            <input
                              className="checkbox__input"
                              type="checkbox"
                            />
                            <span className="checkbox__in">
                              <span className="checkbox__tick" />
                            </span>
                          </label>
                        </div>
                        <div className="products__cell color-gray">
                          17 Aug 2020
                        </div>
                        <div className="products__cell">39511350</div>
                        <div className="products__cell">$68.00</div>
                        <div className="products__cell color-red">-68.00</div>
                        <div className="products__cell text-right">
                          <div className="products__status caption bg-green">
                            Sale
                          </div>
                        </div>
                      </div>
                      <div className="products__body">
                        <div className="products__bg bg-green" />
                        <div className="products__line">
                          <div className="products__col color-gray">
                            17 Aug 2020
                          </div>
                          <div className="products__col">$68.00</div>
                          <div className="products__col color-red">-68.00</div>
                        </div>
                      </div>
                      <div className="products__row">
                        <div className="products__cell">
                          <label className="checkbox">
                            <input
                              className="checkbox__input"
                              type="checkbox"
                            />
                            <span className="checkbox__in">
                              <span className="checkbox__tick" />
                            </span>
                          </label>
                        </div>
                        <div className="products__cell color-gray">
                          17 Aug 2020
                        </div>
                        <div className="products__cell">39511350</div>
                        <div className="products__cell">$68.00</div>
                        <div className="products__cell color-red">-68.00</div>
                        <div className="products__cell text-right">
                          <div className="products__status caption bg-green">
                            Sale
                          </div>
                        </div>
                      </div>
                      <div className="products__body">
                        <div className="products__bg bg-green" />
                        <div className="products__line">
                          <div className="products__col color-gray">
                            17 Aug 2020
                          </div>
                          <div className="products__col">$68.00</div>
                          <div className="products__col color-red">-68.00</div>
                        </div>
                      </div>
                      <div className="products__row">
                        <div className="products__cell">
                          <label className="checkbox">
                            <input
                              className="checkbox__input"
                              type="checkbox"
                            />
                            <span className="checkbox__in">
                              <span className="checkbox__tick" />
                            </span>
                          </label>
                        </div>
                        <div className="products__cell color-gray">
                          17 Aug 2020
                        </div>
                        <div className="products__cell">39511350</div>
                        <div className="products__cell">$68.00</div>
                        <div className="products__cell color-red">-68.00</div>
                        <div className="products__cell text-right">
                          <div className="products__status caption bg-green">
                            Sale
                          </div>
                        </div>
                      </div>
                      <div className="products__body">
                        <div className="products__bg bg-green" />
                        <div className="products__line">
                          <div className="products__col color-gray">
                            17 Aug 2020
                          </div>
                          <div className="products__col">$68.00</div>
                          <div className="products__col color-red">-68.00</div>
                        </div>
                      </div>
                      <div className="products__row">
                        <div className="products__cell">
                          <label className="checkbox">
                            <input
                              className="checkbox__input"
                              type="checkbox"
                            />
                            <span className="checkbox__in">
                              <span className="checkbox__tick" />
                            </span>
                          </label>
                        </div>
                        <div className="products__cell color-gray">
                          17 Aug 2020
                        </div>
                        <div className="products__cell">39511350</div>
                        <div className="products__cell">$68.00</div>
                        <div className="products__cell color-red">-68.00</div>
                        <div className="products__cell text-right">
                          <div className="products__status caption bg-green">
                            Sale
                          </div>
                        </div>
                      </div>
                      <div className="products__body">
                        <div className="products__bg bg-green" />
                        <div className="products__line">
                          <div className="products__col color-gray">
                            17 Aug 2020
                          </div>
                          <div className="products__col">$68.00</div>
                          <div className="products__col color-red">-68.00</div>
                        </div>
                      </div>
                      <div className="products__row">
                        <div className="products__cell">
                          <label className="checkbox">
                            <input
                              className="checkbox__input"
                              type="checkbox"
                            />
                            <span className="checkbox__in">
                              <span className="checkbox__tick" />
                            </span>
                          </label>
                        </div>
                        <div className="products__cell color-gray">
                          17 Aug 2020
                        </div>
                        <div className="products__cell">39511350</div>
                        <div className="products__cell">$68.00</div>
                        <div className="products__cell color-red">-68.00</div>
                        <div className="products__cell text-right">
                          <div className="products__status caption bg-green">
                            Sale
                          </div>
                        </div>
                      </div>
                      <div className="products__body">
                        <div className="products__bg bg-green" />
                        <div className="products__line">
                          <div className="products__col color-gray">
                            17 Aug 2020
                          </div>
                          <div className="products__col">$68.00</div>
                          <div className="products__col color-red">-68.00</div>
                        </div>
                      </div>
                      <div className="products__row">
                        <div className="products__cell">
                          <label className="checkbox">
                            <input
                              className="checkbox__input"
                              type="checkbox"
                            />
                            <span className="checkbox__in">
                              <span className="checkbox__tick" />
                            </span>
                          </label>
                        </div>
                        <div className="products__cell color-gray">
                          17 Aug 2020
                        </div>
                        <div className="products__cell">39511350</div>
                        <div className="products__cell">$68.00</div>
                        <div className="products__cell color-red">-68.00</div>
                        <div className="products__cell text-right">
                          <div className="products__status caption bg-green">
                            Sale
                          </div>
                        </div>
                      </div>
                      <div className="products__body">
                        <div className="products__bg bg-green" />
                        <div className="products__line">
                          <div className="products__col color-gray">
                            17 Aug 2020
                          </div>
                          <div className="products__col">$68.00</div>
                          <div className="products__col color-red">-68.00</div>
                        </div>
                      </div>
                      <div className="products__row">
                        <div className="products__cell">
                          <label className="checkbox">
                            <input
                              className="checkbox__input"
                              type="checkbox"
                            />
                            <span className="checkbox__in">
                              <span className="checkbox__tick" />
                            </span>
                          </label>
                        </div>
                        <div className="products__cell color-gray">
                          17 Aug 2020
                        </div>
                        <div className="products__cell">39511350</div>
                        <div className="products__cell">$68.00</div>
                        <div className="products__cell color-red">-68.00</div>
                        <div className="products__cell text-right">
                          <div className="products__status caption bg-green">
                            Sale
                          </div>
                        </div>
                      </div>
                      <div className="products__body">
                        <div className="products__bg bg-green" />
                        <div className="products__line">
                          <div className="products__col color-gray">
                            17 Aug 2020
                          </div>
                          <div className="products__col">$68.00</div>
                          <div className="products__col color-red">-68.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="products__more">
                      <button className="products__btn btn btn btn-dark">
                        Load More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page__col">
                <div className="page__group">
                  <div className="widget widget_stat widget_shadow widget_after">
                    <div className="widget__chart widget__chart_items">
                      <Chart
                        options={circleChart}
                        series={circleChartData}
                        width={"100%"}
                        height={"100%"}
                        type="donut"
                      />
                    </div>
                    <div className="widget__title">Earnings By Item</div>
                    <div className="widget__counter title title_md">479.4</div>
                    <div className="widget__text widget__text_mb40">
                      Update your payout method in Settings
                    </div>
                    <div className="widget__legend">
                      <div className="widget__color">
                        <div
                          className="widget__bg"
                          style={{ background: "#6C5DD3" }}
                        />
                        <div className="widget__text">Templates</div>
                      </div>
                      <div className="widget__color">
                        <div
                          className="widget__bg"
                          style={{ background: "#FFA2C0" }}
                        />
                        <div className="widget__text">Themes</div>
                      </div>
                    </div>
                  </div>
                  <div className="widget widget_shadow widget_after">
                    <div className="widget__title mr-auto">Your Top Items</div>
                    <div className="quality quality_big">
                      <div className="quality__list">
                        <a className="quality__item" href="#">
                          <div className="quality__preview bg-pink-opacity">
                            <img
                              className="quality__pic"
                              src="./assets/img/figure-1.png"
                              alt=""
                            />
                          </div>
                          <div className="quality__details">
                            <div className="quality__category title">
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
                            <div className="quality__info caption-sm">
                              UI Design
                            </div>
                            <div className="quality__money caption">$64</div>
                          </div>
                        </a>
                        <a className="quality__item" href="#">
                          <div className="quality__preview bg-pink-opacity">
                            <img
                              className="quality__pic"
                              src="./assets/img/figure-2.png"
                              alt=""
                            />
                          </div>
                          <div className="quality__details">
                            <div className="quality__category title">
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
                            <div className="quality__info caption-sm">
                              UI Design
                            </div>
                            <div className="quality__money caption">$64</div>
                          </div>
                        </a>
                        <a className="quality__item" href="#">
                          <div className="quality__preview bg-blue-light">
                            <img
                              className="quality__pic"
                              src="./assets/img/figure-6.png"
                              alt=""
                            />
                          </div>
                          <div className="quality__details">
                            <div className="quality__category title">
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
                            <div className="quality__info caption-sm">
                              UI Design
                            </div>
                            <div className="quality__money caption">$64</div>
                          </div>
                        </a>
                        <a className="quality__item" href="#">
                          <div className="quality__preview bg-yellow">
                            <img
                              className="quality__pic"
                              src="./assets/img/figure-4.png"
                              alt=""
                              // "./assets/img/figure-6.png"
                            />
                          </div>
                          <div className="quality__details">
                            <div className="quality__category title">
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
                            <div className="quality__info caption-sm">
                              UI Design
                            </div>
                            <div className="quality__money caption">$64</div>
                          </div>
                        </a>
                      </div>
                      <button className="quality__btn btn btn btn-dark btn_wide">
                        Show all report
                      </button>
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

export default Statement;
