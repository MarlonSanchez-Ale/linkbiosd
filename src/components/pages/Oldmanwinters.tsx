import Confetti from "react-confetti";
import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";
import logo_white_omw from '../../assets/images/Oldman Winters logo.jpg';
import LinkBio from "../elements/Linkbio";

export default function Oldmanwinters() {
  const [isConfettiVisible, setConfettiVisible] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setConfettiVisible(true);
    const timer = setTimeout(() => setConfettiVisible(false), 5000);
    return () => {
      clearTimeout(timer);
      setConfettiVisible(false);
    };
  }, []);

  const balloonAnimation = useSpring({
    transform: isConfettiVisible ? "translateY(0px)" : "translateY(-500px)",
    opacity: isConfettiVisible ? 1 : 0,
    config: { tension: 180, friction: 12 }
  });

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-bgoldmanwinters overflow-hidden">
      {/* Confetti component */}
      {isConfettiVisible && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}

      {/* Balloon animation */}
      {isConfettiVisible && (
        <animated.div style={{ ...balloonAnimation, position: "absolute", top: "100px", left: "50%" }} />
      )}

      <div className="w-full max-w-lg h-full max-h-[90vh] overflow-y-auto p-4 ">
        <LinkBio 
          Logo={logo_white_omw}
          Title="Marca líder en cosmética natural nicaragüense"
          Description="¿Aún no nos seguís?"
          UrlFacebook="https://www.facebook.com/oldmancwinters/"
          UrlInstagram="https://www.instagram.com/oldmanwinters_ni/"
          UrlTiktok="https://www.tiktok.com/@oldmanwinters_ni?is_from_webapp=1&sender_device=pc"
          UrlWhatsapp="https://wa.link/wns27v"
          UrlDirection="https://maps.app.goo.gl/Lc1AjFH4DD17kT9j7"
        />
      </div>
    </section>
  );
}
