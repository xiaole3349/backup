import * as React from "react";
import Lottie from "react-lottie";
import * as animationData from './data.json';
import './css/loading.scss'
class LottieControl extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            document.getElementById('lottie-control').style.display = 'none';
            document.getElementsByTagName('body')[0].style = "overflow-y: auto;";
        }, 3300);
    }//The function implemented here is to refresh and load the home page
    //For windows, the document object needs to be executed in useEffect/componentsDidMount.
    render() {

        const lottieStyle = {
            width: '100%',
            height: '100%',
            transform: 'scale(0.2)'
        };
        const defaultOptions = {
            renderer: 'html',
            loop: true,
            autoplay: true,
            animationData: animationData,
        };
        return (
            <div id="lottie-control">
                <Lottie options={defaultOptions}
                    style={lottieStyle}
                />
            </div >)
    }
}
export default LottieControl;