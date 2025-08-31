import Typography from "antd/es/typography";
import {GiPresent} from "react-icons/gi";
import {SiAdguard} from "react-icons/si";
import {FaCarSide} from "react-icons/fa";

export const Guids = () => {
  return (
    <div className="mt-2 flex flex-wrap justify-start gap-6 sm:gap-4 md:gap-6">
      <div className="flex items-center gap-2">
        <GiPresent className="text-[#134897]"/>
        <Typography className="text-sm sm:text-base">В наличии</Typography>
      </div>
      <div className="flex items-center gap-2">
        <SiAdguard className="text-[#134897]"/>
        <Typography className="text-sm sm:text-base">Гарантировано</Typography>
      </div>
      <div className="flex items-center gap-2">
        <FaCarSide className="text-[#134897]"/>
        <Typography className="text-sm sm:text-base">Бесплатная доставка</Typography>
      </div>
    </div>
  )
}