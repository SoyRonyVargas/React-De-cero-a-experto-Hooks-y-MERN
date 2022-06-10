import TodoListItem from "../../../components/08-useReducer/TodoListItem"
import { demoTodos } from "../../fixtures"
import { shallow } from "enzyme"

describe('Probando el componente de <TodoListItem/>', () => { 

    const todo = demoTodos[0]
    
    const handleDelete = jest.fn()

    test('deberia mostrarse correctamente', () => { 

        const wrapper = shallow(
           <TodoListItem 
                handleDelete={handleDelete}
                index={0}
                {...todo}
           />
        )

        expect(wrapper).toMatchSnapshot()

    })

    test('debe de mostrar la funcion handleDelete', () => { 

        const wrapper = shallow(
            <TodoListItem 
                handleDelete={handleDelete}
                index={0}
                {...todo}
            />
        )

        wrapper.find("#delete_todo").simulate("click")

        expect(handleDelete).toHaveBeenCalled()
        
        expect(handleDelete).toHaveBeenCalledWith(todo.id)
        
        expect(handleDelete).toHaveBeenCalledTimes(1)

    })
    
    test('debe de mostrar el texto correctamente del componente', () => { 

        const wrapper = shallow(
            <TodoListItem 
                handleDelete={handleDelete}
                index={0}
                {...todo}
            />
        )

        const paragraph = wrapper.find(".todo_paragraph").first()

        expect(paragraph.text()).toBe(`1 - ${ todo.desc}`)

    })

})