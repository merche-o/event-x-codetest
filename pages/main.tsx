import CryptoCard from './components/crypoCard'
import { CryptoData } from './model/cryptoData'
export default function Main() {
    var data : CryptoData = {base:"test", target:"test", price:"test", volume:"test", change:"test"};

return(
    <div>
    <CryptoCard data={data}/>
    <CryptoCard data={data}/>
    </div>
    

)
}