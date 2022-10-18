import "./App.css";
import Customer from "./components/Customer";

const customer = {
  name: "홍길동",
  birthday: "020803",
  gender: "남자",
  job: "대학생",
};

function App() {
  return (
    <div className="App">
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    </div>
  );
}

export default App;
