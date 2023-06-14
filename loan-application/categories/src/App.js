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
          <h1>Student Loan</h1>
          <p>Student loans are financial resources provided to students to help cover the costs of their education, including tuition fees, books, accommodation, and other related expenses. The primary purpose of student loans is to assist individuals in pursuing higher education when they may not have the immediate financial means to do so.</p>
          <ul>
            <li><p>Tuition fees: Student loans can be used to pay for the costs of tuition, which is often one of the most significant expenses associated with higher education.</p></li>
            <li><p>Educational expenses: Loans can cover expenses such as textbooks, laboratory fees, equipment, and supplies necessary for the completion of educational programs.</p></li>
            <li><p>Accommodation and living expenses: Many students require financial support to cover the costs of housing, whether it's on-campus housing or renting an apartment. Student loans can help alleviate these expenses.</p></li>
            <li><p>Transportation: Loans can be used to fund transportation costs, including commuting to and from campus, or for students studying abroad.</p></li>
            <li><p>Flexibility in repayment: Student loans often come with flexible repayment options, allowing borrowers to defer payments until after graduation or choose extended repayment plans, making it more manageable to repay the loan once the borrower enters the workforce.</p></li>
            <li><p>Building credit history: Responsible repayment of student loans can contribute positively to an individual's credit history, which can be beneficial for future financial endeavors like securing mortgages or car loans.</p></li>
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
                <label>College Name</label><br></br>
                <input type="text" placeholder="enter college name" class="text1" />
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
                <i><label>ID CARD </label></i>
                <input type="file" id="fileInput" name="files[]" multiple />
              </div>
              <div class="text">
                <i><label>PASSPORT-SIZE PIC </label></i>
                <input type="file" id="fileInput" name="files[]" multiple />
              </div>
            </div>
            <div class="first">
              <div class="text">
                <i><label>BANK STATEMENT </label></i>
                <input type="file" id="fileInput" name="files[]" multiple />
              </div>
              <div class="text">
                <i><label>AADHAR CARD </label></i>
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
