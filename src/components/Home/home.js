import worldLogo from './WorldLogo.gif';
import './home.css'

const Home = (prop)=>{
    if(prop.home){
        return(
            <div className="home">
                <div className="home2">
                    <div className="title">
                        <h1>Welcome !!!</h1>
                        <h4>Final stop for weather forecasting</h4>
                    </div>
                    <img src={worldLogo} />
                </div>
            </div>
        );
    }
    return(
        <></>
    );
}

export default Home;