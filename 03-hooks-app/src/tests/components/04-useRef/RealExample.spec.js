import RealExample from '../../../components/04-useRef/RealExample'
import { shallow } from 'enzyme'

describe('Probando el componente RealExample', () => { 
    
    test('deberia mostrarse correctamente', () => { 
        
        const wrapper = shallow(<RealExample/>)

        expect(wrapper).toMatchSnapshot()

    })

    test('No deberia mostrar el componente <MultipleHooks/>', () => { 

        const wrapper = shallow(<RealExample/>)

        expect(wrapper.find("#container").exists()).toBe(false)

    })
    
})