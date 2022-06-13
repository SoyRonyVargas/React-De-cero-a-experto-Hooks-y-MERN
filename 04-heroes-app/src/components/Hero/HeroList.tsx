import getHeroByPublisher from "../../selectors/getHeroByPublisher"
import { FC, useId , useMemo } from "react"
import { Props } from "./types"
import HeroCard from "./HeroCard"

const HeroList: FC<Props> = (props) => {

    const { publisher } = props

    const heroes = useMemo( () => getHeroByPublisher(publisher) , [publisher] )

    return (
        <section className="grid__card__heroes mb-4 animate__animated  animate__fadeIn">
            {
                heroes.map(hero => {

                    const id = useId()

                    return (
                        <HeroCard key={id} {...hero} />
                    )

                })
            }
        </section>
    )
}

export default HeroList