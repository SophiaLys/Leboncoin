import React, { useState } from "react";
import Cookies from "js-cookie";

const Signup = () => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePseudoChange = (event) => {
    const value = event.target.value;
    setPseudo(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
    console.log(email, password);
  };
  return (
    <div className="containerform">
      <h1>Creer un compte</h1>
      <form onSubmit={handleSubmit} className="inscription">
        <p>Pseudo*</p>
        <input
          placeholder="Pseudo"
          type="text"
          name="pseudo"
          value={pseudo}
          onChange={handlePseudoChange}
        />
        <br />
        <p>Email*</p>
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <div className="password">
          <p>Mot de passe*</p>
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <p>Confirmer le mot de passe*</p>
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <br />
        <button
          onClick={() => {
            const token = "111";
            // Sauvegarder le token dans un Cookie
            Cookies.set("token", token);
            console.log(token);
          }}
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
};
export default Signup;
