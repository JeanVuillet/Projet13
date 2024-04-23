import './User.scss'
import { AccountComp } from '../../Components/AcccountComp/AccountComp'
import { useSelector} from 'react-redux';
import { getUser } from '../../App/store';
export function User(){

    const user=useSelector(getUser);

 return(
    <>
    <main className='main bg-dark'>
    <div className="header">
        <h1>Welcome back
            <br/>
          {user}
        </h1>
        <button className="edit-button">Edit Name</button>
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