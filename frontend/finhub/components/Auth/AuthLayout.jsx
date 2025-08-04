import card_img from "../../public/finance.png"
import {LuTrendingUpDown} from "react-icons/lu";
export const AuthLayout = ({children}) => {
    return(
        <div className="flex">
            <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12 flex flex-col gap-[25%]">
                <h1 className="font-semibold text-[28px] text-black">Finhub</h1>
                {children}
            </div>
            <div className="hidden h-screen md:block w-[40vw] overflow-hidden bg-gray-100 relative bg-cover bg-no-repeat bg-center p-8">
                <div className="w-48 h-48 bg-[#67c9cb] rounded-[40px] absolute -top-7 -left-5"></div>
                <div className="w-48 h-48 border-[20px] border-cyan-300 rounded-[40px] absolute top-[45%] right-0"></div>
                <div className="w-48 h-48 bg-[#235e5c] rounded-[40px] absolute -bottom-7 -left-5"></div>

                <div className="grid absolute grid-cols-1 z-20">
                    <StatsInfoCard
                        icon={<LuTrendingUpDown/>}
                        label="Track your incomes & your expenses !"
                        value="430,000"
                        color="bg-primary"
                    />
                </div>


                <img src={card_img} alt="Preview image"
                     className="z-10 w-64 lg:w-[100%] absolute bottom-20 left-2"
                />
            </div>
        </div>
    )
}

const StatsInfoCard = ({color, icon, value, label}) => {
    return <div className="flex gap-6 bg-white items-center p-4 rounded-2xl shadow-md shadow-cyan-300/10">
        <div className={`w-12 h-12 flex justify-center text-white p-4 items-center rounded-[100%] ${color}`}>
            {icon}
        </div>
        <div>
            <h6 className="text-sm text-gray-600">{label}</h6>
            <span className="text-[20px]">${value}</span>
        </div>
    </div>
}