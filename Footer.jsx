import React from "react";
function Footer(){
  var cur_yr = new Date().getFullYear();
  return (
  <footer>
    <p>Copyright @ {cur_yr}</p>
  </footer>

    );
}
export default Footer;