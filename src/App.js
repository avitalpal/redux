import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { Field, Form, Formik } from 'formik'
import { login, logout } from './store/user'
import HomePage from './components/HomePage';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)
  if (user) {
    return (
      <div className="container">
        <h1 className="item">Hi, {user.username}!</h1>
          <HomePage />
        <button className="btn logoutBtn" onClick={() => dispatch(logout())}>Logout</button>
      </div>
    )
  }
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="center"><span>Log In </span><span>Sign Up</span></h6>
                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <Formik
                            initialValues={{ username: '', password: '' }}
                            onSubmit={(values) => { dispatch(login(values)) }}
                          >
                            {({ isSubmitting }) => (
                              <Form>
                                <Field type="text" name="username" className="form-style" placeholder="Your Username" required/>
                                <Field type="password" name="password" className="form-style" placeholder="Your Password" minLength="8" required/>
                                <button type="submit" disabled={isSubmitting} className="btn mt-4">Login</button>
                              </Form>
                            )}
                          </Formik>
                          <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Sign Up</h4>
                          <Formik
                            initialValues={{ username: '', password: '', /* email: '' */ }}
                            onSubmit={(values) => { dispatch(login(values)) }}
                          >
                            {({ isSubmitting }) => (
                              <Form>
                                {/* <Field type="email" name="email" className="form-style" placeholder="Your Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/> */}
                                <Field type="text" name="username" className="form-style" placeholder="Create a Username" required/>
                                <Field type="password" name="password" className="form-style" placeholder="Create a Password" minLength="8" required/>
                                <button type="submit" disabled={isSubmitting} className="btn mt-4">Sign up</button>
                              </Form>
                            )}
                          </Formik>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

// change for language commit test :)

export default App