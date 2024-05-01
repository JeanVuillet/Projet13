import './AccountComp.scss';

export function AccountComp({header,amount,footer}){
    return(
    <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{header}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{footer}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
    </section>
    )
}