import SearchScreen from "../../../components/Search/SearchScreen"
import { fireEvent, render , screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

const mockedUseNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas al componente <SearchScreen/> ', () => { 

    test('Debe de mostrarse correctamente', () => { 

        const { container } = render(
            <MemoryRouter>
                <SearchScreen/>
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot()

    })

    test("debe de mostrar a batman y el query string" , () => {

        const { container } = render(
            <MemoryRouter initialEntries={["/search?q=batman"]}>
                <SearchScreen/>
            </MemoryRouter>
        )

        const input__search = screen.getByRole("textbox") as HTMLInputElement
        const card__hero  = container.querySelectorAll(".card")

        expect( input__search.value ).toBe("batman")
        expect(card__hero.length).toBe(1)

    })

    test('debe de mostrar un error si no encuentra el hero', () => { 

        const { container } = render(
            <MemoryRouter initialEntries={["/search?q=batman123"]}>
                <SearchScreen/>
            </MemoryRouter>
        )

        const div__no__results  = container.querySelector(".alert.alert-danger") as HTMLDivElement
        const card__hero  = container.querySelectorAll(".card")

        expect( screen.getByText("No results for") ).toBeTruthy()
        expect( div__no__results ).toBeTruthy()
        expect(card__hero.length).toBe(0)

    })

    test("debe de llamar el navigate al buscar por el form" , () => {

        const { container } = render(
            <MemoryRouter initialEntries={["/search"]}>
                <SearchScreen/>
            </MemoryRouter>
        )

        const button__submit = container.querySelector(".btn.btn-primary") as HTMLButtonElement
        const input__search = screen.getByRole("textbox") as HTMLInputElement

        fireEvent.change(input__search , { 
            target: {
                value: "batman"
            }
        })

        fireEvent.click(button__submit)

        expect(mockedUseNavigate).toHaveBeenCalled()
        
        expect(mockedUseNavigate).toHaveBeenCalledTimes(1)

        // screen.debug()

    })

})

export {}