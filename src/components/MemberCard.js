import React from "react"

function MemberCard (props) {
   return (
      <div className="member-card">
         <h4 className="mc-title">{props.firstName} {props.lastName}</h4>
         <div className="mc-body">{props.email}</div>
      </div>
   );
}

export default MemberCard;