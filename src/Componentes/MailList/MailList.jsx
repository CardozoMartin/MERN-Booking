import'./mail.css'

const MailList = () => {
  return (
    <div className='email'>
        <h1 className='mailTitle'>Save time, save money</h1>
        <span className="mailDesc">Sing up and well send the best deals to you</span>
        <div className="mailInputContainer">
            <input type="text" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList