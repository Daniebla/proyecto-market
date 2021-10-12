// libreria
import { Provider} from 'react-redux';

// componentes
import { BaseApp2 } from "./BaseApp2";

// Redux
import store from '../../../baseApp1/redux/store';



const BaseApp1 = ()=>{

    return(
        <Provider store={store}>
            <BaseApp2/>
        </Provider>
        
    )
}



export default BaseApp1