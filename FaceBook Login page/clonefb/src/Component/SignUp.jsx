import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <section id="container" className="  cont container-sm rounded-3">
        <h1 className=" mt-2 px-1">SignUp</h1>
        <p className=" mb-2 px-1">It's quick and easy.</p>
        <div id="line"></div>
        <div id="nameform">
          <div id="namegrp" className="  input-group mb-3 mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div id="details" className=" mt-2 w-100 h-10">
          <div className="input-group mb-3 px-1">
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Mobile number or email address"
              required
            />
          </div>

          <div className="input-group mb-4 px-1">
            <input
              type="text"
              className="form-control mb-4"
              placeholder="New password"
              required
            />
          </div>
        </div>
        <span className="  mt-2 px-1">Date of Birth</span>
        <div id="birthcont" className=" d-flex gap-5">
          <select className=" ms-1 form-group w-50">
            <option defaultValue="1">1</option>
            <option defaultValue="2">2</option>
            <option defaultValue="3">3</option>
            <option defaultValue="4">4</option>
            <option defaultValue="5">5</option>
            <option defaultValue="6">6</option>
            <option defaultValue="7">7</option>
            <option defaultValue="8">8</option>
            <option defaultValue="9">9</option>
            <option defaultValue="10">10</option>
            <option defaultValue="11">11</option>
            <option defaultValue="12">12</option>
            <option defaultValue="13">13</option>
            <option defaultValue="14">14</option>
            <option defaultValue="15">15</option>
            <option defaultValue="16">16</option>
            <option defaultValue="17">17</option>
            <option defaultValue="18">18</option>
            <option defaultValue="19">19</option>
            <option defaultValue="20">20</option>
            <option defaultValue="21">21</option>
            <option defaultValue="22">22</option>
            <option defaultValue="23">23</option>
            <option defaultValue="24">24</option>
            <option defaultValue="25">25</option>
            <option defaultValue="26">26</option>
            <option defaultValue="27">27</option>
            <option defaultValue="28">28</option>
            <option defaultValue="29">29</option>
            <option defaultValue="30">30</option>
            <option defaultValue="31">31</option>
          </select>
          <select className="form-group w-50">
            <option defaultValue="1">Jan</option>
            <option defaultValue="2">Feb</option>
            <option defaultValue="3">Mar</option>
            <option defaultValue="4">Apr</option>
            <option defaultValue="5">May</option>
            <option defaultValue="6">Jun</option>
            <option defaultValue="7">Jul</option>
            <option defaultValue="8">Aug</option>
            <option defaultValue="9">Sep</option>
            <option defaultValue="10">Oct</option>
            <option defaultValue="11">Nov</option>
            <option defaultValue="12">Dec</option>
          </select>
          <select className=" me-1 form-group w-75">
            <option defaultValue="2023">2023</option>
            <option defaultValue="2022">2022</option>
            <option defaultValue="2021">2021</option>
            <option defaultValue="2020">2020</option>
            <option defaultValue="2019">2019</option>
            <option defaultValue="2018">2018</option>
            <option defaultValue="2017">2017</option>
            <option defaultValue="2016">2016</option>
            <option defaultValue="2015">2015</option>
            <option defaultValue="2014">2014</option>
            <option defaultValue="2013">2013</option>
            <option defaultValue="2012">2012</option>
            <option defaultValue="2011">2011</option>
            <option defaultValue="2010">2010</option>
            <option defaultValue="2009">2009</option>
            <option defaultValue="2008">2008</option>
            <option defaultValue="2007">2007</option>
            <option defaultValue="2006">2006</option>
            <option defaultValue="2005">2005</option>
            <option defaultValue="2004">2004</option>
            <option defaultValue="2003">2003</option>
            <option defaultValue="2002">2002</option>
            <option defaultValue="2001">2001</option>
            <option defaultValue="2000">2000</option>
            <option defaultValue="1999">1999</option>
            <option defaultValue="1998">1998</option>
            <option defaultValue="1997">1997</option>
            <option defaultValue="1996">1996</option>
            <option defaultValue="1995">1995</option>
            <option defaultValue="1994">1994</option>
            <option defaultValue="1993">1993</option>
            <option defaultValue="1992">1992</option>
            <option defaultValue="1991">1991</option>
            <option defaultValue="1990">1990</option>
            <option defaultValue="1989">1989</option>
            <option defaultValue="1988">1988</option>
            <option defaultValue="1987">1987</option>
            <option defaultValue="1986">1986</option>
            <option defaultValue="1985">1985</option>
            <option defaultValue="1984">1984</option>
            <option defaultValue="1983">1983</option>
            <option defaultValue="1982">1982</option>
            <option defaultValue="1981">1981</option>
            <option defaultValue="1980">1980</option>
            <option defaultValue="1979">1979</option>
            <option defaultValue="1978">1978</option>
            <option defaultValue="1977">1977</option>
            <option defaultValue="1976">1976</option>
            <option defaultValue="1975">1975</option>
            <option defaultValue="1974">1974</option>
            <option defaultValue="1973">1973</option>
            <option defaultValue="1972">1972</option>
            <option defaultValue="1971">1971</option>
            <option defaultValue="1970">1970</option>
            <option defaultValue="1969">1969</option>
            <option defaultValue="1968">1968</option>
            <option defaultValue="1967">1967</option>
            <option defaultValue="1966">1966</option>
            <option defaultValue="1965">1965</option>
            <option defaultValue="1964">1964</option>
            <option defaultValue="1963">1963</option>
            <option defaultValue="1962">1962</option>
            <option defaultValue="1961">1961</option>
            <option defaultValue="1960">1960</option>
            <option defaultValue="1959">1959</option>
            <option defaultValue="1958">1958</option>
            <option defaultValue="1957">1957</option>
            <option defaultValue="1956">1956</option>
            <option defaultValue="1955">1955</option>
            <option defaultValue="1954">1954</option>
            <option defaultValue="1953">1953</option>
            <option defaultValue="1952">1952</option>
            <option defaultValue="1951">1951</option>
            <option defaultValue="1950">1950</option>
            <option defaultValue="1949">1949</option>
            <option defaultValue="1948">1948</option>
            <option defaultValue="1947">1947</option>
            <option defaultValue="1946">1946</option>
            <option defaultValue="1945">1945</option>
            <option defaultValue="1944">1944</option>
            <option defaultValue="1943">1943</option>
            <option defaultValue="1942">1942</option>
            <option defaultValue="1941">1941</option>
            <option defaultValue="1940">1940</option>
            <option defaultValue="1939">1939</option>
            <option defaultValue="1938">1938</option>
            <option defaultValue="1937">1937</option>
            <option defaultValue="1936">1936</option>
            <option defaultValue="1935">1935</option>
            <option defaultValue="1934">1934</option>
            <option defaultValue="1933">1933</option>
            <option defaultValue="1932">1932</option>
            <option defaultValue="1931">1931</option>
            <option defaultValue="1930">1930</option>
            <option defaultValue="1929">1929</option>
            <option defaultValue="1928">1928</option>
            <option defaultValue="1927">1927</option>
            <option defaultValue="1926">1926</option>
            <option defaultValue="1925">1925</option>
            <option defaultValue="1924">1924</option>
            <option defaultValue="1923">1923</option>
            <option defaultValue="1922">1922</option>
            <option defaultValue="1921">1921</option>
            <option defaultValue="1920">1920</option>
            <option defaultValue="1919">1919</option>
            <option defaultValue="1918">1918</option>
            <option defaultValue="1917">1917</option>
            <option defaultValue="1916">1916</option>
            <option defaultValue="1915">1915</option>
            <option defaultValue="1914">1914</option>
            <option defaultValue="1913">1913</option>
            <option defaultValue="1912">1912</option>
            <option defaultValue="1911">1911</option>
            <option defaultValue="1910">1910</option>
            <option defaultValue="1909">1909</option>
            <option defaultValue="1908">1908</option>
            <option defaultValue="1907">1907</option>
            <option defaultValue="1906">1906</option>
            <option defaultValue="1905">1905</option>
          </select>
        </div>
        <span className=" d-inline-block  my-2 px-1" id="gencat">
          Gender
        </span>
        <div id="gencont">
          <span className="d-flex gap-4">
            <span className="mx-1 my-1 h-25 gentyp">
              <label htmlFor="female" className="ps-1">
                Female
              </label>
              <input
                type="radio"
                name="sex"
                defaultValue="1"
                className="mx-2"
              />
            </span>
            <span className="mx-1 my-1 h-25 gentyp">
              <label htmlFor="Male" className="ps-1">
                Male
              </label>
              <input
                type="radio"
                name="sex"
                defaultValue="1"
                className="mx-2"
              />
            </span>
            <span className=" mx-1 my-1 h-25 gentyp">
              <label htmlFor="Other" className="ps-1">
                Other
              </label>
              <input
                type="radio"
                name="sex"
                defaultValue="1"
                className="mx-2"
              />
            </span>
          </span>
        </div>
        <p className="ending mt-2 ps-1">
          People who use our service may have uploaded your contact information
          to Facebook.{" "}
          <a target="_blank" href="https://www.facebook.com/help/637205020878504" className="text-underline-hover">
            Learn more.
          </a>
        </p>
        <p className="ending px-1">
          By clicking Sign Up, you agree to our{" "}
          <a  target="_blank" href="https://www.facebook.com/legal/terms/update" className="text-underline-hover">
            Terms
          </a>
          ,{" "}
          <a  target="_blank" href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0" className="text-underline-hover">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a target="_blank"  href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0  " className="text-underline-hover">
            Cookies Policy
          </a>
          . You may receive SMS notifications from us and can opt out at any
          time.
        </p>
        <div className=" border  btn-group gap-2 d-flex justify-content-center">
          <button type="button" className="btn btn-success ">
            Signup
          </button>
          <button type="button" className="btn btn-primary ">
            <Link to="/" className="text-decoration-none text-light">Login</Link>
          </button>
        </div>
      </section>
    </>
  );
}
