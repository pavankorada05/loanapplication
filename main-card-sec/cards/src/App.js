import './App.css';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import { AiOutlineCopyright } from 'react-icons/ai';
import { TiContacts } from 'react-icons/ti';

function App() {
  return (

    <>
{/* first section */}
      <div class="sec1">
        <div class="sec1-left">
          <h1>Borrow. With Confidence.</h1>
          <p>Zizmu is a new-age financial services platform that leverages technology and data science across its suite of offerings.</p>
          <button>Apply Now</button>
        </div>
        <div class="sec1-right">
          <img src="home-page-sec1.gif" alt="gif" height="375px" width="400px" />
        </div>
      </div>
{/* cards section */}
      <div class="card-container">
        <div class="card1">
          <img src="./student-loan-logo.png" height="70px" width="70px" alt="image1" />
          <h3>STUDENT LOAN</h3>
          <p>Just fill a few basic details and get an instant approval</p>
          <p class="apply-now">APPLY NOW</p>
        </div>
        <div class="card2">
          <img src="./salaried-loan-logo.png" height="70px" width="90px" alt="image2" />
          <h3>SALARIED LOAN</h3>
          <p>Just fill a few basic details and get an instant approval</p>
          <p class="apply-now">APPLY NOW</p>
        </div>
        <div class="card3">
          <img src="./selfemployeed-loan-logo.png" alt="image3" height="70px" width="70px" />
          <h3>SELF EMPLOYED LOAN</h3>
          <p>Just fill a few basic details and get an instant approval</p>
          <p class="apply-now">APPLY NOW</p>
        </div>
      </div>
{/* footer section */}
      <div>
        <div class="main-footer">
            <div class="card-conatiner">
              <div><TiContacts class="contact" /> </div>
              <h4>ZIZMU LOANS</h4>
              <p>Plot No:27, Raju Colony,<br></br>
                opp.Park hyatt Hotel Lane,<br></br>
                banjara Hills<br></br>
                Hyderabad,<br></br>
                Telangana-50034,<br></br>
                For Equiry:7337326804<br></br>
                Web/app Support:7702288603<br></br>
              </p>
            </div>
            <div class="footer1">
              <h3 class="head3">Use Links</h3>
              <ul>
                <li><p><a href="#">home</a></p></li>
                <li><p><a href="#">Categories</a></p></li>
                <li><p><a href="#">About Us</a></p></li>
                <li><p><a href="#">Loan requried</a></p></li>
                <li><p><a href="#">Terms Of Services</a></p></li>
                <li><p><a href="#">Privcy Policy</a></p></li>
              </ul>
            </div>
            <div class="footer2">
              <h3 class="head3">Our services</h3>
              <ul>
                <li><p><a href="#">Student loan</a></p></li>
                <li><p><a href="#">Self Employed loan</a></p></li>
                <li><p><a href="#">salaried loan</a></p></li>
              </ul>
            </div>
            <div class="footer3">
              <img src=".\ZIZMU LOGO 2D.png" alt="zizmu logo" height="300px" width="300px" />
              <h3 class="head3">Social Media</h3>
              <div class="img1">
                <div> <BsTwitter class="twitter1" /></div>
                <div> <FaFacebookF class="facebook1" /></div>
                <div> <BsInstagram class="instgram" /></div>
                <div>  <AiFillLinkedin class="linkedin" /></div>
                <div>  <AiOutlineYoutube class="youtube" /></div>
              </div>
            </div>
          </div>
          <hr />
          <div class="cpoy1">
            <article><AiOutlineCopyright />Copy Right 2023 Zizmu loan  </article>
          </div>
        </div>

    </>
  );
}

export default App;
