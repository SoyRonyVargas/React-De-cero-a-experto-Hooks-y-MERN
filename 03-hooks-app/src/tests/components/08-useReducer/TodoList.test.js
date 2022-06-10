import TodoList from '../../../components/08-useReducer/TodoList'
import { demoTodos } from '../../fixtures'
import { shallow } from 'enzyme'

describe('pruebas al componente <TodoList/>', () => { 

    const payload = {
        handleDelete: jest.fn(),
        todos: demoTodos
    }
    
    const wrapper = shallow(
        <TodoList
            {...payload}
        />
    )

    test('deberia mostrarse correctamente', () => { 

        expect(wrapper).toMatchSnapshot()

    })

    test('deberia de tener dos <TodoListItem/>', () => { 

        const elements = wrapper.find("TodoListItem") 

        expect(elements.length).toBe(2)

        expect(wrapper.find("TodoListItem").at(0).prop("handleDelete") ).toEqual( expect.any(Function) )

    })

})