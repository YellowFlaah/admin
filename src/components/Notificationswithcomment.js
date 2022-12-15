import React from 'react'
import Leftsidebar from './Leftsidebar'

function Notificationswithcomment() {
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
    document.querySelector("body").classList.toggle("no-scroll");
    document.querySelector("html").classList.toggle("no-scroll");
  };
  const searchToggle = () => {
    document.querySelector(".notifications").classList.remove("active");
    document.querySelector(".search").classList.toggle("active");
  };

  return (
    <div>
      <Leftsidebar />
      <div className="page__wrapper">
    <div className="page__center">
      <div className="page__row page__row_responsive page__row_head page__row_border">
        <div className="page__col">
          <div className="page__hello h5">Unity Dashboard v.1</div>
          <div className="page__welcome h2">Notifications</div>
        </div>
        <div className="page__col">
          <div className="header">
            <button className="header__burger"onClick={() => openBurgerHeader()} />
            <div className="search">
              <div className="search__field">
                <input
                  className="search__input"
                  type="text"
                  placeholder="Search"
                />
                <button className="search__toggle"onClick={() => searchToggle()}>
                <svg className="icon icon-search"xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <path fill="#11142D" fill-rule="evenodd" d="M9.61154,0 C4.30323,0 0,4.20819 0,9.39926 C0,14.5903 4.30323,18.7985 9.61154,18.7985 C11.8819,18.7985 13.9684,18.0287 15.613,16.7415 L18.7371,19.7886 L18.8202,19.8586 C19.1102,20.0685 19.5214,20.0446 19.7839,19.7873 C20.0726,19.5043 20.072,19.0459 19.7825,18.7636 L16.6952,15.7523 C18.2649,14.0794 19.2231,11.8487 19.2231,9.39926 C19.2231,4.20819 14.9198,0 9.61154,0 Z M9.61154,1.44774 C14.1022,1.44774 17.7426,5.00776 17.7426,9.39926 C17.7426,13.7908 14.1022,17.3508 9.61154,17.3508 C5.12086,17.3508 1.48044,13.7908 1.48044,9.39926 C1.48044,5.00776 5.12086,1.44774 9.61154,1.44774 Z"/>
              {/* <use xlinkHref="img/sprite.svg#icon-search" /> */}
            </svg>
            <svg className="icon icon-close"xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
  <path fill="#1B1D21" fill-rule="evenodd" d="M12.4801,2.08058 C12.773,1.78769 12.773,1.31281 12.4801,1.01992 C12.1872,0.72703 11.7123,0.72703 11.4194,1.01992 L6.8232,5.6161 L2.22705,1.01992 C1.93415,0.72703 1.45928,0.72703 1.16639,1.01992 C0.8735,1.31281 0.87349,1.78769 1.16639,2.08058 L5.7626,6.6768 L1.16639,11.273 C0.8735,11.5659 0.87349,12.0407 1.16639,12.3336 C1.45928,12.6265 1.93416,12.6265 2.22705,12.3336 L6.8232,7.7374 L11.4194,12.3336 C11.7123,12.6265 12.1872,12.6265 12.4801,12.3336 C12.773,12.0407 12.773,11.5659 12.4801,11.273 L7.8839,6.6768 L12.4801,2.08058 Z"/>
                  {/* <use xlinkHref="img/sprite.svg#icon-close" /> */}
                </svg>
                </button>
              </div>
              <div className="search__result">
                <div className="search__info caption-sm">Recent Searches</div>
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
                      <svg className="icon icon-arrow-right"xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10">
  <path fill="#11142D" d="M-0.707106781,-0.707106781 C-0.34662282,-1.06759074 0.220608236,-1.09532028 0.612899443,-0.790295388 L0.707106781,-0.707106781 L4.70710678,3.29289322 C5.06759074,3.65337718 5.09532028,4.22060824 4.79029539,4.61289944 L4.70710678,4.70710678 L0.707106781,8.70710678 C0.316582489,9.09763107 -0.316582489,9.09763107 -0.707106781,8.70710678 C-1.06759074,8.34662282 -1.09532028,7.77939176 -0.790295388,7.38710056 L-0.707106781,7.29289322 L2.585,4 L-0.707106781,0.707106781 C-1.06759074,0.34662282 -1.09532028,-0.220608236 -0.790295388,-0.612899443 L-0.707106781,-0.707106781 Z" transform="translate(1 1)"/>
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
                      <svg className="icon icon-arrow-right"xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10">
  <path fill="#11142D" d="M-0.707106781,-0.707106781 C-0.34662282,-1.06759074 0.220608236,-1.09532028 0.612899443,-0.790295388 L0.707106781,-0.707106781 L4.70710678,3.29289322 C5.06759074,3.65337718 5.09532028,4.22060824 4.79029539,4.61289944 L4.70710678,4.70710678 L0.707106781,8.70710678 C0.316582489,9.09763107 -0.316582489,9.09763107 -0.707106781,8.70710678 C-1.06759074,8.34662282 -1.09532028,7.77939176 -0.790295388,7.38710056 L-0.707106781,7.29289322 L2.585,4 L-0.707106781,0.707106781 C-1.06759074,0.34662282 -1.09532028,-0.220608236 -0.790295388,-0.612899443 L-0.707106781,-0.707106781 Z" transform="translate(1 1)"/>
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
                      <svg className="icon icon-arrow-right"xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10">
  <path fill="#11142D" d="M-0.707106781,-0.707106781 C-0.34662282,-1.06759074 0.220608236,-1.09532028 0.612899443,-0.790295388 L0.707106781,-0.707106781 L4.70710678,3.29289322 C5.06759074,3.65337718 5.09532028,4.22060824 4.79029539,4.61289944 L4.70710678,4.70710678 L0.707106781,8.70710678 C0.316582489,9.09763107 -0.316582489,9.09763107 -0.707106781,8.70710678 C-1.06759074,8.34662282 -1.09532028,7.77939176 -0.790295388,7.38710056 L-0.707106781,7.29289322 L2.585,4 L-0.707106781,0.707106781 C-1.06759074,0.34662282 -1.09532028,-0.220608236 -0.790295388,-0.612899443 L-0.707106781,-0.707106781 Z" transform="translate(1 1)"/>
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
            <button className="header__search"onClick={() => openSearch()}>
            <svg className="icon icon-search"xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <path fill="#11142D" fill-rule="evenodd" d="M9.61154,0 C4.30323,0 0,4.20819 0,9.39926 C0,14.5903 4.30323,18.7985 9.61154,18.7985 C11.8819,18.7985 13.9684,18.0287 15.613,16.7415 L18.7371,19.7886 L18.8202,19.8586 C19.1102,20.0685 19.5214,20.0446 19.7839,19.7873 C20.0726,19.5043 20.072,19.0459 19.7825,18.7636 L16.6952,15.7523 C18.2649,14.0794 19.2231,11.8487 19.2231,9.39926 C19.2231,4.20819 14.9198,0 9.61154,0 Z M9.61154,1.44774 C14.1022,1.44774 17.7426,5.00776 17.7426,9.39926 C17.7426,13.7908 14.1022,17.3508 9.61154,17.3508 C5.12086,17.3508 1.48044,13.7908 1.48044,9.39926 C1.48044,5.00776 5.12086,1.44774 9.61154,1.44774 Z"/>
                  {/* <use xlinkHref="img/sprite.svg#icon-search" /> */}
                </svg>
            </button>
            <div className="notifications">
              <button className="notifications__open"onClick={() => openNotifications()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24">
                        <path fill="#11142D" d="M12.855,20.9 C12.4639,22.1478 11.3077,22.997 10,22.997 C8.6924,22.997 7.53619,22.1478 7.14502,20.9 C8.039,20.966 8.989,21 10,21 C11.011,21 11.961,20.966 12.855,20.9 Z M10,-1 C14.4182815,-1 18,2.58172202 18,7 L18,7 L18,10 C18,11.1184646 18.3694847,11.8656448 19.2498379,12.8633784 L19.2498379,12.8633784 L19.9126361,13.6024335 L20.1063996,13.8323989 C20.6922295,14.552011 21,15.2050716 21,16 C21,17.8400866 18.7827241,19.0712173 15.1958818,19.6392323 L15.1958818,19.6392323 L14.6182804,19.7234003 C14.4220352,19.7496142 14.2221198,19.7739832 14.0186577,19.7964996 L14.0186577,19.7964996 L13.3977552,19.8584829 C13.0821076,19.8866876 12.7587582,19.910706 12.428124,19.9305115 L12.428124,19.9305115 L11.7572663,19.9644973 C11.4171046,19.9786737 11.0699362,19.9886194 10.7161783,19.9943077 L10.7161783,19.9943077 L10,20 L9.28382174,19.9943077 C8.93006383,19.9886194 8.58289545,19.9786737 8.2427337,19.9644973 L8.2427337,19.9644973 L7.571876,19.9305115 C7.24124183,19.910706 6.91789239,19.8866876 6.60224478,19.8584829 L6.60224478,19.8584829 L5.98134229,19.7964996 C5.77788023,19.7739832 5.57796479,19.7496142 5.38171958,19.7234003 L5.38171958,19.7234003 L4.80411821,19.6392323 C1.21727587,19.0712173 -1,17.8400866 -1,16 C-1,15.2050716 -0.692229474,14.552011 -0.10639964,13.8323989 C-0.0758249191,13.7948421 -0.0448938239,13.7575085 -0.0128515129,13.7194853 L-0.0128515129,13.7194853 L0.198775677,13.4757657 L0.618445007,13.0110469 L0.91946309,12.6669881 C1.67813778,11.7643706 2,11.0439003 2,10 L2,10 L2,7 C2,2.58172525 5.58172525,-1 10,-1 Z M10,1 C6.68629475,1 4,3.68629475 4,7 L4,7 L4,10 C4,11.6898687 3.42260969,12.8574802 2.24983786,14.1866216 L2.24983786,14.1866216 L1.4892624,15.0417013 L1.34441877,15.2222364 C1.0964442,15.54873 1,15.7780382 1,16 C1,16.3056227 1.43853666,16.6406043 2.23673585,16.947546 L2.23673585,16.947546 L2.55276568,17.0612227 L2.90158957,17.171598 C2.96240837,17.1896814 3.02455508,17.2075992 3.08801044,17.2253375 L3.08801044,17.2253375 L3.48429234,17.3294995 C3.55290527,17.3464633 3.62278834,17.3632194 3.69392229,17.3797539 L3.69392229,17.3797539 L4.13558251,17.4761893 C4.21164296,17.4917812 4.28891577,17.5071234 4.3673817,17.522202 L4.3673817,17.522202 L4.85234055,17.6093972 C5.01866325,17.6373328 5.18960434,17.6641016 5.36500978,17.6895914 L5.36500978,17.6895914 L5.90446508,17.7621122 C5.99655512,17.7735221 6.08972273,17.7845843 6.18394865,17.7952847 L6.18394865,17.7952847 L6.76184998,17.855034 L7.3642266,17.905428 C7.46661096,17.9130101 7.56997662,17.9201743 7.67430431,17.9269067 L7.67430431,17.9269067 L8.31166081,17.9620068 L8.97118185,17.9860702 L9.65194312,17.9984242 L10,18 L10,18 L10.3480569,17.9984242 L11.0288181,17.9860702 L11.6883392,17.9620068 C11.796438,17.9570578 11.9036133,17.951649 12.0098458,17.9457943 L12.0098458,17.9457943 L12.6357734,17.905428 L13.23815,17.855034 C13.3365322,17.8458367 13.4338946,17.8362496 13.5302179,17.8262867 L13.5302179,17.8262867 L14.0955349,17.7621122 L14.6349902,17.6895914 C14.8103957,17.6641016 14.9813367,17.6373328 15.1476594,17.6093972 L15.1476594,17.6093972 L15.6326183,17.522202 C15.7110842,17.5071234 15.788357,17.4917812 15.8644175,17.4761893 L15.8644175,17.4761893 L16.3060777,17.3797539 C16.3772117,17.3632194 16.4470947,17.3464633 16.5157077,17.3294995 L16.5157077,17.3294995 L16.9119896,17.2253375 C16.9754449,17.2075992 17.0375916,17.1896814 17.0984104,17.171598 L17.0984104,17.171598 L17.4472343,17.0612227 L17.7632641,16.947546 C18.5614633,16.6406043 19,16.3056227 19,16 C19,15.7502929 18.8779378,15.4912882 18.5553802,15.0950702 L18.5553802,15.0950702 L18.3174653,14.8199854 L17.7501621,14.1866216 C16.5773903,12.8574802 16,11.6898687 16,10 L16,10 L16,7 C16,3.68629108 13.3137116,1 10,1 Z" transform="translate(1 1)" />
                      </svg>
                <span className="notifications__counter">2</span>
              </button>
              <div className="notifications__wrap">
                <div className="notifications__info h6">Recent Notification</div>
                <div className="notifications__list">
                  <a className="notifications__item" href="/notifications">
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
                        <div className="notifications__time caption">8h</div>
                      </div>
                      <div className="notifications__text caption-sm">
                        Commented on{" "}
                        <span className="notifications__project">
                          Collab Design
                        </span>
                      </div>
                    </div>
                  </a>
                  <a className="notifications__item" href="/notifications">
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
                        <div className="notifications__time caption">12h</div>
                      </div>
                      <div className="notifications__text caption-sm">
                        Just pushaded{" "}
                        <span className="notifications__project">
                          Sapiens Illustration
                        </span>
                      </div>
                    </div>
                  </a>
                  <a className="notifications__item" href="/notifications">
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
                        <div className="notifications__time caption">14h</div>
                      </div>
                      <div className="notifications__text caption-sm">
                        Sent you a message 📪{" "}
                      </div>
                    </div>
                  </a>
                  <a className="notifications__item" href="/notifications">
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
                        <div className="notifications__time caption">21h</div>
                      </div>
                      <div className="notifications__text caption-sm">
                        Liked{" "}
                        <span className="notifications__project">
                          Folio Agency
                        </span>
                      </div>
                    </div>
                  </a>
                  <a className="notifications__item" href="/notifications">
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
                        <div className="notifications__time caption">8h</div>
                      </div>
                      <div className="notifications__text caption-sm">
                        Commented on{" "}
                        <span className="notifications__project">
                          Collab Design
                        </span>
                      </div>
                    </div>
                  </a>
                  <a className="notifications__item" href="/notifications">
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
                        <div className="notifications__time caption">12h</div>
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
              <img className="header__pic" src="./assets/img/ava.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="page__row page__row_responsive page__row_border">
        <div className="page__col">
          <div className="notification">
            <div className="notification__tags">
              <a className="notification__tag active" href="#">
                Clients
              </a>
              <a className="notification__tag" href="#">
                Products
              </a>
              <a className="notification__tag" href="#">
                Administrator
              </a>
              <a className="notification__tag" href="#">
                Sales
              </a>
              <a className="notification__tag" href="#">
                Withdrawals
              </a>
            </div>
            <div className="notification__container">
              <div className="notification__title h6">Recent Notification</div>
              <div className="notification__list">
                <div className="notification__item">
                  <div className="notification__ava">
                    <img
                      className="notification__pic"
                      src="./assets/img/ava-1.png"
                      alt=""
                    />
                    <div className="notification__status bg-blue">
                      <img
                        className="notification__pic"
                        src="./assets/img/chat.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="notification__details">
                    <div className="notification__author title">Glenn Greer</div>
                    <div className="notification__line caption">
                      <div className="notification__category">Commented on</div>
                      <div className="notification__info">Collab.</div>
                      <div className="notification__time">12h</div>
                    </div>
                    <div className="inbox__text">
                      "Love this so much! What tools do you use to create your 3d
                      illustrations?"
                    </div>
                    <div className="actions">
                    <button className="actions__btn">
                    <svg className="icon icon-comment"width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00009 0C2.70009 0 9.15527e-05 2.325 9.15527e-05 5.25C9.15527e-05 8.175 2.70009 10.5 6.00009 10.5C6.30009 10.5 6.60009 10.5 6.82509 10.425L10.5001 12V8.7C11.4001 7.8 12.0001 6.6 12.0001 5.25C12.0001 2.325 9.30009 0 6.00009 0Z" fill="#1B1D21"/>
                        {/* <use xlinkHref="img/sprite.svg#icon-comment" /> */}
                      </svg>
                    </button>
                    <button className="actions__btn">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 4.5H6V1.5C6 0.6 5.4 0 4.5 0L2.25 5.25H0.75C0.3 5.25 0 5.55 0 6V11.25C0 11.7 0.3 12 0.75 12H9C10.05 12 11.025 11.25 11.175 10.2L11.925 6.3C12.15 5.4 11.475 4.5 10.5 4.5Z" fill="#1B1D21"/>
</svg>
                    </button>
                    <button className="actions__btn">
                    <svg className="icon icon-star"width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3581 4.07828L8.12109 3.60803L6.67284 0.674776C6.41934 0.162526 5.58084 0.162526 5.32734 0.674776L3.87984 3.60803L0.642088 4.07828C0.0293376 4.16753 -0.218912 4.92353 0.226588 5.35853L2.56959 7.64153L2.01684 10.8658C1.91259 11.4763 2.55459 11.945 3.10509 11.6563L6.00009 10.1345L8.89584 11.657C9.44184 11.9428 10.0891 11.4815 9.98409 10.8665L9.43134 7.64228L11.7743 5.35928C12.2191 4.92353 11.9708 4.16753 11.3581 4.07828Z" fill="#1B1D21"/>
                        {/* <use xlinkHref="img/sprite.svg#icon-star" /> */}
                      </svg>
                    </button>
                    <button className="actions__btn">
                    <svg className="icon icon-more" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6.00009" cy="6" r="1.5" fill="#1B1D21"/>
<circle cx="1.50009" cy="6" r="1.5" fill="#1B1D21"/>
<circle cx="10.5001" cy="6" r="1.5" fill="#1B1D21"/>
                        {/* <use xlinkHref="img/sprite.svg#icon-more" /> */}
                      </svg>
                    </button>
                    </div>
                  </div>
                  <div className="notification__preview bg-purple-light">
                    <img
                      className="notification__pic"
                      src="./assets/img/figure-1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="notification__item">
                  <div className="notification__ava">
                    <img
                      className="notification__pic"
                      src="./assets/img/ava-1.png"
                      alt=""
                    />
                    <div className="notification__status bg-blue">
                      <img
                        className="notification__pic"
                        src="./assets/img/chat.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="notification__details">
                    <div className="notification__author title">Glenn Greer</div>
                    <div className="notification__line caption">
                      <div className="notification__category">Commented on</div>
                      <div className="notification__info">Collab.</div>
                      <div className="notification__time">12h</div>
                    </div>
                    <div className="inbox__text">
                      "Love this so much! What tools do you use to create your 3d
                      illustrations?"
                    </div>
                    <div className="actions">
                    <button className="actions__btn">
                    <svg className="icon icon-comment"width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00009 0C2.70009 0 9.15527e-05 2.325 9.15527e-05 5.25C9.15527e-05 8.175 2.70009 10.5 6.00009 10.5C6.30009 10.5 6.60009 10.5 6.82509 10.425L10.5001 12V8.7C11.4001 7.8 12.0001 6.6 12.0001 5.25C12.0001 2.325 9.30009 0 6.00009 0Z" fill="#1B1D21"/>
                        {/* <use xlinkHref="img/sprite.svg#icon-comment" /> */}
                      </svg>
                    </button>
                    <button className="actions__btn">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 4.5H6V1.5C6 0.6 5.4 0 4.5 0L2.25 5.25H0.75C0.3 5.25 0 5.55 0 6V11.25C0 11.7 0.3 12 0.75 12H9C10.05 12 11.025 11.25 11.175 10.2L11.925 6.3C12.15 5.4 11.475 4.5 10.5 4.5Z" fill="#1B1D21"/>
</svg>
                    </button>
                    <button className="actions__btn">
                    <svg className="icon icon-star"width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3581 4.07828L8.12109 3.60803L6.67284 0.674776C6.41934 0.162526 5.58084 0.162526 5.32734 0.674776L3.87984 3.60803L0.642088 4.07828C0.0293376 4.16753 -0.218912 4.92353 0.226588 5.35853L2.56959 7.64153L2.01684 10.8658C1.91259 11.4763 2.55459 11.945 3.10509 11.6563L6.00009 10.1345L8.89584 11.657C9.44184 11.9428 10.0891 11.4815 9.98409 10.8665L9.43134 7.64228L11.7743 5.35928C12.2191 4.92353 11.9708 4.16753 11.3581 4.07828Z" fill="#1B1D21"/>
                        {/* <use xlinkHref="img/sprite.svg#icon-star" /> */}
                      </svg>
                    </button>
                    <button className="actions__btn">
                    <svg className="icon icon-more" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6.00009" cy="6" r="1.5" fill="#1B1D21"/>
<circle cx="1.50009" cy="6" r="1.5" fill="#1B1D21"/>
<circle cx="10.5001" cy="6" r="1.5" fill="#1B1D21"/>
                        {/* <use xlinkHref="img/sprite.svg#icon-more" /> */}
                      </svg>
                    </button>
                    </div>
                  </div>
                  <div className="notification__preview bg-purple-light">
                    <img
                      className="notification__pic"
                      src="./assets/img/figure-1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="notification__item">
                  <div className="notification__ava">
                    <img
                      className="notification__pic"
                      src="./assets/img/ava-2.png"
                      alt=""
                    />
                    <div className="notification__status bg-green">
                      <img
                        className="notification__pic"
                        src="./assets/img/bag.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="notification__details">
                    <div className="notification__author title">Glenn Greer</div>
                    <div className="notification__line caption">
                      <div className="notification__category">Commented on</div>
                      <div className="notification__info">
                        Unity Dashboard kit
                      </div>
                      <div className="notification__time">8h</div>
                    </div>
                    <div className="actions">
                    <button className="actions__btn">
                    <svg className="icon icon-comment"width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00009 0C2.70009 0 9.15527e-05 2.325 9.15527e-05 5.25C9.15527e-05 8.175 2.70009 10.5 6.00009 10.5C6.30009 10.5 6.60009 10.5 6.82509 10.425L10.5001 12V8.7C11.4001 7.8 12.0001 6.6 12.0001 5.25C12.0001 2.325 9.30009 0 6.00009 0Z" fill="#1B1D21"/>
                        {/* <use xlinkHref="img/sprite.svg#icon-comment" /> */}
                      </svg>
                    </button>
                    <button className="actions__btn">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 4.5H6V1.5C6 0.6 5.4 0 4.5 0L2.25 5.25H0.75C0.3 5.25 0 5.55 0 6V11.25C0 11.7 0.3 12 0.75 12H9C10.05 12 11.025 11.25 11.175 10.2L11.925 6.3C12.15 5.4 11.475 4.5 10.5 4.5Z" fill="#1B1D21"/>
</svg>
                    </button>
                    <button className="actions__btn">
                    <svg className="icon icon-star"width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3581 4.07828L8.12109 3.60803L6.67284 0.674776C6.41934 0.162526 5.58084 0.162526 5.32734 0.674776L3.87984 3.60803L0.642088 4.07828C0.0293376 4.16753 -0.218912 4.92353 0.226588 5.35853L2.56959 7.64153L2.01684 10.8658C1.91259 11.4763 2.55459 11.945 3.10509 11.6563L6.00009 10.1345L8.89584 11.657C9.44184 11.9428 10.0891 11.4815 9.98409 10.8665L9.43134 7.64228L11.7743 5.35928C12.2191 4.92353 11.9708 4.16753 11.3581 4.07828Z" fill="#1B1D21"/>
                        {/* <use xlinkHref="img/sprite.svg#icon-star" /> */}
                      </svg>
                    </button>
                    <button className="actions__btn">
                    <svg className="icon icon-more" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6.00009" cy="6" r="1.5" fill="#1B1D21"/>
<circle cx="1.50009" cy="6" r="1.5" fill="#1B1D21"/>
<circle cx="10.5001" cy="6" r="1.5" fill="#1B1D21"/>
                        {/* <use xlinkHref="img/sprite.svg#icon-more" /> */}
                      </svg>
                    </button>
                    </div>
                  </div>
                  <div className="notification__preview bg-yellow">
                    <img
                      className="notification__pic"
                      src="./assets/img/figure-1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="notification__item">
                  <div className="notification__ava">
                    <img
                      className="notification__pic"
                      src="./assets/img/ava-1.png"
                      alt=""
                    />
                    <div className="notification__status bg-red">
                      <img
                        className="notification__pic"
                        src="./assets/img/heart.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="notification__details">
                    <div className="notification__author title">
                      Abbie Rodriquez
                    </div>
                    <div className="notification__line caption">
                      <div className="notification__category">liked</div>
                      <div className="notification__info">Collab.</div>
                      <div className="notification__time">18h</div>
                    </div>
                    <div className="actions">
                    <button className="actions__btn">
                    <svg className="icon icon-comment"width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00009 0C2.70009 0 9.15527e-05 2.325 9.15527e-05 5.25C9.15527e-05 8.175 2.70009 10.5 6.00009 10.5C6.30009 10.5 6.60009 10.5 6.82509 10.425L10.5001 12V8.7C11.4001 7.8 12.0001 6.6 12.0001 5.25C12.0001 2.325 9.30009 0 6.00009 0Z" fill="#1B1D21"/>
                        {/* <use xlinkHref="img/sprite.svg#icon-comment" /> */}
                      </svg>
                    </button>
                    <button className="actions__btn">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 4.5H6V1.5C6 0.6 5.4 0 4.5 0L2.25 5.25H0.75C0.3 5.25 0 5.55 0 6V11.25C0 11.7 0.3 12 0.75 12H9C10.05 12 11.025 11.25 11.175 10.2L11.925 6.3C12.15 5.4 11.475 4.5 10.5 4.5Z" fill="#1B1D21"/>
</svg>
                    </button>
                    <button className="actions__btn">
                    <svg className="icon icon-star"width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3581 4.07828L8.12109 3.60803L6.67284 0.674776C6.41934 0.162526 5.58084 0.162526 5.32734 0.674776L3.87984 3.60803L0.642088 4.07828C0.0293376 4.16753 -0.218912 4.92353 0.226588 5.35853L2.56959 7.64153L2.01684 10.8658C1.91259 11.4763 2.55459 11.945 3.10509 11.6563L6.00009 10.1345L8.89584 11.657C9.44184 11.9428 10.0891 11.4815 9.98409 10.8665L9.43134 7.64228L11.7743 5.35928C12.2191 4.92353 11.9708 4.16753 11.3581 4.07828Z" fill="#1B1D21"/>
                        {/* <use xlinkHref="img/sprite.svg#icon-star" /> */}
                      </svg>
                    </button>
                    <button className="actions__btn">
                    <svg className="icon icon-more" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6.00009" cy="6" r="1.5" fill="#1B1D21"/>
<circle cx="1.50009" cy="6" r="1.5" fill="#1B1D21"/>
<circle cx="10.5001" cy="6" r="1.5" fill="#1B1D21"/>
                        {/* <use xlinkHref="img/sprite.svg#icon-more" /> */}
                      </svg>
                    </button>
                    </div>
                  </div>
                  <div className="notification__preview bg-blue-light">
                    <img
                      className="notification__pic"
                      src="./assets/img/figure-1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="notification__item">
                  <div className="notification__ava">
                    <img
                      className="notification__pic"
                      src="./assets/img/ava-1.png"
                      alt=""
                    />
                    <div className="notification__status bg-blue">
                      <img
                        className="notification__pic"
                        src="./assets/img/chat.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="notification__details">
                    <div className="notification__author title">Glenn Greer</div>
                    <div className="notification__line caption">
                      <div className="notification__category">Mention you on</div>
                      <div className="notification__info">Collab.</div>
                      <div className="notification__time">18h</div>
                    </div>
                    <div className="notification__text">
                      Put the comment lines here
                    </div>
                    <div className="actions">
                    <button className="actions__btn">
                    <svg className="icon icon-comment"width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00009 0C2.70009 0 9.15527e-05 2.325 9.15527e-05 5.25C9.15527e-05 8.175 2.70009 10.5 6.00009 10.5C6.30009 10.5 6.60009 10.5 6.82509 10.425L10.5001 12V8.7C11.4001 7.8 12.0001 6.6 12.0001 5.25C12.0001 2.325 9.30009 0 6.00009 0Z" fill="#1B1D21"/>
                        {/* <use xlinkHref="img/sprite.svg#icon-comment" /> */}
                      </svg>
                    </button>
                    <button className="actions__btn">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 4.5H6V1.5C6 0.6 5.4 0 4.5 0L2.25 5.25H0.75C0.3 5.25 0 5.55 0 6V11.25C0 11.7 0.3 12 0.75 12H9C10.05 12 11.025 11.25 11.175 10.2L11.925 6.3C12.15 5.4 11.475 4.5 10.5 4.5Z" fill="#1B1D21"/>
</svg>
                    </button>
                    <button className="actions__btn">
                    <svg className="icon icon-star"width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3581 4.07828L8.12109 3.60803L6.67284 0.674776C6.41934 0.162526 5.58084 0.162526 5.32734 0.674776L3.87984 3.60803L0.642088 4.07828C0.0293376 4.16753 -0.218912 4.92353 0.226588 5.35853L2.56959 7.64153L2.01684 10.8658C1.91259 11.4763 2.55459 11.945 3.10509 11.6563L6.00009 10.1345L8.89584 11.657C9.44184 11.9428 10.0891 11.4815 9.98409 10.8665L9.43134 7.64228L11.7743 5.35928C12.2191 4.92353 11.9708 4.16753 11.3581 4.07828Z" fill="#1B1D21"/>
                        {/* <use xlinkHref="img/sprite.svg#icon-star" /> */}
                      </svg>
                    </button>
                    <button className="actions__btn">
                    <svg className="icon icon-more" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6.00009" cy="6" r="1.5" fill="#1B1D21"/>
<circle cx="1.50009" cy="6" r="1.5" fill="#1B1D21"/>
<circle cx="10.5001" cy="6" r="1.5" fill="#1B1D21"/>
                        {/* <use xlinkHref="img/sprite.svg#icon-more" /> */}
                      </svg>
                    </button>
                    </div>
                  </div>
                  <div className="notification__preview bg-purple-light">
                    <img
                      className="notification__pic"
                      src="./assets/img/figure-1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="notification__btns">
                <button className="notification__btn btn btn_black">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="page__col">
          <div className="notification">
            <div className="notification__title h6">From Notification</div>
            <div className="notification__photo">
              <img
                className="notification__pic"
                src="./assets/img/notification-pic.png"
                alt=""
              />
            </div>
            <div className="notification__body">
              <div className="notification__stage h5">Collab Landing.</div>
              <div className="notification__parameters">
                <div className="notification__parameter">
                  <div className="notification__icon">
                    <img
                      className="notification__pic"
                      src="./assets/img/user.svg"
                      alt=""
                    />
                  </div>
                  <div className="caption">Glenn Greer</div>
                </div>
                <div className="notification__parameter">
                  <div className="notification__icon">
                    <img
                      className="notification__pic"
                      src="./assets/img/clock.svg"
                      alt=""
                    />
                  </div>
                  <div className="caption">12h</div>
                </div>
              </div>
              <div className="notification__text color-gray">
                "Love this so much! What tools do you use to create your 3d
                illustrations?"
              </div>
            </div>
            <div className="editor">
              <div className="editor__wrap">
                <div className="editor__head">
                  <div className="editor__control">
                    <button className="editor__action">
                      <svg className="icon icon-editor-smile"width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9.75C7.275 9.75 8.25 8.775 8.25 7.5H3.75C3.75 8.775 4.725 9.75 6 9.75Z" fill="#808191"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.75C12 3 11.4 2.325 10.65 2.25C9.525 0.825 7.8 0 6 0C4.2 0 2.475 0.825 1.35 2.25C0.6 2.325 0 3 0 3.75V6C0 9.3 2.7 12 6 12C9.3 12 12 9.3 12 6V3.75ZM10.5 4.5V5.25H8.25V3.75H10.5V4.5ZM8.25 2.25H8.475C7.725 1.8 6.9 1.5 6 1.5C5.1 1.5 4.275 1.8 3.525 2.25H3.75C4.575 2.25 5.25 2.925 5.25 3.75H6.75C6.75 2.925 7.425 2.25 8.25 2.25ZM1.5 3.75H3.75V5.25H1.5V3.75ZM1.575 6.75C1.95 8.85 3.75 10.5 6 10.5C8.25 10.5 10.05 8.85 10.425 6.75H8.25C7.425 6.75 6.75 6.075 6.75 5.25H5.25C5.25 6.075 4.575 6.75 3.75 6.75H1.575Z" fill="#808191"/>
                        {/* <use xlinkHref="img/sprite.svg#icon-editor-smile" /> */}
                      </svg>
                    </button>
                    <button className="editor__action active">
                      <svg className="icon icon-editor-bold"width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.67064 5.48731C8.39443 4.95658 8.8423 4.07125 8.73388 3.08158C8.5857 1.72911 7.35744 0.749993 5.99687 0.75H0.5V1.5L1.58541 2.04271C1.8395 2.16975 2 2.42945 2 2.71352V9.28647C2 9.57055 1.8395 9.83025 1.58541 9.95729L0.5 10.5V11.25H6.36699C7.94488 11.25 9.35229 10.0894 9.48839 8.5174C9.60565 7.16306 8.82225 5.97591 7.67064 5.48731ZM4.25 2.25H5C5.82841 2.25 6.5 2.92154 6.5 3.75C6.5 4.57841 5.82841 5.25 5 5.25H4.25V2.25ZM4.25 6.75V9.75H5.75C6.57841 9.75 7.25 9.07841 7.25 8.25C7.25 7.42154 6.57841 6.75 5.75 6.75H4.25Z" fill="white"/>
                        {/* <use xlinkHref="img/sprite.svg#icon-editor-bold" /> */}
                      </svg>
                    </button>
                    <button className="editor__action">
                      <svg className="icon icon-editor-italic"width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 1.5V0H1.5V1.5H2.45299C2.6812 1.5 2.8565 1.70212 2.82422 1.92803L1.69165 9.85607C1.63886 10.2256 1.32242 10.5 0.949185 10.5H0V12H4.5V10.5H3.54701C3.31879 10.5 3.1435 10.2979 3.17577 10.072L4.30835 2.14394C4.36114 1.77445 4.67758 1.5 5.05081 1.5H6Z" fill="#808191"/>
                        {/* <use xlinkHref="img/sprite.svg#icon-editor-italic" /> */}
                      </svg>
                    </button>
                    <button className="editor__action">
                      <svg className="icon icon-editor-pic" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 3.00006H12.25C12.4524 2.98789 12.6503 3.06299 12.7937 3.20637C12.9371 3.34974 13.0122 3.54766 13 3.75006V11.2501C13.0122 11.4525 12.9371 11.6504 12.7937 11.7937C12.6503 11.9371 12.4524 12.0122 12.25 12.0001H1.75C1.5476 12.0122 1.34968 11.9371 1.20631 11.7937C1.06293 11.6504 0.987831 11.4525 0.999997 11.2501V3.75006C0.987831 3.54766 1.06293 3.34974 1.20631 3.20637C1.34968 3.06299 1.5476 2.98789 1.75 3.00006ZM2.5 10.5H11.5V4.5H2.5V10.5Z" fill="#808191"/>
<rect x="2.5" width="9" height="1.5" fill="#808191"/>
<path d="M4.75 9.75L8.5 6L10.75 9.75H4.75Z" fill="#808191"/>
<circle cx="4.75" cy="6.75" r="0.75" fill="#808191"/>
                        {/* <use xlinkHref="img/sprite.svg#icon-editor-pic" /> */}
                      </svg>
                    </button>
                  </div>
                  <button className="editor__add" />
                </div>
                <div className="editor__body">
                  <div className="editor__field">
                    <textarea
                      className="editor__textarea"
                      placeholder="text ..."
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <button className="editor__btn btn btn_black btn_wide">
                Reply Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Notificationswithcomment