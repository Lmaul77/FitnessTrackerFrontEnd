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
          <h6>COSMETIC LINKS: THEY DO NOT WORK</h6>
          <ul class="footer-links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">
                Contribute
              </a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <p class="copyright-text">
            Fake Copyright &copy; by
            <a href="#">Lucas and Garrett</a>.
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
