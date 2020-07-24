import React, {Component} from 'react';
import './Upload_Page.css';

class Upload_Page extends Component {

render(){
return(
    <div className = "container">
      <form>
        <div class="form-group">
          <label for="exampleFormControlFile1">Transmettre un document</label>
          <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
        </div>
      </form>
    </div>
  );
};
}
export default Upload_Page;
