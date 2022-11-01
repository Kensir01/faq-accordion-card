import {useState} from 'react'
import mobileWoman from './images/illustration-woman-online-mobile.svg'
import mobileBg from './images/bg-pattern-mobile.svg'
import desktopWoman from './images/illustration-woman-online-desktop.svg'
import desktopBg from './images/bg-pattern-desktop.svg'
import desktopElement from './images/illustration-box-desktop.svg'
import './App.css';


function App() {
  const [selected, setSelected] = useState(null)


  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className='container-esterno'>

      <div className="prima-pic">
        <img src={mobileWoman} alt=''/>
      </div>
      <div className='seconda-pic'>
        <img src={mobileBg} alt=''/>
      </div>

      <div className="container">
      
        <div className='desktop-element'>
          <img src={desktopElement} alt='Red Cube'/>
        </div>

        <div className="wrapper">

          <div className='spacer'>

            <div className='container-pic-desktop'>
              <div className="prima-pic-desktop" style={{ backgroundImage: `url(${desktopWoman})`}}>
              </div>
              <div className="seconda-pic-desktop">
              <img src={desktopBg} alt='bg'/>
              </div>

            </div>

          </div>

          <div className= 'accordion'>

            <div className='faq'>
              <h1>FAQ</h1>
            </div>

            {data.map((item, i) => (

            <div className="item" onClick={() => toggle (i) } >

              <div className={selected === i ? 'title focus' : 'title' }>
                <h3>{item.question}</h3>
                <img src='images/icon-arrow-down.svg' alt='' className={selected === i ? 'arrow rotate' : 'arrow' }/>
              </div>

              <div className={selected === i ? 'content show' : 'content' }>
                <p>{item.answer}</p>
              </div>

            </div>
            ))}
          </div>
        </div>

      </div>


    </div>
  );
}

const data = [
  {
    question: 'How many team members can I invite?',
    answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
  },
  {
    question: 'What is the maximum file upload size?',
    answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
  },
  {
    question: 'How do i reset my password',
    answer: 'Click "Forgot Password" from the login page or "Change password" from your profile page. A reset link will be emailed to you.',
  },
  {
    question: 'Can i cancel my subscription?',
    answer: 'Yes! Send us a message and we\'ll process your request no question asked.',
  },
  {
    question: 'Do you provide additional support?',
    answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
  },
]

export default App;
