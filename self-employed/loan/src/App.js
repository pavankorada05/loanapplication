import './App.css';

function App() {
  return (
    <>
      <div class="nav">
        <nav>
          <img class="img" height="80px" width="100px" src="./loan.PNG" alt="img" />
          <div class="btn">
            <button class="btn1">New Users</button>
            <button class="btn2">Existing Users</button>
          </div>
        </nav>
      </div>

      <div class="main-container">

        <div class="p-container">
          <h1>Self Employeed Loan</h1>
          <p>As a self-employed individual, there are several benefits to obtaining a loan. Here are some key advantages:</p>
          <ul>
            <li><p>Business Expansion: A loan can provide the necessary funds to expand your business operations, such as purchasing equipment, hiring additional staff, or opening a new location. This can help you take advantage of growth opportunities and increase your earning potential.</p></li>
            <li><p>Working Capital: Loans can help you manage your day-to-day operations by providing working capital. This can be particularly useful during periods of seasonal fluctuations or when you need to cover expenses while waiting for payments from clients.</p></li>
            <li><p>Tax Deductions: In many cases, the interest paid on business loans is tax-deductible. This can help reduce your taxable income, resulting in potential savings during tax season. However, it's essential to consult with a tax professional to understand the specific deductions available to you.</p></li>
            <li><p>Flexibility: Self-employed individuals often have irregular income streams. A loan can provide financial stability by offering a fixed repayment schedule, allowing you to budget and plan accordingly.</p></li>
            <li><p>Building Credit: Taking out a loan and making regular, timely payments can help you establish and build a positive credit history for your business. This can be beneficial for future loan applications and obtaining favorable terms.</p></li>
            <li><p>Investment Opportunities: Loans can enable you to invest in new ventures, innovative technologies, or business strategies that have the potential to increase your profitability and competitiveness in the market.</p></li>
            <li><p>Personal Expenses: In some cases, self-employed individuals may use a loan for personal expenses. While it's important to separate personal and business finances, a loan can provide temporary support during challenging times or when personal and business needs overlap.</p></li>
          </ul>
        </div>
        <div class="container">
          <form>
            <div class="first">
              <div class="text">
                <label>First Name</label><br></br>
                <input type="text" placeholder="enter first name" class="text1" />
              </div>
              <div class="text">
                <label>Last Name</label><br></br>
                <input type="text" placeholder="enter last name" class="text1" />
              </div>
            </div>
            <div class="first">
              <div class="text">
                <label>Mobile Number</label><br></br>
                <input type="number" placeholder="enter mobile number" class="text1" />
              </div>
              <div class="text">
                <label>Nature Of Business</label><br></br>
                <input type="text" placeholder="enter business type" class="text1" />
              </div>
            </div>
            <div class="first">
              <div class="text">
                <label>Address</label><br></br>
                <input type="message" placeholder="enter address" class="text1" />
              </div>
              <div class="text">
                <label>Email ID</label><br></br>
                <input type="mail" placeholder="enter email id" class="text1" />
              </div>
            </div>
            <div class="first">
              <div CLASS="text">
                <i><label>Proof Of Business </label></i>
                <input type="file" id="fileInput" name="files[]" multiple />
              </div>
              <div class="text">
                <i><label>Bank Statement </label></i>
                <input type="file" id="fileInput" name="files[]" multiple />
              </div>
            </div>
            <div class="first">
              <div class="text">
                <i><label>Last Three Years ITR Documents </label></i>
                <input type="file" id="fileInput" name="files[]" multiple />
              </div>
              <div class="text">
                <i><label>Aadhar Card </label></i>
                <input type="file" id="fileInput" name="files[]" multiple />
              </div>
            </div>
            <button class="button">SUBMIT</button>
          </form>
        </div>
      </div>

    </>
  );
}

export default App;
