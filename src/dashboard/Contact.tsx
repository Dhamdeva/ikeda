import './Homepage.css';
import { Customer, Footer, Navbar } from "./Component";

export function Contact(){
    return(
        <div className="container-fluid main">
            <Navbar />
            <Customer
            className={'col-md-12 utility text-center'}
            h1={"Contact Us"}
            p={"Home > Contact us"}
            />
            <h1 className="fw-bold text-center my-5">GET IN TOUCH & LET US KNOW</h1>
            <div className='row detail mx-0 my-5'>
        <div className='col-md-6'>
          <input type={'text'} className='col-12 p-2' placeholder='FIRST NAME' />
        </div>
        <div className='col-md-6'>
          <input type={'text'} className='col-12 p-2' placeholder='LAST NAME' />
        </div>
        <div className='col-md-12'>
          <input type={'email'}className='col-12 p-2' placeholder='EMAIL ADDRWSS' />
        </div>
        <div className='col-md-12'>
          <input type={'number'} className='col-12 p-2' placeholder='PHONE' />
        </div>
        <div className='col-md-12'>
          <input type={'text'} className='col-12 py-5' placeholder='Enter your Quory' />
        </div>
        <div className='col-md-12 button'>
          <button type='submit' className='col-6  p-2'>Submit</button>
        </div>
      </div>
      <Footer />
        </div>
    )
}