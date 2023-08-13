import './style/App.css'
import LinkContent from './component/LinkContent'
import { useState } from 'react'
import AlertCustom from './component/AlertCustom'
function App() {
  const [alert,setAlert] = useState(true)
  let dataLink = [{
    image: "https://g21-gaming.s3.ap-southeast-1.amazonaws.com/OPEL%20GAMING/brand/logo",
    link: "https://bit.ly/opelvipp"
  },
  {
    image: "https://g21-gaming.s3.ap-southeast-1.amazonaws.com/SETIA%20GAMING/brand/logo",
    link: "https://bit.ly/SetiaVipp"
  },
  {
    image: "https://g21-gaming.s3.ap-southeast-1.amazonaws.com/FILA%20GAMING/brand/logo",
    link: "https://bit.ly/FilaVip"
  }
  ]
  return (
    < >
      <header>
        <h1 id='title'>Online Shop</h1>
      </header>
      <main id='wrapper'>
        <section id='main-content'>
          {dataLink.map((val, idx) => {
            return (
              <LinkContent
                key={idx}
                image={val.image}
                link={val.link}
              />)
          })}
        </section>
        {
          alert && <section className='Alert-Wrapper'>
            <AlertCustom klickme={setAlert} />
          </section>
        }
      </main>
      
    </>
  )
}

export default App
