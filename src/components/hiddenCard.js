// import React, { Component } from "react";
// import { MDBBtn, MDBCollapse } from "mdbreact";
// import Choices from "../../components/choices";

// const Choices = ({ value, allowCustom = true }) => {

// class CollapsePage extends Component {
//   state = {
//     collapseID: "",
//   };

//   toggleCollapse = (collapseID) => () => {
//     this.setState((prevState) => ({
//       collapseID: prevState.collapseID !== collapseID ? collapseID : "",
//     }));
//   };

//   render() {
//     return (
//       <>
//         <MDBBtn
//           color="primary"
//           href="!#"
//           onClick={this.toggleCollapse("basicCollapse")}
//           style={{ marginBottom: "1rem" }}
//         >
//           COLLAPSE BUTTON
//         </MDBBtn>
//         <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
//           <div className="border border-dark bg-light p-3 rounded mb-3">
//             <div className="row col-sm justify-content-center m-1">
//               <h3 className="text-success font-weight-bold">Front Desk</h3>
//             </div>
//             <h4 className="border border-success text-center font-weight-bolder m-2 p-5">
//               Daily Indexes: {whoToIndex}
//             </h4>
//             <Choices
//               choices={[
//                 { label: "100%", value: 1 },
//                 { label: "90%", value: 0.9 },
//                 { label: "75%", value: 0.75 },
//               ]}
//               setChoice={(value) => setQuestionValue("lifestyleIndex", value)}
//               value={lifestyleIndex}
//             />
//           </div>
//         </MDBCollapse>
//       </>
//     );
//   }
// }

// export default CollapsePage;
