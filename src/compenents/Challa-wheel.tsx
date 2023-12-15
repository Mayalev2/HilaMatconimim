import "../PhotoGallery.css"
import React, { useEffect, useRef, useState } from "react";
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { createGlobalStyle } from 'styled-components';
interface Props{
  chalot: string[]
}
 function Challawheel({chalot}:Props) {
  const { load } = useGlobalAudioPlayer();
    const [isClicked, setClick] = useState(false);
    const [deg, setDeg] = useState("0deg");
    const [isStart, setStart] = useState(false);
    const [isfinish, setfinish] = useState(false);
    const isFinishRef = useRef(true);
    const [isConfeti, setConfeti] = useState(false);
    const [challaWinner, setChalla] = useState("");
    const [random, setRandom] = useState(6955);
    const chalotName = ['חלה עגולה','חלת דג','חצי שומשום ','חלה סינית','חלה קלאסית','חלת לב'];
    let arrSrc = chalot;


 
    for(let i= 0 ; i< chalot.length; i++){
      arrSrc[i] = new URL(`/src/assets/images/chalot/nobg/challa${i+1}.png`, import.meta.url).href
    }    
    
    const letsSpin = () => {
        var x = 964; //min value
        var y = 9999; //max value
    
        var deg1 = Math.floor(Math.random() * (x - y)) + y;
        setClick(true);
        setDeg(deg1+"deg")
    }
    const clickArm = (event:any) =>{
      if(isFinishRef.current){
        isFinishRef.current =false;

              let rnd =Math.floor(Math.random() * chalot.length);
        setRandom(rnd);  
        document.documentElement.style.setProperty('--topWin',`${rnd * -96 - 6655}%`);
        setStart(true);
        setConfeti(false);
        setfinish(false);
        setChalla("");      

        load('/src/assets/mixkit-bike-wheel-spinning-1613.wav', {
          autoplay: true
        });
      //   setTimeout(function(){
      //     setConfeti(false);

      // }, 25000);
      setTimeout(function(){
        setStart(false);
        setfinish(true);
        setConfeti(true);
        console.log(chalotName)
        setChalla(chalotName[rnd]);
        isFinishRef.current =true;
    } , 14000);
      
      }
    }
    // const imgUrl = new URL(`/src/assets/images/cardImg/${imgSrc}`, import.meta.url).href

       return (        
         <>
         
{
/* <div className={`confettiHerePlease dollarDollarBillYall moreMoneyMoreProblems ${isConfeti ? "": "noneCnfety"}`}>

  <div className="dollar-49"></div>
  <div className="dollar-48"></div>
  <div className="dollar-47"></div>
  <div className="dollar-46"></div>
  <div className="dollar-45"></div>
  <div className="dollar-44"></div>
  <div className="dollar-43"></div>
  <div className="dollar-42"></div>
  <div className="dollar-41"></div>
  <div className="dollar-40"></div>
  <div className="dollar-39"></div>
  <div className="dollar-38"></div>
  <div className="dollar-37"></div>
  <div className="dollar-36"></div>
  <div className="dollar-35"></div>
  <div className="dollar-34"></div>
  <div className="dollar-33"></div>
  <div className="dollar-32"></div>
  <div className="dollar-31"></div>
  <div className="dollar-30"></div>
  <div className="dollar-29"></div>
  <div className="dollar-28"></div>
  <div className="dollar-27"></div>
  <div className="dollar-26"></div>
  <div className="dollar-25"></div>
  <div className="dollar-24"></div>
  <div className="dollar-23"></div>
  <div className="dollar-22"></div>
  <div className="dollar-21"></div>
  <div className="dollar-20"></div>
  <div className="dollar-19"></div>
  <div className="dollar-18"></div>
  <div className="dollar-17"></div>
  <div className="dollar-16"></div>
  <div className="dollar-15"></div>
  <div className="dollar-14"></div>
  <div className="dollar-13"></div>
  <div className="dollar-12"></div>
  <div className="dollar-11"></div>
  <div className="dollar-10"></div>
  <div className="dollar-9"></div>
  <div className="dollar-8"></div>
  <div className="dollar-7"></div>
  <div className="dollar-6"></div>
  <div className="dollar-5"></div>
  <div className="dollar-4"></div>
  <div className="dollar-3"></div>
  <div className="dollar-2"></div>
  <div className="dollar-1"></div>
  <div className="dollar-0"></div>
  <div className="coin-30"></div>
  <div className="coin-29"></div>
  <div className="coin-28"></div>
  <div className="coin-27"></div>
  <div className="coin-26"></div>
  <div className="coin-25"></div>
  <div className="coin-24"></div>
  <div className="coin-23"></div>
  <div className="coin-22"></div>
  <div className="coin-21"></div>
  <div className="coin-20"></div>
  <div className="coin-19"></div>
  <div className="coin-18"></div>
  <div className="coin-17"></div>
  <div className="coin-16"></div>
  <div className="coin-15"></div>
  <div className="coin-14"></div>
  <div className="coin-13"></div>
  <div className="coin-12"></div>
  <div className="coin-11"></div>
  <div className="coin-10"></div>
  <div className="coin-9"></div>
  <div className="coin-8"></div>
  <div className="coin-7"></div>
  <div className="coin-6"></div>
  <div className="coin-5"></div>
  <div className="coin-4"></div>
  <div className="coin-3"></div>
  <div className="coin-2"></div>
  <div className="coin-1"></div>
  <div className="coin-0"></div>
  <div className="confetti-400"></div>
  <div className="confetti-399"></div>
  <div className="confetti-398"></div>
  <div className="confetti-397"></div>
  <div className="confetti-396"></div>
  <div className="confetti-396"></div>
  <div className="confetti-394"></div>
  <div className="confetti-393"></div>
  <div className="confetti-392"></div>
  <div className="confetti-391"></div>
  <div className="confetti-390"></div>
  <div className="confetti-389"></div>
  <div className="confetti-388"></div>
  <div className="confetti-387"></div>
  <div className="confetti-386"></div>
  <div className="confetti-385"></div>
  <div className="confetti-384"></div>
  <div className="confetti-383"></div>
  <div className="confetti-382"></div>
  <div className="confetti-381"></div>
  <div className="confetti-380"></div>
  <div className="confetti-379"></div>
  <div className="confetti-378"></div>
  <div className="confetti-377"></div>
  <div className="confetti-376"></div>
  <div className="confetti-375"></div>
  <div className="confetti-374"></div>
  <div className="confetti-373"></div>
  <div className="confetti-372"></div>
  <div className="confetti-371"></div>
  <div className="confetti-370"></div>
  <div className="confetti-369"></div>
  <div className="confetti-368"></div>
  <div className="confetti-367"></div>
  <div className="confetti-366"></div>
  <div className="confetti-365"></div>
  <div className="confetti-364"></div>
  <div className="confetti-363"></div>
  <div className="confetti-362"></div>
  <div className="confetti-361"></div>
  <div className="confetti-360"></div>
  <div className="confetti-359"></div>
  <div className="confetti-358"></div>
  <div className="confetti-357"></div>
  <div className="confetti-356"></div>
  <div className="confetti-355"></div>
  <div className="confetti-354"></div>
  <div className="confetti-353"></div>
  <div className="confetti-352"></div>
  <div className="confetti-351"></div>
  <div className="confetti-350"></div>
  <div className="confetti-349"></div>
  <div className="confetti-348"></div>
  <div className="confetti-347"></div>
  <div className="confetti-346"></div>
  <div className="confetti-345"></div>
  <div className="confetti-344"></div>
  <div className="confetti-343"></div>
  <div className="confetti-342"></div>
  <div className="confetti-341"></div>
  <div className="confetti-340"></div>
  <div className="confetti-339"></div>
  <div className="confetti-338"></div>
  <div className="confetti-337"></div>
  <div className="confetti-336"></div>
  <div className="confetti-335"></div>
  <div className="confetti-334"></div>
  <div className="confetti-333"></div>
  <div className="confetti-332"></div>
  <div className="confetti-331"></div>
  <div className="confetti-330"></div>
  <div className="confetti-329"></div>
  <div className="confetti-328"></div>
  <div className="confetti-327"></div>
  <div className="confetti-326"></div>
  <div className="confetti-325"></div>
  <div className="confetti-324"></div>
  <div className="confetti-323"></div>
  <div className="confetti-322"></div>
  <div className="confetti-321"></div>
  <div className="confetti-320"></div>
  <div className="confetti-319"></div>
  <div className="confetti-318"></div>
  <div className="confetti-317"></div>
  <div className="confetti-316"></div>
  <div className="confetti-315"></div>
  <div className="confetti-314"></div>
  <div className="confetti-313"></div>
  <div className="confetti-312"></div>
  <div className="confetti-311"></div>
  <div className="confetti-310"></div>
  <div className="confetti-309"></div>
  <div className="confetti-308"></div>
  <div className="confetti-307"></div>
  <div className="confetti-306"></div>
  <div className="confetti-305"></div>
  <div className="confetti-304"></div>
  <div className="confetti-303"></div>
  <div className="confetti-302"></div>
  <div className="confetti-301"></div>
  <div className="confetti-300"></div>
  <div className="confetti-299"></div>
  <div className="confetti-298"></div>
  <div className="confetti-297"></div>
  <div className="confetti-296"></div>
  <div className="confetti-296"></div>
  <div className="confetti-294"></div>
  <div className="confetti-293"></div>
  <div className="confetti-292"></div>
  <div className="confetti-291"></div>
  <div className="confetti-290"></div>
  <div className="confetti-289"></div>
  <div className="confetti-288"></div>
  <div className="confetti-287"></div>
  <div className="confetti-286"></div>
  <div className="confetti-285"></div>
  <div className="confetti-284"></div>
  <div className="confetti-283"></div>
  <div className="confetti-282"></div>
  <div className="confetti-281"></div>
  <div className="confetti-280"></div>
  <div className="confetti-279"></div>
  <div className="confetti-278"></div>
  <div className="confetti-277"></div>
  <div className="confetti-276"></div>
  <div className="confetti-275"></div>
  <div className="confetti-274"></div>
  <div className="confetti-273"></div>
  <div className="confetti-272"></div>
  <div className="confetti-271"></div>
  <div className="confetti-270"></div>
  <div className="confetti-269"></div>
  <div className="confetti-268"></div>
  <div className="confetti-267"></div>
  <div className="confetti-266"></div>
  <div className="confetti-265"></div>
  <div className="confetti-264"></div>
  <div className="confetti-263"></div>
  <div className="confetti-262"></div>
  <div className="confetti-261"></div>
  <div className="confetti-260"></div>
  <div className="confetti-259"></div>
  <div className="confetti-258"></div>
  <div className="confetti-257"></div>
  <div className="confetti-256"></div>
  <div className="confetti-255"></div>
  <div className="confetti-254"></div>
  <div className="confetti-253"></div>
  <div className="confetti-252"></div>
  <div className="confetti-251"></div>
  <div className="confetti-250"></div>
  <div className="confetti-249"></div>
  <div className="confetti-248"></div>
  <div className="confetti-247"></div>
  <div className="confetti-246"></div>
  <div className="confetti-245"></div>
  <div className="confetti-244"></div>
  <div className="confetti-243"></div>
  <div className="confetti-242"></div>
  <div className="confetti-241"></div>
  <div className="confetti-240"></div>
  <div className="confetti-239"></div>
  <div className="confetti-238"></div>
  <div className="confetti-237"></div>
  <div className="confetti-236"></div>
  <div className="confetti-235"></div>
  <div className="confetti-234"></div>
  <div className="confetti-233"></div>
  <div className="confetti-232"></div>
  <div className="confetti-231"></div>
  <div className="confetti-230"></div>
  <div className="confetti-229"></div>
  <div className="confetti-228"></div>
  <div className="confetti-227"></div>
  <div className="confetti-226"></div>
  <div className="confetti-225"></div>
  <div className="confetti-224"></div>
  <div className="confetti-223"></div>
  <div className="confetti-222"></div>
  <div className="confetti-221"></div>
  <div className="confetti-220"></div>
  <div className="confetti-219"></div>
  <div className="confetti-218"></div>
  <div className="confetti-217"></div>
  <div className="confetti-216"></div>
  <div className="confetti-215"></div>
  <div className="confetti-214"></div>
  <div className="confetti-213"></div>
  <div className="confetti-212"></div>
  <div className="confetti-211"></div>
  <div className="confetti-210"></div>
  <div className="confetti-209"></div>
  <div className="confetti-208"></div>
  <div className="confetti-207"></div>
  <div className="confetti-206"></div>
  <div className="confetti-205"></div>
  <div className="confetti-204"></div>
  <div className="confetti-203"></div>
  <div className="confetti-202"></div>
  <div className="confetti-201"></div>
  <div className="confetti-200"></div>
  <div className="confetti-199"></div>
  <div className="confetti-198"></div>
  <div className="confetti-197"></div>
  <div className="confetti-196"></div>
  <div className="confetti-196"></div>
  <div className="confetti-194"></div>
  <div className="confetti-193"></div>
  <div className="confetti-192"></div>
  <div className="confetti-191"></div>
  <div className="confetti-190"></div>
  <div className="confetti-189"></div>
  <div className="confetti-188"></div>
  <div className="confetti-187"></div>
  <div className="confetti-186"></div>
  <div className="confetti-185"></div>
  <div className="confetti-184"></div>
  <div className="confetti-183"></div>
  <div className="confetti-182"></div>
  <div className="confetti-181"></div>
  <div className="confetti-180"></div>
  <div className="confetti-179"></div>
  <div className="confetti-178"></div>
  <div className="confetti-177"></div>
  <div className="confetti-176"></div>
  <div className="confetti-175"></div>
  <div className="confetti-174"></div>
  <div className="confetti-173"></div>
  <div className="confetti-172"></div>
  <div className="confetti-171"></div>
  <div className="confetti-170"></div>
  <div className="confetti-169"></div>
  <div className="confetti-168"></div>
  <div className="confetti-167"></div>
  <div className="confetti-166"></div>
  <div className="confetti-165"></div>
  <div className="confetti-164"></div>
  <div className="confetti-163"></div>
  <div className="confetti-162"></div>
  <div className="confetti-161"></div>
  <div className="confetti-160"></div>
  <div className="confetti-159"></div>
  <div className="confetti-158"></div>
  <div className="confetti-157"></div>
  <div className="confetti-156"></div>
  <div className="confetti-155"></div>
  <div className="confetti-154"></div>
  <div className="confetti-153"></div>
  <div className="confetti-152"></div>
  <div className="confetti-151"></div>
  <div className="confetti-150"></div>
  <div className="confetti-149"></div>
  <div className="confetti-148"></div>
  <div className="confetti-147"></div>
  <div className="confetti-146"></div>
  <div className="confetti-145"></div>
  <div className="confetti-144"></div>
  <div className="confetti-143"></div>
  <div className="confetti-142"></div>
  <div className="confetti-141"></div>
  <div className="confetti-140"></div>
  <div className="confetti-139"></div>
  <div className="confetti-138"></div>
  <div className="confetti-137"></div>
  <div className="confetti-136"></div>
  <div className="confetti-135"></div>
  <div className="confetti-134"></div>
  <div className="confetti-133"></div>
  <div className="confetti-132"></div>
  <div className="confetti-131"></div>
  <div className="confetti-130"></div>
  <div className="confetti-129"></div>
  <div className="confetti-128"></div>
  <div className="confetti-127"></div>
  <div className="confetti-126"></div>
  <div className="confetti-125"></div>
  <div className="confetti-124"></div>
  <div className="confetti-123"></div>
  <div className="confetti-122"></div>
  <div className="confetti-121"></div>
  <div className="confetti-120"></div>
  <div className="confetti-119"></div>
  <div className="confetti-118"></div>
  <div className="confetti-117"></div>
  <div className="confetti-116"></div>
  <div className="confetti-115"></div>
  <div className="confetti-114"></div>
  <div className="confetti-113"></div>
  <div className="confetti-112"></div>
  <div className="confetti-111"></div>
  <div className="confetti-110"></div>
  <div className="confetti-109"></div>
  <div className="confetti-108"></div>
  <div className="confetti-107"></div>
  <div className="confetti-106"></div>
  <div className="confetti-105"></div>
  <div className="confetti-104"></div>
  <div className="confetti-103"></div>
  <div className="confetti-96"></div>
  <div className="confetti-101"></div>
  <div className="confetti-96"></div>
  <div className="confetti-99"></div>
  <div className="confetti-98"></div>
  <div className="confetti-97"></div>
  <div className="confetti-96"></div>
  <div className="confetti-96"></div>
  <div className="confetti-94"></div>
  <div className="confetti-93"></div>
  <div className="confetti-92"></div>
  <div className="confetti-91"></div>
  <div className="confetti-90"></div>
  <div className="confetti-89"></div>
  <div className="confetti-88"></div>
  <div className="confetti-87"></div>
  <div className="confetti-86"></div>
  <div className="confetti-85"></div>
  <div className="confetti-84"></div>
  <div className="confetti-83"></div>
  <div className="confetti-82"></div>
  <div className="confetti-81"></div>
  <div className="confetti-80"></div>
  <div className="confetti-79"></div>
  <div className="confetti-78"></div>
  <div className="confetti-77"></div>
  <div className="confetti-76"></div>
  <div className="confetti-75"></div>
  <div className="confetti-74"></div>
  <div className="confetti-73"></div>
  <div className="confetti-72"></div>
  <div className="confetti-71"></div>
  <div className="confetti-70"></div>
  <div className="confetti-69"></div>
  <div className="confetti-68"></div>
  <div className="confetti-67"></div>
  <div className="confetti-66"></div>
  <div className="confetti-65"></div>
  <div className="confetti-64"></div>
  <div className="confetti-63"></div>
  <div className="confetti-62"></div>
  <div className="confetti-61"></div>
  <div className="confetti-60"></div>
  <div className="confetti-59"></div>
  <div className="confetti-58"></div>
  <div className="confetti-57"></div>
  <div className="confetti-56"></div>
  <div className="confetti-55"></div>
  <div className="confetti-54"></div>
  <div className="confetti-53"></div>
  <div className="confetti-52"></div>
  <div className="confetti-51"></div>
  <div className="confetti-50"></div>
  <div className="confetti-49"></div>
  <div className="confetti-48"></div>
  <div className="confetti-47"></div>
  <div className="confetti-46"></div>
  <div className="confetti-45"></div>
  <div className="confetti-44"></div>
  <div className="confetti-43"></div>
  <div className="confetti-42"></div>
  <div className="confetti-41"></div>
  <div className="confetti-40"></div>
  <div className="confetti-39"></div>
  <div className="confetti-38"></div>
  <div className="confetti-37"></div>
  <div className="confetti-36"></div>
  <div className="confetti-35"></div>
  <div className="confetti-34"></div>
  <div className="confetti-33"></div>
  <div className="confetti-32"></div>
  <div className="confetti-31"></div>
  <div className="confetti-30"></div>
  <div className="confetti-29"></div>
  <div className="confetti-28"></div>
  <div className="confetti-27"></div>
  <div className="confetti-26"></div>
  <div className="confetti-25"></div>
  <div className="confetti-24"></div>
  <div className="confetti-23"></div>
  <div className="confetti-22"></div>
  <div className="confetti-21"></div>
  <div className="confetti-20"></div>
  <div className="confetti-19"></div>
  <div className="confetti-18"></div>
  <div className="confetti-17"></div>
  <div className="confetti-16"></div>
  <div className="confetti-15"></div>
  <div className="confetti-14"></div>
  <div className="confetti-13"></div>
  <div className="confetti-12"></div>
  <div className="confetti-11"></div>
  <div className="confetti-10"></div>
  <div className="confetti-9"></div>
  <div className="confetti-8"></div>
  <div className="confetti-7"></div>
  <div className="confetti-6"></div>
  <div className="confetti-5"></div>
  <div className="confetti-4"></div>
  <div className="confetti-3"></div>
  <div className="confetti-2"></div>
  <div className="confetti-1"></div>
  <div className="confetti-0"></div>
</div> */}
<div id="page">

<div id="content">

  <div id="slot-machine">

    <div id="slot-body">

      <div id="slot-block"></div>

      <div id="slot-frame"></div>

      <div id="slot-glaze-bottom"></div>

      <div id="slot-display">
        <div id="slot-overlay"></div>
        <div id="slot-overlay-line"></div>
        <div id="slot-credits" className={`${isfinish ? "win": ""}`}>{challaWinner}</div>
        <div id="slot-zeros">00000000000</div>
      </div>

      <div id="slot-wheels"> 
        <div id="wheel1" className="wheel d-flex flex-column"  style={{overflow:"hidden"}}>
          <div className="overlay"></div>
          {chalot.map((item, index) => 
          (
            <div   className={`divImgWheel ${isStart ? "animationSpin": isfinish ? "finishSpin" : ""}`} style={{top: isfinish ? `${random * -96 -6655}%` : "" }}> 
                         <img src={arrSrc[index]} /></div>          ))}
          {chalot.map((item, index) => 
          (
            <div   className={`divImgWheel ${isStart ? "animationSpin": isfinish ? "finishSpin" : ""}`} style={{top: isfinish ? `${random * -96 -6655}%` : "" }}> 
                          <img src={arrSrc[index]} /></div>      ))}
          {chalot.map((item, index) => 
          (
            <div   className={`divImgWheel ${isStart ? "animationSpin": isfinish ? "finishSpin" : ""}`} style={{top: isfinish ? `${random * -96 -6655}%` : "" }}> 
                         <img src={arrSrc[index]} /></div>          ))}
          {chalot.map((item, index) => 
          (
            <div   className={`divImgWheel ${isStart ? "animationSpin": isfinish ? "finishSpin" : ""}`} style={{top: isfinish ? `${random * -96 -6655}%` : "" }}> 
                         <img src={arrSrc[index]} /></div>          ))}
          {chalot.map((item, index) => 
          (
            <div   className={`divImgWheel ${isStart ? "animationSpin": isfinish ? "finishSpin" : ""}`} style={{top: isfinish ? `${random * -96 -6655}%` : "" }}> 
                         <img src={arrSrc[index]} /></div>          ))}
                    {chalot.map((item, index) => 
          (
            <div   className={`divImgWheel ${isStart ? "animationSpin": isfinish ? "finishSpin" : ""}`} style={{top: isfinish ? `${random * -96 -6655}%` : "" }}> 
                         <img src={arrSrc[index]} /></div>          ))}
          {chalot.map((item, index) => 
          (
            <div   className={`divImgWheel ${isStart ? "animationSpin": isfinish ? "finishSpin" : ""}`} style={{top: isfinish ? `${random * -96 -6655}%` : "" }}> 
                         <img src={arrSrc[index]} /></div>          ))}
          {chalot.map((item, index) => 
          (
            <div   className={`divImgWheel ${isStart ? "animationSpin": isfinish ? "finishSpin" : ""}`} style={{top: isfinish ? `${random * -96 -6655}%` : "" }}> 
                         <img src={arrSrc[index]} /></div>          ))}
          {chalot.map((item, index) => 
          (
            <div   className={`divImgWheel ${isStart ? "animationSpin": isfinish ? "finishSpin" : ""}`} style={{top: isfinish ? `${random * -96 -6655}%` : "" }}> 
                         <img src={arrSrc[index]} /></div>          ))}
          {chalot.map((item, index) => 
          (
            <div   className={`divImgWheel ${isStart ? "animationSpin": isfinish ? "finishSpin" : ""}`} style={{top: isfinish ? `${random * -96 -6655}%` : "" }}> 
                         <img src={arrSrc[index]} /></div>          ))}
                    {chalot.map((item, index) => 
          (
            <div   className={`divImgWheel ${isStart ? "animationSpin": isfinish ? "finishSpin" : ""}`} style={{top: isfinish ? `${random * -96 -6655}%` : "" }}> 
                         <img src={arrSrc[index]} /></div>          ))}
          {chalot.map((item, index) => 
          (
            <div   className={`divImgWheel ${isStart ? "animationSpin": isfinish ? "finishSpin" : ""}`} style={{top: isfinish ? `${random * -96 -6655}%` : "" }}> 
                         <img src={arrSrc[index]} /></div>          ))}
          {chalot.map((item, index) => 
          (
            <div   className={`divImgWheel ${isStart ? "animationSpin": isfinish ? "finishSpin" : ""}`} style={{top: isfinish ? `${random * -96 -6655}%` : "" }}> 
                         <img src={arrSrc[index]} /></div>          ))}
          {chalot.map((item, index) => 
          (
            <div   className={`divImgWheel ${isStart ? "animationSpin": isfinish ? "finishSpin" : ""}`} style={{top: isfinish ? `${random * -96 -6655}%` : "" }}> 
                         <img src={arrSrc[index]} /></div>          ))}
          {chalot.map((item, index) => 
          (
            <div   className={`divImgWheel ${isStart ? "animationSpin": isfinish ? "finishSpin" : ""}`} style={{top: isfinish ? `${random * -96 -6655}%` : "" }}> 
                         <img src={arrSrc[index]} /></div>          ))}
          {chalot.map((item, index) => 
          (
            <div   className={`divImgWheel ${isStart ? "animationSpin": isfinish ? "finishSpin" : ""}`} style={{top: isfinish ? `${random * -96 -6655}%` : "" }}> 
                         <img src={arrSrc[index]} /></div>          ))}
            </div>
        
      </div>

      <div id="slot-trigger" onClick={clickArm}  > 
        <div className={`arm ${isStart ? "animationArm": "animationNone"}`}>
          <div className={`knob ${isStart ? "animationknob": "animationNone"}`}></div>
        </div>
        <div className={`arm-shadow ${isStart ? "animationarm-shadow": "animationNone"}`}></div>
        <div className="ring1">
          <div className={`shadow ${isStart ? "animationshadow": "animationNone"}`}></div>
        </div>
        <div className="ring2">
          <div className={`shadow ${isStart ? "animationshadow": "animationNone"}`}></div>
        </div>
      </div>

    </div>

    <div id="slot-details">
      <div id="slot-top"></div>
      <div id="slot-bottom"></div>
    </div>
  </div>

</div>

</div>
         </>
       )
     }
     export default Challawheel;