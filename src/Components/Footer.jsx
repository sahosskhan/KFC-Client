

const Footer = () => {
    return (
        <div>
          <footer className="footer p-10 bg-rose-300 text-base-content">
  <aside>
    <img className="w-[40%] h-[100%]" src="https://i.ibb.co/LdKJdhB/logo.png" alt="" />
    <p className="text-base"><span className="font-bold text-xl mt-5 text-red-600">Kentucky Fried Chicken</span><br/>Kushtia-7000, Khulna, Bangladesh. </p>
  </aside> 
  <nav>
    <header className="text-lg footer-title">Services</header> 
    <a className="link text-lg link-hover">Delivery</a> 
    <a className="link text-lg link-hover">Reservation</a> 
    <a className="link text-lg link-hover">Marketing</a> 
    <a className="link text-lg link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="text-lg footer-title">Branch</header> 
    <a className="link text-lg link-hover">Dhaka</a> 
    <a className="link text-lg link-hover">Rajshahi</a> 
    <a className="link text-lg link-hover">Chittagong</a> 
    <a className="link text-lg link-hover">America</a>
  </nav> 
  <nav>
    <header className="text-lg footer-title ">Policy</header> 
    <a className="link text-lg link-hover">Food policy</a> 
    <a className="link text-lg link-hover">Order policy</a>
    <a className="link text-lg link-hover">Adds policy</a> 
    <a className="link text-lg link-hover">Jobs policy</a>
  </nav>
  <nav className=" md:hidden">
    <header className="footer-title text-lg  ">Social</header> 
    <div className="grid grid-flow-col gap-4">
      <a><i className="text-4xl fa-brands fa-facebook"></i></a> 
      <a><i className="text-4xl fa-brands fa-square-instagram"></i></a> 
      <a> <i className="text-4xl fa-brands fa-x-twitter"></i></a>
      <a><i className="text-4xl fa-brands fa-linkedin"></i></a>
      <a><i className="text-4xl fa-brands fa-youtube"></i></a>
      <a ><i className="text-4xl fa-brands fa-square-whatsapp"></i></a>
    </div>
  </nav>
  
</footer>  
<footer className="footer footer-center text-lg p-4 bg-rose-300 text-base-content">
  <aside>
    <p>Copyright © 2023 - All right reserved by Kentucky Fried Chicken</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;