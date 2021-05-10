import {useRouter} from "next/router";
import Section1 from "../../../components/universites/singlePage/section-1/section-1";
import Footer from "../../../components/footer/footer";
import Header from "../../../components/header/header";


function Index() {
    const router = useRouter();
    const {id} = router.query
    return (
        <div>
            <Header/>
            <Section1 id={id}/>
            <Footer/>
        </div>
    );
}

export default Index;