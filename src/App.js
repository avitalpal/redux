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
      <div class="container">
        <h1 class="item">Hi, {user.username}!</h1>
          <HomePage />
        <button class="btn logoutBtn" onClick={() => dispatch(logout())}>Logout</button>
      </div>
    )
  }
  return (
    <div>
      <div class="section">
        <div class="container">
          <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center py-5">
              <div class="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 class="center"><span>Log In </span><span>Sign Up</span></h6>
                <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                <label for="reg-log"></label>
                <div class="card-3d-wrap">
                  <div class="card-3d-wrapper">
                    <div class="card-front">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 class="mb-4 pb-3">Log In</h4>
                          <Formik
                            initialValues={{ username: '', password: '' }}
                            onSubmit={(values) => { dispatch(login(values)) }}
                          >
                            {({ isSubmitting }) => (
                              <Form>
                                <Field type="text" name="username" class="form-style" placeholder="Your Username" required/>
                                <Field type="password" name="password" class="form-style" placeholder="Your Password" minLength="8" required/>
                                <button type="submit" disabled={isSubmitting} class="btn mt-4">Login</button>
                              </Form>
                            )}
                          </Formik>
                          <p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
                        </div>
                      </div>
                    </div>
                    <div class="card-back">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 class="mb-4 pb-3">Sign Up</h4>
                          <Formik
                            initialValues={{ username: '', password: '', /* email: '' */ }}
                            onSubmit={(values) => { dispatch(login(values)) }}
                          >
                            {({ isSubmitting }) => (
                              <Form>
                                {/* <Field type="email" name="email" class="form-style" placeholder="Your Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/> */}
                                <Field type="text" name="username" class="form-style" placeholder="Create a Username" required/>
                                <Field type="password" name="password" class="form-style" placeholder="Create a Password" minLength="8" required/>
                                <button type="submit" disabled={isSubmitting} class="btn mt-4">Sign up</button>
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

export default App