import Loader from "../../loader/loader"

export default function ParameterModalContent(){
  return(
    <div className="param_mc">
      <div className="param_mc_zone">
        <div className="modal_salarie_content">
          <div className="close_log_modal"><p>x</p></div>
          <Loader />
        </div>
      </div>
    </div>
  )
}
