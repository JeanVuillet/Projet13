import './Features.scss';
import iconChat from '../../../assets/icon-chat.png'
import iconMonney from '../../../assets/icon-money.png'
import iconSecu from '../../../assets/icon-security.png'

export function Features(){

    return(
        <section class="features">
        <h2 className="sr-only">Features</h2>
        <div className="feature-item">
          <img src={iconChat} alt="Chat Icon" class="feature-icon" />
          <h3 className="feature-item-title">You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div className="feature-item">
          <img
            src={iconMonney}
            alt="Chat Icon"
            class="feature-icon"
          />
          <h3 className="feature-item-title">More savings means higher rates</h3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div className="feature-item">
          <img
            src={iconSecu}
            alt="Chat Icon"
            class="feature-icon"
          />
          <h3 className="feature-item-title">Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    )
}