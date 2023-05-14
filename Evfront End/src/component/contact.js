import React, {useNavigate, useForm, useEffect, useState} from 'react'
import axios from 'axios';
import mycss from '../css/main.css'
import swal from 'sweetalert2'
import base_url from '../api/bootapi';
import { Link } from 'react-router-dom'

function ContactUs() {

  useEffect(() => {
    document.title = 'ContactUs'
  }, [])

  // Declaring fields
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileno, setMobileno] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')




  async function save(event)
  {
    event.preventDefault();
    try
    {
      await axios.post(`${base_url}/savefeedback`,
      {
        name: name,
        email: email,
        mobileno: mobileno,
        service: service,
        message: message
      });
      alert("Feedback Registered");
      setName("");
      setEmail("");
      setMobileno("");
      setService("");
      setMessage("");
    }
    catch(err)
    {
      alert("Server Error");
    }
  }


  return (
    <>
      <link rel="stylesheet" href={mycss} />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <section id="footer">
        <img src="images/footer-img.png" className="footer-img" />
        <div className="title-text mt-4">
          <p className="globfont-2">CONTACT</p>
        </div>
        <div className="footer-row globfont-2">
          <div className="footer-center">
            <h1 className="globfont-2">Contact Us</h1>
            <p className="globfont-2"> 
              Nitin Katole,(Buldhana) - 443106
              <i className="fa fa-map-marker" style={{ fontSize: '15px' }} />
            </p>
            <p className="globfont-2">
              nitinkatole5@gmail.com
              <i className="fa fa-paper-plane" style={{ fontSize: '15px' }} />
            </p>
            <p className="globfont-2">
            +91 9096708195
              <i className="fa fa-phone" style={{ fontSize: '15px' }} />
            </p>
         
          <div className="footer-row globfont-2">
          <div className="footer-left">
            <h1 className="globfont-2">Locate Us</h1>
        <iframe src="" 
        width="350" 
        height="170" 
        style={{border:"0"}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
    </div>
          <div className="footer-center">
            <h1 className="globfont-2">  Leave a Message</h1>
            <form onSubmit={{}}>
              <div className="mb-3">
                <input
                  type="name"
                  placeholder="Enter full name"
                  value={name}
                  onChange={(event) => 
                  {
                    setName(event.target.value);
                  }}
                  required
                  style={{ width: '17vw', height: '5vh' }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="abcd@gmail.com"
                  value={email}
                  onChange={(event) => 
                  {
                    setEmail(event.target.value);
                  }}
                  required
                  style={{ width: '17vw', height: '5vh' }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  placeholder="10 digit mob number"
                  value={mobileno}
                  onChange={(event) => 
                  {
                    setMobileno(event.target.value);
                  }}
                  required
                  style={{ width: '17vw', height: '5vh' }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="wedding, birthday, party,etc."
                  value={service}
                  onChange={(event) => 
                  {
                    setService(event.target.value);
                  }}
                  required
                  style={{ width: '17vw', height: '5vh' }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="message"
                  placeholder="type here !!!"
                  value={message}
                  onChange={(event) => 
                  {
                    setMessage(event.target.value);
                  }}
                  style={{ width: '17vw', height: '15vh' }}
                />
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-info globfont-2" onClick={save}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="social-links">
          <i className="fa fa-twitter" style={{ fontSize: '15px' }} />
          <i className="fa fa-instagram" style={{ fontSize: '15px' }}/>
          <i className="fa fa-facebook" style={{ fontSize: '15px' }} />
          <i className="fa fa-youtube" style={{ fontSize: '15px' }} />
          <p className="globfont-2">Copyright 2023 - Nk Resort </p>
        </div>
      </section>
    </>
  )
}

export default ContactUs