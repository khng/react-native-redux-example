import {setLabel} from "../action/index";
import connect from "react-redux/es/connect/connect";
import SalutationForm from "../component/salutation";

const mapStateToProps = state => {
    return {text: state.text}
}

const mapDispatchToProps = {
    onButtonPressHi: () => setLabel('Hi'),
    onButtonPressBye: () => setLabel("Bye")
}

export const SalutationContainer = connect(mapStateToProps, mapDispatchToProps)(SalutationForm)