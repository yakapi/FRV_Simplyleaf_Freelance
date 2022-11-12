import {ParameterContextProvider} from '../../../context/parameterContext'
import Horaire from './horaire'

export default function ParametrePlugin(){
  return(
    <ParameterContextProvider>
      <div className="plugin_container">
        <div className="plugin_brik"></div>
        <div className="plugin_box">
          <h2 className="title_plugin">Parametre</h2>
          <div className="content_plugin">
            <div className="content_box">
              <Horaire />
            </div>
          </div>
        </div>
      </div>
    </ParameterContextProvider>
  )
}
