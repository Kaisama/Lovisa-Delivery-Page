import React from 'react'
import { AiOutlineFileText } from "react-icons/ai";

const Delivery = () => {
  return (
    <div style={{ marginLeft:"10rem",marginRight:"10rem",marginTop:"3rem",letterSpacing:"0.5px" }}>
        <h2 style={{
          fontSize:"2.2rem",fontWeight:"600", marginBottom:"1rem"

        }}>Delivery</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' ,padding:"2px"}}>
          {/* Content for the first column */}
          <div>
            {/* Add your content here */}
            <h2 style={{ fontSize: "17px", fontWeight: "600",marginBottom:"1rem" }}>Delivery FAQs</h2>
            <div style={{}}>
              <p style={{fontSize:"15px",marginBottom:".75rem" ,display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"18px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>My order is being returned to the sender, what happens now?</p>
              <hr style={{ width: "calc(100% - 5rem)", marginBottom: ".5rem" }} />
            </div>
            <div>
              <p style={{fontSize:"15px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"18px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>How can I track my order?</p>
              <hr style={{ width: "calc(100% - 5rem)", marginBottom: ".5rem" }} />
            </div>
            <div>
              <p style={{fontSize:"15px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"18px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>Why was my delivery returned to sender?</p>
              <hr style={{ width: "calc(100% - 5rem)", marginBottom: ".5rem" }} />
            </div>
            <div>
              <p style={{fontSize:"15px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"18px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>Why have I not received my order yet?</p>
              <hr style={{ width: "calc(100% - 5rem)",  marginBottom: ".5rem"}} />
            </div>
            <div>
              <p style={{fontSize:"15px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"18px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>I need to change my delivery address.</p>
            </div>
          </div>
          {/* Content for the second column */}
          <div>
            {/* Add your content here */}
            <h2 style={{ fontSize: "17px", fontWeight: "600",marginBottom:"1rem" }}>Delivery Timeframes</h2>
            <div>
              <p style={{fontSize:"15px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"18px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>United Kingdom Shipping & Delivery</p>
              <hr style={{ width: "calc(100% - 6.5rem)",marginBottom: ".5rem" }} />
            </div>
            <div>
              <p style={{fontSize:"15px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"18px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>Switzerland Shipping & Delivery</p>
              <hr style={{ width: "calc(100% - 6.5rem)", marginBottom: ".5rem" }} />
            </div>
            <div>
              <p style={{fontSize:"15px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"18px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>South Africa Shipping & Delivery</p>
              <hr style={{ width: "calc(100% - 6.5rem)", marginBottom: ".5rem" }} />
            </div>
            <div>
              <p style={{fontSize:"15px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"18px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>Singapore & Malaysia Shipping & Delivery</p>
              <hr style={{ width: "calc(100% - 6.5rem)",marginBottom: ".5rem" }} />
            </div>
            <div>
              <p style={{fontSize:"15px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"18px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>United States of America & Canada Shipping & Delivery</p>
              <hr style={{ width: "calc(100% - 6.5rem)", marginBottom: ".5rem" }} />
            </div>
            <div>
              <p style={{fontSize:"15px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"18px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>Europe Shipping & Delivery</p>
              <hr style={{ width: "calc(100% - 6.5rem)",marginBottom: ".5rem" }} />
            </div>
           <div style={{marginTop:"1.6rem" }}>
           <button style={{
                padding:".7rem ",
                color:"white",
                backgroundColor:"#ffcccc",
                 border:"none",
                 borderRadius:"5px",
                 width:"8rem",
                 fontSize:"13px"
                 }}>See all 7 articles
            </button>
           </div>
          </div>
        </div>


        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' ,padding:"2px", marginTop:"5.5rem"}}>
          {/* Content for the first column */}
          <div>
            {/* Add your content here */}
            <h2 style={{ fontSize: "17px", fontWeight: "600",marginBottom:"1rem" }}>Click and Collect</h2>
            <div style={{}}>
              <p style={{fontSize:"15px",marginBottom:".75rem" ,display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"18px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>Where is my Click and Collect order? I haven't received a notification.</p>
              <hr style={{ width: "calc(100% - 3.6rem)", marginBottom: ".5rem"}} />
            </div>
            <div>
              <p style={{fontSize:"15px",marginBottom:".75rem",marginTop:".75rem",display:"flex",alignItems:"center", cursor:"pointer"}}><span style={{fontSize:"18px",display:"inline-block",marginRight:"0.5rem"}}><AiOutlineFileText /></span>What is the Click and Collect Process (AUS Only)?</p>
            </div>
          </div>
        </div>



    </div>
  )
}

export default Delivery