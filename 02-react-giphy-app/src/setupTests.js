import { createSerializer } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import '@testing-library/jest-dom'

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));