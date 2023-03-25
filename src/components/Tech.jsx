import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"


const Tech = () => {
  return (

    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        
        <div className="w-[170px] h-[200px]" key={technology.name}>
          <div className="text-center text-[20px] border-2 rounded-full border-[#915eff]"> {/*used to be 3 rows for the name */}
          {technology.name}
          </div>
          <div>
          <BallCanvas icon={technology.icon} />
          </div>
        </div>
        
      ))}

    </div>

  )
}

export default SectionWrapper(Tech,"")