import "./User.scss";
import { AccountComp } from "../../Components/AcccountComp/AccountComp";
import { useSelector } from "react-redux";
import { getUser } from "../../App/store";
import { useState } from "react";
export function User() {
  const user = useSelector(getUser);
  const [nameDiv, setNameDiv] = useState(false);

  function editName() {
    setNameDiv(true);
  }

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user.firstName+' '+user.lastName}
          </h1>
          <button className="edit-button" onClick={editName}>
            Edit Name
          </button>
        </div>
        <div className="accoutsSection">
          <h2 className="sr-only">Accounts</h2>
          <div className="accounts">
            <AccountComp />
          </div>
        </div>
        <div
          className="nameSelector"
          style={nameDiv ? { diplay: "flex" } : { display: "none" }}
        >
        <div className="modale">
          <div className="title">Edit Name</div>

          <div className="nomPrenom">
            <div className="prenomSection">
              <label htmlFor="prenom">prenom</label>
              <input type="text" id="prenom" placeholder={user} />
            </div>
            <div className="nomSection">
              <label htmlFor="nom">nom</label>
              <input id="nom" type="text"></input>
            </div>
          </div>
        </div>
        </div>
      </main>
    </>
  );
}
