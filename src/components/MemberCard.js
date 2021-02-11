import React from "react"

function MemberCard (props) {
   return (
      <div className="member-card">
         <h4 className="mc-title">{props.name}</h4>
         <div className="mc-body">
            {props.role} <br />
            {props.email}
         </div>
      </div>
   );
}

export default MemberCard;