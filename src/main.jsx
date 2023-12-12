import { Canvas } from '@react-three/fiber';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ParticleRing from './ParticleRing';

function Overlay() {
  return <>
    <div>
            
            <div
            class="popups"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              padding: 40,
              pointerEvents: "none",
              color: "white",

              
            }}>
                <div class=" aboutPopup background"
                    style={{
                        width: "90vw",
                        height: "90vh",
                        borderRadius: "3px",
                        padding: "10px",
                        
                    }}>
                <div>
                  
                  <div class="hheader">DOCK AI</div>
                   
                   <div style={{fontFamily: "Helvetica Neue", fontSize: "15px", fontWeight: "200", textAlign: "center"}}>internet aggregator</div> 
                </div>
                </div>
            </div>
                
            
    
                </div>
    
            
          <footer style={{ position: "absolute", bottom: 20, right: 20, display: "flex", flexDirection: "row"}}>
            <ul style={{ flex: "1 1 0%", fontSize: 12, lineHeight: "1em", textAlign: "right", color: "white" }}>
              <li><a href="mailto:yourdockai@proton.me">CONTACT</a></li>
            </ul>
        
          </footer>
  </>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <ParticleRing />
  <Overlay />
  </>
  
  ,
);
