import React from 'react'
import ReactDOM from 'react-dom/client'
import { FormikBasicPage } from './03-forms/pages/FormikBasicPage'
import { FormikComponents } from './03-forms/pages/FormikComponents'
import { FormikYupPage } from './03-forms/pages/FormikYupPage'
import { RegisterPage } from './03-forms/pages/RegisterPage'
import App from './App'
import './index.css'
import { FormikAbstractation } from './03-forms/pages/FormikAbstractation';
import { RegisterFormikPage } from './03-forms/pages/RegisterFormikPage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <RegisterPage /> */}
    {/* <FormikBasicPage /> */}
    {/* <FormikYupPage /> */}
    {/* <FormikComponents /> */}
    {/* <FormikAbstractation /> */}
    <RegisterFormikPage />
  </React.StrictMode>,
)
