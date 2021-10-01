// libreria
import { Provider} from 'react-redux';

// componentes

// Componenentes header


// Redux


// Configuración
import store from '../../../baseApp1/redux/store';
import { BaseApp2 } from "./BaseApp2";


const BaseApp1 = ()=>{

    return(
        <Provider store={store}>
            <BaseApp2/>
        </Provider>
        
    )
}



export default BaseApp1