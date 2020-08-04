import React, { useState } from "react";
import Cookies from "js-cookie";

import axios from "axios";

import { useHistory, Redirect, Link } from "react-router-dom";

const Login = ({ setUser }) => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://leboncoin-api.herokuapp.com/user/log_in",
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        // Sauvegarder le token dans un Cookie
        Cookies.set("token", response.data.token);
        // Remplacer le bouton "se connecter" par "se déconnecter"
        setUser({ token: response.data.token });

        // Rediriger l'utilisateur vers la homepage
        history.push("/");
      }
    } catch (error) {
      if (error.response.status === 401) {
        alert("Mauvais email et/ou mot de passe");
      }
    }
  };
  return (
    <div>
      <div className="containerform">
        <h1>Se connecter</h1>
        <form onSubmit={handleSubmit} className="inscription">
          <p>Email</p>
          <input
            placeholder="Email"
            type="text"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <br />

          <p>Mot de passe</p>
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />

          <br />

          <button
            onClick={() => {
              // Requête vers le serveur pour se connecter
              const token = "token";

              // Sauvegarder le token dans un Cookie
              Cookies.set("token", token);
              // Remplacer le bouton "se connecter" par "se déconnecter"
              setUser({ token: token });

              // Rediriger l'utilisateur vers la homepage
              history.push("/");
            }}
          >
            Se connecter
          </button>
        </form>
        <div>
          <h3>Vous n'avez pas de compte?</h3>
          <button>
            <Link to="/signup">S'enregistrer</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
