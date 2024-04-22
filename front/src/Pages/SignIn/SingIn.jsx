import './SignIn.scss'
import { Form } from './Form/Form'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
export function SignIn(){

    return(
        <>
        <main className="main bg-dark">
        <section className="sign-in-content">
        <Form/>
        </section>
      </main>
      </>
    )
}