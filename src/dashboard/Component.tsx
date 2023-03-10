import './Homepage.css';

export function Navbar(props:any){
    return(
        <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  PayPe
                </a>
                <button 
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar-collapse"
                  aria-controls="navbar-collapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id='navbar-collapse'>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link " href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="/about">
                        About
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/service" role="button"  aria-expanded="false">
                            Service
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item disabled" href="/">MONEY TRANSFER</a></li>
                            <li><a className="dropdown-item" href="/micro">Micro ATM(mATM)</a></li>
                            <li><a className="dropdown-item" href="/aeps">Aadhar Enabled Payment System</a></li>
                            <li><a className="dropdown-item disabled" href="/utility">UTILITY SERVICES </a></li>
                            <li><a className="dropdown-item" href="/recharge">Recharge</a></li>
                            <li><a className="dropdown-item" href="/utility">Utility Bill Payment</a></li>
                            <li><a className="dropdown-item disabled" href="/tour">TOUR & TRAVELS</a></li>
                            <li><a className="dropdown-item" href="/flight">Flight Booking</a></li>
                            <li><a className="dropdown-item" href="/bus">Bus Booking</a></li>
                            <li><a className="dropdown-item" href="/hotel">Hotel Booking</a></li>
                            <li><a className="dropdown-item disabled" href="/special">SPECIAL SERVICES</a></li>
                            <li><a className="dropdown-item" href="/cms">CMS</a></li>
                            <li><a className="dropdown-item" href="/creditpay">Ceadit Pay</a></li>
                            <li><a className="dropdown-item" href="/mutual">Mutual Fund</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="/contact">
                        Contact Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="/">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
    )
}

export function Compontent(props:any){
    return(
        
        <div className={props.class}>
            <div className={props.className1} >
            <h6>{props.h6}</h6>   
            <h1 >{props.h1}</h1>
            <h4>{props.h4} </h4>
            <p>{props.p} </p>
            <p>{props.p1} </p>
            <div>
                <a className='log p-3' href="/">{props.a} </a>
                <a className='login p-3 ' href="/">{props.a1} </a>
            </div>
            </div>
            <div className={props.className}>
            <img className="img-fluid" src={props.img} alt="." />
            </div>
        </div>

    )
}

