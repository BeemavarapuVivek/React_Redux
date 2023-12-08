import {React,useState} from 'react'
import { useSelector } from 'react-redux';
import Contact from '../contact/Contact';


export default function Home() {
const [state,setState]=useState(1);
const [contactState,setContactState]=useState(1);
const onHandle=(val)=>{
  setState(val);
}
const onContent=(val)=>{
  setState(val);
}
const onContact=(val)=>{
  setContactState(val);
}
const contact =useSelector(state=>state.contact)
  return (
    <div className='box'>
      {
          contact && contact!=null?(<div className='contact-head'>{contact.lastName } {contact.firstName } {contact.greeting }</div>):(null)
          
       
      }
    <div className='tabs'>
    {
        /**
         * Home tabs started here
         */
    }
      <div className={state==1?'active-tab':'tab'} onClick={()=>onHandle(1)}>Contact</div>
      <div className={state==2?'active-tab':'tab'} onClick={()=>onHandle(2)}>Household</div>
      <div className={state==3?'active-tab':'tab'} onClick={()=>onHandle(3)}>Opportunities</div>
      <div className={state==4?'active-tab':'tab'} onClick={()=>onHandle(4)}>Pending Cases</div>
      <div className={state==5?'active-tab':'tab'} onClick={()=>onHandle(5)}>Policies</div>
      <div className={state==6?'active-tab':'tab'} onClick={()=>onHandle(6)}>Group Policies</div>
      <div className={state==7?'active-tab':'tab'} onClick={()=>onHandle(7)}>Investment Accounts</div>
      <div className={state==8?'active-tab':'tab'} onClick={()=>onHandle(8)}>Investment Positions</div>
      <div className={state==9?'active-tab':'tab'} onClick={()=>onHandle(9)}>Liabilities</div>
      <div className={state==10?'active-tab':'tab'} onClick={()=>onHandle(10)}>PreSale ACtivity /Proposals</div>
      <div className={state==11?'active-tab':'tab'} onClick={()=>onHandle(11)}>Active Log</div>
      <div className={state==12?'active-tab':'tab'} onClick={()=>onHandle(12)}>Account Groups</div>
    </div>
    {
        /**
         * sub contact tabs started here
         */
    }
     
    <div className={state==1?'active-content':'content'} >
    <div className='tabs'>
    <div className={contactState===30?'active-contact-tab':'contact-tab'} onClick={()=>onContact(30)}>List</div>
    <div className={contactState===31?'active-contact-tab':'contact-tab'} onClick={()=>onContact(31)}>Personal</div>
    <div className={contactState===32?'active-contact-tab':'contact-tab'} onClick={()=>onContact(32)}>Add Personal</div>
    <div className={contactState===33?'active-contact-tab':'contact-tab'} onClick={()=>onContact(33)}>Key Relations</div>
    <div className={contactState===34?'active-contact-tab':'contact-tab'} onClick={()=>onContact(34)}>Benefits </div>
    <div className={contactState===35?'active-contact-tab':'contact-tab'} onClick={()=>onContact(35)}>Asset Allocation </div>
    <div className={contactState===36?'active-contact-tab':'contact-tab'} onClick={()=>onContact(36)}>Performance </div>
    <div className={contactState===37?'active-contact-tab':'contact-tab'} onClick={()=>onContact(37)}>Letters/Documents </div>
    <div className={contactState===38?'active-contact-tab':'contact-tab'} onClick={()=>onContact(38)}>Expenses </div>
    <div className={contactState===39?'active-contact-tab':'contact-tab'} onClick={()=>onContact(39)}>Custom </div>
    
    </div>
    </div>

    <div className={state===2?'active-content':'content'} > content 3 <p>content 3 content 3</p></div>
    <div className={state===3?'active-content':'content'} >content 5<p>content 5 content5</p></div>
    <div className={state===4?'active-content':'content'} >content6<p>content6 content6 content6</p> </div>
    <div className={state===5?'active-content':'content'} >content 4 <p>content 4 content 4 content 2  </p></div>




    <div className={contactState===30?'active-sub-contact-tab':'sub-Contact-Content'} >List is loading...</div>
    <div className={contactState===31?'active-sub-contact-tab':'sub-Contact-Content'} >Personal Details 
    <Contact 
    
    />
    
    </div>
    <div className={contactState===32?'active-sub-contact-tab':'sub-Contact-Content'} >You can add Address</div>
    <div className={contactState===33?'active-sub-contact-tab':'sub-Contact-Content'} >KYC Details</div>

    </div>

  )
}
