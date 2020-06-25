import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Nav from './cmp/Nav';
import Info from './cmp/Info';
import Footer from './cmp/Footer';
import img1 from './images/kv_ces2020_index_05.jpg';
import img2 from './images/background-wind-green-blue-sky.jpg';
import car from './images/image-madaz.png';
import * as $ from 'jquery';
import triangle1 from './images/triangle_mask_bottom_1.png';
import triangle2 from './images/triangle_mask_top.png';

// window.onload = function () {
// var canvas = document.querySelector("#scene"),
//         ctx = canvas.getContext("2d"),
//         particles = [],
//         amount = 0,
//         mouse = {x:0,y:0},
//         radius = 1;

//     var colors = ["#468966","#FFF0A5", "#FFB03B","#B64926", "#8E2800"];

//     var copy = document.querySelector("#copy");

//     var ww = canvas.width = window.innerWidth;
//     var wh = canvas.height = window.innerHeight;

//     function Particle(x,y){
//         this.x =  Math.random()*ww;
//         this.y =  Math.random()*wh;
//         this.dest = {
//             x : x,
//             y: y
//         };
//         this.r =  Math.random()*5 + 2;
//         this.vx = (Math.random()-0.5)*20;
//         this.vy = (Math.random()-0.5)*20;
//         this.accX = 0;
//         this.accY = 0;
//         this.friction = Math.random()*0.05 + 0.94;

//         this.color = colors[Math.floor(Math.random()*6)];
//     }

//     Particle.prototype.render = function() {


//         this.accX = (this.dest.x - this.x)/1000;
//         this.accY = (this.dest.y - this.y)/1000;
//         this.vx += this.accX;
//         this.vy += this.accY;
//         this.vx *= this.friction;
//         this.vy *= this.friction;

//         this.x += this.vx;
//         this.y +=  this.vy;

//         ctx.fillStyle = this.color;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
//         ctx.fill();

//         var a = this.x - mouse.x;
//         var b = this.y - mouse.y;

//         var distance = Math.sqrt( a*a + b*b );
//         if(distance<(radius*70)){
//             this.accX = (this.x - mouse.x)/100;
//             this.accY = (this.y - mouse.y)/100;
//             this.vx += this.accX;
//             this.vy += this.accY;
//         }

//     }

//     function onMouseMove(e){
//         mouse.x = e.clientX;
//         mouse.y = e.clientY;
//     }

//     function onTouchMove(e){
//     if(e.touches.length > 0 ){
//       mouse.x = e.touches[0].clientX;
//       mouse.y = e.touches[0].clientY;
//     }
//     }

// function onTouchEnd(e){
//   mouse.x = -9999;
//   mouse.y = -9999;
// }

//     function initScene(){
//         ww = canvas.width = window.innerWidth;
//         wh = canvas.height = window.innerHeight;

//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         ctx.font = "bold "+(ww/10)+"px sans-serif";
//         ctx.textAlign = "center";
//         ctx.fillText('SHARP', ww/2, wh/2);

//         var data  = ctx.getImageData(0, 0, ww, wh).data;
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.globalCompositeOperation = "screen";

//         particles = [];
//         for(var i=0;i<ww;i+=Math.round(ww/150)){
//             for(var j=0;j<wh;j+=Math.round(ww/150)){
//                 if(data[ ((i + j*ww)*4) + 3] > 150){
//                     particles.push(new Particle(i,j));
//                 }
//             }
//         }
//         amount = particles.length;

//     }

//     function onMouseClick(){
//         radius++;
//         if(radius ===5){
//             radius = 0;
//         }
//     }

