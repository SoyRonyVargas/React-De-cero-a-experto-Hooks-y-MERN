import { RightSide, FormBox, ContainerLoginPage } from './styled';
import { Link } from 'react-router-dom'
import React from 'react'
import './css/index.css'

const index = () => {
    return (
        <ContainerLoginPage>
            <article className='col--full'>
                <img className='login__image' src="/assets/login8.svg" alt="" />
            </article>
            <RightSide className='col--full flex_colum'>

                <img className='login__logo mb-3' src="/assets/logo.svg" alt="" />

                <FormBox className="box">
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input is-medium" type="email" placeholder="e.g. alex@example.com" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input is-medium" type="password" placeholder="********" />
                        </div>
                    </div>
                    <button className="button is-primary is-medium is-fullwidth">Sign in</button>
                </FormBox>

                <FormBox className='box is-flex is-justify-content-center'>
                    <p>
                        ¿Aún no tienes cuenta?
                        <Link className='ml-1  has-text-weight-medium has-text-weight-bold color-2' to="/">
                            Registrate Aqui.
                        </Link>
                    </p>

                </FormBox>

            </RightSide>
        </ContainerLoginPage>
    )
}

export default index