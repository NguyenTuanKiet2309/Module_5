import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
export default function Home(props) {
  const covid = props.covid;

  return (
    <>
      <h1>VietNam Covid Information</h1>
      <table className="table table-striped">
        <thead>
          <tr>  
            <th>Date</th>
            <th>Confirm</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {covid.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.date}</td>
                <td>{data.confirmed}</td>
                <td>{data.active}</td>
                <td>{data.recovered}</td>
                <td>{data.deaths}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get('http://localhost:8080/covids');
    const data = response.data;
    return {
      props: {
        covid: data
      }
    }
  } catch (error) {
    console.error("123");
    return {
      props: {
        covid: []
      }
    }
  }
}
