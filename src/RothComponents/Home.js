import React from "react";
import { Link } from "react-router-dom";
function Home() {
  const sevenPercentArticle =
    "https://www.thesimpledollar.com/investing/stocks/where-does-7-come-from-when-it-comes-to-long-term-stock-returns/";
  return (
    <header>
      <h1>Home</h1>
      <p>
        Investing early can make a big impact on your retirement savings. A Roth
        Individual Retirement Account (IRA) is beneficial for younger adults
        because their marginal tax rate is lower. All future earnings will not
        be taxed, meaning that any gain will be tax-free. From 1950 to 2009, the
        average annual return from the S&amp;P 500 was
        <a href={sevenPercentArticle}> 7%</a>. This accounts for dividends and
        inflation.
      </p>
      <hr />
      <p>
        Interested in seeing what your retirement balance could be?{" "}
        <Link to="/calculator">Use the Calculator!</Link>
      </p>
      <p>
        Want to learn more about investing?{" "}
        <Link to="/resources">Find additional information here.</Link>
      </p>
    </header>
  );
}

export default Home;