export function Atm(props:any){
    return(
        <div className={props.className}>
            <img className='img-fluid ' src={props.img} alt='.' />
            <div>
                <h2 >{props.h1}</h2>
                <h6>{props.h4}</h6> 
                <p>{props.p} </p> 
            </div>
            <a  href={props.href}>{props.a}</a>
        </div>
    )
}
export function Finance(props:any){
    return(
         <div className='row mx-0 finance px-0 mx-0'>
            <div className={props.className}>
                <img className='img-fluid' src={props.img} alt='.'/>
            </div>
            <div className={props.className1}>
                <h1>{props.h1}</h1>
                <h4 className='my-3'>{props.h3}</h4>
                <p className='my-5 '>{props.p}</p>
                <h3 className=' fw-bold my-3'>{props.h2}</h3>
                <ul>
                    <li>{props.li}</li>
                    <li>{props.li1}</li>
                </ul>
                <div className='col-md-12'>
                    <div className='row m-4'>
                    <div className='col-md-4 col-6'>
                        <h2>{props.h11}</h2>
                        <p>{props.p1}</p>
                    </div>
                    <div className='col-md-4 col-6'>
                        <h2>{props.h12}</h2>
                        <p>{props.p12}</p>
                    </div>
                    <div className='col-md-4'>
                        <h2>{props.h13}</h2>
                        <p>{props.p13}</p>
                    </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}
export function Choose( props:any){
    return(
        <div className={props.class}>
            <i className={props.in}></i>
            <div>
                <h5>{props.h5}</h5>
                <p>{props.p}
                </p>
            </div>
        </div>
    )
}

export function Customer(props:any){
    return(
         <div className={props.className}>
                <h1>{props.h1}</h1>
                <h4>{props.h4}</h4>
                <p>{props.p}</p>
        </div>
    )
}

export function Playstore(props:any){
    return(
        <div className='row my-5'>
            <div className='col-md-6'>
                <img className='img-fluid' src={props.img} alt='.'/>
            </div>
            <div className='col-md-6 my-5  store'>
                <h1>{props.h1}</h1>
                <h6>{props.h6} </h6>
                <img className='img-fluid' src={props.img1} alt='.' />
            </div>
        </div>
    )
}

export function Bank(props:any){
    return(
            <div className={props.class}>
                <p>{props.p}</p>
                <img className='img-fluid' src={props.img} alt='.' />
                <div>
                    <h5>{props.h5}</h5>
                    <p>{props.p1}</p>
                </div>
            </div>
    )
}

export function Founders(props:any){
    return(
        <div className={props.className}>
            <div className="card" >
                <img className="card-img-top mx-auto " src={props.img} alt="." />
                <div className="card-body">
                    <h5 className="card-title">{props.h5}</h5>
                    <p className='card-text found'>{props.p}</p>
                    <p className="card-text">{props.p1}</p>
                    <i className={props.icon}></i>
                    </div>
                </div>
        </div>
    )
}

export function MicroATM(props:any){
    return(
        <div className={props.class}>
            <div className={props.className}>
                <h3>{props.h3}</h3>
                <h6 className='fw-bold py-2'>{props.h6}</h6>
                <p>{props.p}</p>
                <h4 className='fw-bold py-2'>{props.h4}</h4>
                <ul>
                    <li>{props.li}</li>
                    <li>{props.li1}</li>
                    <li>{props.li2}</li>
                </ul>  
            </div>
            <div className={props.className1}>
                <img className='img-fluid' src={props.img} alt='.' />
            </div>
        </div>
    )
}

export function Atmlist(props:any){
    return(
            <div className={props.className}>
                <h2>{props.h3}</h2>
                <ul>
                    <li>{props.li}</li>
                    <li>{props.li1}</li>
                    <li>{props.li2}</li>
                    <li>{props.li3}</li>
                    <li>{props.li4}</li>
                    <li>{props.li5}</li>
                    <li>{props.li6}</li>
                </ul>
            </div>
    )
}

export function Frequently(props:any){
    return(
        <div>
            <button className=" fw-bold button-collapse text-start col-12 p-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
            <i className="fa-solid fa-angles-right"></i>    {props.button}
            </button>
            <div >
            <div className="collapse collapse-horizontal" id="collapseWidthExample">
                <div className="card card-body" >
                {props.cardbody}
                </div>
            </div>
            </div>
        </div>
    )
}

export function Footer(props:any){
    return(
        <div className='footer py-5 px-3'>
            <div className='row'>
            <div className='col-md-3'>
                <img className='img-fluid col-3 mb-3' src={'https://www.paype.co.in/static/media/Paype%20circle.d66c49586b04e5d30bff.png'} alt='.' />
                <p className='my-3'>PayPe Pvt. Ltd. was founded in 2022 with the aim of transcending the gap between physical and digital payments, thus enabling users to perform digital financial transactions using cash.</p>
            </div>
            <div className='col-md-3 info my-5'>
                <h5>OUR INFORMATION</h5>
                <ul >
                    <li><a href='/about'>About us</a></li>
                    <li><a href='/service'>Service</a></li>
                    <li><a href='/contact'>Contact us</a></li>
                </ul>
            </div>
            <div className='col-md-3 my-5 info'>
                <h5>HELP CENTRE</h5>
                <ul >
                    <li><a href='/'>Privacy Policy</a></li>
                    <li><a href='/'>Refund Policy</a></li>
                    <li><a href='/'>Term and Conditions</a></li>
            </ul>
        </div>
        <div className='col-md-3'>
            <div className='row'>
                <div className='col-12'>
                    <h5>CORPORATE OFFICE:</h5>
                    <p>No. 11/4, Pooja Garden,<br />
                        Kalapatti Main Road,<br />
                        Civil Aerodrome Post,<br />
                        Coimbatore – 641014,<br />
                        Tamil Nadu.
                        </p>
                </div>
                <div className='col-12'>
                    <h5>REGISTERED ADDRESS:</h5>
                    <p>No.278. Periyar Nagar,<br />
                    Railway Junction Road,<br />
                    Rajagopalapuram Post,<br />
                    Pudukkottai – 622003,<br />
                    Tamil Nadu.</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}