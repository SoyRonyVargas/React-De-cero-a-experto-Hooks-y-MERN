import FormRegister from "./components/FormRegister"
import AuthLayout from '../../layout/AuthLayout'
import LogoRegister from './components/Logo'

const RegisterPage = () => (
  <AuthLayout>
    <LogoRegister/>
    <FormRegister/>
  </AuthLayout>
)

export default RegisterPage