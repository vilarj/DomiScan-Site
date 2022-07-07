import Header from "../Components/Header";

const Contact = () => {
  return (
    <div>
      <Header />
      <h1>Contact Us</h1>

      <div className="form-container">
        <form action="">
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Domi"></input>

          <label for="fname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Scan"></input>

          <label for="player">DomiScan User?</label>
          <select id="player" name="player">
            <option value="na">N/A</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <label>Send message</label>
          <textarea placeholder="Type something..."></textarea>


        </form>
      </div>
    </div>
  );
};

export default Contact;
