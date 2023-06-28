
import './App.css';

function App() {
  return (
    <>
      <div class="nav1">
        <img class="image123" src=".\logo336.jpg" alt="image1" />

        <div class="button1">
          <button class="btn1">Apply Loan</button>
          <button class="btn2">Register</button>
          <button class="btn3">Log In</button>
        </div>

      </div>       
      <div class="main-content">
        <div class="left-container">
          <h2>Purpose of loan:</h2>
          <p>The purpose of a loan refers to the reason or intention behind borrowing money from a lender. People and organizations may seek loans for various purposes, depending on their specific needs and circumstances. Here are some common purposes for which individuals and businesses may take out loans:</p>
          <ol>
            <li>Personal Expenses: Loans can be used to cover personal expenses such as medical bills, home renovations, education expenses, vacations, or purchasing a vehicle.</li>
            <li>Business Start-up or Expansion: Entrepreneurs may require loans to start a new business or expand an existing one. Funds can be used for equipment purchases, inventory, hiring employees, marketing, or other business-related expenses.</li>
            <li>Education: Students may take out loans to finance their education, including tuition fees, books, accommodation, and living expenses. These loans are often referred to as student loans.</li>
            <li>Home Purchase or Real Estate: Individuals may apply for mortgages or home loans to purchase a house, property, or real estate. Loans can also be used for construction, renovation, or refinancing existing mortgages.</li>
            <li>Debt Consolidation: Loans can be used to consolidate multiple debts into a single loan, making it more manageable to repay. This can help individuals simplify their finances and potentially obtain a lower interest rate.</li>
            <li>Emergency Expenses: Loans can provide financial assistance during unexpected situations such as medical emergencies, vehicle repairs, or other urgent needs.</li>
          </ol>

        </div>
        <div class="right-container">
          <h3>Loan Type</h3>

          <div class="slct1">
            <label> Purpose Loan: </label>
            <select>
              <option value="option3"></option>
              <option value="option1">pocket money</option>
              <option value="option2">collage fee</option>
              <option value="option3">medical</option>
              <option value="option4">house Expenses</option>
              <option value="option5">student expenses</option>
              <option value="option6">Lover Expenses</option>
            </select>
          </div>

          <div class="slct2">
            <label>loan repayment: </label>
            <select>
              <option value="option0"></option>
              <option value="option1">1 months</option>
              <option value="option 2">2 months</option>
              <option value="option3">3 months</option>
              <option value="option4">4 months</option>
              <option value="option5">5 months</option>
              <option value="option6">6 months</option>
              <option value="option7">7 months</option>
            </select>

          </div>

          <label>mobile number: </label>
          <input type="number" placeholder="enter number" class="slct3"></input>
          <div class="btn12">
            <button >send otp</button>
          </div>



          <input type="number" placeholder="enter otp" class="slct4"></input>

          <div class="btn22">
            <button >submit</button>
          </div>


        </div>

      </div>

    </>
  );
}

export default App;
