import {RiSuitcaseLine} from 'react-icons/ri'
import {VscTools} from 'react-icons/vsc'
import {GiGearHammer,GiValve,GiDroplets} from 'react-icons/gi'
import {ImSpinner6} from 'react-icons/im'
import {TiLinkOutline} from 'react-icons/ti'
import measurement from '../assets/measurement.jpg'
import valve2 from '../assets/valve2.jpg'
import power from '../assets/power.jpg'
import log1 from '../assets/log1.jpg'
import oilrig from '../assets/oilrig.jpg'
import controls1 from '../assets/controls1.jpg'
import automate from '../assets/automate.jpg'
// why choose us imports
import {BiCheckShield} from 'react-icons/bi'
import {TbSettingsAutomation} from 'react-icons/tb'
import {TbZoomCheck} from 'react-icons/tb'
import {AiOutlineSafety} from 'react-icons/ai'
import {v4} from 'uuid'
// partner imports
import Partner1 from '../assets/partner1.png'
import partner2 from '../assets/partner2.png'
import partner3 from '../assets/partner3.png'
import partner4 from '../assets/partner4.png'
import partner5 from '../assets/partner5.jpg'

// CAROUSEL DATA
export const data = [
    {
       classN:'background1',
       title:'We Are The Sustainable Energy Solution Provider',
       description:'Sustainability is at the heart of our operations. At Ultino Resources Limited, we provide effective, top-of-the-range solutions to your energy needs. As all energy is from the earth, we believe that our solutions should come at a cost that is fair to the earth so future generations can be guaranteed a safe home',
    },
    {
      classN:'background2',
      title:'We are constantly in pursuit of innovation in energy services delivery',
      description:'There is always a better way to achieve optimal results; at Ultino Resources, we constantly push for better in our operations and in our service delivery, so you can trust us to meet your needs as they evolve over time',
    },
    
]

// SECTION SERVICE DATA
export const cardDetails = [
  {
      title:'Valves and Actuation',
      description:'We are the trusted partners of world-leading OEMs, which enables us to offer the best services without compromising on safety....',
      img:valve2,
      iconz: <GiValve/>,
      id:0

  },
  {
      title:'Measurement Solutions',
      description:'Trusted Provider of Integrated Metering Solutions (IMS) and Calibration Services. We provide best-in-class Metering...',
      img:measurement,
      iconz: <VscTools/>,
      id:1


  },
  {
      title:'Power, Water and Process Technologies',
      description:'Ultino Resources provides high-quality process equipment, skids, and modules that are required for production processes. These....',
      img:power,
      iconz: <GiGearHammer/>,
      id:2



  },
  {
      title:'Supply Chain Management',
      description:'Our Supply Chain Management team works smoothly with our various partners to ensure the impeccable delivery of our wide range of products and services...',
      img:log1,
      iconz: <TiLinkOutline/>,
      id:3


  },
  {
      title:'Exploration & Production',
      description:'Ultino Resources Limited provides specialized exploration solutions to meet the needs of our clients by identifying areas with...',
      img:oilrig,
      iconz: <GiDroplets/>,
      id:4


  },
  {
      title:'Automation & Control',
      description:'We execute complex projects involving automation and system integration in the Oil & Gas industry. We are committed....',
      img:controls1,
      iconz: <ImSpinner6/>,
      id:5
  },
  {
      title:'Digital Solutions',
      description:'We provide digital solutions for manufacturing, supply chain and financial workflows backed by strategic and operational maintenance support services.....',
      img:automate,
      iconz: <RiSuitcaseLine/>,
      id:6
  }
]

// WHYCHOOSEUS DATA
export const iconBadge = [
  {
      id:v4(),
      badge:<BiCheckShield/>,
      title:'Integrity'
  },
  {
      id:v4(),
      badge:<TbSettingsAutomation/>,
      title:'Excellence'
  },
  {
      id:v4(),
      badge:<TbZoomCheck/>,
      title:'Innovation'
  },
  {
      id:v4(),
      badge:<AiOutlineSafety/>,
      title:'Leadership'
  },
]

// PARTNER IMPORTS
export const DataImg = [
  {
    img:Partner1,
    id:v4()
  },
  {
    img:partner2,
    id:v4()
  },
  {
    img:partner3,
    id:v4()
  },
  {
    img:partner4,
    id:v4()
  },
  {
    img:partner5,
    id:v4()
  },

]