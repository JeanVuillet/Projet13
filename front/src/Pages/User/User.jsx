import './User.scss'
import { AccountComp } from '../../Components/AcccountComp/AccountComp'
export function User(){
 return(
    <>
    <main className='main bg-dark'>
    <div className="header">
        <h1>Welcome back
            <br/>
            Tonny
        </h1>
        <button class="edit-button">Edit Name</button>
    </div>
    <div className="accoutsSection">
        <h2 className='sr-only'>Accounts</h2>
        <div className="accounts">
            <AccountComp/>
        </div>
    </div>
    </main>
    </>
 )
}