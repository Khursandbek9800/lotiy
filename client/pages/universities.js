import Index from "../components/universites";
import {useEffect} from "react";
import {connect} from "react-redux";
import {getAll, UNChange} from "../components/redux/reducers/reducer/universities";

function Universities({country,setCountry,getAll}) {
    useEffect(() => {
        if (country === undefined){
            getAll();
        }
    },)
    return (
        <>
            <Index country={country} setCountry={setCountry}/>
        </>
    );
}

const mapStateToProps = (state) => ({
    country: state.sidebar.country
});

export default connect(
    mapStateToProps,
    {UNChange,getAll}
)(Universities);