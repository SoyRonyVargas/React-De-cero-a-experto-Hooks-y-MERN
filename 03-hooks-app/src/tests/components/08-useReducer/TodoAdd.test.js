import TodoAdd from "../../../components/08-useReducer/TodoAdd"
import { shallow } from "enzyme"

describe('Probando el componente <TodoAdd/>', () => { 

    const payload = {
        handleSubmit: jest.fn(),
        ref: null
    }

    const wrapper = shallow(
        <TodoAdd
            {...payload}
        />
    )

    test('deberia mostrarse correctamente', () => { 

        expect(wrapper).toMatchSnapshot()

    })

    test('NO deberia enviar el formulario', () => { 

        const formSubmit = wrapper.find("form").prop("onSubmit")

        formSubmit(({ preventDefault(){} }))

        expect( payload.handleSubmit ).toHaveBeenCalledTimes(1)

    })

})