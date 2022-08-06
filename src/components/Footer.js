import React from "react";

const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <h6>About</h6>
          <p class="text-justify">
            FITNESS TRACKER. Hopefully this works and so do you.
          </p>
          <h6>LINKS</h6>
          <ul class="footer-links">
            <li>
              <a href="http://scanfcode.com/about/">About Us</a>
            </li>
            <li>
              <a href="http://scanfcode.com/contact/">Contact Us</a>
            </li>
            <li>
              <a href="http://scanfcode.com/contribute-at-scanfcode/">
                Contribute
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a>
            </li>
            <li>
              <a href="http://scanfcode.com/sitemap/">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <p class="copyright-text">
            Copyright &copy; 2017 All Rights Reserved by
            <a href="#">Scanfcode</a>.
          </p>

          <ul class="social-icons">
            <li>
              <a class="facebook" href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a class="twitter" href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a class="dribbble" href="#">
              <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a class="linkedin" href="#">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
