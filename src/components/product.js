import Features from "./features/features";
import Navbar from "./navbar/navbar"
import Pdt1 from "./pdt-1/pdt-1";
import Pricing from "./pricing/pricing";
import Pdt from "./producttemplate/pdt";

const Product =()=>{
    return(
        <>
        <Navbar/>
        <Pdt/>
        <Pdt1/>
        <Features/>
        <Pricing/>
        </>
    )
}
export default Product;