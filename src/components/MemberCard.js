import React from "react"

function MemberCard ({member}) {
   return (
      <div className="member-card">
         <h4 className="mc-title">{member.firstName} {member.lastName}</h4>
         <div className="mc-body">{member.email}</div>
      </div>
   );
}

export default MemberCard;