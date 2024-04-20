import './SignIn.scss'
import { Form } from './Form/Form'
export function SignIn(){

    return(
        <>
        <main class="main bg-dark">
        <section class="sign-in-content">
          <i class="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
        <Form/>
        </section>
      </main>
      </>
    )
}