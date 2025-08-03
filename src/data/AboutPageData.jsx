import { BiCheckShield } from 'react-icons/bi'
import {TbSettingsAutomation} from 'react-icons/tb'
import {TbZoomCheck} from 'react-icons/tb'
import {AiOutlineSafety} from 'react-icons/ai'
import { v4 } from 'uuid'

export const iconBadge = [
    {
        id:v4(),
        badge:<BiCheckShield/>,
        title:'Integrity',
        description:"Integrity builds trust. We earn the trust of our customers, employees, and external stakeholders through transparency, honesty, compliance and performance. "
        
    },
    {
        id:v4(),
        badge:<TbSettingsAutomation/>,
        title:'Excellence',
        description:"We constantly ask the question ‘how can we make improvements’? This ensures that our performance and delivery are best-in-class. We go the extra mile to ensure continued excellence in our operations."

    },
    {
        id:v4(),
        badge:<TbZoomCheck/>,
        title:'Innovation',
        description:"At Ultino Resources, we do not wait for change to come to us, we create the new and constantly improve the old. We create solutions and raise the bar– both within the organisation and in the industry"

    },
    {
        id:v4(),
        badge:<AiOutlineSafety/>,
        title:'Leadership',
        description:"Each of us fully owns our work and the outcomes of it. We empower ourselves and others to achieve our goals. Our team will overcome obstacles, find solutions and deliver exceptional results."

    },
]
