import React from "react";
import { useParams } from "react-router-dom";

const data = {
  yoojin: {
    name: "유진",
    description: "리액트를 잘하는 개발자",
  },
  beer: {
    name: "맥주",
    description: "유진의 최애 음식",
  },
};
//기존 버전
// const Profile = ({ match }) => {
//   const { username } = match.params;
//   const profile = data[username];
//   if (!profile) {
//     return <div>존재하지 않는 사용자입니다.</div>;
//   }
//   return (
//     <div>
//       <h3>
//         {username}({profile.name})
//       </h3>
//       <p>{profile.description}</p>
//     </div>
//   );
// };

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h3>사용자 프로필 </h3>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다</p>
      )}
    </div>
  );
};

export default Profile;
