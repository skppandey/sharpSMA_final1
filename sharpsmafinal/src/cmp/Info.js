import React, {useState,useEffect} from 'react';
import img2 from '../images/bg3.png';
import triangle1 from '../images/triangle_mask_bottom_1.png';
import triangle2 from '../images/triangle_mask_top.png';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

function Info() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    console.log(windowDimensions)
    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      if(windowDimensions.width < 768){
          return(
            <div id="idMove" style={{marginTop: '-20px'}}>
            <div className="triangle1">
              <img src={triangle1} alt="triangle1" />
            </div>
            <div>
              <div id="infoM1" className="infoM1">
                <span
                  className="infoSpan"
                  style={{backgroundColor: 'white', marginTop: '100px'}}
                >
                  <img src={img2} style={{width: '90%'}} alt="img2" />
                </span>
              </div>
              <div id="infoM2" className="infoM2">
                <span
                //   style={{
                //     width: '50%',
                //     marginTop: '0px',
                //   }}
                >
                  <h2
                    align="center"
                    style={{
                      fontFamily: 'Roboto',
                      fontWeight: 'normal',
                      color: '#dd3333',
                      fontWeight: 400,
                      lineHeight: 1.8,
                      transform: 'translateY(0) scale(1)',
                      width: '90%',
                    }}
                  >
                    Who we are
                  </h2>
                  <p
                    align="center"
                    style={{
                      marginBottom: '.65em',
                      fontFamily: 'verdana',
                      fontSize: '1em',
                      color: '#333',
                      fontWeight: 400,
                      lineHeight: 1.8,
                      width: '95%',
                    }}
                  >
                    At SECD, we live to help our customers find the right solution,
                    working side-by-side with you to deliver the support and services
                    you need to take your products to the next level. Our components
                    are designed for top performance and ease of integration, and are
                    continually re-envisioned to meet emerging market demand and take
                    advantage of the latest Sharp technology innovations. If you are
                    seeking an LCD, Sensor, Imaging, or Optoelectronics solution,
                    contact your local Sharp Representative and let us put the power
                    of Sharp to work for you.
                  </p>
                </span>
              </div>
            </div>
          </div>
          )
      }
  return (
    <div id="idMove" className="infoH">
      <div style={{height:'80px',backgroundColor:'black'}}>
        {/* <img src={triangle2} alt="triangle1" /> */}
      </div>
      <div>
        <div id="info1" className="idDisplay " style={{backgroundColor:'black'}} >
          <span
            className="infoSpan"
            style={{backgroundColor: 'white', marginTop: '100px'}}
          >
            <img className="transformCar" src={img2} style={{width: '90%'}} alt="img2" />
          </span>
        </div>
        <div id="info2" className="idDisplay transformCar" style={{backgroundColor:'black'}} >
          <span
            // style={{ backgroundColor:'white'
            // }}
          >
            <h2
              align="left"
              style={{
                fontFamily: 'Roboto',
                fontWeight: 'normal',
                color: '#dd3333',
                fontWeight: 400,
                lineHeight: 1.8,
                transform: 'translateY(0) scale(1)',
                width: '90%',
              }}
            >
              Who we are
            </h2>
            <p
              align="left"
              style={{
                marginBottom: '.65em',
                fontFamily: 'verdana',
                fontSize: '1em',
                color: 'white',
                fontWeight: 400,
                lineHeight: 1.8,
                width: '95%',
              }}
            >
              At SECD, we live to help our customers find the right solution,
              working side-by-side with you to deliver the support and services
              you need to take your products to the next level. Our components
              are designed for top performance and ease of integration, and are
              continually re-envisioned to meet emerging market demand and take
              advantage of the latest Sharp technology innovations. If you are
              seeking an LCD, Sensor, Imaging, or Optoelectronics solution,
              contact your local Sharp Representative and let us put the power
              of Sharp to work for you.
            </p>
          </span>
        </div>
      </div>
    </div>

    
  );
}
export default Info;
