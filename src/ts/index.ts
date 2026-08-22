import './../scss/index.scss';
import ScrollTo from './scrollto';
import ScrollSpy from './scroll-spy';
import CopyEmail from './copy-email';
import MobileNav from './mobile-nav';
import ScrollReveal from './scroll-reveal';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Smooth Scrolling
  ScrollTo.init();

  // Initialize Scroll Spy & Navbar State
  ScrollSpy.init();

  // Initialize Copy Email Helper
  CopyEmail.init();

  // Initialize Mobile Navigation
  MobileNav.init();

  // Initialize Scroll Reveal Animations
  ScrollReveal.init();
});