//     function render(a) {
//         requestAnimationFrame(render);
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         for (var i = 0; i < amount; i++) {
//             particles[i].render();
//         }
//     };

//     // copy.addEventListener("keyup", initScene);
//     window.addEventListener("resize", initScene);
//     window.addEventListener("mousemove", onMouseMove);
//     window.addEventListener("touchmove", onTouchMove);
//     window.addEventListener("click", onMouseClick);
//     window.addEventListener("touchend", onTouchEnd);
//     initScene();
//     requestAnimationFrame(render);
//   }
  

function getWindowDimensions() {
  const {innerWidth: width, innerHeight: height} = window;
  return {
    width,
    height,
  };
}

document.addEventListener('DOMContentLoaded', function () {
  // When the event DOMContentLoaded occurs, it is safe to access the DOM

  // When the user scrolls the page, execute myFunction
  window.addEventListener('scroll', myFunctionForSticky);
  window.addEventListener('resize', handleResize);
  // Get the navbar
  function handleResize() {
    return getWindowDimensions();
  }
  var navbar = document.getElementById('navbar');
  function myFunctionForSticky() {
    // console.log(window.pageYOffset);
    // if (window.pageYOffset >= 190) {
    //   navbar.classList.add('sticky');
    //   document.getElementById('product').classList.add('stickyColor');
    //   document.getElementById('l2').classList.add('stickyColor');
    //   document.getElementById('l3').classList.add('stickyColor');
    //   document.getElementById('l4').classList.add('stickyColor');
    //   document.getElementById('l5').classList.add('stickyColor');
    //   document.getElementById('l6').classList.add('stickyColor');
    //   document.getElementById('l7').classList.add('stickyColor');
    //   document.getElementById('l8').classList.add('stickyColor');
    //   document.getElementById('l9').classList.add('stickyColor');
    // } else {
    //   navbar.classList.remove('sticky');
    //   navbar.classList.add('nav');
    //   document.getElementById('product').classList.remove('stickyColor');
    //   document.getElementById('l2').classList.remove('stickyColor');
    //   document.getElementById('l3').classList.remove('stickyColor');
    //   document.getElementById('l4').classList.remove('stickyColor');
    //   document.getElementById('l5').classList.remove('stickyColor');
    //   document.getElementById('l6').classList.remove('stickyColor');
    //   document.getElementById('l7').classList.remove('stickyColor');
    //   document.getElementById('l8').classList.remove('stickyColor');
    //   document.getElementById('l9').classList.remove('stickyColor');
    // }

    const dimension = handleResize();
    // console.log(dimension);
    if (dimension.width > 768) {
      if (window.pageYOffset >= 625) {
        document.getElementById('idFixed').classList.add('idFixed');
        document.getElementById('idMove').classList.add('idMove');
      }
      if (window.pageYOffset < 500) {
        document.getElementById('idMove').classList.remove('IdMove'); 
        document.getElementById('idFixed').classList.remove('idFixed');
            
      }
      if (window.pageYOffset >= 200){
        document.getElementById('idTable').classList.add('idTable');
        document.getElementById('idCar').classList.add('idCar');
      }
      if (window.pageYOffset < 100){
        document.getElementById('idTable').classList.remove('idTable');
        document.getElementById('idCar').classList.remove('idCar');  
      }
      if (window.pageYOffset >= 900){
        document.getElementById('info1').classList.add('info1');
        document.getElementById('info2').classList.add('info2');
      }else{
        document.getElementById('info1').classList.remove('info1');
        document.getElementById('info2').classList.remove('info2');
      }
      if (window.pageYOffset < 600) {
        document.getElementById('idDivBg1').classList.add('zoom');
        }else{
          document.getElementById('idDivBg1').classList.remove('zoom');
        }
    }
  }
});

let posY = 0;
document.addEventListener('mousemove', (e) => {
  posY = e.y;
  // if (e.y <= 47 && e.pageY >= 180) {
  //   // console.log(posY);
  //   navbarStyleAdd();
  // }
});

function navbarStyleAdd() {
  var navbar = document.getElementById('navbar');
  navbar.classList.add('sticky');
  document.getElementById('product').classList.add('stickyColor');
  document.getElementById('l2').classList.add('stickyColor');
  document.getElementById('l3').classList.add('stickyColor');
  document.getElementById('l4').classList.add('stickyColor');
  document.getElementById('l5').classList.add('stickyColor');
  document.getElementById('l6').classList.add('stickyColor');
  document.getElementById('l7').classList.add('stickyColor');
  document.getElementById('l8').classList.add('stickyColor');
  document.getElementById('l9').classList.add('stickyColor');
  // document.getElementById('s2').classList.add('stickyColor');
  // document.getElementById('s3').classList.add('stickyColor');
  // document.getElementById('s4').classList.add('stickyColor');
  // document.getElementById('s5').classList.add('stickyColor');
}

function navbarStyleRemove() {
  var navbar = document.getElementById('navbar');
  if (posY > 47) {
    navbar.classList.remove('sticky');
    document.getElementById('product').classList.remove('stickyColor');
    document.getElementById('l2').classList.remove('stickyColor');
    document.getElementById('l3').classList.remove('stickyColor');
    document.getElementById('l4').classList.remove('stickyColor');
    document.getElementById('l5').classList.remove('stickyColor');
    document.getElementById('l6').classList.remove('stickyColor');
    document.getElementById('l7').classList.remove('stickyColor');
    document.getElementById('l8').classList.remove('stickyColor');
    document.getElementById('l9').classList.remove('stickyColor');
    // document.getElementById('s2').classList.remove('stickyColor');
    // document.getElementById('s3').classList.remove('stickyColor');
    // document.getElementById('s4').classList.remove('stickyColor');
    // document.getElementById('s5').classList.remove('stickyColor');
  }
}

function App() {
  const [mobile, setMobile] = useState(false);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  // console.log(windowDimensions);
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowDimensions.width < 786) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  });

  useEffect(() => {
    document.title = 'Sharp-SMA';
    document.body.classList.add('body');
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // setSeconds(seconds => seconds + 1);
  //     navbarStyleRemove();
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);

//   const onChangeBgL = () => {
//     // var url ="./images/background-wind-green-blue-sky.jpg";
//     var div = document.getElementById('idDivBg1');
//     if(div){
      
//     div.style.backgroundImage = `url(${img2})`;
    
//     console.log(img2)
//     }
//   };
//   const onChangeBgR = () => {
//     // var url ="./images/background-wind-green-blue-sky.jpg";
    
//     var div = document.getElementById('idDivBg1');
//     if(div){
//     div.style.backgroundImage = `url(${img1})`;
//     // div.classList.remove('fade');
//     // console.log(img2)
//     }
//   };
// useEffect(() =>{
//   setInterval(onChangeBgL, 3000);
//   setInterval(onChangeBgR, 6000);
// })

  return (
    <div>
      {/* <img src={img1}  alt="sharpsma" /> */}
      <div>
      {/* <img src={img1} alt="img1" /> */}
        <Router>
          <Nav />
          {/* <canvas id="scene"></canvas> */}
    {/* <input id="copy" type="text" value="Hello Codepen ♥" /> */}
          <Switch>
            <Route path="/Product"></Route>

            <Route path="/WhereToBuy"></Route>

            <Route path="/SharpTechnology"></Route>

            <Route path="/Resources"></Route>

            <Route path="/ContactUs"></Route>
          </Switch>
        </Router>
        {/* <a1 className="prev" onClick={onChangeBgL}>
          &#10094;
        </a1>
        <a1 className="next" onClick={onChangeBgR}>
          &#10095;
        </a1> */}
      </div>
      <div className="parent">
      <div id="idDivBg1" className="bg-img zoom "></div>
      </div>
      <div className="triangle1">
        <img src={triangle1} alt="triangle1" />
      </div>
      <div id="idDiv2" className="idDiv2">
        <div id="idFixed" className="panels">
          <div class="autoshowroom-title  autoshowroom-title-center">
            <h2 class="AutoshowroomTitle" style={{color: '#ec1d24'}}>
              WHY CHOOSE US{' '}
            </h2>
            <p>
              We are working hard to brings new advanced design interfaces to
              Joomla and WordPress that both beginners and experts will fall in
              love with{' '}
            </p>
          </div>
          <div style={{marginTop: '-20px'}}>
            <div id="idTable" className="idDisplay">
              <table className="mobTable" cellspacing="20">
                <tbody>
                  <tr>
                    <td className="locale-text" style={{width: '200px'}}>
                      <h3 >
                        <span
                          style={{
                            color: '#ec1d24',
                            fontSize: '30px',
                            fontWeight: '800',
                          }}                         
                        >
                          01.
                        </span>
                      </h3>
                      <h3>
                        HIGHLY-TRAINED STAFF
                      </h3>
                      <p  class="autoshowroom-description-process">
                        Default is 6 months Update &amp; Support. Furthermore,
                        you can extend support to 12 months
                      </p>
                    </td>
                    <td className="locale-text" style={{width: '300px'}}>
                      <span
                        style={{
                          color: '#ec1d24',
                          fontSize: '30px',
                          fontWeight: '800',
                        }}
                        class="autoshowroom-number-process"
                      >
                        02.
                      </span>
                      <h3 class="autoshowroom-name-process">
                        FAST &amp; EFFECTIVE SERVICE
                      </h3>
                      <p class="autoshowroom-description-process">
                        Default is 6 months Update &amp; Support. Furthermore,
                        you can extend support to 12 months
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="locale-text" style={{width: '300px'}}>
                      <span
                        style={{
                          color: '#ec1d24',
                          fontSize: '30px',
                          fontWeight: '800',
                        }}
                        class="autoshowroom-number-process"
                      >
                        03.
                      </span>
                      <h3 class="autoshowroom-name-process">SPECIALS</h3>
                      <p class="autoshowroom-description-process">
                        We support to customize minor request as javascript
                        conflict, css issue, etc
                      </p>
                    </td>
                    <td className="locale-text" style={{width: '300px'}}>
                      <span
                        style={{
                          color: '#ec1d24',
                          fontSize: '30px',
                          fontWeight: '800',
                        }}
                        class="autoshowroom-number-process"
                      >
                        04.
                      </span>
                      <h3 class="autoshowroom-name-process">24/7 SUPPORT</h3>
                      <p class="autoshowroom-description-process">
                        We support to customize minor request as javascript
                        conflict, css issue, etc
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="idCar" className="idDisplay transformCar" style={{float: 'right'}}>
              <img className="mobCar" src={car} alt="triangle" />
            </div>
          </div>
        </div>
        <Info />
      </div>
      {/* <div className="bg-img2">
        <div className="triangle2">
          <img src={triangle2} alt="triangle2" />
        </div>
        <div style={{textAlign: 'center'}}>
          <h1
            style={{
              color: 'white',
              fontFamily: 'Open Sans',
              lineHeight: '1.05em',
              fontSize: '3.5em',
              fontWeight: '100',
              // marginTop:"10%"
            }}
          >
            <span>
              "Looking for Reliable
              <br />
              LCD Partner?
            </span>
          </h1>
          <div style={{height: '50px'}}></div>
          <button class="snip1099 red">
            <span>Contact</span>
            <i class="ion-android-arrow-forward"></i>
          </button>
          <div style={{height: '100px'}}></div>
        </div>
      </div> */}

      {!mobile ? (
        <div>
          <Router>
            <Footer />
            <Switch>
              <Route path="/Product"></Route>

              <Route path="/WhereToBuy"></Route>

              <Route path="/SharpTechnology"></Route>

              <Route path="/Resources"></Route>

              <Route path="/ContactUs"></Route>
            </Switch>
          </Router>
        </div>
      ) : null}
    </div>
  );
}

export default App;
