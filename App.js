import { useRef, useState } from "react";
import Reac from "react";
import {connect} from'react-redux';
import { IncAction } from "./actions";
import { DecAction } from "./actions";

function App({local_varaible,IncAction,DecAction}) {
    return (
  <div>
<center>
  <h1>
    {local_varaible}
  </h1>
  <br></br>
  <button onClick={()=>IncAction(5)}>INCREMENT</button>
  <button onClick={DecAction}>DECREMENT</button>
</center>
  </div>
  );
}
const mapStateToProps=state({
  local_varaible:state
})
export default (mapStateToProps,{IncAction,DecAction})(App);
