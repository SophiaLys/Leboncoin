import React, { useState } from "react";
import Cookies from "js-cookie";

import axios from "axios";

// 1. verifier token dans cookie
// 2. oui => vers publish
// 3. non => login

const Publish = () => {
  const token = Cookies.get("token");
};
export default Publish;
