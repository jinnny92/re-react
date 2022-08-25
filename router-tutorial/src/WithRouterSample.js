//v5버전
// import React from "react";
// import { withRouter } from "react-router-dom";

// const withRouterSample = ({ location, match, history }) => {
//   return (
//     <div>
//       <h4>location</h4>
//       <textarea
//         value={JSON.stringify(location, null, 2)}
//         rows={7}
//         readOnly={true}
//       />
//       <h4>match</h4>
//       <textarea
//         value={JSON.stringify(match, null, 2)}
//         rows={7}
//         readOnly={true}
//       />
//       <button onClick={() => history.push("/")}>홈으로</button>
//     </div>
//   );
// };

// export default withRouter(withRouterSample);

import { useParams, useLocation, useNavigate } from "react-router-dom";

const WithRouterSample = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <h4>Location</h4>
      <textarea value={JSON.stringify(location, null, 2)} readOnly />

      <h4>Params</h4>
      <textarea value={JSON.stringify(params)} readOnly />

      <button onClick={() => navigate("/")}>홈으로</button>
    </>
  );
};

export default WithRouterSample;
