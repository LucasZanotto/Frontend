import Header from "../components/Header";


export default function Home() {
  return (
    <div>
      <Header />
      <h1 style={{display: 'flex', justifyContent:'center'}}>Página Principal</h1>
      <div style={{display: 'flex', justifyContent: 'space-evenly', padding: '20px'}}>
      <p>Loren Ipsum is simply <br />
      dummy text of the <br />
      printing and typesetting <br />
      industry. Lorem Ipsum <br/>
      has been the industry's <br />
      standard dummy text <br />
      ever since the 1500s.</p>
      
      <p>Loren Ipsum is simply <br />
      dummy text of the <br />
      printing and typesetting <br />
      industry. Lorem Ipsum <br/>
      has been the industry's <br />
      standard dummy text <br />
      ever since the 1500s.</p>
      </div>
    </div>
  );
}