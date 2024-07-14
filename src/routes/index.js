
import Home from '../component/layouts/yumhub/Home/Home'
import DefaultLayout from "../component/layouts/defaultLayout/defaultLayout"
import Merchant from '../component/layouts/yumhub/Merchant/Merchant'
import Shipper from '../component/layouts/yumhub/Shipper/Shipper'
import RegisterMerchant from '../component/layouts/yumhub/RegisterMerchant/RegisterMerchant'
import RegiterShipper from '../component/layouts/yumhub/RegisterShipper/RegisterShipper'
import YumHub from '../component/layouts/yumhub/Yumhub/Yumhub'
import Contact from '../component/layouts/yumhub/Contact/Contact'

const mapRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/shipper', component: Shipper, layout: DefaultLayout }, 
    { path: '/merchant', component: Merchant, layout: DefaultLayout}, 
    { path: '/register-shipper', component: RegiterShipper, layout: DefaultLayout}, 
    { path: '/register-merchant', component: RegisterMerchant, layout: DefaultLayout }, 
    { path: '/yumhub', component: YumHub, layout: DefaultLayout },

]

export { mapRoutes } 