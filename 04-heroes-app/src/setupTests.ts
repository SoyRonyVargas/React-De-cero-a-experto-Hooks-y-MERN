import { createSerializer } from "enzyme-to-json"
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

expect.addSnapshotSerializer(createSerializer({ mode : 'deep' }))