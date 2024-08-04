import React,{useState} from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  // eslint-disable-next-line
  const [error, setError] = useState('')

  function onSubmit(e){
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/OL5THyzwkiV", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    }) 
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        alert("We received your submission, thank you!");
        setName('');
        setEmail('');
        setMessage('');
      }
      else if(response.code === 422){
        // Field validation failed
        setError(response.message)
      }
      else {
        // other error from formcarry
        setError(response.message)
      }
    })
    .catch(error => {
      // request related error.
      setError(error.message ? error.message : error);
    });
  }

  return (
    <>
        <div className="row resume m-3" style={{backgroundColor:'var(--color-1)',borderRadius:'5px'}}>
            <div className="col-12 text-center">
            <h1 className='my-4' style={{color:'var(--color-6)',fontWeight:'900',fontSize:'55px'}}>Contact</h1>
            </div>
            <div className="d-flex cont justify-content-evenly mb-5">
              <div className="card p-3 m-3 col-md-5 d-flex align-items-center justify-content-center" style={{backgroundColor:'var(--color-2)',border:'none'}}>
                <div className="card-body mobile w-50">
                <div className="contact mb-3 d-flex justify-content-between">
                  <div className='col-md-6' style={{color: 'var(--color-5)', fontSize:'17px'}}>
                    <b>Mobile no. : </b>
                  </div>
                  <div className='col-mr-6 d-flex justify-content-center' style={{color: 'var(--color-3)',}}>
                    <img className='m-0' src="https://img.shields.io/badge/6387634132-%230077B5.svg?style=for-the-badge" alt="" />
                  </div>
                  </div>
                  <div className="contact mb-3 d-flex justify-content-between">
                  <div className='col-md-6' style={{color: 'var(--color-5)', fontSize:'17px'}}>
                    <b>Email : </b>
                  </div>
                  <div className='col-mr-6 d-flex justify-content-center' style={{color: 'var(--color-3)',}}>
                    <a href="mailto:arjungoyal66796@gmail.com@gmail.com">
                    <img className='m-0' src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="" />
                    </a>
                  </div>
                  </div>
                  <div className="contact mb-3 d-flex justify-content-between">
                  <div className='col-md-6' style={{color: 'var(--color-5)', fontSize:'17px'}}>
                    <b>LinkedIn : </b>
                  </div>
                  <div className='col-mr-6 d-flex justify-content-center' style={{color: 'var(--color-3)',}}>
                    <a href="https://www.linkedin.com/in/arjun-goyal-0276241ab/">
                    <img className='m-0' src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="" />
                    </a>
                  </div>
                  </div>
                  <div className="contact mb-3 d-flex justify-content-between">
                  <div className='col-md-6' style={{color: 'var(--color-5)', fontSize:'17px'}}>
                    <b>WhatsApp : </b>
                  </div>
                  <div className='col-mr-6 d-flex justify-content-center' style={{color: 'var(--color-3)',}}>
                    <a href="https://wa.me/+916387634132">
                    <img className='m-0' src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="" />
                    </a>
                  </div>
                  </div>
                  <div className="contact mb-3 d-flex justify-content-between">
                    <div className='col-md-6' style={{color: 'var(--color-5)', fontSize:'17px'}}>
                      <b>GitHub : </b>
                      </div>
                    <div className='col-mr-6 d-flex justify-content-center' style={{color: 'var(--color-3)',}}>
                      <a href="https://github.com/Arjun9036">
                      <img className='m-0' src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="" />
                      </a>
                      </div>
                  </div>
                </div>
              </div>
              

              </div>
        </div>
    </>
  )
}
