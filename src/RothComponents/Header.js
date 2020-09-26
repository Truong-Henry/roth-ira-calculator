import React from "react";

function Header() {
  const sevenPercentArticle =
    "https://www.thesimpledollar.com/investing/stocks/where-does-7-come-from-when-it-comes-to-long-term-stock-returns/";

  return (
    <div className="row">
      <div className="col-lg-1"></div>
      <div className="header-container col-lg-10">
        <header>
          <h1>Roth IRA Calculator</h1>
          <p>
            Investing early can make a big impact on your retirement savings. A
            Roth Individual Retirement Account (IRA) is beneficial for younger
            adults because their marginal tax rate is lower. All future earnings
            will not be taxed, meaning that any gain will be tax-free. From 1950
            to 2009, the average annual return from the S&amp;P 500 was
            <a href={sevenPercentArticle}> 7%</a>. This accounts for dividends
            and inflation.
          </p>
        </header>
      </div>
      <div className="col-lg-1"></div>
    </div>
  );
}

export default Header;
