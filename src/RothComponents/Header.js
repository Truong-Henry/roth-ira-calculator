import React from "react";

function Header() {
  const sevenPercentArticle =
    "https://www.thesimpledollar.com/investing/stocks/where-does-7-come-from-when-it-comes-to-long-term-stock-returns/";
  return (
    <div className="row">
      <div className="col-sm-12">
        <header className="header-container">
          <h1>Roth IRA Calculator</h1>
          <h3>
            Investing early can make a big impact on your retirement savings. A
            Roth Individual Retirement Account (IRA) is beneficial for younger
            adults because their marginal tax rate is lower. All future earnings
            will not be taxed, meaning that any gain will be tax-free. From 1950
            to 2009, the average annual return from the S&amp;P 500 was
            <a href={sevenPercentArticle}> 7%</a>. This accounts for dividends
            and inflation.
          </h3>
        </header>
      </div>
    </div>
  );
}

export default Header;
