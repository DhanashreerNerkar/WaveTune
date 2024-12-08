import {useState} from 'react';
import './Expand.css';
function Expand({title,children})
{
    const [isExpanded,setIsExpanded]=useState(false);
    return(
        <div className="expand">
            <button 
            onClick={()=>setIsExpanded(!isExpanded)} 
            className={`expand__title ${isExpanded?'expand__title--open':''}`}
            aria-expanded={isExpanded}>
                {title}
            </button>
            {isExpanded && <div className="expand__content"> {children} </div> }
            </div>
    );
}

export default Expand;