import React from 'react'
import './header2.css'

function Header2() {
  return (
    <div className='div2' style={{ background:"black", height: '90vh', width: '100%' }}>
      <div className="card" style={{background:'black'}}>
        <div className="card-body" style={{color:'white',background:"black"}}>
          <h3>Real time changes</h3>
          <p className="card-text" style={{color:'white',background:"black"}}>See changes as they happen. With our platform, you can
          track every modification in real time. No more confusion
          about the latest version of your project. Say goodbye to
          the chaos of version control and embrace the simplicity of
          real-time updates.</p>
        </div>
        <div className="card-body1" style={{borderRadius:'15px',marginRight:'30px',width:'1000px',height:'300px',background:'linear-gradient(to top, #cc208e 0%, #6713d2 100%)'}}>
          
        </div>
      </div>
    </div>
  )
}

export default Header2