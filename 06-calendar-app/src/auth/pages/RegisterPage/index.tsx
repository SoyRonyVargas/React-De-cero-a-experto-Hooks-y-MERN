import { ContainerLoginPage, FormBox, LeftSide, RightSide } from '../LoginPage/styled'
import { ImageRegister } from './styled'
import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <ContainerLoginPage>
            <LeftSide className='col--full'>
                <ImageRegister 
                  className='login__image' 
                  src="/assets/register.svg" 
                  alt="Register Image" 
                />
            </LeftSide>
            <RightSide className='col--full flex_colum'>

                <img className='register__logo mb-3' src="/assets/logo.svg" alt="" />

                <FormBox className="box">
                    
                <h2 className="title is-4">Registro</h2>

                    <div className="field">
                        <label className="label">Nombre</label>
                        <div className="control">
                            <input className="input is-medium" type="text" placeholder="James" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Correo</label>
                        <div className="control">
                            <input className="input is-medium" type="email" placeholder="e.g. alex@ejemplo.com" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Contraseña</label>
                        <div className="control">
                            <input className="input is-medium" type="password" placeholder="********" />
                        </div>
                    </div>
                    <button className="button is-primary is-medium is-fullwidth">Registrarse</button>
                </FormBox>

                <FormBox className='box is-flex is-justify-content-center'>
                    <p>
                        ¿Ya tienes cuenta?
                        <Link className='ml-1  has-text-weight-medium has-text-weight-bold color-2' to="/auth/login">
                            Inicia sesión aqui.
                        </Link>
                    </p>

                </FormBox>

            </RightSide>
        </ContainerLoginPage>
  )
}

export default RegisterPage